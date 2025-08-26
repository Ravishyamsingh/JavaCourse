import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProgressProvider } from './contexts/ProgressContext';
import { QuizProvider } from './contexts/QuizContext';
import { AchievementProvider } from './contexts/AchievementContext';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Index from './pages/Index';
import CourseContent from './pages/CourseContent';
import LessonDetail from './pages/LessonDetail';
import Dashboard from './pages/Dashboard';
import Certificate from './pages/Certificate';
import ContentTable from './pages/ContentTable';
import Quiz from './pages/Quiz';
import QuizModuleSelection from './pages/QuizModuleSelection';
import QuizResults from './pages/QuizResults';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Signup from './pages/Signup';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <ProgressProvider>
        <QuizProvider>
          <AchievementProvider>
            <TooltipProvider>
              <Toaster />
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/course" element={<ProtectedRoute><CourseContent /></ProtectedRoute>} />
                  <Route path="/lesson/:lessonId" element={<ProtectedRoute><LessonDetail /></ProtectedRoute>} />
                  <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                  <Route path="/certificate" element={<ProtectedRoute><Certificate /></ProtectedRoute>} />
                  <Route path="/content-table" element={<ProtectedRoute><ContentTable /></ProtectedRoute>} />
                  <Route path="/quiz" element={<ProtectedRoute><Quiz /></ProtectedRoute>} />
                  <Route path="/quiz-modules" element={<ProtectedRoute><QuizModuleSelection /></ProtectedRoute>} />
                  <Route path="/quiz-results" element={<ProtectedRoute><QuizResults /></ProtectedRoute>} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </TooltipProvider>
          </AchievementProvider>
        </QuizProvider>
      </ProgressProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
