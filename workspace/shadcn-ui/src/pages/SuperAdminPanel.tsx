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
import { Switch } from '@/components/ui/switch';
import {
  Crown,
  Users,
  Shield,
  Settings,
  Database,
  Server,
  Key,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Edit,
  Trash2,
  UserPlus,
  Lock,
  Unlock,
  Activity,
  BarChart3,
  Globe,
  Mail,
  Phone,
  Layout,
  FileImage,
  Cog,
  UserCheck
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { UserRole } from '@/types/auth';
import { toast } from 'sonner';
import CourseManager from '@/components/cms/CourseManager';
import MediaManager from '@/components/cms/MediaManager';
import QuizBuilder from '@/components/cms/QuizBuilder';
import GradingSystem from '@/components/cms/GradingSystem';

interface AdminUser {
  id: string;
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'admin' | 'superadmin';
  isActive: boolean;
  lastLogin?: string;
  permissions: string[];
  createdAt: string;
  adminData?: {
    permissions?: string[];
  };
}

interface SystemConfig {
  maintenanceMode: boolean;
  registrationEnabled: boolean;
  emailVerificationRequired: boolean;
  maxLoginAttempts: number;
  sessionTimeout: number;
  backupFrequency: string;
}

interface MonitoringStats {
  activeSessions: number;
  apiRequests: number;
  errorRate: number;
  sessionsChange: number;
}

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const SuperAdminPanel: React.FC = () => {
  const { user, hasPermission, tokens } = useAuth();
  const [activeTab, setActiveTab] = useState('admins');
  const [admins, setAdmins] = useState<AdminUser[]>([]);
  const [systemConfig, setSystemConfig] = useState<SystemConfig>({
    maintenanceMode: false,
    registrationEnabled: true,
    emailVerificationRequired: true,
    maxLoginAttempts: 5,
    sessionTimeout: 24,
    backupFrequency: 'daily'
  });
  const [monitoringStats, setMonitoringStats] = useState<MonitoringStats>({
    activeSessions: 0,
    apiRequests: 0,
    errorRate: 0,
    sessionsChange: 0
  });
  const [isLoading, setIsLoading] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState<AdminUser | null>(null);
  const [showAddAdminDialog, setShowAddAdminDialog] = useState(false);
  const [newAdminForm, setNewAdminForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'admin' as 'admin' | 'superadmin'
  });

  // Auth fetch helper
  const authFetch = async (path: string, options: RequestInit = {}) => {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      ...options,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokens?.accessToken}`,
        ...options.headers
      }
    });
    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'Request failed' }));
      throw new Error(error.message || 'Request failed');
    }
    return response.json();
  };

  // Fetch admin users from API
  const fetchAdmins = async () => {
    setIsLoading(true);
    try {
      // Fetch users with admin and superadmin roles
      const [adminRes, superAdminRes] = await Promise.all([
        authFetch('/admin/users?role=admin&limit=100'),
        authFetch('/admin/users?role=superadmin&limit=100')
      ]);
      
      const allAdmins: AdminUser[] = [
        ...(adminRes.data || []).map((u: any) => ({
          id: u._id || u.id,
          firstName: u.firstName,
          lastName: u.lastName,
          email: u.email,
          role: u.role as 'admin' | 'superadmin',
          isActive: u.isActive,
          lastLogin: u.lastLogin,
          permissions: u.adminData?.permissions || ['*'],
          createdAt: u.createdAt
        })),
        ...(superAdminRes.data || []).map((u: any) => ({
          id: u._id || u.id,
          firstName: u.firstName,
          lastName: u.lastName,
          email: u.email,
          role: u.role as 'admin' | 'superadmin',
          isActive: u.isActive,
          lastLogin: u.lastLogin,
          permissions: u.adminData?.permissions || ['*'],
          createdAt: u.createdAt
        }))
      ];
      
      setAdmins(allAdmins);
    } catch (error) {
      console.error('Failed to fetch admins:', error);
      toast.error('Failed to fetch admin users');
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch monitoring stats
  const fetchMonitoringStats = async () => {
    try {
      const dashboardRes = await authFetch('/admin/dashboard/stats');
      if (dashboardRes.data) {
        setMonitoringStats({
          activeSessions: dashboardRes.data.activeUsers || 0,
          apiRequests: dashboardRes.data.totalRequests || 0,
          errorRate: dashboardRes.data.errorRate || 0,
          sessionsChange: dashboardRes.data.sessionsChange || 0
        });
      }
    } catch (error) {
      console.error('Failed to fetch monitoring stats:', error);
    }
  };

  // Load data on mount
  useEffect(() => {
    if (user && tokens?.accessToken) {
      fetchAdmins();
      fetchMonitoringStats();
    }
  }, [user, tokens]);

  const handleSystemConfigUpdate = async (updates: Partial<SystemConfig>) => {
    setIsLoading(true);
    try {
      // Update system config via API (create endpoint if needed, for now update locally)
      // In production, this would call: await authFetch('/admin/system/config', { method: 'PUT', body: JSON.stringify(updates) });
      setSystemConfig(prev => ({ ...prev, ...updates }));
      toast.success('System configuration updated successfully');
    } catch (error) {
      toast.error('Failed to update system configuration');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAdminAction = async (action: string, adminId: string) => {
    setIsLoading(true);
    try {
      if (action === 'deactivate') {
        await authFetch(`/admin/users/${adminId}`, {
          method: 'PUT',
          body: JSON.stringify({ isActive: false })
        });
        setAdmins(prev => prev.map(admin =>
          admin.id === adminId ? { ...admin, isActive: false } : admin
        ));
        toast.success('Admin account deactivated');
      } else if (action === 'activate') {
        await authFetch(`/admin/users/${adminId}`, {
          method: 'PUT',
          body: JSON.stringify({ isActive: true })
        });
        setAdmins(prev => prev.map(admin =>
          admin.id === adminId ? { ...admin, isActive: true } : admin
        ));
        toast.success('Admin account activated');
      } else if (action === 'delete') {
        await authFetch(`/admin/users/${adminId}`, { method: 'DELETE' });
        setAdmins(prev => prev.filter(admin => admin.id !== adminId));
        toast.success('Admin account deleted');
      }
    } catch (error) {
      console.error('Admin action failed:', error);
      toast.error('Action failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRoleChange = async (adminId: string, newRole: 'admin' | 'superadmin') => {
    if (adminId === user?.id && newRole !== 'superadmin') {
      toast.error('Cannot change your own superadmin role');
      return;
    }

    setIsLoading(true);
    try {
      await authFetch(`/admin/users/${adminId}/role`, {
        method: 'PUT',
        body: JSON.stringify({ role: newRole })
      });

      setAdmins(prev => prev.map(admin =>
        admin.id === adminId ? { ...admin, role: newRole } : admin
      ));
      toast.success(`Admin role changed to ${newRole}`);
    } catch (error) {
      console.error('Failed to change role:', error);
      toast.error('Failed to change admin role');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddAdmin = async () => {
    if (!newAdminForm.firstName || !newAdminForm.lastName || !newAdminForm.email || !newAdminForm.password) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    try {
      console.log('📝 Creating new admin:', newAdminForm.email);
      
      const response = await authFetch('/admin/users', {
        method: 'POST',
        body: JSON.stringify({
          firstName: newAdminForm.firstName,
          lastName: newAdminForm.lastName,
          email: newAdminForm.email,
          password: newAdminForm.password,
          role: newAdminForm.role
        })
      });

      if (response.success) {
        const newAdmin: AdminUser = {
          id: response.data._id,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
          role: response.data.role,
          isActive: response.data.isActive,
          permissions: response.data.adminData?.permissions || ['*'],
          createdAt: response.data.createdAt
        };

        setAdmins(prev => [...prev, newAdmin]);
        setNewAdminForm({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          role: 'admin'
        });
        setShowAddAdminDialog(false);
        toast.success(`✅ Admin ${newAdminForm.email} created successfully`);
        console.log('✅ Admin created successfully');
      }
    } catch (error) {
      console.error('❌ Failed to create admin:', error);
      toast.error('Failed to create admin account');
    } finally {
      setIsLoading(false);
    }
  };

  if (!hasPermission('role', 'manage')) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Crown className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Super Admin Access Required</h2>
          <p className="text-gray-600">You don't have permission to access the super admin panel.</p>
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
              <h1 className="text-2xl font-bold text-gray-900">Super Admin Panel</h1>
              <p className="text-gray-600">Complete system administration and configuration</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="destructive" className="px-3 py-1">
                <Crown className="h-4 w-4 mr-2" />
                Super Admin
              </Badge>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                System Settings
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="admins">Admin Management</TabsTrigger>
            <TabsTrigger value="cms">CMS Control</TabsTrigger>
            <TabsTrigger value="system">System Config</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="grading">Grading</TabsTrigger>
            <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
          </TabsList>

          {/* Admin Management Tab */}
          <TabsContent value="admins" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Administrator Management</CardTitle>
                    <CardDescription>Manage admin and super admin accounts</CardDescription>
                  </div>
                  <Button onClick={() => setShowAddAdminDialog(true)}>
                    <UserPlus className="h-4 w-4 mr-2" />
                    Add Administrator
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {isLoading && admins.length === 0 ? (
                  <div className="flex items-center justify-center py-8">
                    <div className="text-center">
                      <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                      <p className="text-gray-500">Loading administrators...</p>
                    </div>
                  </div>
                ) : admins.length === 0 ? (
                  <div className="flex items-center justify-center py-8">
                    <div className="text-center">
                      <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500">No administrators found</p>
                      <p className="text-sm text-gray-400 mt-1">Add administrators to manage the system</p>
                    </div>
                  </div>
                ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Administrator</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Permissions</TableHead>
                      <TableHead>Last Login</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {admins.map((admin) => (
                      <TableRow key={admin.id}>
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                              <span className="text-sm font-medium text-purple-600">
                                {admin.firstName?.[0] || 'A'}{admin.lastName?.[0] || 'U'}
                              </span>
                            </div>
                            <div>
                              <div className="font-medium">{admin.firstName} {admin.lastName}</div>
                              <div className="text-sm text-gray-500">{admin.email}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Select
                            value={admin.role}
                            onValueChange={(value) => handleRoleChange(admin.id, value as 'admin' | 'superadmin')}
                            disabled={admin.id === user?.id}
                          >
                            <SelectTrigger className="w-32">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="admin">Admin</SelectItem>
                              <SelectItem value="superadmin">Super Admin</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            {admin.isActive ? (
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            ) : (
                              <XCircle className="h-4 w-4 text-red-500" />
                            )}
                            <span className={admin.isActive ? 'text-green-600' : 'text-red-600'}>
                              {admin.isActive ? 'Active' : 'Inactive'}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {admin.permissions.slice(0, 2).map((permission, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {permission}
                              </Badge>
                            ))}
                            {admin.permissions.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{admin.permissions.length - 2} more
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          {admin.lastLogin ? new Date(admin.lastLogin).toLocaleDateString() : 'Never'}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleAdminAction(
                                admin.isActive ? 'deactivate' : 'activate',
                                admin.id
                              )}
                              disabled={isLoading || admin.id === user?.id}
                            >
                              {admin.isActive ? (
                                <Lock className="h-4 w-4" />
                              ) : (
                                <Unlock className="h-4 w-4" />
                              )}
                            </Button>
                            {admin.id !== user?.id && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleAdminAction('delete', admin.id)}
                                disabled={isLoading}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* System Configuration Tab */}
          <TabsContent value="system" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>System Settings</CardTitle>
                  <CardDescription>Configure system-wide settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Maintenance Mode</Label>
                      <div className="text-sm text-gray-500">Put system in maintenance mode</div>
                    </div>
                    <Switch
                      checked={systemConfig.maintenanceMode}
                      onCheckedChange={(checked) =>
                        handleSystemConfigUpdate({ maintenanceMode: checked })
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>User Registration</Label>
                      <div className="text-sm text-gray-500">Allow new user registrations</div>
                    </div>
                    <Switch
                      checked={systemConfig.registrationEnabled}
                      onCheckedChange={(checked) =>
                        handleSystemConfigUpdate({ registrationEnabled: checked })
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Email Verification</Label>
                      <div className="text-sm text-gray-500">Require email verification for new accounts</div>
                    </div>
                    <Switch
                      checked={systemConfig.emailVerificationRequired}
                      onCheckedChange={(checked) =>
                        handleSystemConfigUpdate({ emailVerificationRequired: checked })
                      }
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Configure security parameters</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="maxAttempts">Max Login Attempts</Label>
                    <Input
                      id="maxAttempts"
                      type="number"
                      value={systemConfig.maxLoginAttempts}
                      onChange={(e) => setSystemConfig(prev => ({
                        ...prev,
                        maxLoginAttempts: parseInt(e.target.value) || 5
                      }))}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="sessionTimeout">Session Timeout (hours)</Label>
                    <Input
                      id="sessionTimeout"
                      type="number"
                      value={systemConfig.sessionTimeout}
                      onChange={(e) => setSystemConfig(prev => ({
                        ...prev,
                        sessionTimeout: parseInt(e.target.value) || 24
                      }))}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="backupFrequency">Backup Frequency</Label>
                    <Select
                      value={systemConfig.backupFrequency}
                      onValueChange={(value) => handleSystemConfigUpdate({ backupFrequency: value })}
                    >
                      <SelectTrigger className="mt-1">
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
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Security Overview</CardTitle>
                  <CardDescription>Current security status and alerts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <div>
                          <p className="font-medium text-green-800">SSL Certificate</p>
                          <p className="text-sm text-green-600">Valid until Dec 2024</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <AlertTriangle className="h-5 w-5 text-yellow-500" />
                        <div>
                          <p className="font-medium text-yellow-800">Failed Login Attempts</p>
                          <p className="text-sm text-yellow-600">12 attempts in last 24h</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Shield className="h-5 w-5 text-blue-500" />
                        <div>
                          <p className="font-medium text-blue-800">Two-Factor Auth</p>
                          <p className="text-sm text-blue-600">Enabled for 85% of admins</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Security Events</CardTitle>
                  <CardDescription>Latest security-related activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Suspicious Login Attempt</p>
                        <p className="text-xs text-gray-500">IP: 192.168.1.100 • 2 minutes ago</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <Key className="h-4 w-4 text-blue-500 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Password Changed</p>
                        <p className="text-xs text-gray-500">User: alice.admin • 15 minutes ago</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <Shield className="h-4 w-4 text-green-500 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Security Audit Completed</p>
                        <p className="text-xs text-gray-500">All systems secure • 1 hour ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* CMS Control Tab */}
          <TabsContent value="cms" className="mt-6">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Layout className="h-5 w-5" />
                    <span>Content Management System</span>
                  </CardTitle>
                  <CardDescription>Full control over all content, courses, and media</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="courses" className="space-y-4">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="courses">Course Management</TabsTrigger>
                      <TabsTrigger value="quizzes">Quiz Builder</TabsTrigger>
                      <TabsTrigger value="media">Media Library</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="courses">
                      <CourseManager />
                    </TabsContent>
                    
                    <TabsContent value="quizzes">
                      <QuizBuilder />
                    </TabsContent>
                    
                    <TabsContent value="media">
                      <MediaManager />
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Grading System Tab */}
          <TabsContent value="grading" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <UserCheck className="h-5 w-5" />
                  <span>Advanced Grading System</span>
                </CardTitle>
                <CardDescription>Manage grading, assessments, and student evaluations</CardDescription>
              </CardHeader>
              <CardContent>
                <GradingSystem />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Monitoring Tab */}
          <TabsContent value="monitoring" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Active Sessions</p>
                      <p className="text-2xl font-bold">{monitoringStats.activeSessions.toLocaleString()}</p>
                      <p className="text-xs text-green-600 flex items-center mt-1">
                        <Activity className="h-3 w-3 mr-1" />
                        {monitoringStats.sessionsChange >= 0 ? '+' : ''}{monitoringStats.sessionsChange}% from yesterday
                      </p>
                    </div>
                    <Activity className="h-8 w-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">API Requests</p>
                      <p className="text-2xl font-bold">{monitoringStats.apiRequests > 1000 ? `${(monitoringStats.apiRequests / 1000).toFixed(1)}K` : monitoringStats.apiRequests}</p>
                      <p className="text-xs text-blue-600 flex items-center mt-1">
                        <BarChart3 className="h-3 w-3 mr-1" />
                        Per hour average
                      </p>
                    </div>
                    <Globe className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Error Rate</p>
                      <p className="text-2xl font-bold">{monitoringStats.errorRate.toFixed(2)}%</p>
                      <p className="text-xs text-green-600 flex items-center mt-1">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        {monitoringStats.errorRate < 1 ? 'Below threshold' : 'Above threshold'}
                      </p>
                    </div>
                    <AlertTriangle className="h-8 w-8 text-yellow-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>System Performance</CardTitle>
                <CardDescription>Real-time system metrics and performance indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Server className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-500">Advanced monitoring dashboard coming soon...</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Integration with monitoring tools like DataDog, New Relic, or Prometheus
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Add Admin Dialog */}
        {showAddAdminDialog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <Card className="w-96 max-h-[80vh] overflow-y-auto">
              <CardHeader>
                <CardTitle>Add Administrator</CardTitle>
                <CardDescription>Create a new admin or super admin account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={newAdminForm.firstName}
                    onChange={(e) => setNewAdminForm(prev => ({ ...prev, firstName: e.target.value }))}
                    placeholder="Enter first name"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={newAdminForm.lastName}
                    onChange={(e) => setNewAdminForm(prev => ({ ...prev, lastName: e.target.value }))}
                    placeholder="Enter last name"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={newAdminForm.email}
                    onChange={(e) => setNewAdminForm(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="Enter email address"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={newAdminForm.password}
                    onChange={(e) => setNewAdminForm(prev => ({ ...prev, password: e.target.value }))}
                    placeholder="Enter password (min 8 characters)"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="role">Role</Label>
                  <Select
                    value={newAdminForm.role}
                    onValueChange={(value) => setNewAdminForm(prev => ({ ...prev, role: value as 'admin' | 'superadmin' }))}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="superadmin">Super Admin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex justify-end space-x-2 pt-4">
                  <Button
                    variant="outline"
                    onClick={() => setShowAddAdminDialog(false)}
                    disabled={isLoading}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleAddAdmin}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Creating...' : 'Create Admin'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default SuperAdminPanel;