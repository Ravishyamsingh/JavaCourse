import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Code, 
  CheckCircle2, 
  Clock, 
  ArrowLeft,
  FileText,
  Lightbulb,
  Target,
  Search,
  Filter
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '@/contexts/ProgressContext';

export default function ContentTable() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const { completedLessons, isLessonCompleted } = useProgress();

  const allLessons = [
    // Module 1: Java Fundamentals
    { id: 'lesson-1-1', title: 'Introduction to Java', module: 'Java Fundamentals', type: 'lesson', duration: '15 min', difficulty: 'Beginner' },
    { id: 'lesson-1-2', title: 'Setting up Development Environment', module: 'Java Fundamentals', type: 'tutorial', duration: '20 min', difficulty: 'Beginner' },
    { id: 'lesson-1-3', title: 'Your First Java Program', module: 'Java Fundamentals', type: 'coding', duration: '25 min', difficulty: 'Beginner' },
    { id: 'lesson-1-4', title: 'Variables and Data Types', module: 'Java Fundamentals', type: 'lesson', duration: '30 min', difficulty: 'Beginner' },
    { id: 'lesson-1-5', title: 'Operators in Java', module: 'Java Fundamentals', type: 'lesson', duration: '25 min', difficulty: 'Beginner' },

    // Module 2: Control Structures
    { id: 'lesson-2-1', title: 'Conditional Statements (if, else)', module: 'Control Structures', type: 'lesson', duration: '30 min', difficulty: 'Beginner' },
    { id: 'lesson-2-2', title: 'Switch Statements', module: 'Control Structures', type: 'lesson', duration: '20 min', difficulty: 'Beginner' },
    { id: 'lesson-2-3', title: 'For Loops', module: 'Control Structures', type: 'coding', duration: '25 min', difficulty: 'Beginner' },
    { id: 'lesson-2-4', title: 'While and Do-While Loops', module: 'Control Structures', type: 'coding', duration: '25 min', difficulty: 'Beginner' },
    { id: 'lesson-2-5', title: 'Break and Continue', module: 'Control Structures', type: 'lesson', duration: '15 min', difficulty: 'Beginner' },

    // Module 3: Object-Oriented Programming
    { id: 'lesson-3-1', title: 'Introduction to OOP', module: 'Object-Oriented Programming', type: 'lesson', duration: '20 min', difficulty: 'Intermediate' },
    { id: 'lesson-3-2', title: 'Classes and Objects', module: 'Object-Oriented Programming', type: 'coding', duration: '35 min', difficulty: 'Intermediate' },
    { id: 'lesson-3-3', title: 'Constructors and Methods', module: 'Object-Oriented Programming', type: 'coding', duration: '40 min', difficulty: 'Intermediate' },
    { id: 'lesson-3-4', title: 'Inheritance', module: 'Object-Oriented Programming', type: 'lesson', duration: '45 min', difficulty: 'Intermediate' },
    { id: 'lesson-3-5', title: 'Polymorphism', module: 'Object-Oriented Programming', type: 'lesson', duration: '35 min', difficulty: 'Intermediate' },
    { id: 'lesson-3-6', title: 'Encapsulation', module: 'Object-Oriented Programming', type: 'lesson', duration: '30 min', difficulty: 'Intermediate' },
    { id: 'lesson-3-7', title: 'Abstract Classes and Interfaces', module: 'Object-Oriented Programming', type: 'coding', duration: '40 min', difficulty: 'Intermediate' },

    // Module 4: Arrays and Strings
    { id: 'lesson-4-1', title: 'Introduction to Arrays', module: 'Arrays and Strings', type: 'lesson', duration: '25 min', difficulty: 'Beginner' },
    { id: 'lesson-4-2', title: 'Multidimensional Arrays', module: 'Arrays and Strings', type: 'coding', duration: '30 min', difficulty: 'Intermediate' },
    { id: 'lesson-4-3', title: 'String Class and Methods', module: 'Arrays and Strings', type: 'lesson', duration: '35 min', difficulty: 'Beginner' },
    { id: 'lesson-4-4', title: 'StringBuilder and StringBuffer', module: 'Arrays and Strings', type: 'lesson', duration: '25 min', difficulty: 'Intermediate' },
    { id: 'lesson-4-5', title: 'Array and String Algorithms', module: 'Arrays and Strings', type: 'coding', duration: '40 min', difficulty: 'Intermediate' },

    // Module 5: Collections Framework
    { id: 'lesson-5-1', title: 'Introduction to Collections', module: 'Collections Framework', type: 'lesson', duration: '20 min', difficulty: 'Intermediate' },
    { id: 'lesson-5-2', title: 'ArrayList and LinkedList', module: 'Collections Framework', type: 'coding', duration: '35 min', difficulty: 'Intermediate' },
    { id: 'lesson-5-3', title: 'HashMap and HashSet', module: 'Collections Framework', type: 'coding', duration: '35 min', difficulty: 'Intermediate' },
    { id: 'lesson-5-4', title: 'TreeMap and TreeSet', module: 'Collections Framework', type: 'lesson', duration: '30 min', difficulty: 'Intermediate' },
    { id: 'lesson-5-5', title: 'Iterators and Enhanced For Loop', module: 'Collections Framework', type: 'lesson', duration: '25 min', difficulty: 'Intermediate' },

    // Module 6: Exception Handling
    { id: 'lesson-6-1', title: 'Understanding Exceptions', module: 'Exception Handling', type: 'lesson', duration: '25 min', difficulty: 'Intermediate' },
    { id: 'lesson-6-2', title: 'Try-Catch Blocks', module: 'Exception Handling', type: 'coding', duration: '30 min', difficulty: 'Intermediate' },
    { id: 'lesson-6-3', title: 'Finally Block and Resource Management', module: 'Exception Handling', type: 'lesson', duration: '25 min', difficulty: 'Intermediate' },
    { id: 'lesson-6-4', title: 'Custom Exceptions', module: 'Exception Handling', type: 'coding', duration: '20 min', difficulty: 'Intermediate' },

    // Module 7: File I/O Operations
    { id: 'lesson-7-1', title: 'File and Directory Operations', module: 'File I/O Operations', type: 'lesson', duration: '25 min', difficulty: 'Intermediate' },
    { id: 'lesson-7-2', title: 'Reading Files', module: 'File I/O Operations', type: 'coding', duration: '30 min', difficulty: 'Intermediate' },
    { id: 'lesson-7-3', title: 'Writing Files', module: 'File I/O Operations', type: 'coding', duration: '30 min', difficulty: 'Intermediate' },
    { id: 'lesson-7-4', title: 'Serialization', module: 'File I/O Operations', type: 'lesson', duration: '25 min', difficulty: 'Advanced' },

    // Module 8: Multithreading
    { id: 'lesson-8-1', title: 'Introduction to Threads', module: 'Multithreading', type: 'lesson', duration: '30 min', difficulty: 'Advanced' },
    { id: 'lesson-8-2', title: 'Creating and Running Threads', module: 'Multithreading', type: 'coding', duration: '35 min', difficulty: 'Advanced' },
    { id: 'lesson-8-3', title: 'Thread Synchronization', module: 'Multithreading', type: 'lesson', duration: '40 min', difficulty: 'Advanced' },
    { id: 'lesson-8-4', title: 'Thread Communication', module: 'Multithreading', type: 'coding', duration: '30 min', difficulty: 'Advanced' },

    // Module 9: Database Connectivity (JDBC)
    { id: 'lesson-9-1', title: 'Introduction to JDBC', module: 'Database Connectivity (JDBC)', type: 'lesson', duration: '20 min', difficulty: 'Intermediate' },
    { id: 'lesson-9-2', title: 'Connecting to Database', module: 'Database Connectivity (JDBC)', type: 'coding', duration: '35 min', difficulty: 'Intermediate' },
    { id: 'lesson-9-3', title: 'Executing SQL Queries', module: 'Database Connectivity (JDBC)', type: 'coding', duration: '40 min', difficulty: 'Intermediate' },
    { id: 'lesson-9-4', title: 'Prepared Statements', module: 'Database Connectivity (JDBC)', type: 'lesson', duration: '30 min', difficulty: 'Intermediate' },

    // Module 10: GUI Development with Swing
    { id: 'lesson-10-1', title: 'Introduction to Swing', module: 'GUI Development with Swing', type: 'lesson', duration: '25 min', difficulty: 'Intermediate' },
    { id: 'lesson-10-2', title: 'Creating Windows and Frames', module: 'GUI Development with Swing', type: 'coding', duration: '35 min', difficulty: 'Intermediate' },
    { id: 'lesson-10-3', title: 'Adding Components', module: 'GUI Development with Swing', type: 'coding', duration: '40 min', difficulty: 'Intermediate' },
    { id: 'lesson-10-4', title: 'Event Handling', module: 'GUI Development with Swing', type: 'coding', duration: '45 min', difficulty: 'Intermediate' },
    { id: 'lesson-10-5', title: 'Layout Managers', module: 'GUI Development with Swing', type: 'lesson', duration: '35 min', difficulty: 'Intermediate' },

    // Module 11: Web Development Basics
    { id: 'lesson-11-1', title: 'Introduction to Web Development in Java', module: 'Web Development Basics', type: 'lesson', duration: '30 min', difficulty: 'Intermediate' },
    { id: 'lesson-11-2', title: 'Servlets and JSP', module: 'Web Development Basics', type: 'coding', duration: '45 min', difficulty: 'Advanced' },
    { id: 'lesson-11-3', title: 'HTTP Requests and Responses', module: 'Web Development Basics', type: 'lesson', duration: '35 min', difficulty: 'Intermediate' },
    { id: 'lesson-11-4', title: 'Building a Simple Web Application', module: 'Web Development Basics', type: 'project', duration: '60 min', difficulty: 'Advanced' },

    // Module 12: Spring Framework Introduction
    { id: 'lesson-12-1', title: 'What is Spring Framework?', module: 'Spring Framework Introduction', type: 'lesson', duration: '25 min', difficulty: 'Intermediate' },
    { id: 'lesson-12-2', title: 'Dependency Injection', module: 'Spring Framework Introduction', type: 'coding', duration: '40 min', difficulty: 'Advanced' },
    { id: 'lesson-12-3', title: 'Spring Boot Basics', module: 'Spring Framework Introduction', type: 'coding', duration: '45 min', difficulty: 'Advanced' },
    { id: 'lesson-12-4', title: 'Creating REST APIs', module: 'Spring Framework Introduction', type: 'coding', duration: '50 min', difficulty: 'Advanced' },
    { id: 'lesson-12-5', title: 'Spring Data JPA', module: 'Spring Framework Introduction', type: 'lesson', duration: '35 min', difficulty: 'Advanced' },

    // Module 13: Advanced Topics
    { id: 'lesson-13-1', title: 'Generics', module: 'Advanced Topics', type: 'lesson', duration: '35 min', difficulty: 'Advanced' },
    { id: 'lesson-13-2', title: 'Lambda Expressions', module: 'Advanced Topics', type: 'coding', duration: '40 min', difficulty: 'Advanced' },
    { id: 'lesson-13-3', title: 'Stream API', module: 'Advanced Topics', type: 'coding', duration: '45 min', difficulty: 'Advanced' },
    { id: 'lesson-13-4', title: 'Annotations', module: 'Advanced Topics', type: 'lesson', duration: '25 min', difficulty: 'Advanced' },

    // Module 14: Testing with JUnit
    { id: 'lesson-14-1', title: 'Introduction to Unit Testing', module: 'Testing with JUnit', type: 'lesson', duration: '25 min', difficulty: 'Intermediate' },
    { id: 'lesson-14-2', title: 'Writing Test Cases with JUnit', module: 'Testing with JUnit', type: 'coding', duration: '35 min', difficulty: 'Intermediate' },
    { id: 'lesson-14-3', title: 'Test-Driven Development (TDD)', module: 'Testing with JUnit', type: 'lesson', duration: '30 min', difficulty: 'Advanced' },
    { id: 'lesson-14-4', title: 'Mocking with Mockito', module: 'Testing with JUnit', type: 'coding', duration: '40 min', difficulty: 'Advanced' },

    // Module 15: Final Projects
    { id: 'lesson-15-1', title: 'Console-based Calculator', module: 'Final Projects', type: 'project', duration: '90 min', difficulty: 'Intermediate' },
    { id: 'lesson-15-2', title: 'Student Management System', module: 'Final Projects', type: 'project', duration: '120 min', difficulty: 'Advanced' },
    { id: 'lesson-15-3', title: 'Simple Banking Application', module: 'Final Projects', type: 'project', duration: '150 min', difficulty: 'Advanced' },
    { id: 'lesson-15-4', title: 'Course Wrap-up and Next Steps', module: 'Final Projects', type: 'lesson', duration: '30 min', difficulty: 'Beginner' }
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

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredLessons = allLessons.filter(lesson => {
    const matchesSearch = lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lesson.module.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || lesson.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const lessonTypes = ['all', 'lesson', 'coding', 'tutorial', 'project'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/')}
                className="text-sm sm:text-base"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Back to Home</span>
                <span className="sm:hidden">Back</span>
              </Button>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Course Content Table</h1>
            </div>
            <div className="text-xs sm:text-sm text-gray-600">
              {filteredLessons.length} of {allLessons.length} lessons
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 sm:py-8">
        {/* Search and Filter */}
        <Card className="mb-4 sm:mb-6">
          <CardHeader className="pb-3 sm:pb-4">
            <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
              <Search className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Search & Filter</span>
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">Find specific lessons or filter by type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3 sm:gap-4">
              <div>
                <Input
                  placeholder="Search lessons or modules..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full text-sm sm:text-base"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {lessonTypes.map((type) => (
                  <Button
                    key={type}
                    variant={filterType === type ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilterType(type)}
                    className="text-xs sm:text-sm capitalize px-2 py-1 sm:px-3 sm:py-1.5"
                  >
                    <Filter className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-1" />
                    {type}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lessons Table */}
        <Card>
          <CardHeader className="pb-3 sm:pb-4">
            <CardTitle className="text-base sm:text-lg">All Course Lessons</CardTitle>
            <CardDescription className="text-xs sm:text-sm">Complete list of all lessons in the Java Mastery Course</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left py-2 px-3 sm:py-3 sm:px-4 font-medium text-gray-700 text-xs sm:text-sm">Status</th>
                    <th className="text-left py-2 px-3 sm:py-3 sm:px-4 font-medium text-gray-700 text-xs sm:text-sm">Lesson</th>
                    <th className="text-left py-2 px-3 sm:py-3 sm:px-4 font-medium text-gray-700 text-xs sm:text-sm hidden md:table-cell">Module</th>
                    <th className="text-left py-2 px-3 sm:py-3 sm:px-4 font-medium text-gray-700 text-xs sm:text-sm">Type</th>
                    <th className="text-left py-2 px-3 sm:py-3 sm:px-4 font-medium text-gray-700 text-xs sm:text-sm">Duration</th>
                    <th className="text-left py-2 px-3 sm:py-3 sm:px-4 font-medium text-gray-700 text-xs sm:text-sm hidden sm:table-cell">Difficulty</th>
                    <th className="text-left py-2 px-3 sm:py-3 sm:px-4 font-medium text-gray-700 text-xs sm:text-sm">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredLessons.map((lesson, index) => {
                    const isCompleted = completedLessons.includes(lesson.id);
                    return (
                      <tr key={lesson.id} className="hover:bg-gray-50">
                        <td className="py-2 px-3 sm:py-3 sm:px-4">
                          {isCompleted ? (
                            <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                          ) : (
                            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-gray-300"></div>
                          )}
                        </td>
                        <td className="py-2 px-3 sm:py-3 sm:px-4">
                          <div className="font-medium text-gray-900 text-xs sm:text-sm">{lesson.title}</div>
                        </td>
                        <td className="py-2 px-3 sm:py-3 sm:px-4 hidden md:table-cell">
                          <span className="text-xs text-gray-600">{lesson.module}</span>
                        </td>
                        <td className="py-2 px-3 sm:py-3 sm:px-4">
                          <Badge className={`text-[0.6rem] sm:text-xs ${getBadgeColor(lesson.type)}`}>
                            {getIconForType(lesson.type)}
                            <span className="ml-1 capitalize hidden sm:inline">{lesson.type}</span>
                            <span className="ml-1 capitalize sm:hidden">{lesson.type.charAt(0)}</span>
                          </Badge>
                        </td>
                        <td className="py-2 px-3 sm:py-3 sm:px-4">
                          <div className="flex items-center text-xs sm:text-sm text-gray-600">
                            <Clock className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-1" />
                            {lesson.duration}
                          </div>
                        </td>
                        <td className="py-2 px-3 sm:py-3 sm:px-4 hidden sm:table-cell">
                          <Badge className={`text-[0.6rem] sm:text-xs ${getDifficultyColor(lesson.difficulty)}`}>
                            {lesson.difficulty}
                          </Badge>
                        </td>
                        <td className="py-2 px-3 sm:py-3 sm:px-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => navigate(`/lesson/${lesson.id}`)}
                            className="text-blue-600 hover:text-blue-700 text-xs sm:text-sm px-2 py-1"
                          >
                            {isCompleted ? 'Review' : 'Start'}
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-4 sm:mt-6">
          <Card>
            <CardContent className="p-3 sm:p-4 text-center">
              <div className="text-lg sm:text-2xl font-bold text-blue-600">{allLessons.length}</div>
              <div className="text-xs sm:text-sm text-gray-600">Total Lessons</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-3 sm:p-4 text-center">
              <div className="text-lg sm:text-2xl font-bold text-green-600">
                {allLessons.filter(l => l.type === 'coding').length}
              </div>
              <div className="text-xs sm:text-sm text-gray-600">Coding Exercises</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-3 sm:p-4 text-center">
              <div className="text-lg sm:text-2xl font-bold text-purple-600">
                {allLessons.filter(l => l.type === 'project').length}
              </div>
              <div className="text-xs sm:text-sm text-gray-600">Projects</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-3 sm:p-4 text-center">
              <div className="text-lg sm:text-2xl font-bold text-orange-600">
                {Math.round(allLessons.reduce((total, lesson) => {
                  const minutes = parseInt(lesson.duration);
                  return total + minutes;
                }, 0) / 60)}h
              </div>
              <div className="text-xs sm:text-sm text-gray-600">Total Duration</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
