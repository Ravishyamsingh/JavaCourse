import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookOpen, 
  Code, 
  Clock, 
  ArrowLeft,
  Users,
  Award,
  Brain,
  Zap,
  Star,
  Globe,
  MonitorPlay,
  Target
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '@/contexts/ProgressContext';
import { courseModules, getTotalLessonsCount } from '@/data/courseStructure';
import ModuleCard from '@/components/common/ModuleCard';

export default function CourseContent() {
  const navigate = useNavigate();
  const { completedLessons, getProgressPercentage } = useProgress();

  const totalLessons = getTotalLessonsCount();
  const progressPercentage = getProgressPercentage();

  const handleLessonClick = (lessonId: string) => {
    navigate(`/lesson/${lessonId}`);
  };

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
                  Java Mastery Course
                </h1>
                <p className="text-sm text-gray-600 mt-1">Complete Java programming course from basics to advanced</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3 bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-2 rounded-full">
                <div className="text-sm font-medium text-gray-700">
                  Progress: {completedLessons.length}/{totalLessons} lessons
                </div>
                <div className="w-24">
                  <Progress value={progressPercentage} className="h-2" />
                </div>
                <div className="text-sm font-bold text-green-600">
                  {Math.round(progressPercentage)}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-10">
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 bg-white/60 backdrop-blur-sm p-1 rounded-xl shadow-lg border-0">
            <TabsTrigger value="overview" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white rounded-lg transition-all duration-300">
              <Brain className="w-4 h-4 mr-2" />
              Course Overview
            </TabsTrigger>
            <TabsTrigger value="modules" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white rounded-lg transition-all duration-300">
              <BookOpen className="w-4 h-4 mr-2" />
              Course Modules
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            {/* Beautiful Course Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="group overflow-hidden border-0 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105">
                <CardContent className="p-8 text-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  <div className="relative z-10">
                    <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-90" />
                    <div className="text-3xl font-bold mb-2">{courseModules.length}</div>
                    <div className="text-sm opacity-90">Modules</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="group overflow-hidden border-0 bg-gradient-to-br from-emerald-500 via-green-600 to-teal-600 text-white shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 hover:scale-105">
                <CardContent className="p-8 text-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  <div className="relative z-10">
                    <MonitorPlay className="h-12 w-12 mx-auto mb-4 opacity-90" />
                    <div className="text-3xl font-bold mb-2">{totalLessons}</div>
                    <div className="text-sm opacity-90">Lessons</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="group overflow-hidden border-0 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 text-white shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 hover:scale-105">
                <CardContent className="p-8 text-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  <div className="relative z-10">
                    <Clock className="h-12 w-12 mx-auto mb-4 opacity-90" />
                    <div className="text-3xl font-bold mb-2">35+</div>
                    <div className="text-sm opacity-90">Hours</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="group overflow-hidden border-0 bg-gradient-to-br from-purple-500 via-indigo-600 to-blue-600 text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105">
                <CardContent className="p-8 text-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  <div className="relative z-10">
                    <Code className="h-12 w-12 mx-auto mb-4 opacity-90" />
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <div className="text-sm opacity-90">Exercises</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Beautiful Course Description */}
            <Card className="overflow-hidden border-0 bg-white/70 backdrop-blur-lg shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100/50">
                <CardTitle className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                    <Star className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-800">About This Course</div>
                    <div className="text-sm text-gray-600">Your complete guide to Java mastery</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  This comprehensive Java programming course is designed for students who want to master Java from the ground up. 
                  Whether you're a complete beginner or looking to strengthen your Java skills, this course provides everything you need.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg">
                        <Brain className="h-5 w-5 text-white" />
                      </div>
                      <h4 className="font-bold text-lg text-gray-800">What You'll Learn</h4>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <Zap className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Java syntax and fundamentals</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Zap className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Object-oriented programming principles</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Zap className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Data structures and collections</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Zap className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Exception handling and file I/O</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Zap className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Multithreading and concurrency</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Zap className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Database connectivity with JDBC</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Zap className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>GUI development with Swing</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Zap className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Advanced topics like generics and lambda expressions</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                      <h4 className="font-bold text-lg text-gray-800">Course Features</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                        <Globe className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-gray-800">Self-paced learning</div>
                          <div className="text-sm text-gray-600">Learn at your own speed</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                        <Code className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-gray-800">Hands-on coding exercises</div>
                          <div className="text-sm text-gray-600">Practice with real code examples</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                        <Target className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-gray-800">Real-world projects</div>
                          <div className="text-sm text-gray-600">Build applications you can showcase</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
                        <Award className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-gray-800">Certificate of completion</div>
                          <div className="text-sm text-gray-600">Earn recognition for your skills</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="modules" className="space-y-8">
            {courseModules.map((module, moduleIndex) => (
              <ModuleCard
                key={module.id}
                module={module}
                moduleIndex={moduleIndex}
                completedLessons={completedLessons}
                onLessonClick={handleLessonClick}
              />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
