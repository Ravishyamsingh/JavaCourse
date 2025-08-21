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
  Award
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '@/contexts/ProgressContext';

// Import new dashboard components
import StatsCards from '@/components/dashboard/StatsCards';
import WeeklyActivityChart from '@/components/dashboard/WeeklyActivityChart';
import RecentAchievements from '@/components/dashboard/RecentAchievements';
import ModuleProgress from '@/components/dashboard/ModuleProgress';
import AchievementsGrid from '@/components/dashboard/AchievementsGrid';
import CertificateSection from '@/components/dashboard/CertificateSection';

export default function Dashboard() {
  const navigate = useNavigate();
  const {
    completedLessons,
    getProgressPercentage,
    getCompletedCount,
    getTotalLessons,
    getModuleProgress,
    studyStreak,
    totalStudyTime
  } = useProgress();

  const totalLessons = getTotalLessons();
  const totalModules = 15; // Updated total modules
  const progressPercentage = getProgressPercentage();
  const completedModules = Math.floor(progressPercentage / (100 / totalModules));

  const weeklyProgress = [
    { day: 'Mon', lessons: 3 },
    { day: 'Tue', lessons: 2 },
    { day: 'Wed', lessons: 4 },
    { day: 'Thu', lessons: 1 },
    { day: 'Fri', lessons: 5 },
    { day: 'Sat', lessons: 3 },
    { day: 'Sun', lessons: 2 }
  ];

  const achievements = [
    { 
      id: 'first-lesson', 
      title: 'First Steps', 
      description: 'Completed your first lesson',
      icon: <BookOpen className="h-6 w-6" />,
      unlocked: true,
      date: '2024-01-15'
    },
    { 
      id: 'coding-master', 
      title: 'Coding Master', 
      description: 'Completed 10 coding exercises',
      icon: <Code className="h-6 w-6" />,
      unlocked: true,
      date: '2024-01-18'
    },
    { 
      id: 'week-streak', 
      title: 'Week Warrior', 
      description: 'Maintained 7-day study streak',
      icon: <Trophy className="h-6 w-6" />,
      unlocked: true,
      date: '2024-01-20'
    },
    { 
      id: 'oop-expert', 
      title: 'OOP Expert', 
      description: 'Mastered Object-Oriented Programming',
      icon: <Target className="h-6 w-6" />,
      unlocked: false,
      date: null
    }
  ];

  const canGetCertificate = progressPercentage >= 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      {/* Beautiful Header with Glass Effect */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/')}
                className="hover:bg-blue-50/80 transition-all duration-300"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Learning Dashboard
                </h1>
                <p className="text-sm text-gray-600 mt-1">Track your Java mastery journey</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 rounded-full">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">Welcome back, Student!</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-10">
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-white/60 backdrop-blur-sm p-1 rounded-xl shadow-lg border-0">
            <TabsTrigger value="overview" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white rounded-lg transition-all duration-300">
              <Brain className="w-4 h-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="progress" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white rounded-lg transition-all duration-300">
              <TrendingUp className="w-4 h-4 mr-2" />
              Progress
            </TabsTrigger>
            <TabsTrigger value="achievements" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-orange-500 data-[state=active]:text-white rounded-lg transition-all duration-300">
              <Trophy className="w-4 h-4 mr-2" />
              Achievements
            </TabsTrigger>
            <TabsTrigger value="certificate" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white rounded-lg transition-all duration-300">
              <Award className="w-4 h-4 mr-2" />
              Certificate
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            {/* Stats Cards */}
            <StatsCards
              progressPercentage={progressPercentage}
              completedLessonsCount={completedLessons.length}
              totalLessons={totalLessons}
              studyStreak={studyStreak}
              totalStudyTime={totalStudyTime}
            />

            {/* Weekly Activity Chart */}
            <WeeklyActivityChart weeklyProgress={weeklyProgress} />

            {/* Recent Achievements */}
            <RecentAchievements achievements={achievements} />
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <ModuleProgress getModuleProgress={getModuleProgress} />
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <AchievementsGrid achievements={achievements} />
          </TabsContent>

          <TabsContent value="certificate" className="space-y-6">
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
