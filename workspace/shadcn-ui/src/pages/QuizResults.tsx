import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import {
  Star,
  Trophy,
  RotateCcw,
  BookOpen,
  Clock,
  Target,
  TrendingUp,
  Brain,
  BarChart3,
  Calendar,
  Award
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '@/contexts/QuizContext';
import UserProfile from '@/components/UserProfile';

export default function QuizResults() {
  const navigate = useNavigate();
  const {
    quizResults,
    getQuizScore,
    getQuizStats,
    getQuizHistory,
    clearQuizHistory,
    getModulePerformance
  } = useQuiz();
  
  const score = getQuizScore();
  const totalQuestions = quizResults.length;
  const percentage = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;
  const quizStats = getQuizStats();
  const quizHistory = getQuizHistory();
  
  // Calculate current session statistics
  const correctAnswers = score;
  const incorrectAnswers = totalQuestions - score;
  const accuracy = totalQuestions > 0 ? ((correctAnswers / totalQuestions) * 100).toFixed(1) : '0';
  
  // Analyze performance by difficulty
  const difficultyStats = quizResults.reduce((acc, result) => {
    if (!acc[result.difficulty]) {
      acc[result.difficulty] = { correct: 0, total: 0 };
    }
    acc[result.difficulty].total++;
    if (result.isCorrect) {
      acc[result.difficulty].correct++;
    }
    return acc;
  }, {} as { [key: string]: { correct: number; total: number } });

  // Analyze performance by module
  const moduleStats = quizResults.reduce((acc, result) => {
    if (!acc[result.module]) {
      acc[result.module] = { correct: 0, total: 0 };
    }
    acc[result.module].total++;
    if (result.isCorrect) {
      acc[result.module].correct++;
    }
    return acc;
  }, {} as { [key: string]: { correct: number; total: number } });

  const getPerformanceColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-600 bg-green-50 border-green-200';
    if (percentage >= 60) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  const getPerformanceBadge = (percentage: number) => {
    if (percentage >= 90) return { text: 'Excellent', color: 'bg-green-100 text-green-800' };
    if (percentage >= 80) return { text: 'Good', color: 'bg-blue-100 text-blue-800' };
    if (percentage >= 70) return { text: 'Average', color: 'bg-yellow-100 text-yellow-800' };
    if (percentage >= 60) return { text: 'Below Average', color: 'bg-orange-100 text-orange-800' };
    return { text: 'Needs Improvement', color: 'bg-red-100 text-red-800' };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Trophy className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Quiz Results</h1>
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
        <div className="max-w-6xl mx-auto">
          {/* Current Session Results */}
          {totalQuestions > 0 && (
            <Card className="mb-8 border-0 shadow-xl bg-white/80 backdrop-blur-lg">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
                  Latest Quiz Results
                </CardTitle>
                <div className="flex justify-center mb-6">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-white">{percentage.toFixed(0)}%</div>
                      <div className="text-white text-sm">Accuracy</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-2xl font-bold text-gray-900">
                    {percentage >= 80 ? '🎉 Excellent Performance!' :
                     percentage >= 60 ? '👏 Good Job!' :
                     '📚 Keep Practicing!'}
                  </div>
                  <div className="text-gray-600 mt-2">
                    You answered {correctAnswers} out of {totalQuestions} questions correctly
                  </div>
                  <Badge className={getPerformanceBadge(percentage).color + ' mt-2'}>
                    {getPerformanceBadge(percentage).text}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Session Progress</span>
                      <span className="font-bold text-gray-900">{percentage.toFixed(1)}%</span>
                    </div>
                    <Progress value={percentage} className="h-3" />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                      <div className="text-2xl font-bold text-green-600 mb-1">{correctAnswers}</div>
                      <div className="text-sm text-gray-600">Correct</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl">
                      <div className="text-2xl font-bold text-red-600 mb-1">{incorrectAnswers}</div>
                      <div className="text-sm text-gray-600">Incorrect</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600 mb-1">{accuracy}%</div>
                      <div className="text-sm text-gray-600">Accuracy</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Overall Statistics */}
          {quizStats.totalQuizzesTaken > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Performance by Difficulty */}
              {Object.keys(difficultyStats).length > 0 && (
                <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Target className="h-5 w-5 text-purple-600" />
                      <span>Performance by Difficulty</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {Object.entries(difficultyStats).map(([difficulty, stats]) => {
                        const difficultyPercentage = (stats.correct / stats.total) * 100;
                        return (
                          <div key={difficulty} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center space-x-2">
                                <Badge className={`${
                                  difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                                  difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                                  'bg-red-100 text-red-800'
                                }`}>
                                  {difficulty.toUpperCase()}
                                </Badge>
                                <span className="text-sm text-gray-600">
                                  {stats.correct}/{stats.total}
                                </span>
                              </div>
                              <span className="font-bold text-gray-900">
                                {difficultyPercentage.toFixed(0)}%
                              </span>
                            </div>
                            <Progress value={difficultyPercentage} className="h-2" />
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Performance by Module */}
              {Object.keys(moduleStats).length > 0 && (
                <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                      <span>Performance by Module</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {Object.entries(moduleStats).map(([module, stats]) => {
                        const modulePercentage = (stats.correct / stats.total) * 100;
                        return (
                          <div key={module} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="font-medium text-gray-900 text-sm">{module}</div>
                                <div className="text-xs text-gray-600">
                                  {stats.correct}/{stats.total} correct
                                </div>
                              </div>
                              <Badge className={getPerformanceColor(modulePercentage)}>
                                {modulePercentage.toFixed(0)}%
                              </Badge>
                            </div>
                            <Progress value={modulePercentage} className="h-2" />
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {/* Historical Performance */}
          {quizStats.totalQuizzesTaken > 0 && (
            <Card className="mb-8 border-0 shadow-xl bg-white/80 backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-green-600" />
                    <span>Overall Performance Analytics</span>
                  </div>
                  <Button
                    onClick={clearQuizHistory}
                    variant="outline"
                    size="sm"
                    className="text-red-600 hover:text-red-700"
                  >
                    Clear History
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{quizStats.totalQuizzesTaken}</div>
                    <div className="text-sm text-gray-600">Total Quizzes</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      {(quizStats.averageScore * 100).toFixed(1)}%
                    </div>
                    <div className="text-sm text-gray-600">Average Score</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      {Object.keys(quizStats.modulePerformance).length}
                    </div>
                    <div className="text-sm text-gray-600">Modules Practiced</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
                    <div className="text-2xl font-bold text-orange-600 mb-1">
                      {quizStats.recentSessions.length}
                    </div>
                    <div className="text-sm text-gray-600">Recent Sessions</div>
                  </div>
                </div>

                {/* Recent Quiz History */}
                {quizHistory.length > 0 && (
                  <div>
                    <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      Recent Quiz Sessions
                    </h4>
                    <div className="space-y-3 max-h-64 overflow-y-auto">
                      {quizHistory.slice(0, 10).map((session, index) => {
                        const sessionPercentage = (session.correctAnswers / session.totalQuestions) * 100;
                        return (
                          <div key={session.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <div className="text-sm font-medium text-gray-900">
                                #{quizHistory.length - index}
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-900">
                                  {session.module || 'Mixed Quiz'}
                                </div>
                                <div className="text-xs text-gray-600">
                                  {new Date(session.startTime).toLocaleDateString()} •
                                  {session.totalQuestions} questions
                                  {session.difficulty && ` • ${session.difficulty}`}
                                </div>
                              </div>
                            </div>
                            <Badge className={getPerformanceColor(sessionPercentage)}>
                              {sessionPercentage.toFixed(0)}%
                            </Badge>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate('/quiz-modules')}
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            >
              <RotateCcw className="mr-2 h-5 w-5" />
              Take Another Quiz
            </Button>
            <Button
              onClick={() => navigate('/quiz?adaptive=true&count=10')}
              size="lg"
              variant="outline"
              className="border-purple-200 text-purple-600 hover:bg-purple-50"
            >
              <Brain className="mr-2 h-5 w-5" />
              Adaptive Quiz
            </Button>
            <Button
              onClick={() => navigate('/course')}
              variant="outline"
              size="lg"
            >
              Back to Course
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}