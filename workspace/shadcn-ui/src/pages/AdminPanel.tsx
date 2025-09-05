import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import {
  Users,
  BookOpen,
  FileText,
  BarChart3,
  Settings,
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  UserPlus,
  Shield,
  Activity,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  Layout,
  Image,
  Video,
  FileImage
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { UserRole } from '@/types/auth';
import { toast } from 'sonner';
import CourseManager from '@/components/cms/CourseManager';
import MediaManager from '@/components/cms/MediaManager';
import QuizBuilder from '@/components/cms/QuizBuilder';
import RichTextEditor from '@/components/cms/RichTextEditor';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'guest' | 'user' | 'admin' | 'superadmin';
  isActive: boolean;
  isEmailVerified: boolean;
  lastLogin?: string;
  createdAt: string;
}

interface Course {
  id: string;
  title: string;
  status: 'draft' | 'published' | 'archived';
  instructorId: string;
  createdAt: string;
  modulesCount: number;
  studentsCount: number;
}

interface SystemStats {
  totalUsers: number;
  activeUsers: number;
  totalCourses: number;
  publishedCourses: number;
  totalLessons: number;
  totalQuizzes: number;
  systemHealth: 'good' | 'warning' | 'critical';
}

const AdminPanel: React.FC = () => {
  const { user, hasPermission } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [users, setUsers] = useState<User[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [stats, setStats] = useState<SystemStats | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // Mock data - in real app, this would come from API
  useEffect(() => {
    const mockUsers: User[] = [
      {
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        role: 'user',
        isActive: true,
        isEmailVerified: true,
        lastLogin: '2024-01-20T10:30:00Z',
        createdAt: '2024-01-15T08:00:00Z'
      },
      {
        id: '2',
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@example.com',
        role: 'user',
        isActive: true,
        isEmailVerified: false,
        lastLogin: '2024-01-19T15:45:00Z',
        createdAt: '2024-01-10T12:00:00Z'
      },
      {
        id: '3',
        firstName: 'Bob',
        lastName: 'Johnson',
        email: 'bob.johnson@example.com',
        role: 'user',
        isActive: false,
        isEmailVerified: true,
        lastLogin: '2024-01-18T09:20:00Z',
        createdAt: '2024-01-05T14:30:00Z'
      }
    ];

    const mockCourses: Course[] = [
      {
        id: 'course-1',
        title: 'Complete Java Programming',
        status: 'published',
        instructorId: 'instructor-1',
        createdAt: '2024-01-15T08:00:00Z',
        modulesCount: 12,
        studentsCount: 245
      },
      {
        id: 'course-2',
        title: 'Advanced JavaScript Concepts',
        status: 'draft',
        instructorId: 'instructor-2',
        createdAt: '2024-01-18T10:00:00Z',
        modulesCount: 8,
        studentsCount: 0
      }
    ];

    const mockStats: SystemStats = {
      totalUsers: 1250,
      activeUsers: 1180,
      totalCourses: 45,
      publishedCourses: 38,
      totalLessons: 680,
      totalQuizzes: 156,
      systemHealth: 'good'
    };

    setUsers(mockUsers);
    setCourses(mockCourses);
    setStats(mockStats);
  }, []);

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    const matchesStatus = statusFilter === 'all' ||
                         (statusFilter === 'active' && user.isActive) ||
                         (statusFilter === 'inactive' && !user.isActive);

    return matchesSearch && matchesRole && matchesStatus;
  });

  const handleUserAction = async (action: string, userId: string) => {
    setIsLoading(true);
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (action === 'deactivate') {
        setUsers(prev => prev.map(u =>
          u.id === userId ? { ...u, isActive: false } : u
        ));
        toast.success('User deactivated successfully');
      } else if (action === 'activate') {
        setUsers(prev => prev.map(u =>
          u.id === userId ? { ...u, isActive: true } : u
        ));
        toast.success('User activated successfully');
      } else if (action === 'delete') {
        setUsers(prev => prev.filter(u => u.id !== userId));
        toast.success('User deleted successfully');
      }
    } catch (error) {
      toast.error('Action failed');
    } finally {
      setIsLoading(false);
    }
  };

  const getRoleBadgeVariant = (role: string) => {
    switch (role) {
      case 'superadmin': return 'destructive';
      case 'admin': return 'default';
      case 'user': return 'secondary';
      case 'guest': return 'outline';
      default: return 'outline';
    }
  };

  const getStatusIcon = (isActive: boolean, isEmailVerified: boolean) => {
    if (!isActive) return <XCircle className="h-4 w-4 text-red-500" />;
    if (!isEmailVerified) return <Clock className="h-4 w-4 text-yellow-500" />;
    return <CheckCircle className="h-4 w-4 text-green-500" />;
  };

  if (!hasPermission('users', 'read')) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Shield className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h2>
          <p className="text-gray-600">You don't have permission to access the admin panel.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
              <p className="text-gray-600">Manage users, courses, and system settings</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="px-3 py-1">
                <Shield className="h-4 w-4 mr-2" />
                Admin Access
              </Badge>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="media">Media</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Users</p>
                      <p className="text-2xl font-bold">{stats?.totalUsers}</p>
                      <p className="text-xs text-green-600 flex items-center mt-1">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        +12% this month
                      </p>
                    </div>
                    <Users className="h-8 w-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Active Users</p>
                      <p className="text-2xl font-bold">{stats?.activeUsers}</p>
                      <p className="text-xs text-green-600 flex items-center mt-1">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        +8% this month
                      </p>
                    </div>
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Courses</p>
                      <p className="text-2xl font-bold">{stats?.totalCourses}</p>
                      <p className="text-xs text-blue-600 flex items-center mt-1">
                        <BookOpen className="h-3 w-3 mr-1" />
                        {stats?.publishedCourses} published
                      </p>
                    </div>
                    <BookOpen className="h-8 w-8 text-purple-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">System Health</p>
                      <p className="text-2xl font-bold capitalize">{stats?.systemHealth}</p>
                      <p className="text-xs text-green-600 flex items-center mt-1">
                        <Activity className="h-3 w-3 mr-1" />
                        All systems operational
                      </p>
                    </div>
                    <Activity className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest system events and user actions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                    <UserPlus className="h-5 w-5 text-blue-500" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">New user registration</p>
                      <p className="text-xs text-gray-500">john.doe@example.com joined 2 minutes ago</p>
                    </div>
                    <Badge variant="outline">User</Badge>
                  </div>

                  <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                    <BookOpen className="h-5 w-5 text-green-500" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Course published</p>
                      <p className="text-xs text-gray-500">Advanced JavaScript Concepts published 15 minutes ago</p>
                    </div>
                    <Badge variant="outline">Course</Badge>
                  </div>

                  <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-yellow-500" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">System alert</p>
                      <p className="text-xs text-gray-500">High memory usage detected 1 hour ago</p>
                    </div>
                    <Badge variant="outline">System</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>Manage user accounts and permissions</CardDescription>
                  </div>
                  <Button>
                    <UserPlus className="h-4 w-4 mr-2" />
                    Add User
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {/* Search and Filters */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search users..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={roleFilter} onValueChange={setRoleFilter}>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Roles</SelectItem>
                      <SelectItem value="superadmin">Super Admin</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="user">User</SelectItem>
                      <SelectItem value="guest">Guest</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Users Table */}
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Login</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-sm font-medium text-blue-600">
                                {user.firstName[0]}{user.lastName[0]}
                              </span>
                            </div>
                            <div>
                              <div className="font-medium">{user.firstName} {user.lastName}</div>
                              <div className="text-sm text-gray-500">{user.email}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={getRoleBadgeVariant(user.role)}>
                            {user.role}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            {getStatusIcon(user.isActive, user.isEmailVerified)}
                            <span className={user.isActive ? 'text-green-600' : 'text-red-600'}>
                              {user.isActive ? 'Active' : 'Inactive'}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          {user.lastLogin ? new Date(user.lastLogin).toLocaleDateString() : 'Never'}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleUserAction(
                                user.isActive ? 'deactivate' : 'activate',
                                user.id
                              )}
                              disabled={isLoading}
                            >
                              {user.isActive ? (
                                <XCircle className="h-4 w-4" />
                              ) : (
                                <CheckCircle className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Courses Tab */}
          <TabsContent value="courses" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Course Management</CardTitle>
                <CardDescription>Monitor and manage course content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses.map((course) => (
                    <Card key={course.id}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-lg">{course.title}</CardTitle>
                            <CardDescription>
                              {course.modulesCount} modules • {course.studentsCount} students
                            </CardDescription>
                          </div>
                          <Badge variant={course.status === 'published' ? 'default' : 'secondary'}>
                            {course.status}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>Created {new Date(course.createdAt).toLocaleDateString()}</span>
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Content Management Tab */}
          <TabsContent value="content" className="mt-6">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Layout className="h-5 w-5" />
                    <span>Content Management</span>
                  </CardTitle>
                  <CardDescription>Create and manage course content, lessons, and quizzes</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="courses" className="space-y-4">
                    <TabsList>
                      <TabsTrigger value="courses">Courses</TabsTrigger>
                      <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
                      <TabsTrigger value="editor">Rich Editor</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="courses">
                      <CourseManager />
                    </TabsContent>
                    
                    <TabsContent value="quizzes">
                      <QuizBuilder />
                    </TabsContent>
                    
                    <TabsContent value="editor">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Rich Text Editor</h3>
                        <RichTextEditor
                          content=""
                          onChange={(content) => console.log('Content changed:', content)}
                          placeholder="Start writing your lesson content..."
                        />
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Media Management Tab */}
          <TabsContent value="media" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileImage className="h-5 w-5" />
                  <span>Media Library</span>
                </CardTitle>
                <CardDescription>Upload and manage images, videos, and other media files</CardDescription>
              </CardHeader>
              <CardContent>
                <MediaManager />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>User Analytics</CardTitle>
                  <CardDescription>User registration and activity trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <BarChart3 className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-500">Advanced analytics coming soon...</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>System Performance</CardTitle>
                  <CardDescription>Server health and performance metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">CPU Usage</span>
                      <span className="text-sm font-medium">45%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Memory Usage</span>
                      <span className="text-sm font-medium">67%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Storage Used</span>
                      <span className="text-sm font-medium">2.3 GB</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Response Time</span>
                      <span className="text-sm font-medium">120ms</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;