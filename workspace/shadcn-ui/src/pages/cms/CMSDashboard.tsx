import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Plus,
  Search,
  Filter,
  BookOpen,
  Users,
  FileText,
  HelpCircle,
  BarChart3,
  Settings,
  Upload,
  Download,
  Eye,
  Edit,
  Trash2,
  MoreHorizontal,
  Calendar,
  Clock,
  Target,
  TrendingUp,
  Award,
  MessageSquare,
  Bell,
  Globe,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/contexts/AuthContext';
import { useRBAC, RoleGate, PermissionGate } from '@/contexts/RBACContext';
import { UserRole, Course, ContentStatus, Quiz, Assignment } from '@/types/cms';
import CourseManager from '@/components/cms/CourseManager';
import QuizBuilder from '@/components/cms/QuizBuilder';
import MediaManager from '@/components/cms/MediaManager';
import { toast } from 'sonner';

interface CMSDashboardProps {
  className?: string;
}

interface DashboardStats {
  totalCourses: number;
  totalStudents: number;
  totalLessons: number;
  totalQuizzes: number;
  publishedCourses: number;
  draftCourses: number;
  averageCompletion: number;
  monthlyGrowth: number;
}

export const CMSDashboard: React.FC<CMSDashboardProps> = ({ className = '' }) => {
  const { user } = useAuth();
  const { userRole, hasPermission } = useRBAC();
  const [activeView, setActiveView] = useState('overview');
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [courses, setCourses] = useState<Course[]>([]);
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Mock data - in real app, this would come from API
  useEffect(() => {
    const mockStats: DashboardStats = {
      totalCourses: 12,
      totalStudents: 1250,
      totalLessons: 180,
      totalQuizzes: 45,
      publishedCourses: 8,
      draftCourses: 4,
      averageCompletion: 78,
      monthlyGrowth: 15,
    };

    const mockCourses: Course[] = [
      {
        id: 'course-1',
        title: 'Complete Java Programming',
        description: 'Learn Java from basics to advanced concepts',
        slug: 'complete-java-programming',
        status: ContentStatus.PUBLISHED,
        visibility: 'public' as any,
        instructorId: user?.id || 'instructor-1',
        modules: [],
        tags: ['java', 'programming'],
        difficulty: 'beginner' as any,
        estimatedDuration: 40,
        prerequisites: [],
        learningObjectives: [],
        createdAt: new Date('2024-01-15'),
        updatedAt: new Date('2024-01-20'),
        version: 1,
        seoData: { keywords: [] },
      },
      {
        id: 'course-2',
        title: 'Advanced JavaScript Concepts',
        description: 'Master advanced JavaScript programming',
        slug: 'advanced-javascript',
        status: ContentStatus.DRAFT,
        visibility: 'private' as any,
        instructorId: user?.id || 'instructor-1',
        modules: [],
        tags: ['javascript', 'advanced'],
        difficulty: 'advanced' as any,
        estimatedDuration: 30,
        prerequisites: [],
        learningObjectives: [],
        createdAt: new Date('2024-01-10'),
        updatedAt: new Date('2024-01-18'),
        version: 1,
        seoData: { keywords: [] },
      },
    ];

    setStats(mockStats);
    setCourses(mockCourses);
  }, [user]);

  const handleCreateCourse = () => {
    setSelectedCourse(null);
    setActiveView('course-editor');
  };

  const handleEditCourse = (courseId: string) => {
    setSelectedCourse(courseId);
    setActiveView('course-editor');
  };

  const handleDeleteCourse = async (courseId: string) => {
    try {
      setCourses(prev => prev.filter(c => c.id !== courseId));
      toast.success('Course deleted successfully');
    } catch (error) {
      toast.error('Failed to delete course');
    }
  };

  const handleSaveCourse = (course: Course) => {
    if (course.id) {
      setCourses(prev => prev.map(c => c.id === course.id ? course : c));
    } else {
      const newCourse = { ...course, id: `course-${Date.now()}` };
      setCourses(prev => [...prev, newCourse]);
    }
    setActiveView('overview');
    toast.success('Course saved successfully');
  };

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || course.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Courses</p>
                <p className="text-2xl font-bold">{stats?.totalCourses}</p>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +{stats?.monthlyGrowth}% this month
                </p>
              </div>
              <BookOpen className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Students</p>
                <p className="text-2xl font-bold">{stats?.totalStudents}</p>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +12% this month
                </p>
              </div>
              <Users className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Lessons</p>
                <p className="text-2xl font-bold">{stats?.totalLessons}</p>
                <p className="text-xs text-blue-600 flex items-center mt-1">
                  <FileText className="h-3 w-3 mr-1" />
                  Across all courses
                </p>
              </div>
              <FileText className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg. Completion</p>
                <p className="text-2xl font-bold">{stats?.averageCompletion}%</p>
                <p className="text-xs text-orange-600 flex items-center mt-1">
                  <Target className="h-3 w-3 mr-1" />
                  Student progress
                </p>
              </div>
              <Award className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <PermissionGate resource="course" action="create">
              <Button onClick={handleCreateCourse} className="h-20 flex-col">
                <Plus className="h-6 w-6 mb-2" />
                Create Course
              </Button>
            </PermissionGate>
            
            <PermissionGate resource="quiz" action="create">
              <Button variant="outline" onClick={() => setActiveView('quiz-builder')} className="h-20 flex-col">
                <HelpCircle className="h-6 w-6 mb-2" />
                Create Quiz
              </Button>
            </PermissionGate>
            
            <PermissionGate resource="media" action="create">
              <Button variant="outline" onClick={() => setActiveView('media-manager')} className="h-20 flex-col">
                <Upload className="h-6 w-6 mb-2" />
                Manage Media
              </Button>
            </PermissionGate>
            
            <PermissionGate resource="analytics" action="read">
              <Button variant="outline" onClick={() => setActiveView('analytics')} className="h-20 flex-col">
                <BarChart3 className="h-6 w-6 mb-2" />
                View Analytics
              </Button>
            </PermissionGate>
          </div>
        </CardContent>
      </Card>

      {/* Recent Courses */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Recent Courses</CardTitle>
            <Button variant="outline" size="sm" onClick={() => setActiveView('courses')}>
              View All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {courses.slice(0, 5).map((course) => (
              <div key={course.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <BookOpen className="h-8 w-8 text-blue-500" />
                  <div>
                    <h4 className="font-medium">{course.title}</h4>
                    <p className="text-sm text-gray-500">{course.description}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant={course.status === ContentStatus.PUBLISHED ? 'default' : 'secondary'}>
                        {course.status}
                      </Badge>
                      <span className="text-xs text-gray-400">
                        Updated {course.updatedAt.toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" onClick={() => handleEditCourse(course.id)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={() => handleEditCourse(course.id)}>
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Eye className="h-4 w-4 mr-2" />
                        Preview
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleDeleteCourse(course.id)}>
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderCourses = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Courses</h2>
        <PermissionGate resource="course" action="create">
          <Button onClick={handleCreateCourse}>
            <Plus className="h-4 w-4 mr-2" />
            Create Course
          </Button>
        </PermissionGate>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center space-x-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value={ContentStatus.DRAFT}>Draft</SelectItem>
            <SelectItem value={ContentStatus.REVIEW}>Under Review</SelectItem>
            <SelectItem value={ContentStatus.PUBLISHED}>Published</SelectItem>
            <SelectItem value={ContentStatus.ARCHIVED}>Archived</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <Card key={course.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <p className="text-sm text-gray-500 mt-1">{course.description}</p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => handleEditCourse(course.id)}>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleDeleteCourse(course.id)}>
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant={course.status === ContentStatus.PUBLISHED ? 'default' : 'secondary'}>
                    {course.status}
                  </Badge>
                  <span className="text-sm text-gray-500">{course.estimatedDuration}h</span>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {course.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="text-xs text-gray-400">
                  Updated {course.updatedAt.toLocaleDateString()}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeView) {
      case 'overview':
        return renderOverview();
      case 'courses':
        return renderCourses();
      case 'course-editor':
        return (
          <CourseManager
            courseId={selectedCourse || undefined}
            onSave={handleSaveCourse}
          />
        );
      case 'quiz-builder':
        return <QuizBuilder />;
      case 'media-manager':
        return <MediaManager />;
      case 'analytics':
        return (
          <div className="text-center py-12">
            <BarChart3 className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium mb-2">Analytics Dashboard</h3>
            <p className="text-gray-500">Advanced analytics coming soon...</p>
          </div>
        );
      default:
        return renderOverview();
    }
  };

  return (
    <div className={`min-h-screen bg-gray-50 ${className}`}>
      {/* Header */}
      <header className="bg-white border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Content Management System</h1>
              <p className="text-gray-500">
                Welcome back, {user?.firstName} {user?.lastName}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <RoleGate roles={[UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
              </RoleGate>
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="px-6">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveView('overview')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeView === 'overview'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Overview
            </button>
            <PermissionGate resource="course" action="read">
              <button
                onClick={() => setActiveView('courses')}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  activeView === 'courses'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Courses
              </button>
            </PermissionGate>
            <PermissionGate resource="media" action="read">
              <button
                onClick={() => setActiveView('media-manager')}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  activeView === 'media-manager'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Media
              </button>
            </PermissionGate>
            <PermissionGate resource="analytics" action="read">
              <button
                onClick={() => setActiveView('analytics')}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  activeView === 'analytics'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Analytics
              </button>
            </PermissionGate>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="px-6 py-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default CMSDashboard;