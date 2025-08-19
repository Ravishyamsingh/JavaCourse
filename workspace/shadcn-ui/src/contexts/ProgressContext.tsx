import React, { createContext, useContext, useState, useEffect } from 'react';

interface ProgressContextType {
  completedLessons: string[];
  markLessonComplete: (lessonId: string) => void;
  isLessonCompleted: (lessonId: string) => boolean;
  getProgressPercentage: () => number;
  getCompletedCount: () => number;
  getTotalLessons: () => number;
  getModuleProgress: (moduleId: string) => number;
  studyStreak: number;
  totalStudyTime: number;
  updateStudyTime: (minutes: number) => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};

// All lessons data for progress calculations
const allLessonsData = [
  // Module 1: Java Fundamentals (5 lessons)
  { id: 'lesson-1-1', module: 'module-1' },
  { id: 'lesson-1-2', module: 'module-1' },
  { id: 'lesson-1-3', module: 'module-1' },
  { id: 'lesson-1-4', module: 'module-1' },
  { id: 'lesson-1-5', module: 'module-1' },
  
  // Module 2: Control Structures (5 lessons)
  { id: 'lesson-2-1', module: 'module-2' },
  { id: 'lesson-2-2', module: 'module-2' },
  { id: 'lesson-2-3', module: 'module-2' },
  { id: 'lesson-2-4', module: 'module-2' },
  { id: 'lesson-2-5', module: 'module-2' },
  
  // Module 3: Object-Oriented Programming (7 lessons)
  { id: 'lesson-3-1', module: 'module-3' },
  { id: 'lesson-3-2', module: 'module-3' },
  { id: 'lesson-3-3', module: 'module-3' },
  { id: 'lesson-3-4', module: 'module-3' },
  { id: 'lesson-3-5', module: 'module-3' },
  { id: 'lesson-3-6', module: 'module-3' },
  { id: 'lesson-3-7', module: 'module-3' },
  
  // Module 4: Arrays and Strings (5 lessons)
  { id: 'lesson-4-1', module: 'module-4' },
  { id: 'lesson-4-2', module: 'module-4' },
  { id: 'lesson-4-3', module: 'module-4' },
  { id: 'lesson-4-4', module: 'module-4' },
  { id: 'lesson-4-5', module: 'module-4' },
  
  // Module 5: Collections Framework (5 lessons)
  { id: 'lesson-5-1', module: 'module-5' },
  { id: 'lesson-5-2', module: 'module-5' },
  { id: 'lesson-5-3', module: 'module-5' },
  { id: 'lesson-5-4', module: 'module-5' },
  { id: 'lesson-5-5', module: 'module-5' },
  
  // Module 6: Exception Handling (4 lessons)
  { id: 'lesson-6-1', module: 'module-6' },
  { id: 'lesson-6-2', module: 'module-6' },
  { id: 'lesson-6-3', module: 'module-6' },
  { id: 'lesson-6-4', module: 'module-6' },
  
  // Module 7: File I/O Operations (4 lessons)
  { id: 'lesson-7-1', module: 'module-7' },
  { id: 'lesson-7-2', module: 'module-7' },
  { id: 'lesson-7-3', module: 'module-7' },
  { id: 'lesson-7-4', module: 'module-7' },
  
  // Module 8: Multithreading (4 lessons)
  { id: 'lesson-8-1', module: 'module-8' },
  { id: 'lesson-8-2', module: 'module-8' },
  { id: 'lesson-8-3', module: 'module-8' },
  { id: 'lesson-8-4', module: 'module-8' },
  
  // Module 9: Database Connectivity (4 lessons)
  { id: 'lesson-9-1', module: 'module-9' },
  { id: 'lesson-9-2', module: 'module-9' },
  { id: 'lesson-9-3', module: 'module-9' },
  { id: 'lesson-9-4', module: 'module-9' },
  
  // Module 10: GUI Development with Swing (5 lessons)
  { id: 'lesson-10-1', module: 'module-10' },
  { id: 'lesson-10-2', module: 'module-10' },
  { id: 'lesson-10-3', module: 'module-10' },
  { id: 'lesson-10-4', module: 'module-10' },
  { id: 'lesson-10-5', module: 'module-10' },
  
  // Module 11: Web Development Basics (4 lessons)
  { id: 'lesson-11-1', module: 'module-11' },
  { id: 'lesson-11-2', module: 'module-11' },
  { id: 'lesson-11-3', module: 'module-11' },
  { id: 'lesson-11-4', module: 'module-11' },
  
  // Module 12: Spring Framework Introduction (5 lessons)
  { id: 'lesson-12-1', module: 'module-12' },
  { id: 'lesson-12-2', module: 'module-12' },
  { id: 'lesson-12-3', module: 'module-12' },
  { id: 'lesson-12-4', module: 'module-12' },
  { id: 'lesson-12-5', module: 'module-12' },
  
  // Module 13: Advanced Topics (4 lessons)
  { id: 'lesson-13-1', module: 'module-13' },
  { id: 'lesson-13-2', module: 'module-13' },
  { id: 'lesson-13-3', module: 'module-13' },
  { id: 'lesson-13-4', module: 'module-13' },
  
  // Module 14: Testing with JUnit (4 lessons)
  { id: 'lesson-14-1', module: 'module-14' },
  { id: 'lesson-14-2', module: 'module-14' },
  { id: 'lesson-14-3', module: 'module-14' },
  { id: 'lesson-14-4', module: 'module-14' },
  
  // Module 15: Final Projects (4 lessons)
  { id: 'lesson-15-1', module: 'module-15' },
  { id: 'lesson-15-2', module: 'module-15' },
  { id: 'lesson-15-3', module: 'module-15' },
  { id: 'lesson-15-4', module: 'module-15' }
];

const TOTAL_LESSONS = allLessonsData.length;

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [studyStreak, setStudyStreak] = useState(1);
  const [totalStudyTime, setTotalStudyTime] = useState(0);

  // Load progress from localStorage on initialization
  useEffect(() => {
    const savedProgress = localStorage.getItem('course-progress');
    const savedStudyTime = localStorage.getItem('study-time');
    const savedStreak = localStorage.getItem('study-streak');
    
    if (savedProgress) {
      try {
        const parsed = JSON.parse(savedProgress);
        setCompletedLessons(parsed);
      } catch (error) {
        console.error('Error loading progress:', error);
      }
    }
    
    if (savedStudyTime) {
      setTotalStudyTime(parseFloat(savedStudyTime));
    }
    
    if (savedStreak) {
      setStudyStreak(parseInt(savedStreak));
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('course-progress', JSON.stringify(completedLessons));
  }, [completedLessons]);

  useEffect(() => {
    localStorage.setItem('study-time', totalStudyTime.toString());
  }, [totalStudyTime]);

  useEffect(() => {
    localStorage.setItem('study-streak', studyStreak.toString());
  }, [studyStreak]);

  const markLessonComplete = (lessonId: string) => {
    setCompletedLessons(prev => {
      if (!prev.includes(lessonId)) {
        // Add lesson to completed list
        const newCompleted = [...prev, lessonId];
        
        // Update study time (simulate lesson duration)
        const lessonDuration = Math.floor(Math.random() * 30) + 15; // Random 15-45 minutes
        setTotalStudyTime(prevTime => prevTime + (lessonDuration / 60));
        
        // Update streak (simple logic - could be more sophisticated)
        const lastCompletionDate = localStorage.getItem('last-completion-date');
        const today = new Date().toDateString();
        
        if (lastCompletionDate !== today) {
          setStudyStreak(prev => prev + 1);
          localStorage.setItem('last-completion-date', today);
        }
        
        return newCompleted;
      }
      return prev;
    });
  };

  const isLessonCompleted = (lessonId: string): boolean => {
    return completedLessons.includes(lessonId);
  };

  const getProgressPercentage = (): number => {
    return Math.round((completedLessons.length / TOTAL_LESSONS) * 100);
  };

  const getCompletedCount = (): number => {
    return completedLessons.length;
  };

  const getTotalLessons = (): number => {
    return TOTAL_LESSONS;
  };

  const getModuleProgress = (moduleId: string): number => {
    const moduleLessons = allLessonsData.filter(lesson => lesson.module === moduleId);
    const completedModuleLessons = moduleLessons.filter(lesson => 
      completedLessons.includes(lesson.id)
    );
    
    if (moduleLessons.length === 0) return 0;
    return Math.round((completedModuleLessons.length / moduleLessons.length) * 100);
  };

  const updateStudyTime = (minutes: number) => {
    setTotalStudyTime(prev => prev + (minutes / 60));
  };

  const value: ProgressContextType = {
    completedLessons,
    markLessonComplete,
    isLessonCompleted,
    getProgressPercentage,
    getCompletedCount,
    getTotalLessons,
    getModuleProgress,
    studyStreak,
    totalStudyTime,
    updateStudyTime
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};
