import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, CheckCircle2, Flame, Clock, Target, BookOpen } from 'lucide-react';
import { useEffect, useState } from 'react';

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
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const [animatedLessons, setAnimatedLessons] = useState(0);
  const [animatedStreak, setAnimatedStreak] = useState(0);
  const [animatedTime, setAnimatedTime] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setAnimatedProgress(Math.round(progressPercentage * progress));
      setAnimatedLessons(Math.round(completedLessonsCount * progress));
      setAnimatedStreak(Math.round(studyStreak * progress));
      setAnimatedTime(Math.round(totalStudyTime * progress));

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedProgress(progressPercentage);
        setAnimatedLessons(completedLessonsCount);
        setAnimatedStreak(studyStreak);
        setAnimatedTime(totalStudyTime);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [progressPercentage, completedLessonsCount, studyStreak, totalStudyTime]);

  const remainingLessons = totalLessons - completedLessonsCount;
  const averageTimePerDay = totalStudyTime / (studyStreak || 1);
  const completionRate = (completedLessonsCount / totalLessons) * 100;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="group overflow-hidden border-0 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105 relative">
        <CardContent className="p-8 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          <div className="absolute top-4 right-4 opacity-20">
            <TrendingUp className="h-12 w-12" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold mb-1 tabular-nums">{animatedProgress}%</div>
                <div className="text-sm opacity-90">Overall Progress</div>
              </div>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3 mb-2">
              <div
                className="bg-gradient-to-r from-white/80 to-white/60 h-3 rounded-full transition-all duration-1000 ease-out shadow-lg"
                style={{ width: `${animatedProgress}%` }}
              ></div>
            </div>
            <div className="text-xs opacity-75 flex justify-between">
              <span>Started</span>
              <span>Java Master</span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="group overflow-hidden border-0 bg-gradient-to-br from-emerald-500 via-green-600 to-teal-600 text-white shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 hover:scale-105 relative">
        <CardContent className="p-8 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          <div className="absolute top-4 right-4 opacity-20">
            <CheckCircle2 className="h-12 w-12" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold mb-1 tabular-nums">{animatedLessons}<span className="text-2xl opacity-70">/{totalLessons}</span></div>
                <div className="text-sm opacity-90">Lessons Completed</div>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs opacity-75">
              <div className="flex items-center space-x-1">
                <Target className="w-3 h-3" />
                <span>{remainingLessons} remaining</span>
              </div>
              <span>{completionRate.toFixed(1)}% complete</span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="group overflow-hidden border-0 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 text-white shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 hover:scale-105 relative">
        <CardContent className="p-8 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          <div className="absolute top-4 right-4 opacity-20">
            <Flame className="h-12 w-12" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                <Flame className="h-6 w-6 group-hover:animate-pulse" />
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold mb-1 tabular-nums">{animatedStreak}</div>
                <div className="text-sm opacity-90">Day Streak</div>
              </div>
            </div>
            <div className="text-xs opacity-75 flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <Flame className="w-3 h-3" />
                <span>Keep it up!</span>
              </div>
              <span>{studyStreak >= 7 ? '🔥 Hot streak!' : 'Building momentum'}</span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="group overflow-hidden border-0 bg-gradient-to-br from-purple-500 via-indigo-600 to-blue-600 text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105 relative">
        <CardContent className="p-8 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          <div className="absolute top-4 right-4 opacity-20">
            <Clock className="h-12 w-12" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
                <Clock className="h-6 w-6" />
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold mb-1 tabular-nums">{animatedTime}<span className="text-2xl opacity-70">h</span></div>
                <div className="text-sm opacity-90">Study Time</div>
              </div>
            </div>
            <div className="text-xs opacity-75 flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <BookOpen className="w-3 h-3" />
                <span>{averageTimePerDay.toFixed(1)}h/day avg</span>
              </div>
              <span>{totalStudyTime >= 50 ? '🎓 Dedicated!' : 'Keep learning'}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
