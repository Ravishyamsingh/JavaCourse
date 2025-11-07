// Unified Authentication Types
export enum UserRole {
  GUEST = 'guest',
  USER = 'user',
  ADMIN = 'admin',
  SUPER_ADMIN = 'superadmin'
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string;
  role: UserRole;
  provider: 'local' | 'google';
  isEmailVerified: boolean;
  isActive: boolean;
  lastLogin?: string;
  profile?: {
    bio?: string;
    phone?: string;
    dateOfBirth?: string;
    gender?: string;
    location?: {
      country?: string;
      city?: string;
      timezone?: string;
    };
    socialLinks?: {
      linkedin?: string;
      github?: string;
      twitter?: string;
      website?: string;
    };
  };
  preferences?: {
    theme: 'light' | 'dark' | 'system';
    notifications: {
      email: boolean;
      push: boolean;
      sms: boolean;
      courseUpdates: boolean;
      achievements: boolean;
      marketing: boolean;
    };
    language: string;
    privacy: {
      profileVisibility: 'public' | 'private' | 'friends';
      showProgress: boolean;
      showAchievements: boolean;
    };
  };
  progress?: {
    completedLessons: string[];
    completedQuizzes: string[];
    achievements: string[];
    certificatesEarned: string[];
    totalScore: number;
    enrolledCourses: string[];
    studyStreak: number;
    totalStudyTime: number;
    lastCompletedLessonId?: string | null;
    lastCompletedAt?: string | null;
    lastSyncedAt?: string | null;
  };
  createdAt: string;
  updatedAt: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresAt?: number;
}

export interface AuthState {
  user: User | null;
  tokens: AuthTokens | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface AuthContextType extends AuthState {
  login: (email: string, password: string, selectedRole?: UserRole) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  refreshToken: () => Promise<void>;
  updateProfile: (updates: Partial<User>) => Promise<void>;
  clearError: () => void;
  hasRole: (role: string | string[]) => boolean;
  hasPermission: (resource: string, action: string) => boolean;
  getRoleDisplayName: (role: UserRole) => string;
  getRoleColor: (role: UserRole) => string;
}

// Role-based permissions
export const ROLE_PERMISSIONS: Record<UserRole, Record<string, string[]>> = {
  [UserRole.GUEST]: {
    courses: ['read'],
    lessons: ['read'],
    quizzes: ['read'],
    public: ['read']
  },
  [UserRole.USER]: {
    courses: ['read', 'enroll'],
    lessons: ['read', 'complete'],
    quizzes: ['read', 'take'],
    assignments: ['read', 'submit'],
    profile: ['read', 'update'],
    certificates: ['read'],
    achievements: ['read']
  },
  [UserRole.ADMIN]: {
    courses: ['create', 'read', 'update', 'delete', 'publish'],
    lessons: ['create', 'read', 'update', 'delete'],
    quizzes: ['create', 'read', 'update', 'delete'],
    assignments: ['create', 'read', 'update', 'delete', 'grade'],
    users: ['read', 'update'],
    analytics: ['read'],
    media: ['create', 'read', 'update', 'delete'],
    content: ['manage']
  },
  [UserRole.SUPER_ADMIN]: {
    '*': ['*'] // All permissions
  }
};

// Role hierarchy for access control
export const ROLE_HIERARCHY: Record<UserRole, number> = {
  [UserRole.GUEST]: 1,
  [UserRole.USER]: 2,
  [UserRole.ADMIN]: 3,
  [UserRole.SUPER_ADMIN]: 4
};

// Role display names and colors
export const ROLE_DISPLAY: Record<UserRole, { name: string; color: string; bgColor: string }> = {
  [UserRole.GUEST]: { name: 'Guest User', color: 'text-gray-600', bgColor: 'bg-gray-100' },
  [UserRole.USER]: { name: 'Regular User', color: 'text-blue-600', bgColor: 'bg-blue-100' },
  [UserRole.ADMIN]: { name: 'Administrator', color: 'text-purple-600', bgColor: 'bg-purple-100' },
  [UserRole.SUPER_ADMIN]: { name: 'Super Administrator', color: 'text-red-600', bgColor: 'bg-red-100' }
};

// Session duration by role (in hours)
export const SESSION_DURATION: Record<UserRole, number> = {
  [UserRole.GUEST]: 2, // 2 hours for guests
  [UserRole.USER]: 24, // 24 hours for regular users
  [UserRole.ADMIN]: 8, // 8 hours for admins (security)
  [UserRole.SUPER_ADMIN]: 4 // 4 hours for super admins (high security)
};