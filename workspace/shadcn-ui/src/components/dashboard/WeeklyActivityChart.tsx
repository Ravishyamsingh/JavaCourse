import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, TrendingUp, Calendar, Clock } from 'lucide-react';
import { useState } from 'react';

interface WeeklyActivityChartProps {
  weeklyProgress: Array<{
    day: string;
    lessons: number;
    studyTime: number;
  }>;
}

type WeeklyProgressEntry = WeeklyActivityChartProps['weeklyProgress'][number];

export default function WeeklyActivityChart({ weeklyProgress }: WeeklyActivityChartProps) {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'lessons' | 'time'>('lessons');

  const totalLessons = weeklyProgress.reduce((sum, day) => sum + day.lessons, 0);
  const totalTime = weeklyProgress.reduce((sum, day) => sum + day.studyTime, 0);
  const averageLessons = weeklyProgress.length ? totalLessons / weeklyProgress.length : 0;
  const averageTime = weeklyProgress.length ? totalTime / weeklyProgress.length : 0;

  const maxValue = weeklyProgress.length
    ? Math.max(
        ...weeklyProgress.map((day) =>
          viewMode === 'lessons' ? day.lessons : day.studyTime
        )
      )
    : 1;

  const getBarHeight = (value: number) => {
    return Math.max((value / maxValue) * 160, 8); // Minimum height of 8px
  };

  const getBarColor = (day: WeeklyProgressEntry) => {
    const isSelected = selectedDay === day.day;
    const isAboveAverage = viewMode === 'lessons'
      ? day.lessons > averageLessons
      : day.studyTime > averageTime;

    if (isSelected) {
      return 'from-yellow-400 via-orange-400 to-red-400';
    }
    if (isAboveAverage) {
      return 'from-green-400 via-emerald-400 to-teal-400';
    }
    return 'from-blue-400 via-blue-500 to-purple-500';
  };

  const getDayStats = (day: WeeklyProgressEntry) => {
    if (!selectedDay || selectedDay !== day.day) return null;
    
    return (
      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg shadow-lg z-10 min-w-[120px]">
        <div className="text-xs font-medium text-center mb-1">{day.day}</div>
        <div className="text-xs space-y-1">
          <div className="flex justify-between">
            <span>Lessons:</span>
            <span className="font-bold">{day.lessons}</span>
          </div>
          <div className="flex justify-between">
            <span>Time:</span>
            <span className="font-bold">{day.studyTime}h</span>
          </div>
        </div>
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    );
  };

  return (
    <Card className="overflow-hidden border-0 bg-white/70 backdrop-blur-lg shadow-2xl">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100/50">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="text-lg font-bold text-gray-800">Weekly Activity</div>
              <div className="text-sm text-gray-600">Your learning activity this week</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('lessons')}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                viewMode === 'lessons'
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
              }`}
            >
              Lessons
            </button>
            <button
              onClick={() => setViewMode('time')}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                viewMode === 'time'
                  ? 'bg-purple-500 text-white shadow-lg'
                  : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
              }`}
            >
              Time
            </button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-8">
        {/* Summary Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
            <div className="text-lg font-bold text-blue-600">{totalLessons}</div>
            <div className="text-xs text-gray-600">Total Lessons</div>
          </div>
          <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
            <div className="text-lg font-bold text-purple-600">{totalTime.toFixed(1)}h</div>
            <div className="text-xs text-gray-600">Total Time</div>
          </div>
          <div className="text-center p-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
            <div className="text-lg font-bold text-green-600">{averageLessons.toFixed(1)}</div>
            <div className="text-xs text-gray-600">Avg Lessons/Day</div>
          </div>
          <div className="text-center p-3 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
            <div className="text-lg font-bold text-orange-600">{averageTime.toFixed(1)}h</div>
            <div className="text-xs text-gray-600">Avg Time/Day</div>
          </div>
        </div>

        {/* Interactive Chart */}
        <div className="relative">
          <div className="flex items-end justify-between h-48 relative">
            {weeklyProgress.map((day) => {
              const value = viewMode === 'lessons' ? day.lessons : day.studyTime;
              const height = getBarHeight(value);
              
              return (
                <div
                  key={day.day}
                  className="flex flex-col items-center space-y-3 group relative cursor-pointer"
                  onMouseEnter={() => setSelectedDay(day.day)}
                  onMouseLeave={() => setSelectedDay(null)}
                >
                  {getDayStats(day)}
                  <div
                    className={`bg-gradient-to-t ${getBarColor(day)} rounded-t-lg min-w-[40px] transition-all duration-500 shadow-lg hover:shadow-xl group-hover:scale-110 relative overflow-hidden`}
                    style={{ height: `${height}px` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-medium text-gray-600 mb-1">{day.day}</div>
                    <div className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {viewMode === 'lessons' ? `${day.lessons} lessons` : `${day.studyTime}h`}
                    </div>
                    {selectedDay === day.day && (
                      <Badge className="mt-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs">
                        Selected
                      </Badge>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Chart Legend */}
          <div className="flex items-center justify-center space-x-6 mt-6 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-teal-400 rounded"></div>
              <span className="text-gray-600">Above Average</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded"></div>
              <span className="text-gray-600">Normal</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-red-400 rounded"></div>
              <span className="text-gray-600">Selected</span>
            </div>
          </div>
        </div>

        {/* Insights */}
        <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl">
          <div className="flex items-center space-x-2 mb-2">
            <TrendingUp className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-800">Weekly Insights</span>
          </div>
          <div className="text-xs text-gray-600 space-y-1">
            <div>• Most productive day: {weeklyProgress.reduce((max, day) =>
              day.lessons > max.lessons ? day : max
            ).day} ({weeklyProgress.reduce((max, day) =>
              day.lessons > max.lessons ? day : max
            ).lessons} lessons)</div>
            <div>• Longest study session: {weeklyProgress.reduce((max, day) =>
              day.studyTime > max.studyTime ? day : max
            ).studyTime}h on {weeklyProgress.reduce((max, day) =>
              day.studyTime > max.studyTime ? day : max
            ).day}</div>
            <div>• Consistency score: {Math.round((1 - (Math.max(...weeklyProgress.map(d => d.lessons)) - Math.min(...weeklyProgress.map(d => d.lessons))) / Math.max(...weeklyProgress.map(d => d.lessons))) * 100)}%</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
