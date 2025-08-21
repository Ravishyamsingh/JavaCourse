import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, CheckCircle2, Flame, Clock } from 'lucide-react';

interface StatsCardsProps {
  progressPercentage: number;
  completedLessonsCount: number;
  totalLessons: number;
  studyStreak: number;
  totalStudyTime: number;
}

export default function StatsCards({
  progressPercentage,
  completedLessonsCount,
  totalLessons,
  studyStreak,
  totalStudyTime
}: StatsCardsProps) {
  return (
    <div className="grid md:grid-cols-4 gap-6">
      <Card className="group overflow-hidden border-0 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105">
        <CardContent className="p-8 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold mb-1">{Math.round(progressPercentage)}%</div>
                <div className="text-sm opacity-90">Overall Progress</div>
              </div>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div 
                className="bg-white/80 h-2 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="group overflow-hidden border-0 bg-gradient-to-br from-emerald-500 via-green-600 to-teal-600 text-white shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 hover:scale-105">
        <CardContent className="p-8 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold mb-1">{completedLessonsCount}/{totalLessons}</div>
                <div className="text-sm opacity-90">Lessons Completed</div>
              </div>
            </div>
            <div className="text-xs opacity-75">
              {((completedLessonsCount / totalLessons) * 100).toFixed(1)}% of total lessons
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="group overflow-hidden border-0 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 text-white shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 hover:scale-105">
        <CardContent className="p-8 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Flame className="h-6 w-6" />
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold mb-1">{studyStreak}</div>
                <div className="text-sm opacity-90">Day Streak</div>
              </div>
            </div>
            <div className="text-xs opacity-75 flex items-center">
              <Flame className="w-3 h-3 mr-1" />
              Keep the momentum going!
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="group overflow-hidden border-0 bg-gradient-to-br from-purple-500 via-indigo-600 to-blue-600 text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105">
        <CardContent className="p-8 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Clock className="h-6 w-6" />
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold mb-1">{totalStudyTime}h</div>
                <div className="text-sm opacity-90">Study Time</div>
              </div>
            </div>
            <div className="text-xs opacity-75">
              Average: {(totalStudyTime / (studyStreak || 1)).toFixed(1)}h per day
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
