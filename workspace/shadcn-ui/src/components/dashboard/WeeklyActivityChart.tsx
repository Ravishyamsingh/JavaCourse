import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap } from 'lucide-react';

interface WeeklyActivityChartProps {
  weeklyProgress: Array<{
    day: string;
    lessons: number;
  }>;
}

export default function WeeklyActivityChart({ weeklyProgress }: WeeklyActivityChartProps) {
  return (
    <Card className="overflow-hidden border-0 bg-white/70 backdrop-blur-lg shadow-2xl">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100/50">
        <CardTitle className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="text-lg font-bold text-gray-800">Weekly Activity</div>
            <div className="text-sm text-gray-600">Your learning activity this week</div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-8">
        <div className="flex items-end justify-between h-48">
          {weeklyProgress.map((day, index) => (
            <div key={index} className="flex flex-col items-center space-y-3 group">
              <div 
                className="bg-gradient-to-t from-blue-500 via-blue-400 to-blue-300 rounded-t-lg min-w-[40px] transition-all duration-500 hover:from-purple-500 hover:via-purple-400 hover:to-purple-300 shadow-lg hover:shadow-purple-500/25 cursor-pointer group-hover:scale-110"
                style={{ height: `${(day.lessons / 5) * 160}px` }}
              ></div>
              <div className="text-center">
                <div className="text-xs font-medium text-gray-600 mb-1">{day.day}</div>
                <div className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {day.lessons} lessons
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
