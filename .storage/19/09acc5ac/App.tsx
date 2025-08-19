import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import CourseContent from './pages/CourseContent';
import LessonDetail from './pages/LessonDetail';
import Dashboard from './pages/Dashboard';
import Certificate from './pages/Certificate';
import ContentTable from './pages/ContentTable';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/course" element={<CourseContent />} />
          <Route path="/lesson/:lessonId" element={<LessonDetail />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/content-table" element={<ContentTable />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;