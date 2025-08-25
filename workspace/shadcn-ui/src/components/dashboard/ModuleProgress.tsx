import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  CheckCircle2,
  Clock,
  Lock,
  Play,
  BookOpen,
  Code,
  Database,
  Globe,
  Shield,
  Zap,
  Brain,
  Target,
  Award,
  Briefcase
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ModuleProgressProps {
  getModuleProgress: (moduleId: string) => number;
}

const modules = [
  {
    name: 'Java Fundamentals',
    moduleId: 'module-1',
    totalLessons: 7,
    icon: <BookOpen className="h-5 w-5" />,
    color: 'from-blue-500 to-blue-600',
    difficulty: 'Beginner',
    category: 'Foundation'
  },
  {
    name: 'Control Structures',
    moduleId: 'module-2',
    totalLessons: 7,
    icon: <Code className="h-5 w-5" />,
    color: 'from-green-500 to-green-600',
    difficulty: 'Beginner',
    category: 'Foundation'
  },
  {
    name: 'Object-Oriented Programming',
    moduleId: 'module-3',
    totalLessons: 7,
    icon: <Brain className="h-5 w-5" />,
    color: 'from-purple-500 to-purple-600',
    difficulty: 'Intermediate',
    category: 'Core Concepts'
  },
  {
    name: 'Arrays and Strings',
    moduleId: 'module-4',
    totalLessons: 7,
    icon: <Target className="h-5 w-5" />,
    color: 'from-orange-500 to-orange-600',
    difficulty: 'Beginner',
    category: 'Data Structures'
  },
  {
    name: 'Collections Framework',
    moduleId: 'module-5',
    totalLessons: 7,
    icon: <Database className="h-5 w-5" />,
    color: 'from-teal-500 to-teal-600',
    difficulty: 'Intermediate',
    category: 'Data Structures'
  },
  {
    name: 'Exception Handling',
    moduleId: 'module-6',
    totalLessons: 7,
    icon: <Shield className="h-5 w-5" />,
    color: 'from-red-500 to-red-600',
    difficulty: 'Intermediate',
    category: 'Error Management'
  },
  {
    name: 'File I/O Operations',
    moduleId: 'module-7',
    totalLessons: 7,
    icon: <BookOpen className="h-5 w-5" />,
    color: 'from-indigo-500 to-indigo-600',
    difficulty: 'Intermediate',
    category: 'System Integration'
  },
  {
    name: 'Multithreading',
    moduleId: 'module-8',
    totalLessons: 7,
    icon: <Zap className="h-5 w-5" />,
    color: 'from-yellow-500 to-yellow-600',
    difficulty: 'Advanced',
    category: 'Concurrency'
  },
  {
    name: 'Database Connectivity (JDBC)',
    moduleId: 'module-9',
    totalLessons: 7,
    icon: <Database className="h-5 w-5" />,
    color: 'from-cyan-500 to-cyan-600',
    difficulty: 'Intermediate',
    category: 'Database'
  },
  {
    name: 'GUI Development with Swing',
    moduleId: 'module-10',
    totalLessons: 7,
    icon: <Globe className="h-5 w-5" />,
    color: 'from-pink-500 to-pink-600',
    difficulty: 'Intermediate',
    category: 'User Interface'
  },
  {
    name: 'Web Development Basics',
    moduleId: 'module-11',
    totalLessons: 7,
    icon: <Globe className="h-5 w-5" />,
    color: 'from-emerald-500 to-emerald-600',
    difficulty: 'Intermediate',
    category: 'Web Development'
  },
  {
    name: 'Spring Framework Introduction',
    moduleId: 'module-12',
    totalLessons: 7,
    icon: <Code className="h-5 w-5" />,
    color: 'from-lime-500 to-lime-600',
    difficulty: 'Advanced',
    category: 'Frameworks'
  },
  {
    name: 'Advanced Java Features',
    moduleId: 'module-13',
    totalLessons: 7,
    icon: <Brain className="h-5 w-5" />,
    color: 'from-violet-500 to-violet-600',
    difficulty: 'Advanced',
    category: 'Advanced Topics'
  },
  {
    name: 'Testing with JUnit',
    moduleId: 'module-14',
    totalLessons: 7,
    icon: <CheckCircle2 className="h-5 w-5" />,
    color: 'from-green-600 to-green-700',
    difficulty: 'Intermediate',
    category: 'Testing'
  },
  {
    name: 'Build Tools and Deployment',
    moduleId: 'module-15',
    totalLessons: 7,
    icon: <Target className="h-5 w-5" />,
    color: 'from-slate-500 to-slate-600',
    difficulty: 'Intermediate',
    category: 'DevOps'
  },
  {
    name: 'Web Development with Java',
    moduleId: 'module-16',
    totalLessons: 7,
    icon: <Globe className="h-5 w-5" />,
    color: 'from-blue-600 to-blue-700',
    difficulty: 'Advanced',
    category: 'Web Development'
  },
  {
    name: 'Microservices and Cloud',
    moduleId: 'module-17',
    totalLessons: 7,
    icon: <Zap className="h-5 w-5" />,
    color: 'from-purple-600 to-purple-700',
    difficulty: 'Advanced',
    category: 'Cloud & Microservices'
  },
  {
    name: 'Advanced Topics and Best Practices',
    moduleId: 'module-18',
    totalLessons: 7,
    icon: <Brain className="h-5 w-5" />,
    color: 'from-indigo-600 to-indigo-700',
    difficulty: 'Expert',
    category: 'Best Practices'
  },
  {
    name: 'Project Development',
    moduleId: 'module-19',
    totalLessons: 7,
    icon: <Code className="h-5 w-5" />,
    color: 'from-orange-600 to-orange-700',
    difficulty: 'Expert',
    category: 'Projects'
  },
  {
    name: 'Career and Advanced Learning',
    moduleId: 'module-20',
    totalLessons: 7,
    icon: <Briefcase className="h-5 w-5" />,
    color: 'from-emerald-600 to-emerald-700',
    difficulty: 'Professional',
    category: 'Career Development'
  }
];

export default function ModuleProgress({ getModuleProgress }: ModuleProgressProps) {
  const navigate = useNavigate();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-blue-100 text-blue-800';
      case 'Advanced': return 'bg-orange-100 text-orange-800';
      case 'Expert': return 'bg-red-100 text-red-800';
      case 'Professional': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (progress: number) => {
    if (progress === 100) return <CheckCircle2 className="h-4 w-4 text-green-600" />;
    if (progress > 0) return <Clock className="h-4 w-4 text-blue-600" />;
    return <Lock className="h-4 w-4 text-gray-400" />;
  };

  const groupedModules = modules.reduce((acc, module) => {
    if (!acc[module.category]) acc[module.category] = [];
    acc[module.category].push(module);
    return acc;
  }, {} as Record<string, typeof modules>);

  return (
    <div className="space-y-8">
      {Object.entries(groupedModules).map(([category, categoryModules]) => (
        <Card key={category} className="bg-white/80 backdrop-blur-lg border-0 shadow-xl">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold text-gray-800">{category}</div>
                <div className="text-sm text-gray-600">
                  {categoryModules.length} modules • {categoryModules.reduce((sum, m) => sum + m.totalLessons, 0)} lessons
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {categoryModules.map((module, index) => {
                const moduleProgress = getModuleProgress(module.moduleId);
                const completedLessonsInModule = Math.round((moduleProgress / 100) * module.totalLessons);
                const isCompleted = moduleProgress === 100;
                const isInProgress = moduleProgress > 0 && moduleProgress < 100;
                const isLocked = moduleProgress === 0;

                return (
                  <div
                    key={index}
                    className={`group p-4 rounded-xl border transition-all duration-300 hover:shadow-lg ${
                      isCompleted
                        ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 hover:shadow-green-500/10'
                        : isInProgress
                        ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 hover:shadow-blue-500/10'
                        : 'bg-gray-50 border-gray-200 hover:shadow-gray-500/10'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${module.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {module.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
                            {module.name}
                          </h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge className={`text-xs ${getDifficultyColor(module.difficulty)}`}>
                              {module.difficulty}
                            </Badge>
                            <span className="text-xs text-gray-500">
                              {completedLessonsInModule}/{module.totalLessons} lessons
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="text-right">
                          <div className="text-lg font-bold text-gray-800">{moduleProgress}%</div>
                          <div className="text-xs text-gray-500">Complete</div>
                        </div>
                        {getStatusIcon(moduleProgress)}
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <Progress
                        value={moduleProgress}
                        className="h-3 bg-gray-200"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-600">
                        {isCompleted && '🎉 Module completed!'}
                        {isInProgress && '📚 In progress...'}
                        {isLocked && '🔒 Ready to start'}
                      </div>
                      <Button
                        size="sm"
                        variant={isCompleted ? "outline" : "default"}
                        onClick={() => navigate(`/course/${module.moduleId}`)}
                        className={`transition-all duration-300 ${
                          isCompleted
                            ? 'hover:bg-green-50 hover:text-green-700 hover:border-green-300'
                            : isInProgress
                            ? 'bg-blue-600 hover:bg-blue-700'
                            : 'bg-gray-600 hover:bg-gray-700'
                        }`}
                      >
                        {isCompleted ? (
                          <>
                            <Award className="h-3 w-3 mr-1" />
                            Review
                          </>
                        ) : (
                          <>
                            <Play className="h-3 w-3 mr-1" />
                            {isInProgress ? 'Continue' : 'Start'}
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
