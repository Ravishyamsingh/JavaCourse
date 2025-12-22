import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CheckCircle2,
  Code2,
  ListChecks,
  Flag,
  Camera,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Terminal,
  Clock,
  Award
} from 'lucide-react';
import CodeEditor from '@/components/CodeEditor';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import { useAuth } from '@/contexts/AuthContext';
import { Progress } from '@/components/ui/progress';

interface TestQuestion {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  starterCode: string;
  sampleInput?: string;
  expectedOutput?: string;
  hints?: string[];
}

type TestStep = 'setup' | 'questionList' | 'editor' | 'submitted';

interface ProctorIds {
  testId: string;
  sessionId: string;
}

interface QuestionSolution {
  code: string;
  completed: boolean;
  lastOutput?: string;
  attempts: number;
}

const DEFAULT_QUESTIONS: TestQuestion[] = [
  {
    id: 'q1',
    title: 'Print Sum of Two Numbers',
    description: 'Read two integers from standard input and print their sum.',
    difficulty: 'easy',
    starterCode: `import java.util.*;\npublic class Main {\n  public static void main(String[] args){\n    Scanner sc = new Scanner(System.in);\n    int a = sc.nextInt();\n    int b = sc.nextInt();\n    System.out.println(a + b);\n  }\n}`,
    sampleInput: '74 36',
    expectedOutput: '110',
    hints: ['Use Scanner to read input', 'System.out.println() to print output']
  },
  {
    id: 'q2',
    title: 'Print Hello, Java!',
    description: 'Write a program that prints "Hello, Java!" exactly.',
    difficulty: 'easy',
    starterCode: `public class Main {\n  public static void main(String[] args){\n    System.out.println("Hello, Java!");\n  }\n}`,
    expectedOutput: 'Hello, Java!',
    hints: ['Make sure to match the exact output including punctuation']
  },
  {
    id: 'q3',
    title: 'Factorial Calculator',
    description: 'Given n (0 <= n <= 12), print n! using iteration.',
    difficulty: 'medium',
    starterCode: `import java.util.*;\npublic class Main {\n  public static void main(String[] args){\n    Scanner sc = new Scanner(System.in);\n    int n = sc.nextInt();\n    long fact = 1;\n    for(int i=2;i<=n;i++) fact*=i;\n    System.out.println(fact);\n  }\n}`,
    sampleInput: '5',
    expectedOutput: '120',
    hints: ['Use a loop to calculate factorial', 'Remember 0! = 1']
  },
  {
    id: 'q4',
    title: 'Check Even or Odd',
    description: 'Read an integer and print "Even" if it is even, otherwise print "Odd".',
    difficulty: 'easy',
    starterCode: `import java.util.*;\npublic class Main {\n  public static void main(String[] args){\n    Scanner sc = new Scanner(System.in);\n    int num = sc.nextInt();\n    // Your code here\n  }\n}`,
    sampleInput: '7',
    expectedOutput: 'Odd',
    hints: ['Use the modulo operator (%)', 'Check if num % 2 == 0']
  },
  {
    id: 'q5',
    title: 'Find Maximum of Three Numbers',
    description: 'Read three integers and print the maximum value.',
    difficulty: 'medium',
    starterCode: `import java.util.*;\npublic class Main {\n  public static void main(String[] args){\n    Scanner sc = new Scanner(System.in);\n    int a = sc.nextInt();\n    int b = sc.nextInt();\n    int c = sc.nextInt();\n    // Your code here\n  }\n}`,
    sampleInput: '12 45 23',
    expectedOutput: '45',
    hints: ['Use Math.max()', 'Or use if-else comparisons']
  }
];

const SECURE_CONTEXT = typeof window !== 'undefined' && (window.isSecureContext || window.location.hostname === 'localhost');
const API_BASE_URL = ((import.meta as any)?.env?.VITE_API_URL || 'http://localhost:5000/api').replace(/\/$/, '');

function supportsFaceDetector() {
  const anyWin: any = window as any;
  return SECURE_CONTEXT && typeof anyWin.FaceDetector === 'function';
}

async function detectPresence(
  video: HTMLVideoElement,
  canvas: HTMLCanvasElement | null,
  prevFrameDataRef: React.MutableRefObject<Uint8ClampedArray | null>
) {
  try {
    if (supportsFaceDetector()) {
      const anyWin: any = window as any;
      const detector = new anyWin.FaceDetector({ fastMode: true, maxDetectedFaces: 1 });
      const faces = await detector.detect(video);
      if (faces && faces.length > 0) {
        const face: any = faces[0];
        const box = face.boundingBox || face;
        const vw = video.videoWidth || 640;
        const vh = video.videoHeight || 480;
        const cx = box.x + box.width / 2;
        const cy = box.y + box.height / 2;
        const centered = cx > vw * 0.25 && cx < vw * 0.75 && cy > vh * 0.25 && cy < vh * 0.75;
        return { present: true, centered, method: 'FaceDetector' } as const;
      }
      return { present: false, centered: false, method: 'FaceDetector' } as const;
    }
  } catch {
    // fallthrough to fallback path below
  }

  if (!canvas) return { present: false, centered: false, method: 'Fallback' } as const;
  const ctx = canvas.getContext('2d');
  if (!ctx) return { present: false, centered: false, method: 'Fallback' } as const;

  const vw = video.videoWidth || 320;
  const vh = video.videoHeight || 240;
  const cw = 120;
  const ch = Math.max(60, Math.floor((vh / vw) * cw));
  canvas.width = cw;
  canvas.height = ch;
  ctx.drawImage(video, 0, 0, cw, ch);
  const frame = ctx.getImageData(0, 0, cw, ch);
  const data = frame.data;

  let motion = 0;
  if (prevFrameDataRef.current) {
    const prev = prevFrameDataRef.current;
    for (let i = 0; i < data.length; i += 4) {
      const dR = Math.abs(data[i] - prev[i]);
      const dG = Math.abs(data[i + 1] - prev[i + 1]);
      const dB = Math.abs(data[i + 2] - prev[i + 2]);
      const delta = dR * 0.3 + dG * 0.5 + dB * 0.2;
      if (delta > 15) motion++;
    }
  }
  prevFrameDataRef.current = new Uint8ClampedArray(data);

  const motionRatio = motion / (data.length / 4);
  const present = motionRatio > 0.01;
  return { present, centered: present, method: 'Fallback' } as const;
}

function cryptoRandomId() {
  const arr = new Uint8Array(16);
  if (window.crypto?.getRandomValues) window.crypto.getRandomValues(arr);
  else for (let i = 0; i < arr.length; i++) arr[i] = Math.floor(Math.random() * 256);
  return Array.from(arr, (b) => b.toString(16).padStart(2, '0')).join('');
}

export default function TestPage() {
  const { tokens } = useAuth();
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const prevFrameDataRef = useRef<Uint8ClampedArray | null>(null);
  const autoSaveTimerRef = useRef<number | null>(null);

  const [currentStep, setCurrentStep] = useState<TestStep>('setup');
  const [proctorIds, setProctorIds] = useState<ProctorIds>({ testId: '', sessionId: '' });
  const [solutions, setSolutions] = useState<Record<string, QuestionSolution>>({});
  const [currentQuestionId, setCurrentQuestionId] = useState<string | null>(null);
  const [violations, setViolations] = useState(0);
  const [warnings, setWarnings] = useState(0); // Track warnings separately
  const [testStartTime, setTestStartTime] = useState<number | null>(null);
  const [testActive, setTestActive] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isResuming, setIsResuming] = useState(false);

  const [cameraActive, setCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [presenceOk, setPresenceOk] = useState(false);
  const [presenceMsg, setPresenceMsg] = useState('Camera not started');
  const [consentGiven, setConsentGiven] = useState(false);
  const [showViolationWarning, setShowViolationWarning] = useState(false);
  const [violationMessage, setViolationMessage] = useState('');

  const questions = useMemo(() => DEFAULT_QUESTIONS, []);
  const solvedCount = useMemo(() => Object.values(solutions).filter((s) => s.completed).length, [solutions]);

  const authFetch = useCallback(
    async (path: string, init: RequestInit = {}) => {
      if (!tokens?.accessToken) {
        toast.error('Authentication required');
        throw new Error('Missing access token');
      }

      const normalizedPath = path.startsWith('/') ? path : `/${path}`;
      const headers = new Headers(init.headers || {});

      if (!headers.has('Content-Type') && !(init.body instanceof FormData)) {
        headers.set('Content-Type', 'application/json');
      }
      headers.set('Authorization', `Bearer ${tokens.accessToken}`);

      return fetch(`${API_BASE_URL}${normalizedPath}`, {
        ...init,
        headers,
        credentials: 'include'
      });
    },
    [tokens?.accessToken]
  );

  const logProctorEvent = useCallback(
    async (type: string, details?: any) => {
      if (!proctorIds.testId || !proctorIds.sessionId) return;
      try {
        await authFetch('/proctor/log', {
          method: 'POST',
          body: JSON.stringify({ type, details, testId: proctorIds.testId, sessionId: proctorIds.sessionId })
        });
      } catch (error) {
        console.error('Proctor event logging failed:', error);
      }
    },
    [authFetch, proctorIds.sessionId, proctorIds.testId]
  );

  // Auto-save progress to database
  const saveProgressToServer = useCallback(
    async () => {
      if (!proctorIds.testId || !proctorIds.sessionId) return;
      try {
        await authFetch('/proctor/save-progress', {
          method: 'POST',
          body: JSON.stringify({
            testId: proctorIds.testId,
            sessionId: proctorIds.sessionId,
            currentQuestionId,
            answers: solutions,
            violations
          })
        });
        console.log('Progress auto-saved');
      } catch (error) {
        console.error('Failed to auto-save progress:', error);
      }
    },
    [authFetch, proctorIds.testId, proctorIds.sessionId, currentQuestionId, solutions, violations]
  );

  // Auto-save effect - save every 30 seconds when test is active
  useEffect(() => {
    if (testActive && proctorIds.testId && proctorIds.sessionId) {
      // Save immediately when test becomes active
      saveProgressToServer();
      
      // Set up interval for auto-save
      autoSaveTimerRef.current = window.setInterval(() => {
        saveProgressToServer();
      }, 30000); // Save every 30 seconds
      
      return () => {
        if (autoSaveTimerRef.current) {
          clearInterval(autoSaveTimerRef.current);
        }
      };
    }
  }, [testActive, proctorIds.testId, proctorIds.sessionId, saveProgressToServer]);

  // Save progress when solutions change
  useEffect(() => {
    if (testActive && Object.keys(solutions).length > 0) {
      // Debounce: save 2 seconds after last change
      const timer = setTimeout(() => {
        saveProgressToServer();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [solutions, testActive, saveProgressToServer]);

  const startCamera = async () => {
    if (!consentGiven) {
      toast.warning('Please provide consent to use the camera');
      return;
    }
    setCameraError(null);
    try {
      if (!navigator.mediaDevices?.getUserMedia) {
        setCameraError('Camera API not supported');
        await logProctorEvent('camera_unsupported');
        return;
      }
      if (!SECURE_CONTEXT) {
        setCameraError('Camera requires HTTPS or localhost');
        await logProctorEvent('camera_insecure_context');
        return;
      }
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 480 } },
        audio: false
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      setCameraActive(true);
      setPresenceMsg('Align your face within the frame');
      toast.success('Camera activated');
      await logProctorEvent('camera_started');
    } catch (err: any) {
      const msg = err?.name === 'NotAllowedError' ? 'Camera permission denied' : err?.message || 'Unable to access camera';
      setCameraError(msg);
      setCameraActive(false);
      await logProctorEvent('camera_error', { message: msg });
    }
  };

  const stopCamera = async () => {
    try {
      const v = videoRef.current;
      const stream = (v?.srcObject as MediaStream) || null;
      if (stream) stream.getTracks().forEach((t) => t.stop());
      if (v) v.srcObject = null;
      await logProctorEvent('camera_stopped');
    } catch {}
    setCameraActive(false);
  };

  useEffect(() => {
    let timer: number | null = null;
    let consecutivePresent = 0;
    let consecutiveAbsent = 0;

    const checkPresence = async () => {
      const video = videoRef.current;
      if (!cameraActive || !video) return;
      if (video.readyState < 2) {
        timer = window.setTimeout(checkPresence, 800);
        return;
      }
      const res = await detectPresence(video, canvasRef.current, prevFrameDataRef);
      if (res.present) {
        consecutivePresent += 1;
        consecutiveAbsent = 0;
        setPresenceMsg(res.centered ? 'Face detected and centered ✓' : 'Face detected ✓');
      } else {
        consecutiveAbsent += 1;
        consecutivePresent = 0;
        setPresenceMsg('No face detected. Please align your face');
      }
      setPresenceOk(consecutivePresent >= 2);

      if (currentStep === 'editor' && consecutiveAbsent === 5) {
        toast.warning('Face not detected. Please remain in view');
        await logProctorEvent('presence_warning');
      }
      timer = window.setTimeout(checkPresence, 1500);
    };

    if (cameraActive) timer = window.setTimeout(checkPresence, 600);
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [cameraActive, currentStep, logProctorEvent]);

  const generateTestId = async () => {
    try {
      const res = await authFetch('/test/generate-id', { method: 'POST' });
      const data = await res.json();
      if (data.success && data.testId) {
        setProctorIds((prev) => ({ ...prev, testId: data.testId }));
        toast.success(`Test ID generated: ${data.testId}`);
      }
    } catch (error) {
      toast.error('Failed to generate test ID');
    }
  };

  const proceedToQuestionList = async () => {
    if (!consentGiven) {
      toast.error('Please provide consent');
      return;
    }
    if (!cameraActive || !presenceOk) {
      toast.error('Camera setup incomplete. Please enable camera and align your face');
      return;
    }

    if (!proctorIds.testId) {
      await generateTestId();
    }

    setCurrentStep('questionList');
    toast.success('Camera setup complete! Select a question to begin');
  };

  const startQuestion = async (questionId: string) => {
    const sessionId = cryptoRandomId();
    setProctorIds((prev) => ({ ...prev, sessionId }));

    try {
      await authFetch('/proctor/start', {
        method: 'POST',
        body: JSON.stringify({
          testId: proctorIds.testId,
          sessionId,
          meta: { questionId }
        })
      });
    } catch {}

    setCurrentQuestionId(questionId);
    setCurrentStep('editor');
    setTestStartTime(Date.now());

    const el: any = containerRef.current;
    try {
      if (el?.requestFullscreen) await el.requestFullscreen();
    } catch {}

    toast.success('Test started. Solve the problem and submit when ready');
    await logProctorEvent('question_started', { questionId });
  };

  const submitCurrentQuestion = async () => {
    if (!currentQuestionId) return;

    const solution = solutions[currentQuestionId];
    const timeSpent = testStartTime ? Date.now() - testStartTime : 0;

    try {
      await authFetch('/proctor/question', {
        method: 'POST',
        body: JSON.stringify({
          testId: proctorIds.testId,
          sessionId: proctorIds.sessionId,
          questionId: currentQuestionId,
          code: solution?.code || '',
          output: solution?.lastOutput || '',
          completed: solution?.completed || false,
          timeSpentMs: timeSpent,
          attemptDelta: solution?.attempts || 0
        })
      });

      await logProctorEvent('question_submitted', {
        questionId: currentQuestionId,
        completed: solution?.completed,
        timeSpentMs: timeSpent
      });

      const currentIndex = questions.findIndex((q) => q.id === currentQuestionId);
      if (currentIndex < questions.length - 1) {
        const nextQuestion = questions[currentIndex + 1];
        toast.success('Question submitted! Moving to next question');
        setCurrentQuestionId(nextQuestion.id);
        setTestStartTime(Date.now());
        await logProctorEvent('question_started', { questionId: nextQuestion.id });
      } else {
        toast.success('All questions completed! Returning to question list');
        setCurrentStep('questionList');
        setCurrentQuestionId(null);
      }
    } catch (error) {
      toast.error('Failed to submit question');
    }
  };

  const submitTest = async () => {
    try {
      // Prepare comprehensive test summary
      const testSummary = {
        testId: proctorIds.testId,
        sessionId: proctorIds.sessionId,
        auto: false,
        totalQuestions: questions.length,
        completedQuestions: solvedCount,
        totalViolations: violations,
        questionsData: questions.map(q => {
          const solution = solutions[q.id];
          return {
            questionId: q.id,
            title: q.title,
            difficulty: q.difficulty,
            completed: solution?.completed || false,
            attempts: solution?.attempts || 0,
            code: solution?.code || '',
            output: solution?.lastOutput || '',
            timeSpentMs: solution?.timeSpentMs || 0
          };
        })
      };

      // Submit test to proctor
      await authFetch('/proctor/submit', {
        method: 'POST',
        body: JSON.stringify(testSummary)
      });

      // Save test progress to user progress
      const testScore = Math.round((solvedCount / questions.length) * 100);
      const totalTimeMs = Object.values(solutions).reduce((sum, s) => sum + (s.timeSpentMs || 0), 0);
      
      await authFetch('/user/progress', {
        method: 'POST',
        body: JSON.stringify({
          quizAttempt: {
            quizId: `test_${proctorIds.testId}`,
            moduleId: 'test_module',
            topic: 'Proctored Test',
            score: testScore,
            totalQuestions: questions.length,
            timeTakenMinutes: Math.round(totalTimeMs / 60000),
            completedAt: new Date().toISOString()
          },
          activityEntry: {
            date: new Date().toISOString(),
            quizAttempts: 1,
            scoreEarned: testScore
          }
        })
      });

      setCurrentStep('submitted');
      toast.success('Test submitted successfully!');

      try {
        if (document.fullscreenElement && document.exitFullscreen) {
          await document.exitFullscreen();
        }
      } catch {}

      await logProctorEvent('test_submitted', { violations, solvedCount, testScore });
    } catch (error) {
      console.error('Test submission error:', error);
      toast.error('Failed to submit test');
    }
  };

  // Auto-submit helper function
  const autoSubmitTest = useCallback(async (reason: string) => {
    try {
      // Save final progress before auto-submit
      await saveProgressToServer();
      
      await authFetch('/proctor/submit', {
        method: 'POST',
        body: JSON.stringify({
          testId: proctorIds.testId,
          sessionId: proctorIds.sessionId,
          auto: true,
          totalQuestions: questions.length,
          completedQuestions: solvedCount,
          totalViolations: violations,
          questionsData: questions.map(q => {
            const solution = solutions[q.id];
            return {
              questionId: q.id,
              completed: solution?.completed || false,
              attempts: solution?.attempts || 0,
              code: solution?.code || '',
              output: solution?.lastOutput || ''
            };
          })
        })
      });
      
      await logProctorEvent('test_auto_submitted', { reason, violations });
    } catch (error) {
      console.error('Auto-submit failed:', error);
    }
    
    // Stop camera on auto-submit
    await stopCamera();
    setCurrentStep('submitted');
  }, [authFetch, proctorIds, questions, solutions, solvedCount, violations, saveProgressToServer, logProctorEvent]);

  // Tab switching, fullscreen exit, and suspicious activity detection
  useEffect(() => {
    if (!testActive) return;

    // Track warnings separately from violations
    let warningCount = warnings;

    const handleVisibilityChange = async () => {
      if (document.hidden) {
        warningCount += 1;
        setWarnings(warningCount);
        
        if (warningCount === 1) {
          setViolationMessage('⚠️ Warning 1/3: Tab switching detected. Please stay on this tab.');
          setShowViolationWarning(true);
          toast.warning('Warning 1/3: Tab switching detected');
          await logProctorEvent('tab_switch', { warningCount });
        } else if (warningCount === 2) {
          setViolationMessage('⚠️ Warning 2/3: Another tab switch detected. One more will auto-submit your test.');
          setShowViolationWarning(true);
          toast.warning('Warning 2/3: Another tab switch detected');
          await logProctorEvent('tab_switch', { warningCount });
        } else if (warningCount >= 3) {
          setViolationMessage('❌ Test Auto-Submitted: Maximum warnings reached.');
          setShowViolationWarning(true);
          toast.error('Test auto-submitted due to multiple violations');
          setViolations(v => v + 1);
          await autoSubmitTest('tab_switch');
        }
      }
    };

    const handleFullscreenChange = async () => {
      const isNowFullscreen = !!document.fullscreenElement;
      setIsFullscreen(isNowFullscreen);
      
      // If exited fullscreen during test
      if (!isNowFullscreen && currentStep === 'editor') {
        warningCount += 1;
        setWarnings(warningCount);
        
        if (warningCount === 1) {
          setViolationMessage('⚠️ Warning 1/3: You exited fullscreen mode. Please return to fullscreen.');
          setShowViolationWarning(true);
          toast.warning('Warning 1/3: Fullscreen exit detected');
          await logProctorEvent('fullscreen_exit', { warningCount });
          
          // Try to re-enter fullscreen
          try {
            const el = containerRef.current;
            if (el?.requestFullscreen) await el.requestFullscreen();
          } catch {}
        } else if (warningCount === 2) {
          setViolationMessage('⚠️ Warning 2/3: Fullscreen exit detected again. One more will auto-submit your test.');
          setShowViolationWarning(true);
          toast.warning('Warning 2/3: Fullscreen exit detected');
          await logProctorEvent('fullscreen_exit', { warningCount });
          
          // Try to re-enter fullscreen
          try {
            const el = containerRef.current;
            if (el?.requestFullscreen) await el.requestFullscreen();
          } catch {}
        } else if (warningCount >= 3) {
          setViolationMessage('❌ Test Auto-Submitted: Maximum warnings reached due to fullscreen violations.');
          setShowViolationWarning(true);
          toast.error('Test auto-submitted due to multiple fullscreen violations');
          setViolations(v => v + 1);
          await autoSubmitTest('fullscreen_exit');
        }
      }
    };

    const handleWindowBlur = async () => {
      // Only count blur if not from our own fullscreen prompt
      if (currentStep === 'editor' && !showViolationWarning) {
        warningCount += 1;
        setWarnings(warningCount);
        
        if (warningCount === 1) {
          setViolationMessage('⚠️ Warning 1/3: Window blur detected. Please focus on the test.');
          setShowViolationWarning(true);
          toast.warning('Warning 1/3: Window blur detected');
          await logProctorEvent('window_blur', { warningCount });
        } else if (warningCount === 2) {
          setViolationMessage('⚠️ Warning 2/3: Another blur detected. One more will auto-submit your test.');
          setShowViolationWarning(true);
          toast.warning('Warning 2/3: Another blur detected');
          await logProctorEvent('window_blur', { warningCount });
        } else if (warningCount >= 3) {
          setViolationMessage('❌ Test Auto-Submitted: Maximum warnings reached.');
          setShowViolationWarning(true);
          toast.error('Test auto-submitted due to multiple violations');
          setViolations(v => v + 1);
          await autoSubmitTest('window_blur');
        }
      }
    };

    // Handle beforeunload - save progress and warn user
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      // Save progress synchronously if possible
      if (proctorIds.testId && proctorIds.sessionId) {
        navigator.sendBeacon(
          `${API_BASE_URL}/proctor/interrupt`,
          JSON.stringify({
            testId: proctorIds.testId,
            sessionId: proctorIds.sessionId,
            reason: 'browser_close'
          })
        );
      }
      
      e.preventDefault();
      e.returnValue = 'You have an active test. Your progress has been saved. Are you sure you want to leave?';
      return e.returnValue;
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    window.addEventListener('blur', handleWindowBlur);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      window.removeEventListener('blur', handleWindowBlur);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [testActive, warnings, currentStep, authFetch, proctorIds, logProctorEvent, autoSubmitTest, showViolationWarning]);

  // Activate test monitoring when entering editor
  useEffect(() => {
    if (currentStep === 'editor') {
      setTestActive(true);
      setIsFullscreen(!!document.fullscreenElement);
    } else {
      setTestActive(false);
    }
  }, [currentStep]);

  // Stop camera when navigating away or test ends
  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  // Stop camera when test is submitted
  useEffect(() => {
    if (currentStep === 'submitted') {
      stopCamera();
    }
  }, [currentStep]);

  if (currentStep === 'setup') {
    return (
      <div ref={containerRef} className="min-h-screen bg-background">
        <div className="border-b bg-card">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Camera className="h-6 w-6 text-green-700" />
                <h1 className="text-xl font-semibold">Proctoring Setup</h1>
              </div>
              {proctorIds.testId && (
                <Badge variant="outline" className="text-base px-4 py-2">Test ID: {proctorIds.testId}</Badge>
              )}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 flex items-center justify-center" style={{ minHeight: 'calc(100vh - 80px)' }}>
          <Card className="max-w-3xl w-full">
            <CardHeader>
              <CardTitle className="text-center">
                Enable your camera and align your face within the frame to begin. Fullscreen is required during the test.
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
                <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  <div className="w-1/2 h-1/2 border-4 border-green-400 rounded-lg" />
                </div>
                {cameraError && (
                  <div className="absolute bottom-4 left-4 right-4 bg-red-600 text-white px-4 py-2 rounded text-sm">
                    {cameraError}
                  </div>
                )}
              </div>
              <canvas ref={canvasRef} className="hidden" />

              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2 p-3 bg-muted rounded-lg">
                  <input
                    id="consent"
                    type="checkbox"
                    className="h-5 w-5"
                    checked={consentGiven}
                    onChange={(e) => setConsentGiven(e.target.checked)}
                  />
                  <label htmlFor="consent" className="text-sm font-medium flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-green-600" />
                    I consent to use of the camera for proctoring during the test
                  </label>
                </div>

                <div className="flex items-center justify-center gap-6">
                  <Badge variant={cameraActive ? 'default' : 'outline'} className={cameraActive ? 'bg-green-600' : ''}>
                    Camera {cameraActive ? 'Active' : 'Not Started'}
                  </Badge>
                  <Badge variant={presenceOk ? 'default' : 'outline'} className={presenceOk ? 'bg-green-600' : ''}>
                    Face {presenceOk ? 'Verified ✓' : 'Awaiting Verification'}
                  </Badge>
                </div>

                <p className="text-center text-sm text-muted-foreground font-medium">{presenceMsg}</p>

                <Separator />

                {!cameraActive ? (
                  <Button onClick={startCamera} className="w-full bg-green-600 hover:bg-green-700 text-white" size="lg" disabled={!consentGiven}>
                    <Camera className="h-5 w-5 mr-2" /> Start Camera
                  </Button>
                ) : (
                  <Button onClick={proceedToQuestionList} className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="lg" disabled={!presenceOk}>
                    Proceed to Test <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                )}

                <p className="text-xs text-center text-muted-foreground">
                  Note: Camera access requires HTTPS or localhost. Presence checks are processed locally and not stored.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (currentStep === 'questionList') {
    return (
      <div ref={containerRef} className="min-h-screen bg-background">
        <div className="border-b bg-card">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ListChecks className="h-6 w-6 text-green-700" />
                <h1 className="text-xl font-semibold">Select a Question</h1>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="text-sm px-3 py-1">Test ID: {proctorIds.testId}</Badge>
                <Badge variant="default" className="bg-green-600 text-sm px-3 py-1">
                  Solved: {solvedCount}/{questions.length}
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto space-y-4">
            {questions.map((q, idx) => {
              const solution = solutions[q.id];
              const isCompleted = solution?.completed || false;

              return (
                <Card
                  key={q.id}
                  className="hover:shadow-lg hover:border-green-300 transition-all cursor-pointer group"
                  onClick={() => startQuestion(q.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div
                          className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg ${
                            isCompleted ? 'bg-green-600 text-white' : 'bg-muted text-muted-foreground group-hover:bg-green-100 group-hover:text-green-700'
                          }`}
                        >
                          {isCompleted ? <CheckCircle2 className="h-6 w-6" /> : idx + 1}
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold group-hover:text-green-700 transition-colors">{q.title}</h3>
                          <Badge
                            variant="secondary"
                            className={`${
                              q.difficulty === 'easy'
                                ? 'bg-green-100 text-green-800 border-green-200'
                                : q.difficulty === 'medium'
                                ? 'bg-yellow-100 text-yellow-800 border-yellow-200'
                                : 'bg-red-100 text-red-800 border-red-200'
                            }`}
                          >
                            {q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1)}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{q.description}</p>
                        {q.sampleInput && (
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span className="font-medium">Sample:</span>
                            <code className="bg-muted px-2 py-1 rounded font-mono">{q.sampleInput}</code>
                            <span>→</span>
                            <code className="bg-muted px-2 py-1 rounded font-mono">{q.expectedOutput}</code>
                          </div>
                        )}
                      </div>

                      <div className="flex-shrink-0 flex items-center">
                        <ChevronRight className="h-6 w-6 text-muted-foreground group-hover:text-green-600 transition-colors" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="max-w-4xl mx-auto mt-8">
            <Card className="border-2 border-dashed">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold mb-1">Ready to submit your test?</h3>
                    <p className="text-sm text-muted-foreground">
                      You've completed {solvedCount} out of {questions.length} questions
                    </p>
                  </div>
                  <Button onClick={submitTest} variant="destructive" size="lg" disabled={solvedCount === 0}>
                    <Flag className="h-4 w-4 mr-2" /> Submit Test
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 'editor' && currentQuestionId) {
    const question = questions.find((q) => q.id === currentQuestionId)!;
    const solution = solutions[currentQuestionId] || { code: question.starterCode, completed: false, attempts: 0 };
    const currentIndex = questions.findIndex((q) => q.id === currentQuestionId);

    return (
      <div ref={containerRef} className="min-h-screen bg-background flex flex-col">
        {showViolationWarning && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <Card className="max-w-md w-full mx-4 border-2 border-red-500">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-red-700">⚠️ Proctoring Violation</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <p className="text-sm font-medium">{violationMessage}</p>
                <div className="bg-red-50 p-3 rounded text-xs text-red-700">
                  <p className="font-semibold mb-1">Violations: {violations}/3</p>
                  <p>Suspicious activity detected during the test. Please remain focused on the test window.</p>
                </div>
                <Button 
                  onClick={() => setShowViolationWarning(false)} 
                  className="w-full bg-red-600 hover:bg-red-700"
                >
                  I Understand
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
        <div className="border-b bg-card flex-shrink-0">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setCurrentStep('questionList');
                    setCurrentQuestionId(null);
                  }}
                  className="hover:bg-muted"
                >
                  <ChevronRight className="h-4 w-4 rotate-180 mr-1" /> Back
                </Button>
                <Separator orientation="vertical" className="h-6" />
                <Terminal className="h-5 w-5 text-green-700" />
                <div>
                  <h1 className="text-lg font-semibold">{question.title}</h1>
                  <p className="text-xs text-muted-foreground">Question {currentIndex + 1} of {questions.length}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {violations > 0 && (
                  <Badge variant="destructive" className="text-xs animate-pulse">
                    ⚠️ Violations: {violations}/3
                  </Badge>
                )}
                <Badge variant="outline" className="text-xs">
                  <Clock className="h-3 w-3 mr-1" /> {testStartTime ? Math.floor((Date.now() - testStartTime) / 1000) : 0}s
                </Badge>
                <Badge
                  variant="secondary"
                  className={`${
                    question.difficulty === 'easy'
                      ? 'bg-green-100 text-green-800 border-green-200'
                      : question.difficulty === 'medium'
                      ? 'bg-yellow-100 text-yellow-800 border-yellow-200'
                      : 'bg-red-100 text-red-800 border-red-200'
                  } text-xs`}
                >
                  {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
                </Badge>
                {solution.completed && (
                  <Badge className="bg-green-600 text-xs">
                    <CheckCircle2 className="h-3 w-3 mr-1" /> Solved
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-hidden">
          <div className="container mx-auto px-4 py-4 h-full">
            <div className="grid lg:grid-cols-12 gap-4 h-full">
              <div className="lg:col-span-4 space-y-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 160px)' }}>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Code2 className="h-4 w-4" />
                      Problem Statement
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm leading-relaxed">{question.description}</p>
                    {question.sampleInput && (
                      <>
                        <Separator />
                        <div>
                          <h4 className="text-xs font-semibold mb-2 text-muted-foreground uppercase tracking-wide">Sample Input</h4>
                          <code className="block bg-muted p-3 rounded text-xs font-mono border">{question.sampleInput}</code>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold mb-2 text-muted-foreground uppercase tracking-wide">Expected Output</h4>
                          <code className="block bg-muted p-3 rounded text-xs font-mono border">{question.expectedOutput}</code>
                        </div>
                      </>
                    )}
                    {question.hints && question.hints.length > 0 && (
                      <>
                        <Separator />
                        <div>
                          <h4 className="text-xs font-semibold mb-2 text-muted-foreground uppercase tracking-wide flex items-center gap-1">
                            <span role="img" aria-label="hint">💡</span>
                            Hints
                          </h4>
                          <ul className="text-xs space-y-2 text-muted-foreground">
                            {question.hints.map((hint, i) => (
                              <li key={hint} className="flex gap-2">
                                <span className="text-green-600 font-semibold">{i + 1}.</span>
                                <span>{hint}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">Overall Progress</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Progress value={(solvedCount / questions.length) * 100} className="h-2" />
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{solvedCount} completed</span>
                      <span>{questions.length - solvedCount} remaining</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-8">
                <div className="h-full" style={{ maxHeight: 'calc(100vh - 160px)' }}>
                  <CodeEditor
                    title="Code Editor"
                    description="Write your solution and click 'Run Code' to test"
                    height="100%"
                    initialCode={solution.code}
                    sampleInput={question.sampleInput}
                    lessonId={`test-${question.id}`}
                    readonly={false}
                    onChange={(code) =>
                      setSolutions((s) => ({
                        ...s,
                        [currentQuestionId]: { ...solution, code }
                      }))
                    }
                    onRunComplete={async (res) => {
                      const isCorrect = res.success && (!question.expectedOutput || res.output?.trim() === question.expectedOutput.trim());
                      setSolutions((s) => ({
                        ...s,
                        [currentQuestionId]: {
                          ...solution,
                          completed: isCorrect,
                          lastOutput: res.output?.trim() || '',
                          attempts: solution.attempts + 1
                        }
                      }));

                      if (isCorrect) {
                        toast.success('✅ Correct! Your solution passed the test');
                      } else {
                        toast.error('❌ Output does not match expected result. Try again');
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t bg-card flex-shrink-0">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                onClick={() => {
                  setCurrentStep('questionList');
                  setCurrentQuestionId(null);
                }}
              >
                <ChevronRight className="h-4 w-4 mr-2 rotate-180" /> Question List
              </Button>
              <div className="flex items-center gap-2">
                {currentIndex < questions.length - 1 ? (
                  <Button onClick={submitCurrentQuestion} className="bg-blue-600 hover:bg-blue-700 text-white">
                    Submit & Next Question <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                ) : (
                  <Button onClick={submitCurrentQuestion} className="bg-green-600 hover:bg-green-700 text-white">
                    Submit & Finish <CheckCircle2 className="h-4 w-4 ml-2" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 'submitted') {
    return (
      <div className="container mx-auto px-4 py-6 min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-2xl w-full">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Award className="h-16 w-16 text-green-600" />
            </div>
            <CardTitle className="text-2xl">Test Submitted Successfully!</CardTitle>
            <CardDescription>Your answers have been recorded</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <p className="text-3xl font-bold text-green-600">{solvedCount}</p>
                <p className="text-sm text-muted-foreground">Questions Solved</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <p className="text-3xl font-bold text-blue-600">{questions.length}</p>
                <p className="text-sm text-muted-foreground">Total Questions</p>
              </div>
            </div>

            {warnings > 0 && (
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <span className="font-semibold">Note:</span> {warnings} warning(s) were recorded during your test.
                </p>
              </div>
            )}

            <Separator />

            <div className="space-y-2">
              <h4 className="font-semibold">Test Details:</h4>
              <div className="text-sm space-y-1">
                <p>
                  <span className="text-muted-foreground">Test ID:</span> {proctorIds.testId}
                </p>
                <p>
                  <span className="text-muted-foreground">Session ID:</span> {proctorIds.sessionId}
                </p>
                <p>
                  <span className="text-muted-foreground">Completion Rate:</span> {Math.round((solvedCount / questions.length) * 100)}%
                </p>
              </div>
            </div>

            <Button onClick={() => navigate('/')} className="w-full bg-green-600 hover:bg-green-700">
              Return to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return null;
}
