import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import {
  Users,
  BarChart3,
  BookOpen,
  Settings,
  Download,
  Plus,
  Edit,
  Trash2,
  Search,
  Filter,
  TrendingUp,
  Activity,
  Award,
  Clock,
  AlertCircle,
  CheckCircle,
  AlertTriangle,
  Shield,
  Database,
  Zap,
  Eye,
  Lock,
  Unlock,
  RefreshCw,
  Gauge,
  BarChart4,
  FileText,
  LogOut
} from 'lucide-react';
import { ADMIN_CONFIG, getRoleLabel, getTabLabel, getReportConfig } from '@/config/adminConfig';

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  isActive: boolean;
}

interface Analytics {
  totalUsers: number;
  activeUsers: number;
  adminUsers: number;
  newUsersThisMonth: number;
  recentUsers: User[];
  [key: string]: any;
}

const AdminPanel = () => {
  const { user, tokens } = useAuth();
  const navigate = useNavigate();
  
  // State Management
  const [activeTab, setActiveTab] = useState<string>(ADMIN_CONFIG.TABS.DASHBOARD);
  const [users, setUsers] = useState<User[]>([]);
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterRole, setFilterRole] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(ADMIN_CONFIG.DEFAULT_PAGE);
  const [pageSize, setPageSize] = useState<number>(ADMIN_CONFIG.DEFAULT_PAGE_SIZE);

  // Authorization Check
  useEffect(() => {
    if (!user || !Object.values(ADMIN_CONFIG.USER_ROLES).includes(user.role)) {
      navigate('/dashboard');
      return;
    }
    fetchDashboardData();
  }, [user, navigate]);

  // Fetch users when tab changes or filters change
  useEffect(() => {
    if (activeTab === ADMIN_CONFIG.TABS.USERS) {
      fetchUsers();
    }
  }, [activeTab, filterRole, filterStatus, searchTerm, currentPage]);

  /**
   * Generic API fetch with authentication
   */
  const authFetch = useCallback(async (path: string, options: RequestInit = {}) => {
    try {
      const response = await fetch(`${ADMIN_CONFIG.API_BASE_URL}${path}`, {
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
  }, [tokens?.accessToken]);

  /**
   * Fetch dashboard statistics
   */
  const fetchDashboardData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await authFetch('/admin/dashboard/stats');
      setAnalytics(response.data);
    } catch (error) {
      console.error('Dashboard fetch error:', error);
      toast.error(ADMIN_CONFIG.MESSAGES.ERROR.FETCH_DASHBOARD);
    } finally {
      setLoading(false);
    }
  }, [authFetch]);

  /**
   * Fetch users with filters and pagination
   */
  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      
      if (filterRole !== 'all') params.append('role', filterRole);
      if (filterStatus !== 'all') params.append('status', filterStatus);
      if (searchTerm) params.append('search', searchTerm);
      params.append('page', currentPage.toString());
      params.append('limit', pageSize.toString());

      const response = await authFetch(`/admin/users?${params.toString()}`);
      setUsers(response.data || []);
    } catch (error) {
      console.error('Users fetch error:', error);
      toast.error(ADMIN_CONFIG.MESSAGES.ERROR.FETCH_USERS);
    } finally {
      setLoading(false);
    }
  }, [authFetch, filterRole, filterStatus, searchTerm, currentPage, pageSize]);

  /**
   * Delete a user
   */
  const handleDeleteUser = useCallback(async (userId: string) => {
    if (!confirm(ADMIN_CONFIG.MESSAGES.CONFIRMATION.DELETE_USER)) return;

    try {
      await authFetch(`/admin/users/${userId}`, { method: 'DELETE' });
      toast.success(ADMIN_CONFIG.MESSAGES.SUCCESS.USER_DELETED);
      fetchUsers();
    } catch (error) {
      console.error('Delete user error:', error);
      toast.error(ADMIN_CONFIG.MESSAGES.ERROR.DELETE_USER);
    }
  }, [authFetch, fetchUsers]);

  /**
   * Update user role
   */
  const handleRoleChange = useCallback(async (userId: string, newRole: string) => {
    try {
      console.log('🔄 Changing role for user:', { userId, newRole });
      
      const response = await authFetch(`/admin/users/${userId}/role`, {
        method: 'PUT',
        body: JSON.stringify({ role: newRole })
      });

      console.log('📡 Role change response:', response);

      if (response.success) {
        console.log('✅ Role changed successfully');
        toast.success(`${ADMIN_CONFIG.MESSAGES.SUCCESS.ROLE_UPDATED} (${getRoleLabel(newRole)})`);
        fetchUsers();
      } else {
        console.error('❌ Role change failed:', response.message);
        toast.error(response.message || ADMIN_CONFIG.MESSAGES.ERROR.UPDATE_ROLE);
      }
    } catch (error) {
      console.error('❌ Role change error:', error);
      const errorMessage = error instanceof Error ? error.message : ADMIN_CONFIG.MESSAGES.ERROR.UPDATE_ROLE;
      toast.error(errorMessage);
    }
  }, [authFetch, fetchUsers]);

  /**
   * Export users as CSV
   */
  const handleExportUsers = useCallback(async () => {
    try {
      const response = await fetch(
        `${ADMIN_CONFIG.API_BASE_URL}/admin/users/export?format=csv`,
        {
          credentials: 'include',
          headers: {
            Authorization: `Bearer ${tokens?.accessToken}`
          }
        }
      );

      if (!response.ok) throw new Error('Export failed');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${ADMIN_CONFIG.REPORTS.USER_LIST.filename}-${Date.now()}.csv`;
      link.click();
      window.URL.revokeObjectURL(url);

      toast.success(ADMIN_CONFIG.MESSAGES.SUCCESS.USERS_EXPORTED);
    } catch (error) {
      console.error('Export error:', error);
      toast.error(ADMIN_CONFIG.MESSAGES.ERROR.EXPORT_USERS);
    }
  }, [tokens?.accessToken]);

  /**
   * Download report
   */
  const handleDownloadReport = useCallback(async (reportId: string) => {
    try {
      const reportConfig = getReportConfig(reportId);
      if (!reportConfig) {
        toast.error('Report configuration not found');
        return;
      }

      const response = await fetch(
        `${ADMIN_CONFIG.API_BASE_URL}${reportConfig.endpoint}?format=csv`,
        {
          credentials: 'include',
          headers: {
            Authorization: `Bearer ${tokens?.accessToken}`
          }
        }
      );

      if (!response.ok) throw new Error('Report download failed');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${reportConfig.filename}-${Date.now()}.csv`;
      link.click();
      window.URL.revokeObjectURL(url);

      toast.success(ADMIN_CONFIG.MESSAGES.SUCCESS.REPORT_DOWNLOADED);
    } catch (error) {
      console.error('Report download error:', error);
      toast.error(ADMIN_CONFIG.MESSAGES.ERROR.DOWNLOAD_REPORT);
    }
  }, [tokens?.accessToken]);

  /**
   * Render dashboard stats cards
   */
  const renderDashboardStats = () => {
    if (!analytics) return null;

    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {ADMIN_CONFIG.DASHBOARD_STATS.map((stat) => (
          <Card key={stat.id}>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics[stat.key]}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.subtitle === 'percentage'
                  ? `${Math.round((analytics.activeUsers / analytics.totalUsers) * 100)}% of total`
                  : analytics[stat.subtitle] || stat.subtitle}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  /**
   * Render analytics cards
   */
  const renderAnalyticsCards = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {ADMIN_CONFIG.ANALYTICS_CARDS.map((card) => (
          <Card key={card.id}>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                {card.id === 'total-lessons' && <Activity className="h-4 w-4" />}
                {card.id === 'avg-score' && <Award className="h-4 w-4" />}
                {card.id === 'engagement' && <Clock className="h-4 w-4" />}
                {card.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics?.[card.key] || card.defaultValue}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  /**
   * Render reports section
   */
  const renderReports = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.values(ADMIN_CONFIG.REPORTS).map((report) => (
          <Card key={report.id} className="border">
            <CardHeader>
              <CardTitle className="text-base">{report.name}</CardTitle>
              <CardDescription>{report.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Includes: {report.columns.join(', ')}
              </p>
              <Button
                onClick={() => handleDownloadReport(report.id)}
                className={`w-full ${report.id === 'student-progress' ? ADMIN_CONFIG.COLORS.SUCCESS : ADMIN_CONFIG.COLORS.PRIMARY} ${report.id === 'student-progress' ? ADMIN_CONFIG.COLORS.SUCCESS_HOVER : ADMIN_CONFIG.COLORS.PRIMARY_HOVER}`}
              >
                <Download className="h-4 w-4 mr-2" />
                Download CSV
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Settings className="h-6 w-6 text-blue-600" />
              <h1 className="text-2xl font-bold">Admin Panel</h1>
            </div>
            <Badge variant="outline" className="text-base">
              {getRoleLabel(user?.role || 'user')}
            </Badge>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Tab Navigation */}
          <TabsList className="grid w-full grid-cols-5">
            {Object.entries(ADMIN_CONFIG.TABS).map(([key, value]) => (
              <TabsTrigger key={value} value={value} className="flex items-center gap-2">
                {value === ADMIN_CONFIG.TABS.DASHBOARD && <BarChart3 className="h-4 w-4" />}
                {value === ADMIN_CONFIG.TABS.USERS && <Users className="h-4 w-4" />}
                {value === ADMIN_CONFIG.TABS.REPORTS && <Download className="h-4 w-4" />}
                {value === ADMIN_CONFIG.TABS.CONTENT && <BookOpen className="h-4 w-4" />}
                {value === ADMIN_CONFIG.TABS.ANALYTICS && <TrendingUp className="h-4 w-4" />}
                {getTabLabel(value)}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value={ADMIN_CONFIG.TABS.DASHBOARD} className="space-y-6">
            {renderDashboardStats()}
            {analytics?.recentUsers && (
              <Card>
                <CardHeader>
                  <CardTitle>Recent Users</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {analytics.recentUsers.map((u) => (
                      <div key={u._id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{u.firstName} {u.lastName}</p>
                          <p className="text-sm text-muted-foreground">{u.email}</p>
                        </div>
                        <Badge variant="outline">{getRoleLabel(u.role)}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value={ADMIN_CONFIG.TABS.USERS} className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage all users in the system</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Filters */}
                <div className="flex gap-4 flex-wrap">
                  <div className="flex-1 relative min-w-[200px]">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search users..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentPage(ADMIN_CONFIG.DEFAULT_PAGE);
                      }}
                    />
                  </div>

                  <Select value={filterRole} onValueChange={(value) => {
                    setFilterRole(value);
                    setCurrentPage(ADMIN_CONFIG.DEFAULT_PAGE);
                  }}>
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {ADMIN_CONFIG.FILTER_OPTIONS.ROLES.map((role) => (
                        <SelectItem key={role.value} value={role.value}>
                          {role.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={filterStatus} onValueChange={(value) => {
                    setFilterStatus(value);
                    setCurrentPage(ADMIN_CONFIG.DEFAULT_PAGE);
                  }}>
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {ADMIN_CONFIG.FILTER_OPTIONS.STATUS.map((status) => (
                        <SelectItem key={status.value} value={status.value}>
                          {status.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Button onClick={fetchUsers} variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>

                  <Button onClick={handleExportUsers} variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>

                  <Button onClick={() => navigate('/admin/users/new')} className={ADMIN_CONFIG.COLORS.PRIMARY}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add User
                  </Button>
                </div>

                {/* Users List */}
                <div className="space-y-2">
                  {users.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      No users found. Click "Filter" to load users.
                    </div>
                  ) : (
                    users.map((u) => (
                      <div key={u._id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
                        <div className="flex-1">
                          <p className="font-medium">{u.firstName} {u.lastName}</p>
                          <p className="text-sm text-muted-foreground">{u.email}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={u.isActive ? 'default' : 'secondary'}>
                            {u.isActive ? 'Active' : 'Inactive'}
                          </Badge>

                          <Select value={u.role} onValueChange={(value) => handleRoleChange(u._id, value)}>
                            <SelectTrigger className="w-32">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {ADMIN_CONFIG.FILTER_OPTIONS.ROLES.filter(r => r.value !== 'all').map((role) => (
                                <SelectItem key={role.value} value={role.value}>
                                  {role.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>

                          <Button variant="ghost" size="sm" onClick={() => navigate(`/admin/users/${u._id}`)}>
                            <Edit className="h-4 w-4" />
                          </Button>

                          <Button variant="ghost" size="sm" onClick={() => handleDeleteUser(u._id)}>
                            <Trash2 className={`h-4 w-4 ${ADMIN_CONFIG.COLORS.DANGER}`} />
                          </Button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value={ADMIN_CONFIG.TABS.REPORTS} className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Download Reports</CardTitle>
                <CardDescription>Generate and download reports</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button onClick={() => navigate('/admin/reports')} variant="outline" className="w-full mb-4">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  View Student Progress Reports with Charts
                </Button>
                {renderReports()}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Content Tab */}
          <TabsContent value={ADMIN_CONFIG.TABS.CONTENT} className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Content Management</CardTitle>
                <CardDescription>Manage courses, modules, and lessons</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button onClick={() => navigate('/admin/content/new')} className={ADMIN_CONFIG.COLORS.PRIMARY}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Content
                </Button>
                <div className="text-center py-8 text-muted-foreground">
                  Content management interface coming soon
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value={ADMIN_CONFIG.TABS.ANALYTICS} className="space-y-6">
            {renderAnalyticsCards()}
            <Card>
              <CardHeader>
                <CardTitle>Analytics Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  Detailed analytics coming soon
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;
