import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import {
  CheckCircle,
  XCircle,
  Clock,
  Award,
  FileText,
  BarChart3,
  Users,
  Target,
  TrendingUp,
  AlertCircle,
  Download,
  Send,
  Eye,
  Edit,
  RefreshCw,
  Bot,
  User,
  MessageSquare,
} from 'lucide-react';
import {
  Assignment,
  Submission,
  SubmissionStatus,
  Quiz,
  QuizAttempt,
  Rubric,
  RubricCriterion,
  QuestionType,
} from '@/types/cms';
import { toast } from 'sonner';

interface GradingSystemProps {
  assignmentId?: string;
  quizId?: string;
  className?: string;
}

interface GradingRule {
  id: string;
  type: 'keyword' | 'length' | 'pattern' | 'code_execution' | 'similarity';
  condition: string;
  points: number;
  feedback: string;
  isActive: boolean;
}

interface AutoGradingResult {
  submissionId: string;
  score: number;
  maxScore: number;
  percentage: number;
  feedback: string[];
  gradedCriteria: {
    criterionId: string;
    score: number;
    feedback: string;
    isAutoGraded: boolean;
  }[];
  requiresManualReview: boolean;
  confidence: number;
}

export const GradingSystem: React.FC<GradingSystemProps> = ({
  assignmentId,
  quizId,
  className = '',
}) => {
  const [activeTab, setActiveTab] = useState('submissions');
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [quizAttempts, setQuizAttempts] = useState<QuizAttempt[]>([]);
  const [gradingRules, setGradingRules] = useState<GradingRule[]>([]);
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [autoGradingResults, setAutoGradingResults] = useState<AutoGradingResult[]>([]);
  const [isGrading, setIsGrading] = useState(false);
  const [gradingStats, setGradingStats] = useState({
    totalSubmissions: 0,
    gradedSubmissions: 0,
    averageScore: 0,
    pendingReview: 0,
  });

  // Mock data - in real app, this would come from API
  useEffect(() => {
    const mockSubmissions: Submission[] = [
      {
        id: 'sub-1',
        assignmentId: assignmentId || 'assignment-1',
        studentId: 'student-1',
        content: 'This is my solution to the Java programming assignment. I implemented the required methods using object-oriented principles.',
        attachments: [],
        submittedAt: new Date('2024-01-20T10:00:00'),
        status: SubmissionStatus.SUBMITTED,
        attempts: 1,
      },
      {
        id: 'sub-2',
        assignmentId: assignmentId || 'assignment-1',
        studentId: 'student-2',
        content: 'Here is my Java code implementation with proper error handling and documentation.',
        attachments: [],
        submittedAt: new Date('2024-01-20T11:30:00'),
        status: SubmissionStatus.GRADED,
        score: 85,
        feedback: 'Good implementation with proper error handling. Consider adding more comments.',
        gradedBy: 'auto-grader',
        gradedAt: new Date('2024-01-20T12:00:00'),
        attempts: 1,
      },
    ];

    const mockQuizAttempts: QuizAttempt[] = [
      {
        id: 'attempt-1',
        quizId: quizId || 'quiz-1',
        studentId: 'student-1',
        answers: [
          {
            questionId: 'q1',
            answer: 'public static void main(String[] args)',
            isCorrect: true,
            points: 10,
          },
        ],
        score: 10,
        maxScore: 10,
        percentage: 100,
        passed: true,
        startedAt: new Date('2024-01-20T09:00:00'),
        completedAt: new Date('2024-01-20T09:15:00'),
        timeSpent: 900,
        attemptNumber: 1,
      },
    ];

    const mockGradingRules: GradingRule[] = [
      {
        id: 'rule-1',
        type: 'keyword',
        condition: 'class,method,variable',
        points: 10,
        feedback: 'Good use of Java terminology',
        isActive: true,
      },
      {
        id: 'rule-2',
        type: 'length',
        condition: 'min:100',
        points: 5,
        feedback: 'Adequate explanation length',
        isActive: true,
      },
    ];

    setSubmissions(mockSubmissions);
    setQuizAttempts(mockQuizAttempts);
    setGradingRules(mockGradingRules);

    // Calculate stats
    setGradingStats({
      totalSubmissions: mockSubmissions.length,
      gradedSubmissions: mockSubmissions.filter(s => s.status === SubmissionStatus.GRADED).length,
      averageScore: mockSubmissions.reduce((acc, s) => acc + (s.score || 0), 0) / mockSubmissions.length,
      pendingReview: mockSubmissions.filter(s => s.status === SubmissionStatus.SUBMITTED).length,
    });
  }, [assignmentId, quizId]);

  const handleAutoGrade = async (submissionId?: string) => {
    setIsGrading(true);
    try {
      const submissionsToGrade = submissionId 
        ? submissions.filter(s => s.id === submissionId)
        : submissions.filter(s => s.status === SubmissionStatus.SUBMITTED);

      for (const submission of submissionsToGrade) {
        const result = await performAutoGrading(submission);
        setAutoGradingResults(prev => [...prev.filter(r => r.submissionId !== submission.id), result]);
        
        // Update submission with auto-grading results
        setSubmissions(prev => prev.map(s => 
          s.id === submission.id 
            ? {
                ...s,
                status: result.requiresManualReview ? SubmissionStatus.SUBMITTED : SubmissionStatus.GRADED,
                score: result.requiresManualReview ? undefined : result.score,
                feedback: result.requiresManualReview ? undefined : result.feedback.join('\n'),
                gradedBy: result.requiresManualReview ? undefined : 'auto-grader',
                gradedAt: result.requiresManualReview ? undefined : new Date(),
              }
            : s
        ));
      }

      toast.success(`Auto-graded ${submissionsToGrade.length} submission(s)`);
    } catch (error) {
      toast.error('Auto-grading failed');
    } finally {
      setIsGrading(false);
    }
  };

  const performAutoGrading = async (submission: Submission): Promise<AutoGradingResult> => {
    // Simulate auto-grading logic
    await new Promise(resolve => setTimeout(resolve, 1000));

    let totalScore = 0;
    let maxScore = 100;
    const feedback: string[] = [];
    const gradedCriteria: AutoGradingResult['gradedCriteria'] = [];
    let confidence = 0.8;

    // Apply grading rules
    for (const rule of gradingRules.filter(r => r.isActive)) {
      let ruleScore = 0;
      let ruleFeedback = '';

      switch (rule.type) {
        case 'keyword':
          const keywords = rule.condition.split(',');
          const foundKeywords = keywords.filter(keyword => 
            submission.content.toLowerCase().includes(keyword.toLowerCase())
          );
          ruleScore = (foundKeywords.length / keywords.length) * rule.points;
          ruleFeedback = `Found ${foundKeywords.length}/${keywords.length} required keywords`;
          break;

        case 'length':
          const minLength = parseInt(rule.condition.replace('min:', ''));
          if (submission.content.length >= minLength) {
            ruleScore = rule.points;
            ruleFeedback = rule.feedback;
          } else {
            ruleFeedback = `Content too short (${submission.content.length}/${minLength} characters)`;
          }
          break;

        case 'pattern':
          const regex = new RegExp(rule.condition, 'i');
          if (regex.test(submission.content)) {
            ruleScore = rule.points;
            ruleFeedback = rule.feedback;
          } else {
            ruleFeedback = 'Required pattern not found';
          }
          break;

        default:
          break;
      }

      totalScore += ruleScore;
      if (ruleFeedback) {
        feedback.push(ruleFeedback);
      }

      gradedCriteria.push({
        criterionId: rule.id,
        score: ruleScore,
        feedback: ruleFeedback,
        isAutoGraded: true,
      });
    }

    const percentage = (totalScore / maxScore) * 100;
    const requiresManualReview = confidence < 0.7 || percentage < 50;

    return {
      submissionId: submission.id,
      score: Math.round(totalScore),
      maxScore,
      percentage: Math.round(percentage),
      feedback,
      gradedCriteria,
      requiresManualReview,
      confidence,
    };
  };

  const handleManualGrade = (submissionId: string, score: number, feedback: string) => {
    setSubmissions(prev => prev.map(s => 
      s.id === submissionId 
        ? {
            ...s,
            status: SubmissionStatus.GRADED,
            score,
            feedback,
            gradedBy: 'instructor',
            gradedAt: new Date(),
          }
        : s
    ));
    toast.success('Submission graded manually');
  };

  const addGradingRule = () => {
    const newRule: GradingRule = {
      id: `rule-${Date.now()}`,
      type: 'keyword',
      condition: '',
      points: 10,
      feedback: '',
      isActive: true,
    };
    setGradingRules(prev => [...prev, newRule]);
  };

  const updateGradingRule = (ruleId: string, updates: Partial<GradingRule>) => {
    setGradingRules(prev => prev.map(rule => 
      rule.id === ruleId ? { ...rule, ...updates } : rule
    ));
  };

  const deleteGradingRule = (ruleId: string) => {
    setGradingRules(prev => prev.filter(rule => rule.id !== ruleId));
  };

  const renderSubmissions = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Submissions</p>
                <p className="text-2xl font-bold">{gradingStats.totalSubmissions}</p>
              </div>
              <FileText className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Graded</p>
                <p className="text-2xl font-bold">{gradingStats.gradedSubmissions}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Average Score</p>
                <p className="text-2xl font-bold">{gradingStats.averageScore.toFixed(1)}%</p>
              </div>
              <Target className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending Review</p>
                <p className="text-2xl font-bold">{gradingStats.pendingReview}</p>
              </div>
              <Clock className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Submissions</h3>
        <div className="flex items-center space-x-2">
          <Button
            onClick={() => handleAutoGrade()}
            disabled={isGrading}
          >
            <Bot className="h-4 w-4 mr-2" />
            {isGrading ? 'Auto-Grading...' : 'Auto-Grade All'}
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Results
          </Button>
        </div>
      </div>

      {/* Submissions List */}
      <div className="space-y-4">
        {submissions.map((submission) => {
          const autoResult = autoGradingResults.find(r => r.submissionId === submission.id);
          
          return (
            <Card key={submission.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Student {submission.studentId}</h4>
                    <p className="text-sm text-gray-500">
                      Submitted {submission.submittedAt.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant={
                        submission.status === SubmissionStatus.GRADED
                          ? 'default'
                          : submission.status === SubmissionStatus.SUBMITTED
                          ? 'secondary'
                          : 'outline'
                      }
                    >
                      {submission.status}
                    </Badge>
                    {submission.score !== undefined && (
                      <Badge variant="outline">
                        {submission.score}%
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label>Submission Content</Label>
                    <div className="p-3 bg-gray-50 rounded border text-sm">
                      {submission.content.substring(0, 200)}
                      {submission.content.length > 200 && '...'}
                    </div>
                  </div>

                  {autoResult && (
                    <div className="p-3 bg-blue-50 rounded border">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-blue-800">Auto-Grading Result</span>
                        <Badge variant="outline">
                          Confidence: {(autoResult.confidence * 100).toFixed(0)}%
                        </Badge>
                      </div>
                      <div className="text-sm text-blue-700">
                        Score: {autoResult.score}/{autoResult.maxScore} ({autoResult.percentage}%)
                      </div>
                      {autoResult.requiresManualReview && (
                        <div className="flex items-center mt-2 text-orange-600">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          <span className="text-sm">Requires manual review</span>
                        </div>
                      )}
                    </div>
                  )}

                  {submission.feedback && (
                    <div>
                      <Label>Feedback</Label>
                      <div className="p-3 bg-green-50 rounded border text-sm">
                        {submission.feedback}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center space-x-2">
                    <Button
                      size="sm"
                      onClick={() => handleAutoGrade(submission.id)}
                      disabled={isGrading}
                    >
                      <Bot className="h-4 w-4 mr-2" />
                      Auto-Grade
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setSelectedSubmission(submission)}
                    >
                      <User className="h-4 w-4 mr-2" />
                      Manual Grade
                    </Button>
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );

  const renderGradingRules = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Auto-Grading Rules</h3>
        <Button onClick={addGradingRule}>
          <Bot className="h-4 w-4 mr-2" />
          Add Rule
        </Button>
      </div>

      <div className="space-y-4">
        {gradingRules.map((rule) => (
          <Card key={rule.id}>
            <CardContent className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                <div>
                  <Label>Type</Label>
                  <Select
                    value={rule.type}
                    onValueChange={(value) => updateGradingRule(rule.id, { type: value as any })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="keyword">Keyword</SelectItem>
                      <SelectItem value="length">Length</SelectItem>
                      <SelectItem value="pattern">Pattern</SelectItem>
                      <SelectItem value="code_execution">Code Execution</SelectItem>
                      <SelectItem value="similarity">Similarity</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Condition</Label>
                  <Input
                    value={rule.condition}
                    onChange={(e) => updateGradingRule(rule.id, { condition: e.target.value })}
                    placeholder="Enter condition"
                  />
                </div>

                <div>
                  <Label>Points</Label>
                  <Input
                    type="number"
                    value={rule.points}
                    onChange={(e) => updateGradingRule(rule.id, { points: parseInt(e.target.value) || 0 })}
                  />
                </div>

                <div>
                  <Label>Feedback</Label>
                  <Input
                    value={rule.feedback}
                    onChange={(e) => updateGradingRule(rule.id, { feedback: e.target.value })}
                    placeholder="Feedback message"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    checked={rule.isActive}
                    onCheckedChange={(checked) => updateGradingRule(rule.id, { isActive: checked })}
                  />
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => deleteGradingRule(rule.id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Award className="h-5 w-5" />
          <span>Grading System</span>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="submissions">Submissions</TabsTrigger>
            <TabsTrigger value="rules">Grading Rules</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="submissions" className="mt-6">
            {renderSubmissions()}
          </TabsContent>

          <TabsContent value="rules" className="mt-6">
            {renderGradingRules()}
          </TabsContent>

          <TabsContent value="analytics" className="mt-6">
            <div className="text-center py-12">
              <BarChart3 className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium mb-2">Grading Analytics</h3>
              <p className="text-gray-500">Detailed analytics coming soon...</p>
            </div>
          </TabsContent>
        </Tabs>

        {/* Manual Grading Modal */}
        {selectedSubmission && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <Card className="w-96 max-h-[80vh] overflow-y-auto">
              <CardHeader>
                <CardTitle>Manual Grading</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Student</Label>
                  <div className="text-sm">{selectedSubmission.studentId}</div>
                </div>
                
                <div>
                  <Label>Submission</Label>
                  <div className="p-3 bg-gray-50 rounded border text-sm max-h-32 overflow-y-auto">
                    {selectedSubmission.content}
                  </div>
                </div>

                <div>
                  <Label>Score (0-100)</Label>
                  <Input
                    type="number"
                    min="0"
                    max="100"
                    defaultValue={selectedSubmission.score || 0}
                    id="manual-score"
                  />
                </div>

                <div>
                  <Label>Feedback</Label>
                  <Textarea
                    placeholder="Enter feedback for the student..."
                    defaultValue={selectedSubmission.feedback || ''}
                    id="manual-feedback"
                    rows={4}
                  />
                </div>

                <div className="flex justify-end space-x-2">
                  <Button
                    variant="outline"
                    onClick={() => setSelectedSubmission(null)}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => {
                      const scoreInput = document.getElementById('manual-score') as HTMLInputElement;
                      const feedbackInput = document.getElementById('manual-feedback') as HTMLTextAreaElement;
                      
                      handleManualGrade(
                        selectedSubmission.id,
                        parseInt(scoreInput.value) || 0,
                        feedbackInput.value
                      );
                      setSelectedSubmission(null);
                    }}
                  >
                    Save Grade
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default GradingSystem;