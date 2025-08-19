import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookOpen, 
  Code, 
  PlayCircle, 
  CheckCircle2, 
  Clock, 
  ArrowLeft,
  FileText,
  Lightbulb,
  Target
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CourseContent() {
  const navigate = useNavigate();
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  const modules = [
    {
      id: 'module-1',
      title: 'Java Fundamentals',
      description: 'Learn the basics of Java programming',
      duration: '2-3 hours',
      lessons: [
        { id: 'lesson-1-1', title: 'Introduction to Java', duration: '15 min', type: 'video' },
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
      case 'video': return <PlayCircle className="h-4 w-4" />;
      case 'coding': return <Code className="h-4 w-4" />;
      case 'tutorial': return <Lightbulb className="h-4 w-4" />;
      case 'project': return <Target className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'video': return 'bg-red-100 text-red-800';
      case 'coding': return 'bg-green-100 text-green-800';
      case 'tutorial': return 'bg-yellow-100 text-yellow-800';
      case 'project': return 'bg-purple-100 text-purple-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  const totalLessons = modules.reduce((total, module) => total + module.lessons.length, 0);
  const progressPercentage = (completedLessons.length / totalLessons) * 100;

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
              <h1 className="text-2xl font-bold text-gray-900">Java Mastery Course</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Progress: {completedLessons.length}/{totalLessons} lessons
              </div>
              <Progress value={progressPercentage} className="w-32" />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="overview">Course Overview</TabsTrigger>
            <TabsTrigger value="modules">Course Modules</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Course Stats */}
            <div className="grid md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{modules.length}</div>
                  <div className="text-sm text-gray-600">Modules</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <FileText className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{totalLessons}</div>
                  <div className="text-sm text-gray-600">Lessons</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold">35+</div>
                  <div className="text-sm text-gray-600">Hours</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Code className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm text-gray-600">Exercises</div>
                </CardContent>
              </Card>
            </div>

            {/* Course Description */}
            <Card>
              <CardHeader>
                <CardTitle>About This Course</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  This comprehensive Java programming course is designed for students who want to master Java from the ground up. 
                  Whether you're a complete beginner or looking to strengthen your Java skills, this course provides everything you need.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">What You'll Learn:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Java syntax and fundamentals</li>
                      <li>• Object-oriented programming principles</li>
                      <li>• Data structures and collections</li>
                      <li>• Exception handling and file I/O</li>
                      <li>• Multithreading and concurrency</li>
                      <li>• Database connectivity with JDBC</li>
                      <li>• GUI development with Swing</li>
                      <li>• Advanced topics like generics and lambda expressions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Prerequisites:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Basic computer literacy</li>
                      <li>• No prior programming experience required</li>
                      <li>• Willingness to practice and learn</li>
                    </ul>
                    <h4 className="font-semibold mb-2 mt-4">Course Features:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Self-paced learning</li>
                      <li>• Hands-on coding exercises</li>
                      <li>• Real-world projects</li>
                      <li>• Downloadable resources</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="modules" className="space-y-6">
            {modules.map((module, moduleIndex) => (
              <Card key={module.id} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center space-x-2">
                        <span className="bg-blue-600 text-white text-sm px-2 py-1 rounded">
                          Module {moduleIndex + 1}
                        </span>
                        <span>{module.title}</span>
                      </CardTitle>
                      <CardDescription className="mt-2">
                        {module.description} • {module.duration}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">
                      {module.lessons.length} lessons
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {module.lessons.map((lesson, lessonIndex) => {
                      const isCompleted = completedLessons.includes(lesson.id);
                      return (
                        <div 
                          key={lesson.id}
                          className="p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                          onClick={() => navigate(`/lesson/${lesson.id}`)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100">
                                {isCompleted ? (
                                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                                ) : (
                                  <span className="text-sm font-medium text-gray-600">
                                    {lessonIndex + 1}
                                  </span>
                                )}
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-900">{lesson.title}</h4>
                                <div className="flex items-center space-x-2 mt-1">
                                  <Badge className={`text-xs ${getBadgeColor(lesson.type)}`}>
                                    {getIconForType(lesson.type)}
                                    <span className="ml-1 capitalize">{lesson.type}</span>
                                  </Badge>
                                  <span className="text-sm text-gray-500 flex items-center">
                                    <Clock className="h-3 w-3 mr-1" />
                                    {lesson.duration}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm">
                              Start
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