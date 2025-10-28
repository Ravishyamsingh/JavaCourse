import { Flame, Star, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useProgress } from '@/contexts/ProgressContext';
import { useAchievements } from '@/contexts/AchievementContext';

export default function MotivationWidget() {
  const { studyStreak, getProgressPercentage } = useProgress();
  const { achievements } = useAchievements();

  const unlocked = achievements.filter(a => a.unlocked);
  const locked = achievements.filter(a => !a.unlocked);
  const nextAchievement = locked.length > 0 ? locked[0] : null;
  const progress = getProgressPercentage();

  return (
    <Card className="mb-6 bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50 border-0 shadow-2xl">
      <CardContent className="flex flex-col md:flex-row items-center justify-between gap-6 p-6">
        {/* Streak */}
        <div className="flex flex-col items-center">
          <div className="p-4 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full shadow-lg mb-2">
            <Flame className="h-8 w-8 text-white animate-pulse" />
          </div>
          <div className="text-2xl font-bold text-orange-600">{studyStreak} Day Streak</div>
          <div className="text-xs text-gray-600">Keep your streak alive!</div>
        </div>
        {/* Progress Ring */}
        <div className="flex flex-col items-center">
          <svg width="90" height="90" viewBox="0 0 90 90">
            <circle cx="45" cy="45" r="40" stroke="#f3f4f6" strokeWidth="8" fill="none" />
            <circle
              cx="45" cy="45" r="40"
              stroke="#f59e42"
              strokeWidth="8"
              fill="none"
              strokeDasharray={2 * Math.PI * 40}
              strokeDashoffset={2 * Math.PI * 40 * (1 - progress / 100)}
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 1s' }}
            />
            <text x="50%" y="54%" textAnchor="middle" fontSize="1.5em" fill="#f59e42" fontWeight="bold">{Math.round(progress)}%</text>
          </svg>
          <div className="text-xs text-gray-600 mt-1">Course Progress</div>
        </div>
        {/* Next Achievement */}
        <div className="flex flex-col items-center">
          <div className="p-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg mb-2">
            <Star className="h-8 w-8 text-white animate-bounce" />
          </div>
          <div className="text-lg font-bold text-yellow-700">{nextAchievement ? nextAchievement.title : 'All Achievements Unlocked!'}</div>
          <div className="text-xs text-gray-600 text-center max-w-[120px]">
            {nextAchievement ? nextAchievement.description : 'Congratulations!'}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
