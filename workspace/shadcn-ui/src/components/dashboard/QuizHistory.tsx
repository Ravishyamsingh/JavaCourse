import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Star, Calendar, Target } from 'lucide-react';

interface QuizHistoryEntry {
  id: number;
  date: string;
  topic: string;
  score: number;
  totalQuestions: number;
  timeTaken: string;
}

export default function QuizHistory() {
  // Mock data for quiz history
  const quizHistory: QuizHistoryEntry[] = [
    {
      id: 1,
      date: "2024-03-15",
      topic: "Java Fundamentals",
      score: 9,
      totalQuestions: 10,
      timeTaken: "12:30"
    },
    {
      id: 2,
      date: "2024-03-12",
      topic: "OOP Concepts",
      score: 8,
      totalQuestions: 10,
      timeTaken: "15:45"
    },
    {
      id: 3,
      date: "2024-03-10",
      topic: "Collections",
      score: 7,
      totalQuestions: 10,
      timeTaken: "18:20"
    },
    {
      id: 4,
      date: "2024-03-08",
      topic: "Exception Handling",
      score: 10,
      totalQuestions: 10,
      timeTaken: "10:15"
    },
    {
      id: 5,
      date: "2024-03-05",
      topic: "Multithreading",
      score: 6,
      totalQuestions: 10,
      timeTaken: "22:30"
    }
  ];

  const getScoreColor = (percentage: number) => {
    if (percentage >= 90) return "text-green-600";
    if (percentage >= 70) return "text-blue-600";
    if (percentage >= 50) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBg = (percentage: number) => {
    if (percentage >= 90) return "bg-green-100";
    if (percentage >= 70) return "bg-blue-100";
    if (percentage >= 50) return "bg-yellow-100";
    return "bg-red-100";
  };

  return (
    <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
            <Calendar className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="text-lg font-bold text-gray-800">Quiz History</div>
            <div className="text-sm text-gray-600">Your recent quiz performance</div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {quizHistory.map((quiz) => {
            const percentage = (quiz.score / quiz.totalQuestions) * 100;
            return (
              <div 
                key={quiz.id} 
                className="p-4 rounded-xl border bg-gradient-to-r from-white to-gray-50 hover:shadow-md transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium text-gray-900">{quiz.topic}</h4>
                    <p className="text-sm text-gray-600">{quiz.date}</p>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${getScoreBg(percentage)}`}>
                    <span className={getScoreColor(percentage)}>
                      {quiz.score}/{quiz.totalQuestions} ({percentage.toFixed(0)}%)
                    </span>
                  </div>
                </div>
                
                <div className="mb-2">
                  <Progress value={percentage} className="h-2" />
                </div>
                
                <div className="flex justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Target className="h-3 w-3" />
                    <span>{quiz.timeTaken} min</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3" />
                    <span>{quiz.totalQuestions - quiz.score} incorrect</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-6 text-center">
          <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
            View All Quiz History
          </button>
        </div>
      </CardContent>
    </Card>
  );
}