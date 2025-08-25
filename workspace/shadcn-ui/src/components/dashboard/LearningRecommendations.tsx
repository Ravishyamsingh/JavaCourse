import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  BookOpen, 
  TrendingUp, 
  Target, 
  Clock, 
  Star, 
  Lightbulb,
  ArrowRight,
  Zap,
  Brain,
  Award
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface LearningRecommendationsProps {
  completedLessons: string[];
  getModuleProgress: (moduleId: string) => number;
  studyStreak: number;
  totalStudyTime: number;
}

export default function LearningRecommendations({
  completedLessons,
  getModuleProgress,
  studyStreak,
  totalStudyTime
}: LearningRecommendationsProps) {
  const navigate = useNavigate();

  // Generate personalized recommendations based on progress
  const getRecommendations = () => {
    const recommendations = [];

    // Check current progress and suggest next steps
    const module1Progress = getModuleProgress('module-1');
    const module3Progress = getModuleProgress('module-3');
    const module16Progress = getModuleProgress('module-16');

    if (module1Progress < 100) {
      recommendations.push({
        id: 'complete-fundamentals',
        title: 'Complete Java Fundamentals',
        description: 'Master the basics before moving to advanced topics',
        priority: 'high',
        estimatedTime: '2-3 hours',
        moduleId: 'module-1',
        progress: module1Progress,
        icon: <BookOpen className="h-5 w-5" />,
        color: 'from-blue-500 to-blue-600'
      });
    } else if (module3Progress < 100) {
      recommendations.push({
        id: 'master-oop',
        title: 'Master Object-Oriented Programming',
        description: 'Essential concepts for professional Java development',
        priority: 'high',
        estimatedTime: '4-5 hours',
        moduleId: 'module-3',
        progress: module3Progress,
        icon: <Brain className="h-5 w-5" />,
        color: 'from-purple-500 to-purple-600'
      });
    } else if (module16Progress < 50) {
      recommendations.push({
        id: 'web-development',
        title: 'Start Web Development',
        description: 'Learn modern web development with Java',
        priority: 'medium',
        estimatedTime: '6-8 hours',
        moduleId: 'module-16',
        progress: module16Progress,
        icon: <Target className="h-5 w-5" />,
        color: 'from-green-500 to-green-600'
      });
    }

    // Study habit recommendations
    if (studyStreak < 7) {
      recommendations.push({
        id: 'build-streak',
        title: 'Build Study Streak',
        description: 'Consistency is key to mastering Java',
        priority: 'medium',
        estimatedTime: '30 min/day',
        moduleId: null,
        progress: (studyStreak / 7) * 100,
        icon: <Zap className="h-5 w-5" />,
        color: 'from-orange-500 to-red-500'
      });
    }

    // Practice recommendations
    if (completedLessons.length > 10) {
      recommendations.push({
        id: 'practice-coding',
        title: 'Practice Coding Challenges',
        description: 'Reinforce your learning with hands-on exercises',
        priority: 'low',
        estimatedTime: '1-2 hours',
        moduleId: null,
        progress: 0,
        icon: <Award className="h-5 w-5" />,
        color: 'from-yellow-500 to-orange-500'
      });
    }

    return recommendations.slice(0, 4); // Limit to 4 recommendations
  };

  const recommendations = getRecommendations();

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const studyTips = [
    {
      icon: <Clock className="h-4 w-4" />,
      title: 'Consistent Schedule',
      description: 'Study for 30-60 minutes daily for best results'
    },
    {
      icon: <Brain className="h-4 w-4" />,
      title: 'Active Learning',
      description: 'Practice coding while learning concepts'
    },
    {
      icon: <Target className="h-4 w-4" />,
      title: 'Set Goals',
      description: 'Complete 2-3 lessons per study session'
    },
    {
      icon: <Star className="h-4 w-4" />,
      title: 'Review Regularly',
      description: 'Revisit previous lessons to reinforce learning'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Personalized Recommendations */}
      <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
              <Lightbulb className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="text-lg font-bold text-gray-800">Personalized Recommendations</div>
              <div className="text-sm text-gray-600">Tailored suggestions based on your progress</div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {recommendations.map((rec) => (
              <div 
                key={rec.id}
                className="group p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start space-x-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${rec.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {rec.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-gray-800">{rec.title}</h3>
                        <Badge className={`text-xs ${getPriorityColor(rec.priority)} capitalize`}>
                          {rec.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{rec.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{rec.estimatedTime}</span>
                        </div>
                        {rec.progress > 0 && (
                          <div className="flex items-center space-x-1">
                            <TrendingUp className="h-3 w-3" />
                            <span>{Math.round(rec.progress)}% complete</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    onClick={() => rec.moduleId ? navigate(`/course/${rec.moduleId}`) : navigate('/course')}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <ArrowRight className="h-3 w-3 mr-1" />
                    Start
                  </Button>
                </div>
                
                {rec.progress > 0 && (
                  <div className="mt-3">
                    <Progress value={rec.progress} className="h-2" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Study Tips & Best Practices */}
      <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg">
              <Star className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="text-lg font-bold text-gray-800">Study Tips & Best Practices</div>
              <div className="text-sm text-gray-600">Maximize your learning effectiveness</div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {studyTips.map((tip, index) => (
              <div 
                key={index}
                className="flex items-start space-x-3 p-4 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl border border-green-100"
              >
                <div className="p-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg text-white">
                  {tip.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">{tip.title}</h4>
                  <p className="text-sm text-gray-600">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Learning Path Visualization */}
      <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg">
              <Target className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="text-lg font-bold text-gray-800">Your Learning Journey</div>
              <div className="text-sm text-gray-600">Visualize your path to Java mastery</div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Learning Milestones */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Foundation</h4>
                <p className="text-sm text-gray-600 mb-2">Master Java basics</p>
                <Progress value={getModuleProgress('module-1')} className="h-2" />
                <div className="text-xs text-gray-500 mt-1">{Math.round(getModuleProgress('module-1'))}% complete</div>
              </div>

              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Intermediate</h4>
                <p className="text-sm text-gray-600 mb-2">OOP & Advanced Topics</p>
                <Progress value={getModuleProgress('module-3')} className="h-2" />
                <div className="text-xs text-gray-500 mt-1">{Math.round(getModuleProgress('module-3'))}% complete</div>
              </div>

              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Professional</h4>
                <p className="text-sm text-gray-600 mb-2">Web Development & Career</p>
                <Progress value={getModuleProgress('module-16')} className="h-2" />
                <div className="text-xs text-gray-500 mt-1">{Math.round(getModuleProgress('module-16'))}% complete</div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-blue-100">
              <div className="flex items-center space-x-2 mb-3">
                <ArrowRight className="h-4 w-4 text-blue-600" />
                <span className="font-semibold text-gray-800">Recommended Next Steps</span>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <div>• Focus on completing your current module before moving to the next</div>
                <div>• Practice coding exercises to reinforce theoretical knowledge</div>
                <div>• Join the community discussions to learn from other students</div>
                <div>• Set daily learning goals to maintain consistent progress</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}