import { useMemo, type ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  BookOpen,
  Code,
  Trophy,
  ArrowLeft,
  Target,
  CheckCircle2,
  TrendingUp,
  User,
  Flame,
  Star,
  Brain,
  Zap,
  Clock,
  Award,
  Calendar,
  BarChart3,
  Settings,
  Bell
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '@/contexts/ProgressContext';
import { useAchievements, Achievement as AchievementType } from '@/contexts/AchievementContext';
import UserProfile from '@/components/UserProfile';

// Import new dashboard components
import StatsCards from '@/components/dashboard/StatsCards';
import MotivationWidget from '@/components/dashboard/MotivationWidget';
import WeeklyActivityChart from '@/components/dashboard/WeeklyActivityChart';
import RecentAchievements from '@/components/dashboard/RecentAchievements';
import ModuleProgress from '@/components/dashboard/ModuleProgress';
import AchievementsGrid from '@/components/dashboard/AchievementsGrid';
import CertificateSection from '@/components/dashboard/CertificateSection';
import LearningRecommendations from '@/components/dashboard/LearningRecommendations';
import QuizLeaderboard from '@/components/dashboard/QuizLeaderboard';
import QuizHistory from '@/components/dashboard/QuizHistory';

type WeeklyChartEntry = {
  day: string;
  lessonsCompleted: number;
  studyHours: number;
  quizAttempts: number;
  activityModes: string[];
};

type AchievementDisplay = Omit<AchievementType, 'icon'> & { icon: ReactNode };
const generateEmptyWeeklyChartData = (): WeeklyChartEntry[] => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const result: WeeklyChartEntry[] = [];

  for (let i = 6; i >= 0; i -= 1) {
    const currentDate = new Date(today);
    currentDate.setDate(today.getDate() - i);
    result.push({
      day: currentDate.toLocaleDateString(undefined, { weekday: 'short' }),
      lessonsCompleted: 0,
      studyHours: 0,
      quizAttempts: 0,
      activityModes: ['Planning']
    });
  }

  return result;
};

export default function Dashboard() {
  const navigate = useNavigate();
  const {
    completedLessons,
    getProgressPercentage,
    getCompletedCount,
    getTotalLessons,
    getModuleProgress,
    studyStreak,
    totalStudyTime,
    weeklyActivity,
    quizHistory,
    lastActivityAt,
    totalQuizAttempts
  } = useProgress();
  
  const { achievements } = useAchievements();

  const totalLessons = getTotalLessons();
  const totalModules = 20; // Updated to reflect all 20 modules
  const progressPercentage = getProgressPercentage();
  const completedModules = Math.floor(progressPercentage / (100 / totalModules));
  const canGetCertificate = progressPercentage >= 100;

  const weeklyChartData = useMemo<WeeklyChartEntry[]>(() => {
    if (!Array.isArray(weeklyActivity) || weeklyActivity.length === 0) {
      return generateEmptyWeeklyChartData();
    }

    const mapped = weeklyActivity.map<WeeklyChartEntry>((entry) => {
      const parsedDate = new Date(entry.date);
      const validDate = !Number.isNaN(parsedDate.getTime());
      const lessonsCompleted = Number.isFinite(entry.lessons) ? entry.lessons : 0;
      const studyHours = Number.isFinite(entry.studyTime)
        ? parseFloat(entry.studyTime.toFixed(2))
        : 0;
      const quizAttempts = Number.isFinite(entry.quizAttempts) ? entry.quizAttempts : 0;
      const scoreEarned = Number.isFinite(entry.scoreEarned) ? entry.scoreEarned : 0;

      const modes = new Set<string>();
      if (lessonsCompleted > 0) modes.add('Lessons');
      if (quizAttempts > 0) modes.add('Quizzes');
      if (studyHours >= 1.5) modes.add('Deep Study');
      if (scoreEarned > 0) modes.add('Assessments');
      if (modes.size === 0) modes.add('Planning');

      return {
        day: validDate ? parsedDate.toLocaleDateString(undefined, { weekday: 'short' }) : '—',
        lessonsCompleted,
        studyHours,
        quizAttempts,
        activityModes: Array.from(modes)
      };
    });

    return mapped.length ? mapped : generateEmptyWeeklyChartData();
  }, [weeklyActivity]);

  const totalWeeklyLessons = weeklyChartData.reduce((sum, entry) => sum + entry.lessonsCompleted, 0);
  const totalWeeklyStudyHours = weeklyChartData.reduce((sum, entry) => sum + entry.studyHours, 0);
  const totalWeeklyQuizAttempts = weeklyChartData.reduce((sum, entry) => sum + entry.quizAttempts, 0);
  const averageLessons = weeklyChartData.length ? totalWeeklyLessons / weeklyChartData.length : 0;
  const averageStudyHours = weeklyChartData.length ? totalWeeklyStudyHours / weeklyChartData.length : 0;

  const fallbackWeeklyEntry: WeeklyChartEntry = {
    day: '—',
    lessonsCompleted: 0,
    studyHours: 0,
    quizAttempts: 0,
    activityModes: ['Planning']
  };

  const peakLessonsEntry = weeklyChartData.length
    ? weeklyChartData.reduce<WeeklyChartEntry>((max, entry) =>
        entry.lessonsCompleted > max.lessonsCompleted ? entry : max,
        weeklyChartData[0]
      )
    : fallbackWeeklyEntry;

  const peakStudyEntry = weeklyChartData.length
    ? weeklyChartData.reduce<WeeklyChartEntry>((max, entry) =>
        entry.studyHours > max.studyHours ? entry : max,
        weeklyChartData[0]
      )
    : fallbackWeeklyEntry;

  let minLessonsCount = weeklyChartData.length ? weeklyChartData[0].lessonsCompleted : 0;
  let maxLessonsCount = weeklyChartData.length ? weeklyChartData[0].lessonsCompleted : 0;
  weeklyChartData.forEach((entry) => {
    if (entry.lessonsCompleted < minLessonsCount) minLessonsCount = entry.lessonsCompleted;
    if (entry.lessonsCompleted > maxLessonsCount) maxLessonsCount = entry.lessonsCompleted;
  });
  const consistencyScore = maxLessonsCount > 0
    ? Math.max(0, Math.round((1 - (maxLessonsCount - minLessonsCount) / maxLessonsCount) * 100))
    : 100;

  const achievementsForDisplay = useMemo<AchievementDisplay[]>(() =>
    achievements.map((achievement) => ({
      ...achievement,
      icon: typeof achievement.icon === 'string'
        ? <span className="text-xl" role="img" aria-hidden="true">{achievement.icon}</span>
        : achievement.icon
    })),
  [achievements]);

  const lockedAchievementsCount = achievements.filter(achievement => !achievement.unlocked).length;
  const achievementsMessage = lockedAchievementsCount > 0
    ? `${lockedAchievementsCount} achievements to unlock`
    : 'All achievements unlocked';

  const lastActivityLabel = useMemo(() => {
    if (!lastActivityAt) return 'No recent activity yet';
    const parsed = new Date(lastActivityAt);
    if (Number.isNaN(parsed.getTime())) return 'No recent activity yet';

    const diffMs = Date.now() - parsed.getTime();
    if (diffMs < 0) return parsed.toLocaleString();
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    if (diffMinutes < 1) return 'Just now';
    if (diffMinutes < 60) return `${diffMinutes} min ago`;
    const diffHours = Math.floor(diffMinutes / 60);
    if (diffHours < 24) return `${diffHours} hr${diffHours > 1 ? 's' : ''} ago`;
    const diffDays = Math.floor(diffHours / 24);
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return parsed.toLocaleDateString();
  }, [lastActivityAt]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      {/* Beautiful Header with Glass Effect */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-3 sm:px-6 sm:py-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center space-x-4 sm:space-x-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/')}
                className="hover:bg-blue-50/80 transition-all duration-300"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Back to Home</span>
              </Button>
              <div>
                <button
                  onClick={() => navigate('/')}
                  className="text-left hover:opacity-80 transition-opacity duration-300 group"
                >
                  <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:via-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                    Java Mastery Course
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">Track your Java mastery journey</p>
                </button>
              </div>
            </div>
            <UserProfile />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 sm:px-6 sm:py-10">
        {/* Quick Actions Bar */}
        <div className="mb-6 sm:mb-8">
          <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-xl">
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>Last activity: {lastActivityLabel}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                    <Bell className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>{achievementsMessage}</span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <Button variant="outline" size="sm" className="text-xs sm:text-sm hover:bg-blue-50 px-2 py-1 sm:px-4 sm:py-2">
                    <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">Analytics</span>
                    <span className="sm:hidden">Stats</span>
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs sm:text-sm hover:bg-gray-50 px-2 py-1 sm:px-4 sm:py-2">
                    <Settings className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">Settings</span>
                    <span className="sm:hidden">Prefs</span>
                  </Button>
                  <Button
                    onClick={() => navigate('/quiz-modules')}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-xs sm:text-sm px-2 py-1 sm:px-4 sm:py-2"
                    size="sm"
                  >
                    <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">Take Quiz</span>
                    <span className="sm:hidden">Quiz</span>
                  </Button>
                  <Button
                    onClick={() => navigate('/course')}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-xs sm:text-sm px-2 py-1 sm:px-4 sm:py-2"
                    size="sm"
                  >
                    <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">Continue Learning</span>
                    <span className="sm:hidden">Learn</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6 sm:space-y-8">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-5 bg-white/60 backdrop-blur-sm p-1 rounded-xl shadow-lg border-0">
            <TabsTrigger value="overview" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white rounded-lg transition-all duration-300 text-xs sm:text-sm">
              <Brain className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Overview</span>
              <span className="sm:hidden">Home</span>
            </TabsTrigger>
            <TabsTrigger value="progress" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white rounded-lg transition-all duration-300 text-xs sm:text-sm">
              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Progress
            </TabsTrigger>
            <TabsTrigger value="achievements" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-orange-500 data-[state=active]:text-white rounded-lg transition-all duration-300 text-xs sm:text-sm hidden sm:flex">
              <Trophy className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Achievements
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white rounded-lg transition-all duration-300 text-xs sm:text-sm">
              <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Analytics</span>
              <span className="sm:hidden">Stats</span>
            </TabsTrigger>
            <TabsTrigger value="certificate" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white rounded-lg transition-all duration-300 text-xs sm:text-sm">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Certificate
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 sm:space-y-8">
            {/* Motivation Widget */}
            <MotivationWidget />
            {/* Stats Cards */}
            <StatsCards
              progressPercentage={progressPercentage}
              completedLessonsCount={completedLessons.length}
              totalLessons={totalLessons}
              studyStreak={studyStreak}
              totalStudyTime={totalStudyTime}
            />

            {/* Learning Recommendations */}
            <LearningRecommendations
              completedLessons={completedLessons}
              getModuleProgress={getModuleProgress}
              studyStreak={studyStreak}
              totalStudyTime={totalStudyTime}
            />

            {/* Weekly Activity Chart and Quiz History */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <WeeklyActivityChart weeklyProgress={weeklyChartData} />
              <QuizHistory history={quizHistory} totalQuizAttempts={totalQuizAttempts} />
            </div>

            {/* Recent Achievements */}
            <RecentAchievements achievements={achievementsForDisplay} />
          </TabsContent>

          <TabsContent value="progress" className="space-y-4 sm:space-y-6">
            <ModuleProgress getModuleProgress={getModuleProgress} />
          </TabsContent>

          <TabsContent value="achievements" className="space-y-4 sm:space-y-6">
              <AchievementsGrid achievements={achievementsForDisplay} />
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4 sm:space-y-6">
            {/* Learning Analytics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                    <span className="text-sm sm:text-base">Learning Velocity</span>
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm">Your learning pace over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">Lessons per week</span>
                      <span className="font-bold text-blue-600 text-sm sm:text-base">
                        {totalWeeklyLessons} lessons
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">Average study time</span>
                      <span className="font-bold text-green-600 text-sm sm:text-base">
                        {averageStudyHours.toFixed(1)}h/day
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">Consistency score</span>
                      <span className="font-bold text-indigo-600 text-sm sm:text-base">
                        {consistencyScore}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">Quiz attempts this week</span>
                      <span className="font-bold text-pink-600 text-sm sm:text-base">
                        {totalWeeklyQuizAttempts}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">Completion rate</span>
                      <span className="font-bold text-purple-600 text-sm sm:text-base">{Math.round(progressPercentage)}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                    <span className="text-sm sm:text-base">Learning Goals</span>
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm">Track your learning objectives</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-1 sm:mb-2">
                        <span className="text-xs sm:text-sm font-medium">Complete Java Fundamentals</span>
                        <span className="text-xs sm:text-sm text-gray-600">{getModuleProgress('module-1')}%</span>
                      </div>
                      <Progress value={getModuleProgress('module-1')} className="h-1.5 sm:h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1 sm:mb-2">
                        <span className="text-xs sm:text-sm font-medium">Master OOP Concepts</span>
                        <span className="text-xs sm:text-sm text-gray-600">{getModuleProgress('module-3')}%</span>
                      </div>
                      <Progress value={getModuleProgress('module-3')} className="h-1.5 sm:h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1 sm:mb-2">
                        <span className="text-xs sm:text-sm font-medium">Learn Web Development</span>
                        <span className="text-xs sm:text-sm text-gray-600">{getModuleProgress('module-16')}%</span>
                      </div>
                      <Progress value={getModuleProgress('module-16')} className="h-1.5 sm:h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Study Patterns and Quiz Leaderboard */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-600" />
                    <span className="text-sm sm:text-base">Study Patterns & Insights</span>
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm">Understand your learning habits</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-3 sm:gap-6">
                    <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                      <div className="text-lg sm:text-2xl font-bold text-blue-600 mb-1 sm:mb-2">
                        {peakLessonsEntry.lessonsCompleted}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">Peak Daily Lessons</div>
                      <div className="text-[0.6rem] sm:text-xs text-gray-500 mt-1">
                        {peakLessonsEntry.day}
                      </div>
                        <div className="text-[0.6rem] sm:text-xs text-gray-500 mt-1">
                          Longest session: {peakStudyEntry.studyHours.toFixed(1)}h
                        </div>
                    </div>
                    <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                      <div className="text-lg sm:text-2xl font-bold text-green-600 mb-1 sm:mb-2">
                        {studyStreak}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">Current Streak</div>
                      <div className="text-[0.6rem] sm:text-xs text-gray-500 mt-1">Keep it up!</div>
                    </div>
                    <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                      <div className="text-lg sm:text-2xl font-bold text-purple-600 mb-1 sm:mb-2">
                        {achievements.filter(a => a.unlocked).length}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">Achievements Earned</div>
                      <div className="text-[0.6rem] sm:text-xs text-gray-500 mt-1">
                        {achievements.length - achievements.filter(a => a.unlocked).length} remaining
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Quiz Leaderboard */}
              <QuizLeaderboard history={quizHistory} totalQuizAttempts={totalQuizAttempts} />
            </div>
          </TabsContent>

          <TabsContent value="certificate" className="space-y-4 sm:space-y-6">
            <CertificateSection
              progressPercentage={progressPercentage}
              completedLessonsCount={completedLessons.length}
              totalLessons={totalLessons}
              canGetCertificate={canGetCertificate}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
