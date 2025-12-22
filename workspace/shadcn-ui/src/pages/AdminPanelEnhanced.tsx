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
  Terminal
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

const AdminPanelEnhanced = () => {
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
   * Add IP to whitelist
   */
  const handleAddIpWhitelist = useCallback(async () => {
    if (!newIp) {
      toast.error('Please enter an IP address');
      return;
    }

    try {
      await authFetch('/admin/security/whitelist', {
        method: 'POST',
        body: JSON.stringify({ ip: newIp })
      });
      setIpWhitelist([...ipWhitelist, newIp]);
      setNewIp('');
      toast.success('IP added to whitelist');
    } catch (error) {
      toast.error('Failed to add IP to whitelist');
    }
  }, [authFetch, ipWhitelist, newIp]);

  /**
   * Remove IP from whitelist
   */
  const handleRemoveIpWhitelist = useCallback(async (ip: string) => {
    try {
      await authFetch(`/admin/security/whitelist/${ip}`, { method: 'DELETE' });
      setIpWhitelist(ipWhitelist.filter(item => item !== ip));
      toast.success('IP removed from whitelist');
    } catch (error) {
      toast.error('Failed to remove IP from whitelist');
    }
  }, [authFetch, ipWhitelist]);

  /**
   * Update grading configuration
   */
  const handleUpdateGradingConfig = useCallback(async () => {
    try {
      await authFetch('/admin/grading/config', {
        method: 'PUT',
        body: JSON.stringify(gradingConfig)
      });
      toast.success('Grading configuration updated');
    } catch (error) {
      toast.error('Failed to update grading configuration');
    }
  }, [authFetch, gradingConfig]);

  /**
   * Update system configuration
   */
  const handleUpdateSystemConfig = useCallback(async () => {
    try {
      await authFetch('/admin/system/config', {
        method: 'PUT',
        body: JSON.stringify(systemConfig)
      });
      toast.success('System configuration updated');
    } catch (error) {
      toast.error('Failed to update system configuration');
    }
  }, [authFetch, systemConfig]);

  /**
   * Export audit logs
   */
  const handleExportAuditLogs = useCallback(async () => {
    try {
      const response = await fetch(
        `${ADMIN_CONFIG.API_BASE_URL}/admin/audit-logs/export?format=csv`,
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
      link.download = `audit-logs-${Date.now()}.csv`;
      link.click();
      window.URL.revokeObjectURL(url);

      toast.success('Audit logs exported successfully');
    } catch (error) {
      toast.error('Failed to export audit logs');
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
   * Render security dashboard
   */
  const renderSecurityDashboard = () => {
    return (
      <div className="space-y-6">
        {/* Security Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600" />
              Security Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            {securityAlerts.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <CheckCircle className="h-8 w-8 mx-auto mb-2 text-green-600" />
                No security alerts
              </div>
            ) : (
              <div className="space-y-3">
                {securityAlerts.map((alert) => (
                  <div key={alert.id} className={`p-4 rounded-lg border ${
                    alert.type === 'error' ? 'border-red-200 bg-red-50' :
                    alert.type === 'warning' ? 'border-yellow-200 bg-yellow-50' :
                    'border-blue-200 bg-blue-50'
                  }`}>
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium">{alert.title}</p>
                        <p className="text-sm text-muted-foreground">{alert.description}</p>
                      </div>
                      <Badge variant={alert.resolved ? 'outline' : 'destructive'}>
                        {alert.resolved ? 'Resolved' : 'Active'}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Two-Factor Authentication */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              Two-Factor Authentication
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Enable 2FA for all admins</p>
                <p className="text-sm text-muted-foreground">Require two-factor authentication for admin accounts</p>
              </div>
              <Button
                onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
                variant={twoFactorEnabled ? 'default' : 'outline'}
              >
                {twoFactorEnabled ? <Unlock className="h-4 w-4 mr-2" /> : <Lock className="h-4 w-4 mr-2" />}
                {twoFactorEnabled ? 'Enabled' : 'Disabled'}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* IP Whitelist */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              IP Whitelist
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input
                placeholder="Enter IP address (e.g., 192.168.1.1)"
                value={newIp}
                onChange={(e) => setNewIp(e.target.value)}
              />
              <Button onClick={handleAddIpWhitelist}>Add</Button>
            </div>
            <div className="space-y-2">
              {ipWhitelist.map((ip) => (
                <div key={ip} className="flex items-center justify-between p-3 border rounded-lg">
                  <span className="font-mono text-sm">{ip}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleRemoveIpWhitelist(ip)}
                  >
                    <Trash2 className="h-4 w-4 text-red-600" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  /**
   * Render monitoring dashboard
   */
  const renderMonitoringDashboard = () => {
    if (!systemMetrics) return null;

    const getMetricColor = (value: number, threshold: number) => {
      if (value > threshold) return 'text-red-600';
      if (value > threshold * 0.7) return 'text-yellow-600';
      return 'text-green-600';
    };

    return (
      <div className="space-y-6">
        {/* System Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Cpu className="h-4 w-4" />
                CPU Usage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${getMetricColor(systemMetrics.cpuUsage, 80)}`}>
                {systemMetrics.cpuUsage}%
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div
                  className={`h-2 rounded-full ${
                    systemMetrics.cpuUsage > 80 ? 'bg-red-600' :
                    systemMetrics.cpuUsage > 60 ? 'bg-yellow-600' :
                    'bg-green-600'
                  }`}
                  style={{ width: `${systemMetrics.cpuUsage}%` }}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <HardDrive className="h-4 w-4" />
                Memory Usage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${getMetricColor(systemMetrics.memoryUsage, 85)}`}>
                {systemMetrics.memoryUsage}%
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div
                  className={`h-2 rounded-full ${
                    systemMetrics.memoryUsage > 85 ? 'bg-red-600' :
                    systemMetrics.memoryUsage > 70 ? 'bg-yellow-600' :
                    'bg-green-600'
                  }`}
                  style={{ width: `${systemMetrics.memoryUsage}%` }}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Database className="h-4 w-4" />
                Disk Usage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${getMetricColor(systemMetrics.diskUsage, 90)}`}>
                {systemMetrics.diskUsage}%
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div
                  className={`h-2 rounded-full ${
                    systemMetrics.diskUsage > 90 ? 'bg-red-600' :
                    systemMetrics.diskUsage > 75 ? 'bg-yellow-600' :
                    'bg-green-600'
                  }`}
                  style={{ width: `${systemMetrics.diskUsage}%` }}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Requests/sec
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemMetrics.requestsPerSecond}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <AlertOctagon className="h-4 w-4" />
                Error Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${getMetricColor(systemMetrics.errorRate, 5)}`}>
                {systemMetrics.errorRate}%
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Response Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemMetrics.responseTime}ms</div>
            </CardContent>
          </Card>
        </div>

        {/* Audit Logs */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Audit Logs
              </span>
              <Button onClick={handleExportAuditLogs} variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {auditLogs.map((log, index) => (
                <div key={index} className="p-3 border rounded-lg text-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{log.action}</span>
                    <Badge variant="outline">{log.status}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {log.userId?.firstName} {log.userId?.lastName} - {new Date(log.createdAt).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  /**
   * Render grading configuration
   */
  const renderGradingDashboard = () => {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Grading Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Score Thresholds */}
            <div className="space-y-4">
              <h3 className="font-semibold">Score Thresholds</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Passing Score</label>
                  <Input
                    type="number"
                    min="0"
                    max="100"
                    value={gradingConfig.passingScore}
                    onChange={(e) => setGradingConfig({
                      ...gradingConfig,
                      passingScore: parseInt(e.target.value)
                    })}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Excellent Score</label>
                  <Input
                    type="number"
                    min="0"
                    max="100"
                    value={gradingConfig.excellentScore}
                    onChange={(e) => setGradingConfig({
                      ...gradingConfig,
                      excellentScore: parseInt(e.target.value)
                    })}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Good Score</label>
                  <Input
                    type="number"
                    min="0"
                    max="100"
                    value={gradingConfig.goodScore}
                    onChange={(e) => setGradingConfig({
                      ...gradingConfig,
                      goodScore: parseInt(e.target.value)
                    })}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Average Score</label>
                  <Input
                    type="number"
                    min="0"
                    max="100"
                    value={gradingConfig.averageScore}
                    onChange={(e) => setGradingConfig({
                      ...gradingConfig,
                      averageScore: parseInt(e.target.value)
                    })}
                  />
                </div>
              </div>
            </div>

            {/* Weightage */}
            <div className="space-y-4">
              <h3 className="font-semibold">Assessment Weightage</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium">Quizzes (%)</label>
                  <Input
                    type="number"
                    min="0"
                    max="100"
                    value={gradingConfig.weightage.quizzes}
                    onChange={(e) => setGradingConfig({
                      ...gradingConfig,
                      weightage: {
                        ...gradingConfig.weightage,
                        quizzes: parseInt(e.target.value)
                      }
                    })}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Assignments (%)</label>
                  <Input
                    type="number"
                    min="0"
                    max="100"
                    value={gradingConfig.weightage.assignments}
                    onChange={(e) => setGradingConfig({
                      ...gradingConfig,
                      weightage: {
                        ...gradingConfig.weightage,
                        assignments: parseInt(e.target.value)
                      }
                    })}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Participation (%)</label>
                  <Input
                    type="number"
                    min="0"
                    max="100"
                    value={gradingConfig.weightage.participation}
                    onChange={(e) => setGradingConfig({
                      ...gradingConfig,
                      weightage: {
                        ...gradingConfig.weightage,
                        participation: parseInt(e.target.value)
                      }
                    })}
                  />
                </div>
              </div>

              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm">
                  Total Weightage: {gradingConfig.weightage.quizzes + gradingConfig.weightage.assignments + gradingConfig.weightage.participation}%
                </p>
              </div>
            </div>

            <Button onClick={handleUpdateGradingConfig} className="w-full">
              <RefreshCw className="h-4 w-4 mr-2" />
              Save Grading Configuration
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  };

  /**
   * Render system configuration
   */
  const renderSystemConfigDashboard = () => {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              System Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Maintenance Mode */}
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium">Maintenance Mode</p>
                <p className="text-sm text-muted-foreground">Temporarily disable access for maintenance</p>
              </div>
              <Button
                onClick={() => setSystemConfig({
                  ...systemConfig,
                  maintenanceMode: !systemConfig.maintenanceMode
                })}
                variant={systemConfig.maintenanceMode ? 'destructive' : 'outline'}
              >
                {systemConfig.maintenanceMode ? 'Enabled' : 'Disabled'}
              </Button>
            </div>

            {/* Upload Size */}
            <div>
              <label className="text-sm font-medium">Max Upload Size (MB)</label>
              <Input
                type="number"
                min="1"
                max="1000"
                value={systemConfig.maxUploadSize}
                onChange={(e) => setSystemConfig({
                  ...systemConfig,
                  maxUploadSize: parseInt(e.target.value)
                })}
              />
            </div>

            {/* Session Timeout */}
            <div>
              <label className="text-sm font-medium">Session Timeout (minutes)</label>
              <Input
                type="number"
                min="5"
                max="1440"
                value={systemConfig.sessionTimeout}
                onChange={(e) => setSystemConfig({
                  ...systemConfig,
                  sessionTimeout: parseInt(e.target.value)
                })}
              />
            </div>

            {/* Password Expiry */}
            <div>
              <label className="text-sm font-medium">Password Expiry (days)</label>
              <Input
                type="number"
                min="0"
                max="365"
                value={systemConfig.passwordExpiry}
                onChange={(e) => setSystemConfig({
                  ...systemConfig,
                  passwordExpiry: parseInt(e.target.value)
                })}
              />
            </div>

            {/* API Rate Limit */}
            <div>
              <label className="text-sm font-medium">API Rate Limit (requests/hour)</label>
              <Input
                type="number"
                min="100"
                max="10000"
                value={systemConfig.apiRateLimit}
                onChange={(e) => setSystemConfig({
                  ...systemConfig,
                  apiRateLimit: parseInt(e.target.value)
                })}
              />
            </div>

            {/* Backup Frequency */}
            <div>
              <label className="text-sm font-medium">Backup Frequency</label>
              <Select value={systemConfig.backupFrequency} onValueChange={(value) => setSystemConfig({
                ...systemConfig,
                backupFrequency: value
              })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hourly">Hourly</SelectItem>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button onClick={handleUpdateSystemConfig} className="w-full">
              <RefreshCw className="h-4 w-4 mr-2" />
              Save System Configuration
            </Button>
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
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-9">
            <TabsTrigger value={ADMIN_CONFIG.TABS.DASHBOARD} className="text-xs lg:text-sm">
              <BarChart3 className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value={ADMIN_CONFIG.TABS.USERS} className="text-xs lg:text-sm">
              <Users className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Users</span>
            </TabsTrigger>
            <TabsTrigger value={ADMIN_CONFIG.TABS.SECURITY} className="text-xs lg:text-sm">
              <Shield className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Security</span>
            </TabsTrigger>
            <TabsTrigger value={ADMIN_CONFIG.TABS.MONITORING} className="text-xs lg:text-sm">
              <Activity className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Monitor</span>
            </TabsTrigger>
            <TabsTrigger value={ADMIN_CONFIG.TABS.GRADING} className="text-xs lg:text-sm">
              <Award className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Grading</span>
            </TabsTrigger>
            <TabsTrigger value={ADMIN_CONFIG.TABS.SYSTEM_CONFIG} className="text-xs lg:text-sm">
              <Gauge className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Config</span>
            </TabsTrigger>
            <TabsTrigger value={ADMIN_CONFIG.TABS.REPORTS} className="text-xs lg:text-sm">
              <Download className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Reports</span>
            </TabsTrigger>
            <TabsTrigger value={ADMIN_CONFIG.TABS.CONTENT} className="text-xs lg:text-sm">
              <BookOpen className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Content</span>
            </TabsTrigger>
            <TabsTrigger value={ADMIN_CONFIG.TABS.ANALYTICS} className="text-xs lg:text-sm">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Analytics</span>
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

          {/* Security Tab */}
          <TabsContent value={ADMIN_CONFIG.TABS.SECURITY} className="space-y-6">
            {renderSecurityDashboard()}
          </TabsContent>

          {/* Monitoring Tab */}
          <TabsContent value={ADMIN_CONFIG.TABS.MONITORING} className="space-y-6">
            {renderMonitoringDashboard()}
          </TabsContent>

          {/* Grading Tab */}
          <TabsContent value={ADMIN_CONFIG.TABS.GRADING} className="space-y-6">
            {renderGradingDashboard()}
          </TabsContent>

          {/* System Config Tab */}
          <TabsContent value={ADMIN_CONFIG.TABS.SYSTEM_CONFIG} className="space-y-6">
            {renderSystemConfigDashboard()}
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value={ADMIN_CONFIG.TABS.REPORTS} className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Download Reports</CardTitle>
                <CardDescription>Generate and download reports</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
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
                        <Button className="w-full">
                          <Download className="h-4 w-4 mr-2" />
                          Download CSV
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
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

export default AdminPanelEnhanced;
