import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  BookOpen, 
  Star, 
  ChevronRight,
  Clock,
  Trophy
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { quizQuestions } from '@/data/quizData';

export default function QuizModuleSelection() {
  const navigate = useNavigate();
  
  // Group questions by module
  const modules = Array.from(
    new Set(quizQuestions.map(q => q.module))
  ).map(module => {
    const moduleQuestions = quizQuestions.filter(q => q.module === module);
    return {
      name: module,
      questionCount: moduleQuestions.length,
      questions: moduleQuestions
    };
  });

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
          <Button onClick={() => navigate('/')} variant="outline">
            Back to Home
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Select a Module to Quiz
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose a module to test your knowledge with our interactive quizzes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((module, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-xl bg-white/80 backdrop-blur-lg hover:shadow-2xl transition-all duration-300"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                        <BookOpen className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-800">{module.name}</div>
                        <div className="text-sm text-gray-600">{module.questionCount} questions</div>
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>~{Math.ceil(module.questionCount * 2.5)} min</span>
                    </div>
                    <Button 
                      onClick={() => navigate(`/quiz?module=${encodeURIComponent(module.name)}`)}
                      variant="outline"
                      className="flex items-center space-x-2"
                    >
                      <span>Start Quiz</span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 border-0 shadow-xl bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Full Course Quiz</h3>
              <p className="text-gray-600 mb-4">
                Test your knowledge across all modules with our comprehensive quiz
              </p>
              <Button
                onClick={() => navigate('/quiz')}
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              >
                Start Full Quiz ({quizQuestions.length} questions)
              </Button>
              <div className="mt-4">
                <Button
                  onClick={() => navigate('/quiz-results')}
                  variant="outline"
                  className="text-blue-600 hover:text-blue-700"
                >
                  View All Quiz Results
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}