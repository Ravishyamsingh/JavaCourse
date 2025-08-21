import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  unlocked: boolean;
  date: string | null;
}

interface RecentAchievementsProps {
  achievements: Achievement[];
}

export default function RecentAchievements({ achievements }: RecentAchievementsProps) {
  const recentUnlockedAchievements = achievements.filter(a => a.unlocked).slice(0, 3);

  return (
    <Card className="overflow-hidden border-0 bg-white/70 backdrop-blur-lg shadow-2xl">
      <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50 border-b border-yellow-100/50">
        <CardTitle className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg">
            <Star className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="text-lg font-bold text-gray-800">Recent Achievements</div>
            <div className="text-sm text-gray-600">Your latest accomplishments</div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          {recentUnlockedAchievements.map((achievement) => (
            <div key={achievement.id} className="group flex items-center space-x-4 p-4 bg-gradient-to-r from-yellow-50/50 to-orange-50/50 rounded-xl border border-yellow-200/30 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <div className="p-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl text-white shadow-lg group-hover:shadow-yellow-500/25 transition-all duration-300">
                {achievement.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-800 mb-1">{achievement.title}</h4>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </div>
              <div className="text-right">
                <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                  {achievement.date}
                </Badge>
                <div className="text-xs text-gray-500 mt-1">Unlocked</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
