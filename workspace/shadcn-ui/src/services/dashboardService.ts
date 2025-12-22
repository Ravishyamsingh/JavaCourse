import { API_BASE_URL } from '@/lib/api';

export interface UserStats {
  active: number;
  deactivated: number;
  engaged: number;
  completed: number;
}

export interface CourseProgress {
  userId: string;
  userName: string;
  courseId: string;
  courseName: string;
  progress: number;
  lessonsCompleted: number;
  totalLessons: number;
  score: number;
  status: 'in-progress' | 'completed' | 'not-started';
}

export interface DashboardMetrics {
  totalUsers: number;
  activeUsers: number;
  inactiveUsers: number;
  engagedUsers: number;
  completedUsers: number;
  averageProgress: number;
  totalCoursesCompleted: number;
  averageScore: number;
  engagementRate: number;
}

export interface UserDistribution {
  active: number;
  deactivated: number;
  engaged: number;
  completed: number;
}

export interface ProgressData {
  date: string;
  lessonsCompleted: number;
  quizzesAttempted: number;
  studyTime: number;
  scoreEarned: number;
}

export interface PerformanceMetrics {
  totalAttempts: number;
  averageScore: number;
  highestScore: number;
  lowestScore: number;
  scoreDistribution: {
    excellent: number;
    good: number;
    average: number;
    poor: number;
  };
}

export interface ReportData {
  name: string;
  email: string;
  role: string;
  status: string;
  lessonsCompleted: number;
  quizzesAttempted: number;
  totalScore: number;
  certificatesEarned: number;
  studyStreak: number;
  totalStudyTime: number;
  joinedDate: string;
  lastLogin: string;
}

class DashboardService {
  private baseUrl: string;
  private accessToken: string | null = null;

  constructor() {
    this.baseUrl = API_BASE_URL;
  }

  setAccessToken(token: string) {
    this.accessToken = token;
  }

  private async fetchWithAuth(endpoint: string, options: RequestInit = {}) {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...options,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...(this.accessToken && { Authorization: `Bearer ${this.accessToken}` }),
        ...options.headers
      }
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || `API Error: ${response.status}`);
    }

    return response.json();
  }

  // Dashboard Metrics
  async getDashboardMetrics(): Promise<DashboardMetrics> {
    const response = await this.fetchWithAuth('/admin/dashboard/stats');
    return this.calculateMetrics(response.data);
  }

  private calculateMetrics(data: any): DashboardMetrics {
    const totalUsers = data.totalUsers || 0;
    const activeUsers = data.activeUsers || 0;
    const inactiveUsers = data.inactiveUsers || 0;

    return {
      totalUsers,
      activeUsers,
      inactiveUsers,
      engagedUsers: Math.floor(activeUsers * 0.7),
      completedUsers: Math.floor(activeUsers * 0.3),
      averageProgress: 65,
      totalCoursesCompleted: data.totalCoursesCompleted || 0,
      averageScore: data.averageScore || 0,
      engagementRate: totalUsers > 0 ? Math.round((activeUsers / totalUsers) * 100) : 0
    };
  }

  // User Distribution
  async getUserDistribution(): Promise<UserDistribution> {
    const metrics = await this.getDashboardMetrics();
    return {
      active: metrics.activeUsers,
      deactivated: metrics.inactiveUsers,
      engaged: metrics.engagedUsers,
      completed: metrics.completedUsers
    };
  }

  // Course Progress
  async getCourseProgress(filters?: {
    userId?: string;
    courseId?: string;
    status?: string;
  }): Promise<CourseProgress[]> {
    const params = new URLSearchParams();
    if (filters?.userId) params.append('userId', filters.userId);
    if (filters?.courseId) params.append('courseId', filters.courseId);
    if (filters?.status) params.append('status', filters.status);

    const response = await this.fetchWithAuth(
      `/admin/analytics/courses?${params.toString()}`
    );
    return response.data || [];
  }

  // Performance Metrics
  async getPerformanceMetrics(): Promise<PerformanceMetrics> {
    const response = await this.fetchWithAuth('/admin/analytics/performance');
    return response.data;
  }

  // Time Series Data
  async getTimeSeriesData(days: number = 30): Promise<ProgressData[]> {
    const response = await this.fetchWithAuth(
      `/admin/analytics/time-series?days=${days}`
    );
    
    const data = response.data || {};
    return Object.entries(data).map(([date, metrics]: [string, any]) => ({
      date,
      lessonsCompleted: metrics.lessonsCompleted || 0,
      quizzesAttempted: metrics.quizzesAttempted || 0,
      studyTime: metrics.studyTime || 0,
      scoreEarned: metrics.scoreEarned || 0
    }));
  }

  // Completion Rate
  async getCompletionRate() {
    const response = await this.fetchWithAuth('/admin/analytics/completion-rate');
    return response.data;
  }

  // User Progress Analytics
  async getUserProgressAnalytics(userId: string) {
    const response = await this.fetchWithAuth(`/admin/analytics/user/${userId}`);
    return response.data;
  }

  // Get all users with pagination
  async getUsers(page: number = 1, limit: number = 20, filters?: any) {
    const params = new URLSearchParams();
    params.append('page', page.toString());
    params.append('limit', limit.toString());
    
    if (filters?.role) params.append('role', filters.role);
    if (filters?.status) params.append('status', filters.status);
    if (filters?.search) params.append('search', filters.search);

    const response = await this.fetchWithAuth(`/admin/users?${params.toString()}`);
    return response;
  }

  // Create user
  async createUser(userData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role?: string;
  }) {
    const response = await this.fetchWithAuth('/admin/users', {
      method: 'POST',
      body: JSON.stringify(userData)
    });
    return response.data;
  }

  // Update user
  async updateUser(userId: string, updates: any) {
    const response = await this.fetchWithAuth(`/admin/users/${userId}`, {
      method: 'PUT',
      body: JSON.stringify(updates)
    });
    return response.data;
  }

  // Delete user
  async deleteUser(userId: string) {
    await this.fetchWithAuth(`/admin/users/${userId}`, {
      method: 'DELETE'
    });
  }

  // Update user role
  async updateUserRole(userId: string, role: string) {
    const response = await this.fetchWithAuth(`/admin/users/${userId}/role`, {
      method: 'PUT',
      body: JSON.stringify({ role })
    });
    return response.data;
  }

  // Export users
  async exportUsers(format: 'csv' | 'json' = 'csv', filters?: any): Promise<Blob> {
    const params = new URLSearchParams();
    params.append('format', format);
    if (filters?.role) params.append('role', filters.role);
    if (filters?.status) params.append('status', filters.status);

    const response = await fetch(
      `${this.baseUrl}/admin/users/export?${params.toString()}`,
      {
        credentials: 'include',
        headers: {
          ...(this.accessToken && { Authorization: `Bearer ${this.accessToken}` })
        }
      }
    );

    if (!response.ok) {
      throw new Error('Export failed');
    }

    return response.blob();
  }

  // Generate report
  async generateReport(template: string = 'STUDENT_PROGRESS', format: 'csv' | 'json' = 'json'): Promise<any> {
    const response = await this.fetchWithAuth(
      `/admin/reports/focused?template=${template}&format=${format}`
    );
    return response;
  }

  // Get audit logs
  async getAuditLogs(page: number = 1, limit: number = 50) {
    const response = await this.fetchWithAuth(
      `/admin/audit-logs?page=${page}&limit=${limit}`
    );
    return response;
  }

  // Real-time updates simulation
  subscribeToUpdates(callback: (data: any) => void): () => void {
    const interval = setInterval(async () => {
      try {
        const metrics = await this.getDashboardMetrics();
        callback(metrics);
      } catch (error) {
        console.error('Error fetching updates:', error);
      }
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }

  // Bulk operations
  async bulkUpdateUsers(userIds: string[], updates: any) {
    const response = await this.fetchWithAuth('/admin/users/bulk-update', {
      method: 'POST',
      body: JSON.stringify({ userIds, updates })
    });
    return response;
  }

  // Get system health
  async getSystemHealth() {
    const response = await this.fetchWithAuth('/admin/monitoring/health');
    return response.data;
  }

  // Get system metrics
  async getSystemMetrics() {
    const response = await this.fetchWithAuth('/admin/monitoring/metrics');
    return response.data;
  }
}

export const dashboardService = new DashboardService();
