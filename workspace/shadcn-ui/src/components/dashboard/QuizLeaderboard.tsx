import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Trophy, Medal } from 'lucide-react';

interface LeaderboardEntry {
  id: number;
  name: string;
  score: number;
  quizzesTaken: number;
  lastActive: string;
  rank: number;
}

export default function QuizLeaderboard() {
  // Mock data for leaderboard
  const leaderboardData: LeaderboardEntry[] = [
    {
      id: 1,
      name: "Alex Johnson",
      score: 95,
      quizzesTaken: 12,
      lastActive: "2024-03-15",
      rank: 1
    },
    {
      id: 2,
      name: "Maria Garcia",
      score: 92,
      quizzesTaken: 15,
      lastActive: "2024-03-14",
      rank: 2
    },
    {
      id: 3,
      name: "Sam Wilson",
      score: 89,
      quizzesTaken: 10,
      lastActive: "2024-03-13",
      rank: 3
    },
    {
      id: 4,
      name: "You",
      score: 87,
      quizzesTaken: 8,
      lastActive: "2024-03-15",
      rank: 4
    },
    {
      id: 5,
      name: "Taylor Kim",
      score: 85,
      quizzesTaken: 11,
      lastActive: "2024-03-12",
      rank: 5
    }
  ];

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

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "from-yellow-100 to-yellow-50 border-yellow-200";
      case 2:
        return "from-gray-100 to-gray-50 border-gray-200";
      case 3:
        return "from-amber-100 to-amber-50 border-amber-200";
      default:
        return "from-white to-gray-50 border-gray-100";
    }
  };

  return (
    <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg">
            <Trophy className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="text-lg font-bold text-gray-800">Quiz Leaderboard</div>
            <div className="text-sm text-gray-600">Top performers in Java quizzes</div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {leaderboardData.map((user) => (
            <div 
              key={user.id}
              className={`flex items-center justify-between p-4 rounded-xl border bg-gradient-to-r ${getRankColor(user.rank)} ${
                user.name === "You" ? "ring-2 ring-blue-500" : ""
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white border">
                  {getRankIcon(user.rank)}
                </div>
                <div>
                  <div className="font-medium text-gray-900">
                    {user.name} {user.name === "You" && (
                      <Badge className="ml-2 bg-blue-100 text-blue-800">You</Badge>
                    )}
                  </div>
                  <div className="text-xs text-gray-500">
                    {user.quizzesTaken} quizzes taken
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-gray-900 flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>{user.score}%</span>
                </div>
                <div className="text-xs text-gray-500">
                  Last active: {user.lastActive}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Keep taking quizzes to improve your rank!
          </p>
        </div>
      </CardContent>
    </Card>
  );
}