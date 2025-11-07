import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Trophy, Medal } from 'lucide-react';
import type { QuizHistoryEntry } from '@/services/progressApi';

interface QuizLeaderboardProps {
  history: QuizHistoryEntry[];
  totalQuizAttempts: number;
}

const formatPercentage = (score: number, totalQuestions: number) => {
  if (totalQuestions <= 0) {
    return Math.max(0, Math.min(100, Math.round(score)));
  }
  const raw = (score / totalQuestions) * 100;
  const clamped = Math.max(0, Math.min(100, raw));
  return Math.round(clamped);
};

const formatDate = (isoDate: string) => {
  const parsed = new Date(isoDate);
  if (Number.isNaN(parsed.getTime())) return 'Unknown';
  return parsed.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
};

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Trophy className="h-5 w-5 text-yellow-500" />;
    case 2:
      return <Medal className="h-5 w-5 text-gray-400" />;
    case 3:
      return <Medal className="h-5 w-5 text-amber-700" />;
    default:
      return <span className="text-sm font-bold">{rank}</span>;
  }
};

export default function QuizLeaderboard({ history, totalQuizAttempts }: QuizLeaderboardProps) {
  const scoredHistory = Array.isArray(history)
    ? [...history].map((attempt) => ({
        ...attempt,
        percentage: formatPercentage(attempt.score, attempt.totalQuestions)
      }))
    : [];

  const rankedHistory = scoredHistory.sort((a, b) => b.percentage - a.percentage);
  const hasHistory = rankedHistory.length > 0;

  const averageScore = hasHistory
    ? rankedHistory.reduce((sum, entry) => sum + entry.percentage, 0) / rankedHistory.length
    : 0;

  const bestAttempt = hasHistory ? rankedHistory[0] : null;
  const recentAttempt = hasHistory
    ? [...scoredHistory].sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime())[0]
    : null;
  const topAttempts = hasHistory ? rankedHistory.slice(0, 3) : [];

  return (
    <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg">
            <Trophy className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="text-lg font-bold text-gray-800">Quiz Performance</div>
            <div className="text-sm text-gray-600">Track your best quiz results</div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {hasHistory ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-100">
                <div className="text-xs text-gray-500">Best Score</div>
                <div className="flex items-center space-x-2 mt-1">
                  <Trophy className="h-4 w-4 text-yellow-500" />
                  <span className="text-lg font-semibold text-gray-800">
                    {bestAttempt?.percentage ?? 0}%
                  </span>
                </div>
                {bestAttempt && (
                  <div className="text-[0.6rem] text-gray-500 mt-1">
                    {bestAttempt.topic || 'Quiz'} • {formatDate(bestAttempt.completedAt)}
                  </div>
                )}
              </div>
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
                <div className="text-xs text-gray-500">Average Score</div>
                <div className="flex items-center space-x-2 mt-1">
                  <Star className="h-4 w-4 text-indigo-500" />
                  <span className="text-lg font-semibold text-gray-800">
                    {averageScore.toFixed(1)}%
                  </span>
                </div>
                <div className="text-[0.6rem] text-gray-500 mt-1">
                  Across {rankedHistory.length} recorded attempts
                </div>
              </div>
              <div className="p-3 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
                <div className="text-xs text-gray-500">Total Attempts</div>
                <div className="text-lg font-semibold text-gray-800 mt-1">
                  {totalQuizAttempts || rankedHistory.length}
                </div>
                {recentAttempt && (
                  <div className="text-[0.6rem] text-gray-500 mt-1">
                    Last quiz: {formatDate(recentAttempt.completedAt)}
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-3">
              {topAttempts.map((attempt, idx) => (
                <div
                  key={`${attempt.quizId}-${attempt.completedAt}`}
                  className="flex items-center justify-between p-4 rounded-xl border bg-gradient-to-r from-white to-gray-50 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white border">
                      {getRankIcon(idx + 1)}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 flex items-center space-x-2">
                        <span>{attempt.topic || 'Java Quiz'}</span>
                        {attempt.moduleId && (
                          <Badge className="text-xs bg-blue-100 text-blue-700">{attempt.moduleId}</Badge>
                        )}
                      </div>
                      <div className="text-xs text-gray-500">
                        {formatDate(attempt.completedAt)}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900 flex items-center space-x-1 justify-end">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>{attempt.percentage}%</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Score: {attempt.score}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center text-xs text-gray-500">
              Keep challenging yourself to improve your personal best!
            </div>
          </>
        ) : (
          <div className="p-6 text-center text-sm text-gray-500">
            No quiz activity yet. Take your first quiz to unlock performance insights.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
