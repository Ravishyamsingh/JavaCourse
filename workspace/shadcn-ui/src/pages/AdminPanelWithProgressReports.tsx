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
import StudentProgressReports from '@/components/dashboard/StudentProgressReports';
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
  FileText,
  LogOut,
  Server,
  HardDrive,
  Cpu,
  Network,
  Wifi,
  AlertOctagon,
  TrendingDown,
  Target,
  Star,
  Layers,
  Code,
  Terminal,
  UserPlus,
  UserMinus
} from 'lucide-react';
import { ADMIN_CONFIG, getRoleLabel, getTabLabel, getReportConfig } from '@/config/adminConfig';

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  isActive: boolean;
  createdAt: string;
  lastLogin?: string;
}

interface Analytics {
  totalUsers: number;
  activeUsers: number;
  adminUsers: number;
  newUsersThisMonth: number;
  recentUsers: User[];
  [key: string]: any;
}

interface SecurityAlert {
  id: string;
  type: 'warning' | 'error' | 'info';
  title: string;
  description: string;
  timestamp: Date;
  resolved: boolean;
}

interface SystemMetrics {
  cpuUsage: number;
  memoryUsage: number;
  diskUsage: number;
  uptime: number;
  requestsPerSecond: number;
  errorRate: number;
  responseTime: number;
  databaseConnections: number;
}

interface GradingConfig {
  passingScore: number;
  excellentScore: number;
  goodScore: number;
  averageScore: number;
  poorScore: number;
  weightage: {
    quizzes: number;
    assignments: number;
    participation: number;
  };
}

interface NewUserForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
}

const AdminPanelWithProgressReports = () => {
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
  
  // New User Form State
  const [showNewUserForm, setShowNewUserForm] = useState(false);
  const [newUserForm, setNewUserForm] = useState<NewUserForm>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'user'
  });
  
  // Security State
  const [securityAlerts, setSecurityAlerts] = useState<SecurityAlert[]>([]);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState<boolean>(false);
  const [ipWhitelist, setIpWhitelist] = useState<string[]>([]);
  const [newIp, setNewIp] = useState<string>('');
  
  // Monitoring State
  const [systemMetrics, setSystemMetrics] = useState<SystemMetrics | null>(null);
  const [auditLogs, setAuditLogs] = useState<any[]>([]);
  const [logFilter, setLogFilter] = useState<string>('all');
  
  // Grading State
  const [gradingConfig, setGradingConfig] = useState<GradingConfig>({
    passingScore: 60,
    excellentScore: 90,
    goodScore: 75,
    averageScore: 60,
    poorScore: 40,
    weightage: {
      quizzes: 50,
      assignments: 30,
      participation: 20
    }
  });
  
  // System Config State
  const [systemConfig, setSystemConfig] = useState<any>({
    maintenanceMode: false,
    maxUploadSize: 10,
    sessionTimeout: 30,
    passwordExpiry: 90,
    apiRateLimit: 1000,
    backupFrequency: 'daily'
  });

  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

  // Authorization Check
  useEffect(() => {
    if (!user || !Object.values(ADMIN_CONFIG.USER_ROLES).includes(user.role)) {
      navigate('/dashboard');
      return;
    }
    fetchDashboardData();
    fetchSecurityAlerts();
    fetchSystemMetrics();
    fetchAuditLogs();
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
   * Fetch security alerts
   */
  const fetchSecurityAlerts = useCallback(async () => {
    try {
      const response = await authFetch('/admin/security/alerts');
      setSecurityAlerts(response.data || []);
    } catch (error) {
      console.error('Security alerts fetch error:', error);
    }
  }, [authFetch]);

  /**
   * Fetch system metrics
   */
  const fetchSystemMetrics = useCallback(async () => {
    try {
      const response = await authFetch('/admin/monitoring/metrics');
      setSystemMetrics(response.data);
    } catch (error) {
      console.error('System metrics fetch error:', error);
    }
  }, [authFetch]);

  /**
   * Fetch audit logs
   */
  const fetchAuditLogs = useCallback(async () => {
    try {
      const response = await authFetch('/admin/audit-logs?limit=50');
      setAuditLogs(response.data || []);
    } catch (error) {
      console.error('Audit logs fetch error:', error);
    }
  }, [authFetch]);

  /**
   * Create new user
   */
  const handleCreateUser = useCallback(async () => {
    if (!newUserForm.firstName || !newUserForm.lastName || !newUserForm.email || !newUserForm.password) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      const response = await authFetch('/admin/users', {
        method: 'POST',
        body: JSON.stringify(newUserForm)
      });

      if (response.success) {
        toast.success('User created successfully');
        setShowNewUserForm(false);
        setNewUserForm({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          role: 'user'
        });
        fetchUsers();
      }
    } catch (error) {
      console.error('Create user error:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to create user');
    }
  }, [authFetch, newUserForm, fetchUsers]);

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
      const response = await authFetch(`/admin/users/${userId}/role`, {
        method: 'PUT',
        body: JSON.stringify({ role: newRole })
      });

      if (response.success) {
        toast.success(`${ADMIN_CONFIG.MESSAGES.SUCCESS.ROLE_UPDATED} (${getRoleLabel(newRole)})`);
        fetchUsers();
      } else {
        toast.error(response.message || ADMIN_CONFIG.MESSAGES.ERROR.UPDATE_ROLE);
      }
    } catch (error) {
      console.error('Role change error:', error);
      const errorMessage = error instanceof Error ? error.message : ADMIN_CONFIG.MESSAGES.ERROR.UPDATE_ROLE;
      toast.error(errorMessage);
    }
  }, [authFetch, fetchUsers]);

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
   * Render user management section
   */
  const renderUserManagement = () => {
    return (
      <div className="space-y-6">
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

              <Button onClick={() => setShowNewUserForm(!showNewUserForm)} className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Add User
              </Button>
            </div>

            {/* New User Form */}
            {showNewUserForm && (
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg">Create New User</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">First Name</label>
                      <Input
                        placeholder="First name"
                        value={newUserForm.firstName}
                        onChange={(e) => setNewUserForm({ ...newUserForm, firstName: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Last Name</label>
                      <Input
                        placeholder="Last name"
                        value={newUserForm.lastName}
                        onChange={(e) => setNewUserForm({ ...newUserForm, lastName: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Email</label>
                      <Input
                        type="email"
                        placeholder="Email"
                        value={newUserForm.email}
                        onChange={(e) => setNewUserForm({ ...newUserForm, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Password</label>
                      <Input
                        type="password"
                        placeholder="Password (min 8 characters)"
                        value={newUserForm.password}
                        onChange={(e) => setNewUserForm({ ...newUserForm, password: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Role</label>
                      <Select value={newUserForm.role} onValueChange={(value) => setNewUserForm({ ...newUserForm, role: value })}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="user">User</SelectItem>
                          <SelectItem value="admin">Admin</SelectItem>
                          <SelectItem value="superadmin">Super Admin</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={handleCreateUser} className="bg-green-600 hover:bg-green-700">
                      <UserPlus className="h-4 w-4 mr-2" />
                      Create User
                    </Button>
                    <Button onClick={() => setShowNewUserForm(false)} variant="outline">
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

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
                        <Trash2 className="h-4 w-4 text-red-600" />
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
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
              <h1 className="text-2xl font-bold">Admin Control Panel</h1>
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
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-5">
            <TabsTrigger value={ADMIN_CONFIG.TABS.DASHBOARD} className="text-xs lg:text-sm">
              <BarChart3 className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value={ADMIN_CONFIG.TABS.USERS} className="text-xs lg:text-sm">
              <Users className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Users</span>
            </TabsTrigger>
            <TabsTrigger value="progress-reports" className="text-xs lg:text-sm">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Progress</span>
            </TabsTrigger>
            <TabsTrigger value={ADMIN_CONFIG.TABS.SECURITY} className="text-xs lg:text-sm">
              <Shield className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Security</span>
            </TabsTrigger>
            <TabsTrigger value={ADMIN_CONFIG.TABS.MONITORING} className="text-xs lg:text-sm">
              <Activity className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Monitor</span>
            </TabsTrigger>
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
            {renderUserManagement()}
          </TabsContent>

          {/* Progress Reports Tab */}
          <TabsContent value="progress-reports" className="space-y-6">
            <StudentProgressReports />
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value={ADMIN_CONFIG.TABS.SECURITY} className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Security Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Security features coming soon</p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Monitoring Tab */}
          <TabsContent value={ADMIN_CONFIG.TABS.MONITORING} className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>System Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Monitoring features coming soon</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanelWithProgressReports;
