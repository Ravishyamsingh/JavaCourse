import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import {
  BookOpen,
  Code,
  Users,
  Award,
  Clock,
  Star,
  CheckCircle2,
  XCircle,
  ChevronRight,
  RotateCcw,
  Brain,
  Target,
  Zap
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useQuiz } from '@/contexts/QuizContext';
import { DynamicQuizQuestion } from '@/data/dynamicQuizGenerator';
import UserProfile from '@/components/UserProfile';
import BackButton from '@/components/BackButton';
import useScrollToTop from '@/hooks/useScrollToTop';

export default function Quiz() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    addQuizResult,
    resetQuiz,
    quizResults,
    getQuizScore,
    generateQuiz,
    startQuizSession,
    endQuizSession,
    currentQuestions,
    getRecommendedDifficulty
  } = useQuiz();
  
  // Scroll to top when component mounts
  useScrollToTop();
  
  // Get URL parameters
  const urlParams = new URLSearchParams(location.search);
  const moduleParam = urlParams.get('module');
  const difficultyParam = urlParams.get('difficulty') as 'easy' | 'medium' | 'hard' | null;
  const countParam = parseInt(urlParams.get('count') || '10');
  const adaptiveParam = urlParams.get('adaptive') === 'true';
  
  const [quizData, setQuizData] = useState<DynamicQuizQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [quizStartTime, setQuizStartTime] = useState<Date | null>(null);

  // Initialize quiz on component mount
  useEffect(() => {
    initializeQuiz();
  }, [moduleParam, difficultyParam, countParam, adaptiveParam]);

  const initializeQuiz = () => {
    const questions = generateQuiz({
      module: moduleParam ? decodeURIComponent(moduleParam) : undefined,
      difficulty: difficultyParam || undefined,
      count: countParam,
      adaptive: adaptiveParam
    });

    setQuizData(questions);
    startQuizSession(questions, {
      module: moduleParam ? decodeURIComponent(moduleParam) : undefined,
      difficulty: difficultyParam || undefined
    });
    setQuizStartTime(new Date());
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowResult(false);
  };

  const handleSelectOption = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNextQuestion = () => {
    if (selectedOption === null || !quizData.length) return;

    const currentQ = quizData[currentQuestion];
    const isCorrect = selectedOption === currentQ.correctAnswer;
    const timeSpent = quizStartTime ? (Date.now() - quizStartTime.getTime()) / 1000 : 0;
    
    const newAnswer = {
      questionId: currentQ.id,
      selected: selectedOption,
      isCorrect,
      difficulty: currentQ.difficulty,
      module: currentQ.module,
      timeSpent
    };

    addQuizResult(newAnswer);
    
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setQuizStartTime(new Date()); // Reset timer for next question
    } else {
      endQuizSession();
      setShowResult(true);
      // Navigate to results page after a short delay
      setTimeout(() => {
        navigate('/quiz-results');
      }, 2000);
    }
  };

  const handleRestartQuiz = () => {
    resetQuiz();
    initializeQuiz();
  };

  const score = getQuizScore();
  const progress = quizData.length > 0 ? ((currentQuestion) / quizData.length) * 100 : 0;

  // Show loading state if quiz data is not ready
  if (quizData.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <Card className="max-w-md mx-auto border-0 shadow-xl bg-white/80 backdrop-blur-lg">
          <CardContent className="p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Generating Quiz Questions</h3>
            <p className="text-gray-600">Please wait while we prepare your personalized quiz...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (showResult) {
    const percentage = (score / quizData.length) * 100;
    // Create a map of question results for easy lookup
    const resultsMap = new Map(quizResults.map(result => [result.questionId, result]));
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Header */}
        <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Star className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Java Mastery Quiz</h1>
            </div>
            <div className="flex items-center space-x-3">
              <Button onClick={() => navigate('/')} variant="outline">
                Back to Home
              </Button>
              <UserProfile />
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-16">
          <Card className="max-w-2xl mx-auto border-0 shadow-xl bg-white/80 backdrop-blur-lg">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
                Quiz Results
              </CardTitle>
              <div className="flex justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">{score}/{quizData.length}</span>
                </div>
              </div>
              <div className="mt-6">
                <div className="text-2xl font-bold text-gray-900">
                  {percentage >= 80 ? '🎉 Excellent!' :
                   percentage >= 60 ? '👏 Good Job!' :
                   '📚 Keep Learning!'}
                </div>
                <div className="text-gray-600 mt-2">
                  You scored {percentage.toFixed(0)}%
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {quizData.map((question, index) => {
                  const answer = resultsMap.get(question.id);
                  return (
                    <div key={question.id} className="p-4 rounded-lg border">
                      <div className="flex items-start space-x-3">
                        {answer?.isCorrect ? (
                          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        )}
                        <div>
                          <h4 className="font-medium text-gray-900">{question.question}</h4>
                          <div className="mt-2 text-sm">
                            <div className="text-gray-600">
                              Your answer: <span className={answer?.isCorrect ? 'text-green-600' : 'text-red-600'}>
                                {question.options[answer?.selected || 0]}
                              </span>
                            </div>
                            {!answer?.isCorrect && (
                              <div className="text-green-600 mt-1">
                                Correct answer: {question.options[question.correctAnswer]}
                              </div>
                            )}
                            <div className="text-gray-500 mt-1 text-xs">
                              {question.explanation}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  onClick={handleRestartQuiz}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Restart Quiz
                </Button>
                <Button
                  onClick={() => navigate('/course')}
                  variant="outline"
                  className="flex-1"
                >
                  Back to Course
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Star className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Java Mastery Quiz</h1>
          </div>
          <div className="flex items-center space-x-3">
            <Button onClick={() => navigate('/')} variant="outline">
              Back to Home
            </Button>
            <UserProfile />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto mb-6">
          <BackButton to="/quiz-modules" label="Back to Quiz Selection" />
        </div>
        <Card className="max-w-2xl mx-auto border-0 shadow-xl bg-white/80 backdrop-blur-lg">
          <CardHeader className="pb-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <Badge className="bg-blue-100 text-blue-800">
                  Question {currentQuestion + 1} of {quizData.length}
                </Badge>
                <Badge
                  className={`${
                    quizData[currentQuestion]?.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                    quizData[currentQuestion]?.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}
                >
                  {quizData[currentQuestion]?.difficulty?.toUpperCase()}
                </Badge>
              </div>
              <div className="text-sm font-medium text-gray-600">
                Score: {score}/{quizData.length}
              </div>
            </div>
            <Progress value={progress} className="h-2" />
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                <BookOpen className="h-4 w-4" />
                <span>{quizData[currentQuestion]?.module}</span>
                {quizData[currentQuestion]?.lesson && (
                  <>
                    <span>•</span>
                    <span>{quizData[currentQuestion].lesson}</span>
                  </>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                {quizData[currentQuestion]?.question}
              </h3>
            </div>

            <div className="space-y-3">
              {quizData[currentQuestion]?.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleSelectOption(index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                    selectedOption === index
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedOption === index
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}>
                      {selectedOption === index && (
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      )}
                    </div>
                    <span className="text-gray-800">{option}</span>
                  </div>
                </button>
              ))}
            </div>

            <Button
              onClick={handleNextQuestion}
              disabled={selectedOption === null}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              {currentQuestion < quizData.length - 1 ? 'Next Question' : 'Finish Quiz'}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}