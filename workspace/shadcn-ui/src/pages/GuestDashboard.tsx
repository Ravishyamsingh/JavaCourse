import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  BookOpen,
  Eye,
  Users,
  Clock,
  Star,
  ArrowLeft,
  Info,
  Lock,
  Globe,
  TrendingUp,
  Award,
  Calendar
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { UserRole } from '@/types/auth';

interface CoursePreview {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  difficulty: string;
  duration: string;
  studentsCount: number;
  rating: number;
  tags: string[];
  isPreview: boolean;
}

const GuestDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user, hasPermission } = useAuth();
  const [featuredCourses, setFeaturedCourses] = useState<CoursePreview[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock data for guest preview
  useEffect(() => {
    const mockCourses: CoursePreview[] = [
      {
        id: '1',
        title: 'Java Fundamentals',
        description: 'Master the basics of Java programming with hands-on exercises and real-world examples.',
        difficulty: 'Beginner',
        duration: '8 hours',
        studentsCount: 1250,
        rating: 4.8,
        tags: ['Java', 'Programming', 'Beginner'],
        isPreview: true
      },
      {
        id: '2',
        title: 'Object-Oriented Programming',
        description: 'Learn OOP concepts, design patterns, and best practices in Java.',
        difficulty: 'Intermediate',
        duration: '12 hours',
        studentsCount: 890,
        rating: 4.9,
        tags: ['OOP', 'Design Patterns', 'Java'],
        isPreview: true
      },
      {
        id: '3',
        title: 'Web Development with Java',
        description: 'Build dynamic web applications using Java, Spring Boot, and modern web technologies.',
        difficulty: 'Advanced',
        duration: '16 hours',
        studentsCount: 675,
        rating: 4.7,
        tags: ['Web Development', 'Spring Boot', 'REST API'],
        isPreview: true
      }
    ];

    setFeaturedCourses(mockCourses);
    setIsLoading(false);
  }, []);

  const handleViewCourse = (courseId: string) => {
    if (hasPermission('courses', 'read')) {
      navigate(`/course/${courseId}`);
    } else {
      // Show upgrade prompt for guests
      navigate('/signup');
    }
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading guest dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      {/* Header */}
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
                <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Guest Access
                </h1>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">Explore our courses as a guest</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="px-3 py-1 bg-gray-100">
                <Eye className="h-4 w-4 mr-2" />
                Guest Mode
              </Badge>
              <Button
                onClick={handleSignUp}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              >
                Sign Up for Full Access
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 sm:px-6 sm:py-10">
        {/* Welcome Section */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-xl">
            <CardContent className="p-6 sm:p-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  Welcome to Java Mastery!
                </h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  You're browsing as a guest. Sign up for a free account to unlock full access to courses,
                  quizzes, certificates, and personalized learning paths.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={handleSignUp}
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                  >
                    <Star className="h-4 w-4 mr-2" />
                    Create Free Account
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => navigate('/login')}
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Sign In
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="courses" className="space-y-6 sm:space-y-8">
          <TabsList className="grid w-full grid-cols-3 bg-white/60 backdrop-blur-sm p-1 rounded-xl shadow-lg border-0">
            <TabsTrigger value="courses" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white rounded-lg transition-all duration-300">
              <BookOpen className="w-4 h-4 mr-2" />
              Courses
            </TabsTrigger>
            <TabsTrigger value="features" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white rounded-lg transition-all duration-300">
              <Award className="w-4 h-4 mr-2" />
              Features
            </TabsTrigger>
            <TabsTrigger value="preview" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white rounded-lg transition-all duration-300">
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </TabsTrigger>
          </TabsList>

          {/* Courses Tab */}
          <TabsContent value="courses" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCourses.map((course) => (
                <Card key={course.id} className="bg-white/80 backdrop-blur-lg border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg group-hover:text-blue-600 transition-colors duration-300">
                          {course.title}
                        </CardTitle>
                        <CardDescription className="mt-2 line-clamp-2">
                          {course.description}
                        </CardDescription>
                      </div>
                      {course.isPreview && (
                        <Badge variant="outline" className="ml-2 bg-yellow-50 text-yellow-700 border-yellow-200">
                          <Eye className="h-3 w-3 mr-1" />
                          Preview
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{course.studentsCount.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{course.rating}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {course.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <Badge
                        variant="outline"
                        className={`${
                          course.difficulty === 'Beginner' ? 'bg-green-50 text-green-700 border-green-200' :
                          course.difficulty === 'Intermediate' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                          'bg-red-50 text-red-700 border-red-200'
                        }`}
                      >
                        {course.difficulty}
                      </Badge>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleViewCourse(course.id)}
                        className="hover:bg-blue-50"
                      >
                        {hasPermission('courses', 'read') ? (
                          <>
                            <Eye className="h-4 w-4 mr-2" />
                            View Course
                          </>
                        ) : (
                          <>
                            <Lock className="h-4 w-4 mr-2" />
                            Sign Up to View
                          </>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Features Tab */}
          <TabsContent value="features" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Comprehensive Courses</h3>
                  <p className="text-gray-600 text-sm">
                    Access 20+ modules covering Java fundamentals to advanced topics
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Interactive Quizzes</h3>
                  <p className="text-gray-600 text-sm">
                    Test your knowledge with dynamic quizzes and instant feedback
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Progress Tracking</h3>
                  <p className="text-gray-600 text-sm">
                    Monitor your learning journey with detailed analytics
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mb-4">
                    <Calendar className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Certificates</h3>
                  <p className="text-gray-600 text-sm">
                    Earn certificates upon course completion
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full mb-4">
                    <Users className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Community Support</h3>
                  <p className="text-gray-600 text-sm">
                    Join our learning community and get help when needed
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-100 rounded-full mb-4">
                    <Star className="h-6 w-6 text-pink-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Achievements</h3>
                  <p className="text-gray-600 text-sm">
                    Unlock achievements and track your milestones
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Preview Tab */}
          <TabsContent value="preview" className="space-y-6">
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-xl">
              <CardContent className="p-6 sm:p-8">
                <div className="text-center">
                  <Info className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Ready to Start Learning?</h3>
                  <p className="text-gray-600 mb-6">
                    Create a free account to unlock all features and start your Java learning journey today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={handleSignUp}
                      size="lg"
                      className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                    >
                      <Star className="h-4 w-4 mr-2" />
                      Get Started Free
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => navigate('/')}
                    >
                      <Globe className="h-4 w-4 mr-2" />
                      Explore More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default GuestDashboard;