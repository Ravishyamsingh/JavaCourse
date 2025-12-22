import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const COLORS = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];

interface UserDistributionChartProps {
  data: {
    active: number;
    deactivated: number;
    engaged: number;
    completed: number;
  };
}

export const UserDistributionChart: React.FC<UserDistributionChartProps> = ({ data }) => {
  const chartData = [
    { name: 'Active', value: data.active, fill: COLORS[0] },
    { name: 'Deactivated', value: data.deactivated, fill: COLORS[1] },
    { name: 'Engaged', value: data.engaged, fill: COLORS[2] },
    { name: 'Completed', value: data.completed, fill: COLORS[3] }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Distribution</CardTitle>
        <CardDescription>Breakdown of users by status</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name}: ${value}`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

interface CourseProgressChartProps {
  data: Array<{
    name: string;
    progress: number;
    score: number;
  }>;
}

export const CourseProgressChart: React.FC<CourseProgressChartProps> = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Progress Overview</CardTitle>
        <CardDescription>Progress and scores by course</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="progress" fill={COLORS[0]} name="Progress %" />
            <Bar dataKey="score" fill={COLORS[2]} name="Score %" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

interface TimeSeriesChartProps {
  data: Array<{
    date: string;
    lessonsCompleted: number;
    quizzesAttempted: number;
    studyTime: number;
  }>;
}

export const TimeSeriesChart: React.FC<TimeSeriesChartProps> = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity Trend</CardTitle>
        <CardDescription>Last 30 days activity</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="lessonsCompleted"
              stackId="1"
              stroke={COLORS[0]}
              fill={COLORS[0]}
              name="Lessons"
            />
            <Area
              type="monotone"
              dataKey="quizzesAttempted"
              stackId="1"
              stroke={COLORS[2]}
              fill={COLORS[2]}
              name="Quizzes"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

interface PerformanceMetricsChartProps {
  data: {
    excellent: number;
    good: number;
    average: number;
    poor: number;
  };
}

export const PerformanceMetricsChart: React.FC<PerformanceMetricsChartProps> = ({ data }) => {
  const chartData = [
    { name: 'Excellent (80+)', value: data.excellent, fill: COLORS[2] },
    { name: 'Good (60-79)', value: data.good, fill: COLORS[3] },
    { name: 'Average (40-59)', value: data.average, fill: COLORS[4] },
    { name: 'Poor (<40)', value: data.poor, fill: COLORS[1] }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Distribution</CardTitle>
        <CardDescription>Score distribution across all attempts</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" width={120} />
            <Tooltip />
            <Bar dataKey="value" fill={COLORS[0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

interface ProgressBarProps {
  label: string;
  value: number;
  max?: number;
  color?: string;
}

export const ProgressBarComponent: React.FC<ProgressBarProps> = ({
  label,
  value,
  max = 100,
  color = 'bg-blue-500'
}) => {
  const percentage = (value / max) * 100;

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm font-semibold">{Math.round(percentage)}%</span>
      </div>
      <Progress value={percentage} className="h-2" />
    </div>
  );
};

interface ComparisonChartProps {
  data: Array<{
    category: string;
    current: number;
    previous: number;
  }>;
}

export const ComparisonChart: React.FC<ComparisonChartProps> = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Period Comparison</CardTitle>
        <CardDescription>Current vs Previous Period</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="current" fill={COLORS[0]} name="Current" />
            <Bar dataKey="previous" fill={COLORS[4]} name="Previous" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

interface EngagementRadarProps {
  data: Array<{
    metric: string;
    value: number;
  }>;
}

export const EngagementRadar: React.FC<EngagementRadarProps> = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Engagement Metrics</CardTitle>
        <CardDescription>Multi-dimensional engagement analysis</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="metric" />
            <PolarRadiusAxis />
            <Radar
              name="Engagement"
              dataKey="value"
              stroke={COLORS[0]}
              fill={COLORS[0]}
              fillOpacity={0.6}
            />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  description,
  icon,
  trend
}) => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          {icon && <div className="text-muted-foreground">{icon}</div>}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
        {trend && (
          <div className={`text-xs mt-2 ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
          </div>
        )}
      </CardContent>
    </Card>
  );
};

interface HeatmapProps {
  data: Array<{
    user: string;
    course: string;
    progress: number;
  }>;
}

export const ProgressHeatmap: React.FC<HeatmapProps> = ({ data }) => {
  const users = Array.from(new Set(data.map(d => d.user)));
  const courses = Array.from(new Set(data.map(d => d.course)));

  const getColor = (progress: number) => {
    if (progress >= 80) return '#10b981';
    if (progress >= 60) return '#f59e0b';
    if (progress >= 40) return '#f97316';
    return '#ef4444';
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Progress Heatmap</CardTitle>
        <CardDescription>User progress across courses</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left p-2">User</th>
                {courses.map(course => (
                  <th key={course} className="text-center p-2 text-xs">{course}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user}>
                  <td className="p-2 font-medium text-xs">{user}</td>
                  {courses.map(course => {
                    const item = data.find(d => d.user === user && d.course === course);
                    const progress = item?.progress || 0;
                    return (
                      <td
                        key={`${user}-${course}`}
                        className="text-center p-2"
                        style={{
                          backgroundColor: getColor(progress),
                          color: 'white',
                          borderRadius: '4px'
                        }}
                      >
                        {progress}%
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};
