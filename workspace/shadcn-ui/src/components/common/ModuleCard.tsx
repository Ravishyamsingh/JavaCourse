import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ModuleStructure } from '@/data/courseStructure';
import LessonCard from './LessonCard';

interface ModuleCardProps {
  module: ModuleStructure;
  moduleIndex: number;
  completedLessons: string[];
  onLessonClick: (lessonId: string) => void;
}

const ModuleCard = ({ module, moduleIndex, completedLessons, onLessonClick }: ModuleCardProps) => {
  const completedCount = module.lessons.filter(lesson => 
    completedLessons.includes(lesson.id)
  ).length;
  const progressPercentage = Math.round((completedCount / module.lessons.length) * 100);

  return (
    <Card className="group overflow-hidden border-0 bg-white/70 backdrop-blur-lg shadow-2xl hover:shadow-xl transition-all duration-500">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white shadow-lg">
              <span className="text-lg font-bold">
                {moduleIndex + 1}
              </span>
            </div>
            <div>
              <CardTitle className="text-xl font-bold text-gray-800">
                {module.title}
              </CardTitle>
              <CardDescription className="mt-1 text-gray-600">
                {module.description} • {module.duration}
              </CardDescription>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Badge className="bg-gradient-to-r from-emerald-500 to-green-500 text-white border-0 text-sm px-3 py-1">
              {module.lessons.length} lessons
            </Badge>
            <div className="text-right text-sm text-gray-600">
              <div>{completedCount}/{module.lessons.length} completed</div>
              <div className="w-16 mt-1">
                <Progress value={progressPercentage} className="h-1" />
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-gray-100/50">
          {module.lessons.map((lesson, lessonIndex) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              lessonIndex={lessonIndex}
              isCompleted={completedLessons.includes(lesson.id)}
              onClick={() => onLessonClick(lesson.id)}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ModuleCard;
