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
  User
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const [completedLessons, setCompletedLessons] = useState<string[]>(['lesson-1-1', 'lesson-1-2', 'lesson-1-3', 'lesson-2-1', 'lesson-3-1', 'lesson-3-2']);
  const [studyStreak, setStudyStreak] = useState(7);
  const [totalStudyTime, setTotalStudyTime] = useState(24.5);

  const totalLessons = 78; // Updated total with new modules
  const totalModules = 15; // Updated total modules
  const progressPercentage = (completedLessons.length / totalLessons) * 100;
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/')}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
              <h1 className="text-2xl font-bold text-gray-900">Learning Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4 text-gray-600" />
                <span className="text-sm text-gray-600">Welcome back, Student!</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="certificate">Certificate</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Overall Progress</p>
                      <p className="text-3xl font-bold text-blue-600">{Math.round(progressPercentage)}%</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Lessons Completed</p>
                      <p className="text-3xl font-bold text-green-600">{completedLessons.length}/{totalLessons}</p>
                    </div>
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Study Streak</p>
                      <p className="text-3xl font-bold text-orange-600">{studyStreak} days</p>
                    </div>
                    <Calendar className="h-8 w-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Study Time</p>
                      <p className="text-3xl font-bold text-purple-600">{totalStudyTime}h</p>
                    </div>
                    <Clock className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Weekly Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Weekly Activity</CardTitle>
                <CardDescription>Your learning activity this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between h-40">
                  {weeklyProgress.map((day, index) => (
                    <div key={index} className="flex flex-col items-center space-y-2">
                      <div 
                        className="bg-blue-500 rounded-t-md min-w-[30px] transition-all hover:bg-blue-600"
                        style={{ height: `${(day.lessons / 5) * 120}px` }}
                      ></div>
                      <span className="text-xs text-gray-600">{day.day}</span>
                      <span className="text-xs font-medium">{day.lessons}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Achievements */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {achievements.filter(a => a.unlocked).slice(0, 3).map((achievement) => (
                    <div key={achievement.id} className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                      <div className="text-yellow-600">{achievement.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-medium">{achievement.title}</h4>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                      </div>
                      <Badge variant="secondary">{achievement.date}</Badge>
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
                    { name: 'Java Fundamentals', progress: 100, lessons: '5/5' },
                    { name: 'Control Structures', progress: 80, lessons: '4/5' },
                    { name: 'Object-Oriented Programming', progress: 60, lessons: '4/7' },
                    { name: 'Arrays and Strings', progress: 40, lessons: '2/5' },
                    { name: 'Collections Framework', progress: 20, lessons: '1/5' },
                    { name: 'Exception Handling', progress: 0, lessons: '0/4' },
                    { name: 'File I/O Operations', progress: 0, lessons: '0/4' },
                    { name: 'Multithreading', progress: 0, lessons: '0/4' },
                    { name: 'Database Connectivity (JDBC)', progress: 0, lessons: '0/4' },
                    { name: 'GUI Development with Swing', progress: 0, lessons: '0/5' },
                    { name: 'Web Development Basics', progress: 0, lessons: '0/4' },
                    { name: 'Spring Framework Introduction', progress: 0, lessons: '0/5' },
                    { name: 'Advanced Topics', progress: 0, lessons: '0/4' },
                    { name: 'Testing with JUnit', progress: 0, lessons: '0/4' },
                    { name: 'Final Projects', progress: 0, lessons: '0/4' }
                  ].map((module, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{module.name}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-600">{module.lessons}</span>
                          <span className="text-sm font-medium">{module.progress}%</span>
                        </div>
                      </div>
                      <Progress value={module.progress} className="h-2" />
                    </div>
                  ))}
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