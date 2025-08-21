import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  unlocked: boolean;
  date: string | null;
}

interface AchievementsGridProps {
  achievements: Achievement[];
}

export default function AchievementsGrid({ achievements }: AchievementsGridProps) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {achievements.map((achievement) => (
        <Card key={achievement.id} className={`${achievement.unlocked ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200' : 'bg-gray-50 border-gray-200'}`}>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-full ${achievement.unlocked ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-200 text-gray-400'}`}>
                {achievement.icon}
              </div>
              <div className="flex-1">
                <h3 className={`font-bold ${achievement.unlocked ? 'text-gray-900' : 'text-gray-500'}`}>
                  {achievement.title}
                </h3>
                <p className={`text-sm ${achievement.unlocked ? 'text-gray-600' : 'text-gray-400'}`}>
                  {achievement.description}
                </p>
                {achievement.unlocked && achievement.date && (
                  <p className="text-xs text-yellow-600 mt-1">Unlocked on {achievement.date}</p>
                )}
              </div>
              {achievement.unlocked && (
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
