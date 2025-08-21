import { Code, FileText, Lightbulb, Target } from 'lucide-react';

interface LessonTypeIconProps {
  type: 'lesson' | 'tutorial' | 'coding' | 'project';
  className?: string;
}

export const LessonTypeIcon = ({ type, className = "h-4 w-4" }: LessonTypeIconProps) => {
  switch (type) {
    case 'coding':
      return <Code className={className} />;
    case 'tutorial':
      return <Lightbulb className={className} />;
    case 'project':
      return <Target className={className} />;
    default:
      return <FileText className={className} />;
  }
};

export const getLessonTypeBadgeColor = (type: 'lesson' | 'tutorial' | 'coding' | 'project'): string => {
  switch (type) {
    case 'coding':
      return 'bg-green-100 text-green-800';
    case 'tutorial':
      return 'bg-yellow-100 text-yellow-800';
    case 'project':
      return 'bg-purple-100 text-purple-800';
    default:
      return 'bg-blue-100 text-blue-800';
  }
};
