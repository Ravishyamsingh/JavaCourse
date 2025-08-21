import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Clock, Play, Star, Trophy } from 'lucide-react';
import { LessonStructure } from '@/data/courseStructure';
import { LessonTypeIcon, getLessonTypeBadgeColor } from './LessonTypeIcon';

interface LessonCardProps {
  lesson: LessonStructure;
  lessonIndex: number;
  isCompleted: boolean;
  onClick: () => void;
}

const LessonCard = ({ lesson, lessonIndex, isCompleted, onClick }: LessonCardProps) => {
  return (
    <div 
      className="group/lesson p-5 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-indigo-50/50 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${
              isCompleted 
                ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg' 
                : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 group-hover/lesson:from-blue-100 group-hover/lesson:to-indigo-100 group-hover/lesson:text-blue-600'
            } transition-all duration-300`}>
              {isCompleted ? (
                <CheckCircle2 className="h-6 w-6" />
              ) : (
                <span className="text-lg font-bold">
                  {lessonIndex + 1}
                </span>
              )}
            </div>
            {isCompleted && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                <Star className="w-2.5 h-2.5 text-yellow-700" />
              </div>
            )}
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-gray-900 mb-1 group-hover/lesson:text-blue-600 transition-colors">
              {lesson.title}
            </h4>
            <div className="flex items-center space-x-3">
              <Badge className={`text-xs ${getLessonTypeBadgeColor(lesson.type)} border-0`}>
                <LessonTypeIcon type={lesson.type} className="w-3 h-3 mr-1" />
                <span className="capitalize">{lesson.type}</span>
              </Badge>
              <span className="text-sm text-gray-500 flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                {lesson.duration}
              </span>
              {isCompleted && (
                <Badge className="bg-green-100 text-green-700 text-xs border-0">
                  <Trophy className="w-3 h-3 mr-1" />
                  Completed
                </Badge>
              )}
            </div>
          </div>
        </div>
        <Button 
          className={`${
            isCompleted 
              ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600' 
              : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
          } text-white border-0 shadow-lg group-hover/lesson:shadow-xl transition-all duration-300`}
          size="sm"
        >
          <Play className="w-4 h-4 mr-2" />
          {isCompleted ? 'Review' : 'Start'}
        </Button>
      </div>
    </div>
  );
};

export default LessonCard;
