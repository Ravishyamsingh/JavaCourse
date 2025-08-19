import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookOpen, 
  Code, 
  Trophy, 
  Calendar, 
  Clock, 
  ArrowLeft,
  Target,
  CheckCircle2,
  Award,
  TrendingUp,
  User,
  Flame,
  Star,
  Brain,
  Zap
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '@/contexts/ProgressContext';

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
            {/* Beautiful Stats Cards */}
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
                        <div className="text-3xl font-bold mb-1">{completedLessons.length}/{totalLessons}</div>
                        <div className="text-sm opacity-90">Lessons Completed</div>
                      </div>
                    </div>
                    <div className="text-xs opacity-75">
                      {((completedLessons.length / totalLessons) * 100).toFixed(1)}% of total lessons
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

            {/* Beautiful Weekly Activity Chart */}
            <Card className="overflow-hidden border-0 bg-white/70 backdrop-blur-lg shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100/50">
                <CardTitle className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-800">Weekly Activity</div>
                    <div className="text-sm text-gray-600">Your learning activity this week</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="flex items-end justify-between h-48">
                  {weeklyProgress.map((day, index) => (
                    <div key={index} className="flex flex-col items-center space-y-3 group">
                      <div 
                        className="bg-gradient-to-t from-blue-500 via-blue-400 to-blue-300 rounded-t-lg min-w-[40px] transition-all duration-500 hover:from-purple-500 hover:via-purple-400 hover:to-purple-300 shadow-lg hover:shadow-purple-500/25 cursor-pointer group-hover:scale-110"
                        style={{ height: `${(day.lessons / 5) * 160}px` }}
                      ></div>
                      <div className="text-center">
                        <div className="text-xs font-medium text-gray-600 mb-1">{day.day}</div>
                        <div className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {day.lessons} lessons
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Beautiful Recent Achievements */}
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
                  {achievements.filter(a => a.unlocked).slice(0, 3).map((achievement, index) => (
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
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            {/* Module Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Module Progress</CardTitle>
                <CardDescription>Track your progress across all course modules</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: 'Java Fundamentals', moduleId: 'module-1', totalLessons: 5 },
                    { name: 'Control Structures', moduleId: 'module-2', totalLessons: 5 },
                    { name: 'Object-Oriented Programming', moduleId: 'module-3', totalLessons: 7 },
                    { name: 'Arrays and Strings', moduleId: 'module-4', totalLessons: 5 },
                    { name: 'Collections Framework', moduleId: 'module-5', totalLessons: 5 },
                    { name: 'Exception Handling', moduleId: 'module-6', totalLessons: 4 },
                    { name: 'File I/O Operations', moduleId: 'module-7', totalLessons: 4 },
                    { name: 'Multithreading', moduleId: 'module-8', totalLessons: 4 },
                    { name: 'Database Connectivity (JDBC)', moduleId: 'module-9', totalLessons: 4 },
                    { name: 'GUI Development with Swing', moduleId: 'module-10', totalLessons: 5 },
                    { name: 'Web Development Basics', moduleId: 'module-11', totalLessons: 4 },
                    { name: 'Spring Framework Introduction', moduleId: 'module-12', totalLessons: 5 },
                    { name: 'Advanced Topics', moduleId: 'module-13', totalLessons: 4 },
                    { name: 'Testing with JUnit', moduleId: 'module-14', totalLessons: 4 },
                    { name: 'Final Projects', moduleId: 'module-15', totalLessons: 4 }
                  ].map((module, index) => {
                    const moduleProgress = getModuleProgress(module.moduleId);
                    const completedLessonsInModule = Math.round((moduleProgress / 100) * module.totalLessons);
                    return (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{module.name}</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-600">
                              {completedLessonsInModule}/{module.totalLessons}
                            </span>
                            <span className="text-sm font-medium">{moduleProgress}%</span>
                          </div>
                        </div>
                        <Progress value={moduleProgress} className="h-2" />
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
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
          </TabsContent>

          <TabsContent value="certificate" className="space-y-6">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center space-x-2">
                  <Award className="h-6 w-6 text-yellow-600" />
                  <span>Course Completion Certificate</span>
                </CardTitle>
                <CardDescription>
                  Complete all modules to earn your Java Mastery Certificate
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="max-w-md mx-auto">
                  <Progress value={progressPercentage} className="h-3" />
                  <p className="text-sm text-gray-600 mt-2">
                    {Math.round(progressPercentage)}% Complete ({completedLessons.length}/{totalLessons} lessons)
                  </p>
                </div>

                {canGetCertificate ? (
                  <div className="space-y-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto mb-2" />
                      <h3 className="text-lg font-bold text-green-800">Congratulations!</h3>
                      <p className="text-green-700">You've completed the Java Mastery Course!</p>
                    </div>
                    <Button 
                      onClick={() => navigate('/certificate')}
                      className="bg-yellow-600 hover:bg-yellow-700"
                      size="lg"
                    >
                      <Award className="h-5 w-5 mr-2" />
                      Download Certificate
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <Target className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                      <h3 className="text-lg font-bold text-blue-800">Keep Going!</h3>
                      <p className="text-blue-700">
                        Complete {totalLessons - completedLessons.length} more lessons to earn your certificate
                      </p>
                    </div>
                    <Button 
                      onClick={() => navigate('/course')}
                      variant="outline"
                      size="lg"
                    >
                      Continue Learning
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
