import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProgressProvider } from './contexts/ProgressContext';
import { QuizProvider } from './contexts/QuizContext';
import { AchievementProvider } from './contexts/AchievementContext';
import { AuthProvider } from './contexts/AuthContext';
import { RBACProvider } from './contexts/RBACContext';
import ErrorBoundary from './components/ErrorBoundary';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { UserRole } from './types/auth';
import Index from './pages/Index';
import CourseContent from './pages/CourseContent';
import LessonDetail from './pages/LessonDetail';
import Dashboard from './pages/Dashboard';
import GuestDashboard from './pages/GuestDashboard';
import Certificate from './pages/Certificate';
import ContentTable from './pages/ContentTable';
import Quiz from './pages/Quiz';
import QuizModuleSelection from './pages/QuizModuleSelection';
import QuizResults from './pages/QuizResults';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import ForgotPasswordFlow from './pages/ForgotPasswordFlow';
import AdminPanel from './pages/AdminPanel';
import AdminPanelWithProgressReports from './pages/AdminPanelWithProgressReports';
import AdminUserManagement from './pages/AdminUserManagement';
import SuperAdminPanel from './pages/SuperAdminPanel';
import CMSDashboard from './pages/cms/CMSDashboard';
import SessionManager from './components/auth/SessionManager';
import OAuthTestRunner from './components/OAuthTestRunner';
import GoogleOAuthTest from './pages/GoogleOAuthTest';
import AuthCallback from './pages/AuthCallback';
import TestPage from './pages/Test';
import TestNewPage from './pages/TestNew';
import CodeEditorTest from './pages/CodeEditorTest';

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RBACProvider>
          <ProgressProvider>
            <QuizProvider>
              <AchievementProvider>
                <TooltipProvider>
                  <SessionManager />
                  <Toaster />
                  <BrowserRouter>
                    <Routes>
                      <Route path="/" element={<Index />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/signup" element={<Signup />} />
                      <Route path="/forgot-password" element={<ForgotPassword />} />
                      <Route path="/reset-password" element={<ForgotPasswordFlow />} />
                      <Route path="/auth/callback" element={<AuthCallback />} />
                      <Route path="/guest-dashboard" element={<ProtectedRoute requiredRole={UserRole.GUEST}><GuestDashboard /></ProtectedRoute>} />
                      <Route path="/dashboard" element={<ProtectedRoute requiredRole={[UserRole.USER, UserRole.ADMIN, UserRole.SUPER_ADMIN]}><Dashboard /></ProtectedRoute>} />
                      <Route path="/course" element={<ProtectedRoute requiredRole={[UserRole.USER, UserRole.ADMIN, UserRole.SUPER_ADMIN]}><CourseContent /></ProtectedRoute>} />
                      <Route path="/lesson/:lessonId" element={<ProtectedRoute requiredRole={[UserRole.USER, UserRole.ADMIN, UserRole.SUPER_ADMIN]}><LessonDetail /></ProtectedRoute>} />
                      <Route path="/certificate" element={<ProtectedRoute requiredRole={[UserRole.USER, UserRole.ADMIN, UserRole.SUPER_ADMIN]}><Certificate /></ProtectedRoute>} />
                      <Route path="/content-table" element={<ProtectedRoute requiredRole={[UserRole.USER, UserRole.ADMIN, UserRole.SUPER_ADMIN]}><ContentTable /></ProtectedRoute>} />
                      <Route path="/test" element={<ProtectedRoute requiredRole={[UserRole.USER, UserRole.ADMIN, UserRole.SUPER_ADMIN]}><TestPage /></ProtectedRoute>} />
                      <Route path="/test-new" element={<ProtectedRoute requiredRole={[UserRole.USER, UserRole.ADMIN, UserRole.SUPER_ADMIN]}><TestNewPage /></ProtectedRoute>} />
                      <Route path="/quiz" element={<ProtectedRoute requiredRole={[UserRole.USER, UserRole.ADMIN, UserRole.SUPER_ADMIN]}><Quiz /></ProtectedRoute>} />
                      <Route path="/quiz-modules" element={<ProtectedRoute requiredRole={[UserRole.USER, UserRole.ADMIN, UserRole.SUPER_ADMIN]}><QuizModuleSelection /></ProtectedRoute>} />
                      <Route path="/quiz-results" element={<ProtectedRoute requiredRole={[UserRole.USER, UserRole.ADMIN, UserRole.SUPER_ADMIN]}><QuizResults /></ProtectedRoute>} />
                      <Route path="/admin" element={<ProtectedRoute requiredRole={[UserRole.ADMIN, UserRole.SUPER_ADMIN]}><AdminPanel /></ProtectedRoute>} />
                      <Route path="/admin/users/:userId" element={<ProtectedRoute requiredRole={[UserRole.ADMIN, UserRole.SUPER_ADMIN]}><AdminUserManagement /></ProtectedRoute>} />
                      <Route path="/admin/reports" element={<ProtectedRoute requiredRole={[UserRole.ADMIN, UserRole.SUPER_ADMIN]}><AdminPanelWithProgressReports /></ProtectedRoute>} />
                      <Route path="/admin-panel" element={<ProtectedRoute requiredRole={[UserRole.ADMIN, UserRole.SUPER_ADMIN]}><AdminPanel /></ProtectedRoute>} />
                      <Route path="/super-admin-panel" element={<ProtectedRoute requiredRole={UserRole.SUPER_ADMIN}><SuperAdminPanel /></ProtectedRoute>} />
                      <Route path="/oauth-tests" element={<ProtectedRoute requiredRole={UserRole.SUPER_ADMIN}><OAuthTestRunner /></ProtectedRoute>} />
                      <Route path="/google-oauth-test" element={<GoogleOAuthTest />} />
                      <Route path="/code-editor-test" element={<ProtectedRoute requiredRole={UserRole.SUPER_ADMIN}><CodeEditorTest /></ProtectedRoute>} />
                      <Route path="/cms" element={<ProtectedRoute requiredRole={[UserRole.ADMIN, UserRole.SUPER_ADMIN]}><CMSDashboard /></ProtectedRoute>} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </BrowserRouter>
                </TooltipProvider>
              </AchievementProvider>
            </QuizProvider>
          </ProgressProvider>
        </RBACProvider>
      </AuthProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
