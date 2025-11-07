import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Star, Calendar, Target, Clock } from 'lucide-react';
import type { QuizHistoryEntry } from '@/services/progressApi';

interface QuizHistoryProps {
  history: QuizHistoryEntry[];
  totalQuizAttempts?: number;
}

const getScoreColor = (percentage: number) => {
  if (percentage >= 90) return 'text-green-600';
  if (percentage >= 70) return 'text-blue-600';
  if (percentage >= 50) return 'text-yellow-600';
  return 'text-red-600';
};

const getScoreBg = (percentage: number) => {
  if (percentage >= 90) return 'bg-green-100';
  if (percentage >= 70) return 'bg-blue-100';
  if (percentage >= 50) return 'bg-yellow-100';
  return 'bg-red-100';
};

const formatPercentage = (score: number, totalQuestions: number) => {
  if (totalQuestions <= 0) {
    return Math.max(0, Math.min(100, Math.round(score)));
  }
  const raw = (score / totalQuestions) * 100;
  const clamped = Math.max(0, Math.min(100, raw));
  return Math.round(clamped);
};

const formatDuration = (minutes: number) => {
  if (!Number.isFinite(minutes) || minutes < 0) return '—';
  const totalSeconds = Math.round(minutes * 60);
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  if (secs === 0) return `${mins} min`;
  return `${mins} min ${secs}s`;
};

const formatDate = (isoDate: string) => {
  const parsed = new Date(isoDate);
  if (Number.isNaN(parsed.getTime())) return 'Unknown date';
  return parsed.toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

export default function QuizHistory({ history, totalQuizAttempts = 0 }: QuizHistoryProps) {
  const sortedHistory = Array.isArray(history)
    ? [...history].sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime())
    : [];
  const hasHistory = sortedHistory.length > 0;

  return (
    <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
            <Calendar className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="text-lg font-bold text-gray-800">Quiz History</div>
            <div className="text-sm text-gray-600">Recent quiz performance</div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {hasHistory ? (
          <div className="space-y-4">
            {sortedHistory.map((quiz) => {
              const percentage = formatPercentage(quiz.score, quiz.totalQuestions);
              const scoreLabel = `${percentage}%`;
              return (
                <div
                  key={`${quiz.quizId}-${quiz.completedAt}`}
                  className="p-4 rounded-xl border bg-gradient-to-r from-white to-gray-50 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium text-gray-900">{quiz.topic || 'Java Quiz'}</h4>
                      <p className="text-sm text-gray-600">{formatDate(quiz.completedAt)}</p>
                      {quiz.moduleId && (
                        <Badge className="mt-1 text-xs bg-purple-100 text-purple-700">
                          {quiz.moduleId}
                        </Badge>
                      )}
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${getScoreBg(percentage)}`}>
                      <span className={getScoreColor(percentage)}>{scoreLabel}</span>
                    </div>
                  </div>

                  <div className="mb-2">
                    <Progress value={percentage} className="h-2" />
                  </div>

                  <div className="flex justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3" />
                      <span>Score: {quiz.score}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{formatDuration(quiz.timeTakenMinutes)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Target className="h-3 w-3" />
                      <span>{quiz.totalQuestions} questions</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-6 text-center text-sm text-gray-500">
            No quiz attempts recorded yet. Complete a quiz to see your results here.
          </div>
        )}

        <div className="mt-6 text-center text-xs text-gray-500">
          Total quiz attempts: {totalQuizAttempts || sortedHistory.length}
        </div>
      </CardContent>
    </Card>
  );
}
