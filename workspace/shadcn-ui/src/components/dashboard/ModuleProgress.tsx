import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface ModuleProgressProps {
  getModuleProgress: (moduleId: string) => number;
}

const modules = [
  { name: 'Java Fundamentals', moduleId: 'module-1', totalLessons: 5 },
  { name: 'Control Structures', moduleId: 'module-2', totalLessons: 5 },
  { name: 'Object-Oriented Programming', moduleId: 'module-3', totalLessons: 7 },
  { name: 'Arrays and Strings', moduleId: 'module-4', totalLessons: 5 },
  { name: 'Collections Framework', moduleId: 'module-5', totalLessons: 5 },
  { name: 'Exception Handling', moduleId: 'module-6', totalLessons: 4 },
  { name: 'File I/O Operations', moduleId: 'module-7', totalLessons: 4 },
  { name: 'Multithreading', moduleId: 'module-8', totalLessons: 4 },
  { name: 'Database Connectivity (JDBC)', moduleId: 'module-9', totalLessons: 4 },
  { name: 'GUI Development with Swing', moduleId: 'module-10', totalLessons: 5 },
  { name: 'Web Development Basics', moduleId: 'module-11', totalLessons: 4 },
  { name: 'Spring Framework Introduction', moduleId: 'module-12', totalLessons: 5 },
  { name: 'Advanced Topics', moduleId: 'module-13', totalLessons: 4 },
  { name: 'Testing with JUnit', moduleId: 'module-14', totalLessons: 4 },
  { name: 'Final Projects', moduleId: 'module-15', totalLessons: 4 }
];

export default function ModuleProgress({ getModuleProgress }: ModuleProgressProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Module Progress</CardTitle>
        <CardDescription>Track your progress across all course modules</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {modules.map((module, index) => {
            const moduleProgress = getModuleProgress(module.moduleId);
            const completedLessonsInModule = Math.round((moduleProgress / 100) * module.totalLessons);
            return (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{module.name}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">
                      {completedLessonsInModule}/{module.totalLessons}
                    </span>
                    <span className="text-sm font-medium">{moduleProgress}%</span>
                  </div>
                </div>
                <Progress value={moduleProgress} className="h-2" />
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
