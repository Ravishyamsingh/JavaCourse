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
  Target
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '@/contexts/QuizContext';
import UserProfile from '@/components/UserProfile';

export default function QuizResults() {
  const navigate = useNavigate();
  const { quizResults, getQuizScore } = useQuiz();
  
  const score = getQuizScore();
  const totalQuestions = quizResults.length;
  const percentage = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;
  
  // Calculate statistics
  const correctAnswers = score;
  const incorrectAnswers = totalQuestions - score;
  const accuracy = totalQuestions > 0 ? ((correctAnswers / totalQuestions) * 100).toFixed(1) : '0';
  
  // Find modules with results
  const modules = Array.from(
    new Set(quizResults.map(result => {
      // In a real app, you would map question IDs to modules
      // For now, we'll just show a generic module
      return 'Java Fundamentals';
    }))
  );

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
        <div className="max-w-4xl mx-auto">
          {/* Overall Performance */}
          <Card className="mb-8 border-0 shadow-xl bg-white/80 backdrop-blur-lg">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
                Quiz Performance Summary
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
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Overall Progress</span>
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

          {/* Module Performance */}
          <Card className="mb-8 border-0 shadow-xl bg-white/80 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <span>Module Performance</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {modules.map((module, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                        <BookOpen className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{module}</div>
                        <div className="text-sm text-gray-600">Module Performance</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-900">85%</div>
                        <div className="text-xs text-gray-600">Accuracy</div>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Strong</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

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