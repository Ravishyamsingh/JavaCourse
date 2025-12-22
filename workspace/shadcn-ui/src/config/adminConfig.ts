/**
 * Admin Panel Configuration
 * All hardcoded values are centralized here for easy maintenance
 */

export const ADMIN_CONFIG = {
  // API Configuration
  API_BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  
  // Pagination
  DEFAULT_PAGE_SIZE: 20,
  DEFAULT_PAGE: 1,
  
  // User Roles
  USER_ROLES: {
    USER: 'user',
    ADMIN: 'admin',
    SUPERADMIN: 'superadmin'
  },
  
  // Tab Configuration
  TABS: {
    DASHBOARD: 'dashboard',
    USERS: 'users',
    REPORTS: 'reports',
    CONTENT: 'content',
    ANALYTICS: 'analytics',
    SECURITY: 'security',
    GRADING: 'grading',
    MONITORING: 'monitoring',
    SYSTEM_CONFIG: 'system-config',
    AUDIT_LOGS: 'audit-logs',
    PERMISSIONS: 'permissions'
  },
  
  // Report Configuration
  REPORTS: {
    STUDENT_PROGRESS: {
      id: 'student-progress',
      name: 'Student Progress Report',
      description: 'Download student progress data',
      columns: ['name', 'email', 'lessonsCompleted', 'quizzesAttempted', 'totalScore'],
      endpoint: '/admin/reports/student-progress/download',
      filename: 'student-progress'
    },
    USER_LIST: {
      id: 'user-list',
      name: 'User List Report',
      description: 'Download all users data',
      columns: ['name', 'email', 'role', 'status', 'createdAt', 'lastLogin'],
      endpoint: '/admin/users/export',
      filename: 'users'
    },
    AUDIT_LOGS: {
      id: 'audit-logs',
      name: 'Audit Logs Report',
      description: 'Download audit logs data',
      columns: ['action', 'resource', 'userId', 'status', 'createdAt'],
      endpoint: '/admin/audit-logs/export',
      filename: 'audit-logs'
    },
    SECURITY_ALERTS: {
      id: 'security-alerts',
      name: 'Security Alerts Report',
      description: 'Download security alerts data',
      columns: ['type', 'title', 'severity', 'resolved', 'createdAt'],
      endpoint: '/admin/security/alerts/export',
      filename: 'security-alerts'
    }
  },
  
  // Dashboard Stats Cards
  DASHBOARD_STATS: [
    {
      id: 'total-users',
      title: 'Total Users',
      key: 'totalUsers',
      subtitle: 'activeUsers'
    },
    {
      id: 'active-users',
      title: 'Active Users',
      key: 'activeUsers',
      subtitle: 'percentage'
    },
    {
      id: 'admin-users',
      title: 'Admin Users',
      key: 'adminUsers',
      subtitle: 'Admins & SuperAdmins'
    },
    {
      id: 'new-this-month',
      title: 'New This Month',
      key: 'newUsersThisMonth',
      subtitle: 'New registrations'
    }
  ],
  
  // Analytics Cards
  ANALYTICS_CARDS: [
    {
      id: 'total-lessons',
      title: 'Total Lessons',
      key: 'totalLessons',
      defaultValue: 0
    },
    {
      id: 'avg-score',
      title: 'Avg Score',
      key: 'avgScore',
      defaultValue: '0%'
    },
    {
      id: 'engagement',
      title: 'Engagement',
      key: 'engagement',
      defaultValue: '0%'
    }
  ],
  
  // Security Alert Types
  SECURITY_ALERT_TYPES: [
    { value: 'warning', label: 'Warning', color: 'yellow' },
    { value: 'error', label: 'Error', color: 'red' },
    { value: 'info', label: 'Info', color: 'blue' }
  ],
  
  // Security Alert Severity
  SECURITY_ALERT_SEVERITY: [
    { value: 'low', label: 'Low', color: 'green' },
    { value: 'medium', label: 'Medium', color: 'yellow' },
    { value: 'high', label: 'High', color: 'orange' },
    { value: 'critical', label: 'Critical', color: 'red' }
  ],
  
  // Grading Scales
  GRADING_SCALES: [
    { min: 90, max: 100, grade: 'A', label: 'Excellent' },
    { min: 80, max: 89, grade: 'B', label: 'Good' },
    { min: 70, max: 79, grade: 'C', label: 'Average' },
    { min: 60, max: 69, grade: 'D', label: 'Fair' },
    { min: 0, max: 59, grade: 'F', label: 'Poor' }
  ],
  
  // System Health Status
  SYSTEM_HEALTH_STATUS: {
    HEALTHY: 'healthy',
    WARNING: 'warning',
    CRITICAL: 'critical'
  },
  
  // Backup Frequencies
  BACKUP_FREQUENCIES: [
    { value: 'hourly', label: 'Hourly' },
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' }
  ],
  
  // Filter Options
  FILTER_OPTIONS: {
    ROLES: [
      { value: 'all', label: 'All Roles' },
      { value: 'user', label: 'User' },
      { value: 'admin', label: 'Admin' },
      { value: 'superadmin', label: 'Super Admin' }
    ],
    STATUS: [
      { value: 'all', label: 'All Status' },
      { value: 'active', label: 'Active' },
      { value: 'inactive', label: 'Inactive' }
    ],
    ALERT_STATUS: [
      { value: 'all', label: 'All Status' },
      { value: 'resolved', label: 'Resolved' },
      { value: 'unresolved', label: 'Unresolved' }
    ]
  },
  
  // Messages
  MESSAGES: {
    SUCCESS: {
      ROLE_UPDATED: 'Role updated successfully',
      USER_DELETED: 'User deleted successfully',
      USERS_EXPORTED: 'Users exported successfully',
      REPORT_DOWNLOADED: 'Report downloaded successfully',
      CONFIG_UPDATED: 'Configuration updated successfully',
      ALERT_RESOLVED: 'Alert resolved successfully',
      IP_ADDED: 'IP address added to whitelist',
      IP_REMOVED: 'IP address removed from whitelist'
    },
    ERROR: {
      FETCH_DASHBOARD: 'Failed to fetch dashboard data',
      FETCH_USERS: 'Failed to fetch users',
      DELETE_USER: 'Failed to delete user',
      UPDATE_ROLE: 'Failed to update role',
      EXPORT_USERS: 'Failed to export users',
      DOWNLOAD_REPORT: 'Failed to download report',
      PERMISSION_DENIED: 'Permission denied. Please check your access level.',
      INVALID_CONFIG: 'Invalid configuration provided',
      FETCH_ALERTS: 'Failed to fetch security alerts',
      FETCH_METRICS: 'Failed to fetch system metrics'
    },
    CONFIRMATION: {
      DELETE_USER: 'Are you sure you want to delete this user?',
      RESOLVE_ALERT: 'Mark this alert as resolved?',
      ENABLE_MAINTENANCE: 'Enable maintenance mode? Users will be unable to access the system.'
    }
  },
  
  // Colors
  COLORS: {
    PRIMARY: 'bg-blue-600',
    PRIMARY_HOVER: 'hover:bg-blue-700',
    SUCCESS: 'bg-green-600',
    SUCCESS_HOVER: 'hover:bg-green-700',
    DANGER: 'text-red-600',
    WARNING: 'text-yellow-600',
    INFO: 'text-blue-600'
  },
  
  // Metric Thresholds
  METRIC_THRESHOLDS: {
    CPU_WARNING: 70,
    CPU_CRITICAL: 85,
    MEMORY_WARNING: 75,
    MEMORY_CRITICAL: 90,
    DISK_WARNING: 80,
    DISK_CRITICAL: 95,
    ERROR_RATE_WARNING: 2,
    ERROR_RATE_CRITICAL: 5,
    RESPONSE_TIME_WARNING: 500,
    RESPONSE_TIME_CRITICAL: 1000
  },
  
  // Timeouts
  TIMEOUTS: {
    FETCH: 30000,
    DEBOUNCE: 300,
    REFRESH_METRICS: 5000
  },
  
  // Permissions
  PERMISSIONS: {
    USER_MANAGEMENT: 'user:manage',
    SECURITY_MANAGEMENT: 'security:manage',
    SYSTEM_CONFIG: 'system:configure',
    GRADING_CONFIG: 'grading:configure',
    AUDIT_LOGS: 'audit:view',
    REPORTS: 'reports:download'
  }
};

export const getReportConfig = (reportId: string) => {
  const reports = Object.values(ADMIN_CONFIG.REPORTS);
  return reports.find(r => r.id === reportId);
};

export const getRoleLabel = (role: string): string => {
  const roleMap: Record<string, string> = {
    [ADMIN_CONFIG.USER_ROLES.USER]: 'User',
    [ADMIN_CONFIG.USER_ROLES.ADMIN]: 'Admin',
    [ADMIN_CONFIG.USER_ROLES.SUPERADMIN]: 'Super Admin'
  };
  return roleMap[role] || role;
};

export const getTabLabel = (tabId: string): string => {
  const tabMap: Record<string, string> = {
    [ADMIN_CONFIG.TABS.DASHBOARD]: 'Dashboard',
    [ADMIN_CONFIG.TABS.USERS]: 'Users',
    [ADMIN_CONFIG.TABS.REPORTS]: 'Reports',
    [ADMIN_CONFIG.TABS.CONTENT]: 'Content',
    [ADMIN_CONFIG.TABS.ANALYTICS]: 'Analytics'
  };
  return tabMap[tabId] || tabId;
};
