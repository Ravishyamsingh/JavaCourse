import React, { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ScatterChart,
  Scatter
} from 'recharts';
import {
  TrendingUp,
  Activity,
  Award,
  BookOpen,
  Clock,
  Target,
  Download,
  RefreshCw,
  Search,
  Filter,
  BarChart3,
  Users,
  Zap,
  AlertCircle,
  CheckCircle,
  Eye,
  Edit,
  Trash2,
  Plus,
  Calendar,
  Gauge
} from 'lucide-react';

interface StudentProgress {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  isActive: boolean;
  progress?: {
    completedLessons: string[];
    completedQuizzes: string[];
    totalScore: number;
    studyStreak: number;
    totalStudyTime: number;
    certificatesEarned: string[];
    activityLog: Array<{
      date: string;
      lessonsCompleted: number;
      studyTime: number;
      quizAttempts: number;
      scoreEarned: number;
    }>;
  };
  createdAt: string;
  lastLogin?: string;
}

interface ChartData {
  name: string;
  value: number;
  [key: string]: any;
}

interface ActivityMetrics {
  studentName: string;
  lessonsCompleted: number;
  quizzesAttempted: number;
  averageScore: number;
  studyStreak: number;
  totalStudyTime: number;
  certificatesEarned: number;
  activityLevel: 'High' | 'Medium' | 'Low';
  progressPercentage: number;
}

const StudentProgressReports = () => {
  const { tokens } = useAuth();
  const [students, setStudents] = useState<StudentProgress[]>([]);
  const [filteredStudents, setFilteredStudents] = useState<StudentProgress[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [selectedStudent, setSelectedStudent] = useState<StudentProgress | null>(null);
  const [activityMetrics, setActivityMetrics] = useState<ActivityMetrics[]>([]);
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [weeklyActivityData, setWeeklyActivityData] = useState<ChartData[]>([]);

  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

  const authFetch = useCallback(async (path: string, options: RequestInit = {}) => {
    try {
      const response = await fetch(`${API_BASE_URL}${path}`, {
        ...options,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${tokens?.accessToken}`,
          ...options.headers
        }
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `API Error: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API Fetch Error:', error);
      throw error;
    }
  }, [tokens?.accessToken, API_BASE_URL]);

  // Fetch all students
  const fetchStudents = useCallback(async () => {
    try {
      setLoading(true);
      const response = await authFetch('/admin/users?role=user&limit=1000');
      const studentsData = response.data || [];
      setStudents(studentsData);
      processStudentData(studentsData);
    } catch (error) {
      console.error('Error fetching students:', error);
      toast.error('Failed to fetch student data');
    } finally {
      setLoading(false);
    }
  }, [authFetch]);

  // Process student data for metrics and charts
  const processStudentData = (data: StudentProgress[]) => {
    const metrics: ActivityMetrics[] = data.map((student) => {
      const progress = student.progress || {};
      const lessonsCompleted = progress.completedLessons?.length || 0;
      const quizzesAttempted = progress.completedQuizzes?.length || 0;
      const totalScore = progress.totalScore || 0;
      const averageScore = quizzesAttempted > 0 ? Math.round(totalScore / quizzesAttempted) : 0;
      const studyStreak = progress.studyStreak || 0;
      const totalStudyTime = progress.totalStudyTime || 0;
      const certificatesEarned = progress.certificatesEarned?.length || 0;

      // Calculate activity level
      const activityScore = lessonsCompleted + quizzesAttempted + studyStreak;
      let activityLevel: 'High' | 'Medium' | 'Low' = 'Low';
      if (activityScore > 50) activityLevel = 'High';
      else if (activityScore > 20) activityLevel = 'Medium';

      // Calculate progress percentage (0-100)
      const progressPercentage = Math.min(
        Math.round(((lessonsCompleted + quizzesAttempted + certificatesEarned) / 100) * 100),
        100
      );

      return {
        studentName: `${student.firstName} ${student.lastName}`,
        lessonsCompleted,
        quizzesAttempted,
        averageScore,
        studyStreak,
        totalStudyTime: Math.round(totalStudyTime),
        certificatesEarned,
        activityLevel,
        progressPercentage
      };
    });

    setActivityMetrics(metrics);

    // Prepare chart data for top performers
    const topPerformers = metrics
      .sort((a, b) => b.averageScore - a.averageScore)
      .slice(0, 10)
      .map((m) => ({
        name: m.studentName.split(' ')[0],
        score: m.averageScore,
        lessons: m.lessonsCompleted,
        quizzes: m.quizzesAttempted
      }));

    setChartData(topPerformers);

    // Prepare weekly activity data
    const activityByLevel = {
      High: metrics.filter((m) => m.activityLevel === 'High').length,
      Medium: metrics.filter((m) => m.activityLevel === 'Medium').length,
      Low: metrics.filter((m) => m.activityLevel === 'Low').length
    };

    setWeeklyActivityData([
      { name: 'High Activity', value: activityByLevel.High },
      { name: 'Medium Activity', value: activityByLevel.Medium },
      { name: 'Low Activity', value: activityByLevel.Low }
    ]);
  };

  // Apply filters and sorting
  useEffect(() => {
    let filtered = [...students];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (s) =>
          `${s.firstName} ${s.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
          s.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Status filter
    if (filterStatus !== 'all') {
      filtered = filtered.filter((s) =>
        filterStatus === 'active' ? s.isActive : !s.isActive
      );
    }

    // Sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return `${a.firstName} ${a.lastName}`.localeCompare(
            `${b.firstName} ${b.lastName}`
          );
        case 'score':
          return (b.progress?.totalScore || 0) - (a.progress?.totalScore || 0);
        case 'lessons':
          return (b.progress?.completedLessons?.length || 0) -
            (a.progress?.completedLessons?.length || 0);
        case 'recent':
          return new Date(b.lastLogin || b.createdAt).getTime() -
            new Date(a.lastLogin || a.createdAt).getTime();
        default:
          return 0;
      }
    });

    setFilteredStudents(filtered);
  }, [students, searchTerm, filterStatus, sortBy]);

  // Fetch student details
  const fetchStudentDetails = useCallback(async (studentId: string) => {
    try {
      const response = await authFetch(`/admin/users/${studentId}`);
      const student = response.data;
      setSelectedStudent(student);
    } catch (error) {
      console.error('Error fetching student details:', error);
      toast.error('Failed to fetch student details');
    }
  }, [authFetch]);

  // Delete student
  const handleDeleteStudent = useCallback(async (studentId: string) => {
    if (!confirm('Are you sure you want to delete this student?')) return;

    try {
      await authFetch(`/admin/users/${studentId}`, { method: 'DELETE' });
      toast.success('Student deleted successfully');
      fetchStudents();
    } catch (error) {
      console.error('Error deleting student:', error);
      toast.error('Failed to delete student');
    }
  }, [authFetch, fetchStudents]);

  // Export report
  const handleExportReport = useCallback(async (format: 'csv' | 'json') => {
    try {
      const response = await authFetch(
        `/admin/reports/student-progress/download?format=${format}`
      );

      if (format === 'json') {
        const dataStr = JSON.stringify(response.data, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `student-progress-${Date.now()}.json`;
        link.click();
        URL.revokeObjectURL(url);
      }

      toast.success(`Report exported as ${format.toUpperCase()}`);
    } catch (error) {
      console.error('Error exporting report:', error);
      toast.error('Failed to export report');
    }
  }, [authFetch]);

  // Get activity level color
  const getActivityLevelColor = (level: string) => {
    switch (level) {
      case 'High':
        return 'bg-green-100 text-green-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Low':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Get progress color
  const getProgressColor = (percentage: number) => {
    if (percentage >= 75) return 'bg-green-500';
    if (percentage >= 50) return 'bg-blue-500';
    if (percentage >= 25) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <BarChart3 className="h-8 w-8 text-blue-600" />
            Student Progress Reports
          </h2>
          <p className="text-muted-foreground mt-1">
            Monitor student activity, performance, and learning progress
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => handleExportReport('csv')}
            variant="outline"
            size="sm"
          >
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
          <Button
            onClick={() => handleExportReport('json')}
            variant="outline"
            size="sm"
          >
            <Download className="h-4 w-4 mr-2" />
            Export JSON
          </Button>
          <Button onClick={fetchStudents} variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Users className="h-4 w-4" />
              Total Students
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{students.length}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {students.filter((s) => s.isActive).length} active
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Activity className="h-4 w-4" />
              Avg. Activity Level
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {activityMetrics.length > 0
                ? Math.round(
                    (activityMetrics.filter((m) => m.activityLevel === 'High').length /
                      activityMetrics.length) *
                      100
                  )
                : 0}
              %
            </div>
            <p className="text-xs text-muted-foreground mt-1">High activity students</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Award className="h-4 w-4" />
              Avg. Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {activityMetrics.length > 0
                ? Math.round(
                    activityMetrics.reduce((sum, m) => sum + m.averageScore, 0) /
                      activityMetrics.length
                  )
                : 0}
              %
            </div>
            <p className="text-xs text-muted-foreground mt-1">Overall performance</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Avg. Lessons
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {activityMetrics.length > 0
                ? Math.round(
                    activityMetrics.reduce((sum, m) => sum + m.lessonsCompleted, 0) /
                      activityMetrics.length
                  )
                : 0}
            </div>
            <p className="text-xs text-muted-foreground mt-1">Per student</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performers Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Top Performers
            </CardTitle>
            <CardDescription>Average scores of top 10 students</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="score" fill="#3b82f6" name="Avg Score" />
                <Bar dataKey="lessons" fill="#10b981" name="Lessons" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Activity Level Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Activity Distribution
            </CardTitle>
            <CardDescription>Students by activity level</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={weeklyActivityData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {weeklyActivityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Student List
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Search and Filters */}
          <div className="flex gap-4 flex-wrap">
            <div className="flex-1 relative min-w-[200px]">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name or email..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Sort by Name</SelectItem>
                <SelectItem value="score">Sort by Score</SelectItem>
                <SelectItem value="lessons">Sort by Lessons</SelectItem>
                <SelectItem value="recent">Sort by Recent</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Students Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold">Student Name</th>
                  <th className="text-left py-3 px-4 font-semibold">Email</th>
                  <th className="text-center py-3 px-4 font-semibold">Lessons</th>
                  <th className="text-center py-3 px-4 font-semibold">Quizzes</th>
                  <th className="text-center py-3 px-4 font-semibold">Avg Score</th>
                  <th className="text-center py-3 px-4 font-semibold">Activity</th>
                  <th className="text-center py-3 px-4 font-semibold">Progress</th>
                  <th className="text-center py-3 px-4 font-semibold">Status</th>
                  <th className="text-center py-3 px-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student) => {
                  const metric = activityMetrics.find(
                    (m) => m.studentName === `${student.firstName} ${student.lastName}`
                  );

                  return (
                    <tr key={student._id} className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">
                        <div className="font-medium">
                          {student.firstName} {student.lastName}
                        </div>
                      </td>
                      <td className="py-3 px-4 text-muted-foreground">{student.email}</td>
                      <td className="py-3 px-4 text-center">
                        {student.progress?.completedLessons?.length || 0}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {student.progress?.completedQuizzes?.length || 0}
                      </td>
                      <td className="py-3 px-4 text-center font-semibold">
                        {metric?.averageScore || 0}%
                      </td>
                      <td className="py-3 px-4 text-center">
                        <Badge className={getActivityLevelColor(metric?.activityLevel || 'Low')}>
                          {metric?.activityLevel || 'Low'}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${getProgressColor(
                                metric?.progressPercentage || 0
                              )}`}
                              style={{
                                width: `${metric?.progressPercentage || 0}%`
                              }}
                            />
                          </div>
                          <span className="text-xs font-semibold">
                            {metric?.progressPercentage || 0}%
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <Badge variant={student.isActive ? 'default' : 'secondary'}>
                          {student.isActive ? 'Active' : 'Inactive'}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <div className="flex justify-center gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => fetchStudentDetails(student._id)}
                            title="View Details"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteStudent(student._id)}
                            title="Delete Student"
                          >
                            <Trash2 className="h-4 w-4 text-red-600" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {filteredStudents.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                No students found matching your criteria
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Student Details Modal */}
      {selectedStudent && (
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>
                {selectedStudent.firstName} {selectedStudent.lastName} - Details
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedStudent(null)}
              >
                ✕
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">{selectedStudent.email}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Role</p>
                <p className="font-medium capitalize">{selectedStudent.role}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Status</p>
                <Badge variant={selectedStudent.isActive ? 'default' : 'secondary'}>
                  {selectedStudent.isActive ? 'Active' : 'Inactive'}
                </Badge>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Joined</p>
                <p className="font-medium">
                  {new Date(selectedStudent.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>

            {selectedStudent.progress && (
              <div className="space-y-4 pt-4 border-t">
                <h4 className="font-semibold">Learning Progress</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-3 bg-white rounded-lg border">
                    <p className="text-xs text-muted-foreground">Lessons Completed</p>
                    <p className="text-2xl font-bold">
                      {selectedStudent.progress.completedLessons?.length || 0}
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border">
                    <p className="text-xs text-muted-foreground">Quizzes Attempted</p>
                    <p className="text-2xl font-bold">
                      {selectedStudent.progress.completedQuizzes?.length || 0}
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border">
                    <p className="text-xs text-muted-foreground">Total Score</p>
                    <p className="text-2xl font-bold">{selectedStudent.progress.totalScore || 0}</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border">
                    <p className="text-xs text-muted-foreground">Certificates</p>
                    <p className="text-2xl font-bold">
                      {selectedStudent.progress.certificatesEarned?.length || 0}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="p-3 bg-white rounded-lg border">
                    <p className="text-xs text-muted-foreground">Study Streak</p>
                    <p className="text-2xl font-bold">{selectedStudent.progress.studyStreak || 0}</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border">
                    <p className="text-xs text-muted-foreground">Total Study Time</p>
                    <p className="text-2xl font-bold">
                      {Math.round(selectedStudent.progress.totalStudyTime || 0)}h
                    </p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default StudentProgressReports;
