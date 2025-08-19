import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookOpen, 
  Code, 
  CheckCircle2, 
  Clock, 
  ArrowLeft,
  FileText,
  Lightbulb,
  Target,
  Play,
  Users,
  Award,
  Brain,
  Zap,
  Star,
  Globe,
  MonitorPlay,
  Trophy
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '@/contexts/ProgressContext';

export default function CourseContent() {
  const navigate = useNavigate();
  const { completedLessons, isLessonCompleted, getTotalLessons, getProgressPercentage } = useProgress();

  const modules = [
    {
      id: 'module-1',
      title: 'Java Fundamentals',
      description: 'Learn the basics of Java programming',
      duration: '2-3 hours',
      lessons: [
        { id: 'lesson-1-1', title: 'Introduction to Java', duration: '15 min', type: 'lesson' },
        { id: 'lesson-1-2', title: 'Setting up Development Environment', duration: '20 min', type: 'tutorial' },
        { id: 'lesson-1-3', title: 'Your First Java Program', duration: '25 min', type: 'coding' },
        { id: 'lesson-1-4', title: 'Variables and Data Types', duration: '30 min', type: 'lesson' },
        { id: 'lesson-1-5', title: 'Operators in Java', duration: '25 min', type: 'lesson' }
      ]
    },
    {
      id: 'module-2',
      title: 'Control Structures',
      description: 'Master decision making and loops',
      duration: '2-3 hours',
      lessons: [
        { id: 'lesson-2-1', title: 'Conditional Statements (if, else)', duration: '30 min', type: 'lesson' },
        { id: 'lesson-2-2', title: 'Switch Statements', duration: '20 min', type: 'lesson' },
        { id: 'lesson-2-3', title: 'For Loops', duration: '25 min', type: 'coding' },
        { id: 'lesson-2-4', title: 'While and Do-While Loops', duration: '25 min', type: 'coding' },
        { id: 'lesson-2-5', title: 'Break and Continue', duration: '15 min', type: 'lesson' }
      ]
    },
    {
      id: 'module-3',
      title: 'Object-Oriented Programming',
      description: 'Learn OOP concepts and principles',
      duration: '4-5 hours',
      lessons: [
        { id: 'lesson-3-1', title: 'Introduction to OOP', duration: '20 min', type: 'lesson' },
        { id: 'lesson-3-2', title: 'Classes and Objects', duration: '35 min', type: 'coding' },
        { id: 'lesson-3-3', title: 'Constructors and Methods', duration: '40 min', type: 'coding' },
        { id: 'lesson-3-4', title: 'Inheritance', duration: '45 min', type: 'lesson' },
        { id: 'lesson-3-5', title: 'Polymorphism', duration: '35 min', type: 'lesson' },
        { id: 'lesson-3-6', title: 'Encapsulation', duration: '30 min', type: 'lesson' },
        { id: 'lesson-3-7', title: 'Abstract Classes and Interfaces', duration: '40 min', type: 'coding' }
      ]
    },
    {
      id: 'module-4',
      title: 'Arrays and Strings',
      description: 'Working with arrays and string manipulation',
      duration: '2-3 hours',
      lessons: [
        { id: 'lesson-4-1', title: 'Introduction to Arrays', duration: '25 min', type: 'lesson' },
        { id: 'lesson-4-2', title: 'Multidimensional Arrays', duration: '30 min', type: 'coding' },
        { id: 'lesson-4-3', title: 'String Class and Methods', duration: '35 min', type: 'lesson' },
        { id: 'lesson-4-4', title: 'StringBuilder and StringBuffer', duration: '25 min', type: 'lesson' },
        { id: 'lesson-4-5', title: 'Array and String Algorithms', duration: '40 min', type: 'coding' }
      ]
    },
    {
      id: 'module-5',
      title: 'Collections Framework',
      description: 'Master Java collections and data structures',
      duration: '3-4 hours',
      lessons: [
        { id: 'lesson-5-1', title: 'Introduction to Collections', duration: '20 min', type: 'lesson' },
        { id: 'lesson-5-2', title: 'ArrayList and LinkedList', duration: '35 min', type: 'coding' },
        { id: 'lesson-5-3', title: 'HashMap and HashSet', duration: '35 min', type: 'coding' },
        { id: 'lesson-5-4', title: 'TreeMap and TreeSet', duration: '30 min', type: 'lesson' },
        { id: 'lesson-5-5', title: 'Iterators and Enhanced For Loop', duration: '25 min', type: 'lesson' }
      ]
    },
    {
      id: 'module-6',
      title: 'Exception Handling',
      description: 'Handle errors gracefully in your programs',
      duration: '2 hours',
      lessons: [
        { id: 'lesson-6-1', title: 'Understanding Exceptions', duration: '25 min', type: 'lesson' },
        { id: 'lesson-6-2', title: 'Try-Catch Blocks', duration: '30 min', type: 'coding' },
        { id: 'lesson-6-3', title: 'Finally Block and Resource Management', duration: '25 min', type: 'lesson' },
        { id: 'lesson-6-4', title: 'Custom Exceptions', duration: '20 min', type: 'coding' }
      ]
    },
    {
      id: 'module-7',
      title: 'File I/O Operations',
      description: 'Read from and write to files',
      duration: '2-3 hours',
      lessons: [
        { id: 'lesson-7-1', title: 'File and Directory Operations', duration: '25 min', type: 'lesson' },
        { id: 'lesson-7-2', title: 'Reading Files', duration: '30 min', type: 'coding' },
        { id: 'lesson-7-3', title: 'Writing Files', duration: '30 min', type: 'coding' },
        { id: 'lesson-7-4', title: 'Serialization', duration: '25 min', type: 'lesson' }
      ]
    },
    {
      id: 'module-8',
      title: 'Multithreading',
      description: 'Learn concurrent programming in Java',
      duration: '3-4 hours',
      lessons: [
        { id: 'lesson-8-1', title: 'Introduction to Threads', duration: '30 min', type: 'lesson' },
        { id: 'lesson-8-2', title: 'Creating and Running Threads', duration: '35 min', type: 'coding' },
        { id: 'lesson-8-3', title: 'Thread Synchronization', duration: '40 min', type: 'lesson' },
        { id: 'lesson-8-4', title: 'Thread Communication', duration: '30 min', type: 'coding' }
      ]
    },
    {
      id: 'module-9',
      title: 'Database Connectivity (JDBC)',
      description: 'Connect Java applications to databases',
      duration: '3 hours',
      lessons: [
        { id: 'lesson-9-1', title: 'Introduction to JDBC', duration: '20 min', type: 'lesson' },
        { id: 'lesson-9-2', title: 'Connecting to Database', duration: '35 min', type: 'coding' },
        { id: 'lesson-9-3', title: 'Executing SQL Queries', duration: '40 min', type: 'coding' },
        { id: 'lesson-9-4', title: 'Prepared Statements', duration: '30 min', type: 'lesson' }
      ]
    },
    {
      id: 'module-10',
      title: 'GUI Development with Swing',
      description: 'Build desktop applications with graphical interfaces',
      duration: '4 hours',
      lessons: [
        { id: 'lesson-10-1', title: 'Introduction to Swing', duration: '25 min', type: 'lesson' },
        { id: 'lesson-10-2', title: 'Creating Windows and Frames', duration: '35 min', type: 'coding' },
        { id: 'lesson-10-3', title: 'Adding Components (Buttons, Labels, Text Fields)', duration: '40 min', type: 'coding' },
        { id: 'lesson-10-4', title: 'Event Handling', duration: '45 min', type: 'coding' },
        { id: 'lesson-10-5', title: 'Layout Managers', duration: '35 min', type: 'lesson' }
      ]
    },
    {
      id: 'module-11',
      title: 'Advanced Topics',
      description: 'Explore advanced Java concepts',
      duration: '3-4 hours',
      lessons: [
        { id: 'lesson-11-1', title: 'Generics', duration: '35 min', type: 'lesson' },
        { id: 'lesson-11-2', title: 'Lambda Expressions', duration: '40 min', type: 'coding' },
        { id: 'lesson-11-3', title: 'Stream API', duration: '45 min', type: 'coding' },
        { id: 'lesson-11-4', title: 'Annotations', duration: '25 min', type: 'lesson' }
      ]
    },
    {
      id: 'module-12',
      title: 'Final Projects',
      description: 'Build real-world applications',
      duration: '5-6 hours',
      lessons: [
        { id: 'lesson-12-1', title: 'Console-based Calculator', duration: '90 min', type: 'project' },
        { id: 'lesson-12-2', title: 'Student Management System', duration: '120 min', type: 'project' },
        { id: 'lesson-12-3', title: 'Simple Banking Application', duration: '150 min', type: 'project' },
        { id: 'lesson-12-4', title: 'Course Wrap-up and Next Steps', duration: '30 min', type: 'lesson' }
      ]
    }
  ];

  const getIconForType = (type: string) => {
    switch (type) {
      case 'coding': return <Code className="h-4 w-4" />;
      case 'tutorial': return <Lightbulb className="h-4 w-4" />;
      case 'project': return <Target className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'coding': return 'bg-green-100 text-green-800';
      case 'tutorial': return 'bg-yellow-100 text-yellow-800';
      case 'project': return 'bg-purple-100 text-purple-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  const totalLessons = getTotalLessons();
  const progressPercentage = getProgressPercentage();

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
                    <div className="text-3xl font-bold mb-2">{modules.length}</div>
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
            {modules.map((module, moduleIndex) => (
              <Card key={module.id} className="group overflow-hidden border-0 bg-white/70 backdrop-blur-lg shadow-2xl hover:shadow-xl transition-all duration-500">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white shadow-lg">
                        <span className="text-lg font-bold">
                          {moduleIndex + 1}
                        </span>
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold text-gray-800">
                          {module.title}
                        </CardTitle>
                        <CardDescription className="mt-1 text-gray-600">
                          {module.description} • {module.duration}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge className="bg-gradient-to-r from-emerald-500 to-green-500 text-white border-0 text-sm px-3 py-1">
                        {module.lessons.length} lessons
                      </Badge>
                      <div className="text-right text-sm text-gray-600">
                        <div>{module.lessons.filter(l => completedLessons.includes(l.id)).length}/{module.lessons.length} completed</div>
                        <div className="w-16 mt-1">
                          <Progress 
                            value={(module.lessons.filter(l => completedLessons.includes(l.id)).length / module.lessons.length) * 100} 
                            className="h-1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-gray-100/50">
                    {module.lessons.map((lesson, lessonIndex) => {
                      const isCompleted = completedLessons.includes(lesson.id);
                      return (
                        <div 
                          key={lesson.id}
                          className="group/lesson p-5 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-indigo-50/50 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                          onClick={() => navigate(`/lesson/${lesson.id}`)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="relative">
                                <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${
                                  isCompleted 
                                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg' 
                                    : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 group-hover/lesson:from-blue-100 group-hover/lesson:to-indigo-100 group-hover/lesson:text-blue-600'
                                } transition-all duration-300`}>
                                  {isCompleted ? (
                                    <CheckCircle2 className="h-6 w-6" />
                                  ) : (
                                    <span className="text-lg font-bold">
                                      {lessonIndex + 1}
                                    </span>
                                  )}
                                </div>
                                {isCompleted && (
                                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                                    <Star className="w-2.5 h-2.5 text-yellow-700" />
                                  </div>
                                )}
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-gray-900 mb-1 group-hover/lesson:text-blue-600 transition-colors">
                                  {lesson.title}
                                </h4>
                                <div className="flex items-center space-x-3">
                                  <Badge className={`text-xs ${getBadgeColor(lesson.type)} border-0`}>
                                    {getIconForType(lesson.type)}
                                    <span className="ml-1 capitalize">{lesson.type}</span>
                                  </Badge>
                                  <span className="text-sm text-gray-500 flex items-center">
                                    <Clock className="h-3 w-3 mr-1" />
                                    {lesson.duration}
                                  </span>
                                  {isCompleted && (
                                    <Badge className="bg-green-100 text-green-700 text-xs border-0">
                                      <Trophy className="w-3 h-3 mr-1" />
                                      Completed
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            </div>
                            <Button 
                              className={`${
                                isCompleted 
                                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600' 
                                  : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
                              } text-white border-0 shadow-lg group-hover/lesson:shadow-xl transition-all duration-300`}
                              size="sm"
                            >
                              <Play className="w-4 h-4 mr-2" />
                              {isCompleted ? 'Review' : 'Start'}
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
