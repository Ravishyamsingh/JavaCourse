import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { 
  ArrowLeft, 
  ArrowRight, 
  Play, 
  FileText, 
  Code, 
  CheckCircle2,
  BookOpen,
  Lightbulb,
  Target,
  Brain,
  Zap,
  Star,
  Clock,
  Trophy,
  ChevronRight
} from 'lucide-react';
import { useProgress } from '@/contexts/ProgressContext';
import CodeEditor from '@/components/CodeEditor';
import { lessonsDatabase } from '@/data/lessonsData';

export default function LessonDetail() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const { markLessonComplete, isLessonCompleted } = useProgress();
  
  const isCompleted = isLessonCompleted(lessonId || '');

  const getLessonData = (id: string) => {
    return lessonsDatabase[id] || {
      title: 'Lesson Not Found',
      type: 'lesson',
      duration: '0 min',
      module: 'Unknown',
      content: {
        overview: 'This lesson content is being developed. Please check back later.',
        objectives: ['Content under development'],
        theory: 'This lesson content is currently being developed. Please check back later for comprehensive materials.',
        codeExample: `// Lesson content under development
public class ComingSoon {
    public static void main(String[] args) {
        System.out.println("This lesson is coming soon!");
        System.out.println("Stay tuned for comprehensive content.");
    }
}`,
        exercise: 'This lesson exercise is under development. Please try other available lessons.'
      }
    };
  };

  const lesson = getLessonData(lessonId || '');

  const getIconForType = (type: string) => {
    switch (type) {
      case 'coding': return <Code className="h-5 w-5" />;
      case 'tutorial': return <Lightbulb className="h-5 w-5" />;
      case 'project': return <Target className="h-5 w-5" />;
      default: return <FileText className="h-5 w-5" />;
    }
  };

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'coding': return 'bg-green-100 text-green-800';
      case 'tutorial': return 'bg-yellow-100 text-yellow-800';
      case 'project': return 'bg-purple-100 text-purple-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  const markAsCompleted = () => {
    if (lessonId) {
      markLessonComplete(lessonId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      {/* Beautiful Header with Glass Effect */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/course')}
                className="hover:bg-blue-50/80 transition-all duration-300"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Course
              </Button>
              <div>
                <div className="flex items-center space-x-3 mb-1">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    {lesson.title}
                  </h1>
                  {isCompleted && (
                    <div className="flex items-center space-x-1 bg-gradient-to-r from-green-100 to-emerald-100 px-3 py-1 rounded-full">
                      <Trophy className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-green-700">Completed</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <span className="flex items-center space-x-1">
                    <ChevronRight className="h-3 w-3" />
                    <span>{lesson.module}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{lesson.duration}</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className={`${getBadgeColor(lesson.type)} border-0 text-sm px-3 py-2 shadow-lg`}>
                {getIconForType(lesson.type)}
                <span className="ml-2 capitalize font-medium">{lesson.type}</span>
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-10">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Beautiful Lesson Overview */}
          <Card className="overflow-hidden border-0 bg-white/70 backdrop-blur-lg shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100/50">
              <CardTitle className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-800">Lesson Overview</div>
                  <div className="text-sm text-gray-600">What you'll learn in this lesson</div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">{lesson.content.overview}</p>
              <div>
                <h4 className="flex items-center space-x-2 font-bold text-lg text-gray-800 mb-4">
                  <div className="p-1.5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg">
                    <Target className="h-4 w-4 text-white" />
                  </div>
                  <span>Learning Objectives</span>
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {lesson.content.objectives.map((objective: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 rounded-lg border border-blue-100/30">
                      <div className="p-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-1">
                        <Zap className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{objective}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="theory" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3 bg-white/60 backdrop-blur-sm p-1 rounded-xl shadow-lg border-0 h-14">
              <TabsTrigger value="theory" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white rounded-lg transition-all duration-300 text-base font-medium">
                <Brain className="w-4 h-4 mr-2" />
                Theory
              </TabsTrigger>
              <TabsTrigger value="code" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white rounded-lg transition-all duration-300 text-base font-medium">
                <Code className="w-4 h-4 mr-2" />
                Code Example
              </TabsTrigger>
              <TabsTrigger value="exercise" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white rounded-lg transition-all duration-300 text-base font-medium">
                <Target className="w-4 h-4 mr-2" />
                Exercise
              </TabsTrigger>
            </TabsList>

            <TabsContent value="theory">
              <Card className="overflow-hidden border-0 bg-white/70 backdrop-blur-lg shadow-2xl">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100/50">
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                      <Brain className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-gray-800">Theory & Concepts</div>
                      <div className="text-sm text-gray-600">Master the fundamentals with our comprehensive guide</div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div 
                      className="prose prose-lg max-w-none lesson-content"
                      style={{
                        fontSize: '16px',
                        lineHeight: '1.7'
                      }}
                      dangerouslySetInnerHTML={{
                        __html: lesson.content.theory
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="code">
              <div className="space-y-6">
                <Card className="overflow-hidden border-0 bg-white/70 backdrop-blur-lg shadow-2xl">
                  <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-100/50">
                    <CardTitle className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                        <Code className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-800">Interactive Code Example</div>
                        <div className="text-sm text-gray-600">Run and modify the code to see how it works</div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                </Card>
                <CodeEditor
                  initialCode={lesson.content.codeExample}
                  title="Interactive Code Example"
                  description="Run this example to see how it works"
                  readonly={false}
                />
              </div>
            </TabsContent>

            <TabsContent value="exercise">
              <div className="space-y-8">
                <Card className="overflow-hidden border-0 bg-white/70 backdrop-blur-lg shadow-2xl">
                  <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-100/50">
                    <CardTitle className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                        <Target className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-800">Practice Exercise</div>
                        <div className="text-sm text-gray-600">Complete this exercise to reinforce your learning</div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-r from-purple-50/50 to-pink-50/50 p-6 rounded-xl border border-purple-200/30">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex-shrink-0 mt-1">
                          <Lightbulb className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">Exercise Instructions</h4>
                          <p className="text-gray-700 font-medium leading-relaxed">{lesson.content.exercise}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden border-0 bg-white/70 backdrop-blur-lg shadow-2xl">
                  <CardHeader className="bg-gradient-to-r from-gray-50 to-slate-50 border-b border-gray-100/50">
                    <CardTitle className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-gray-500 to-slate-500 rounded-lg">
                        <Code className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-800">Exercise Code Editor</div>
                        <div className="text-sm text-gray-600">Write and test your solution here</div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                </Card>
                <CodeEditor
                  initialCode={`// Write your solution here
public class Exercise {
    public static void main(String[] args) {
        // Your code goes here
        
    }
}`}
                  title="Exercise Code Editor"
                  description="Write and test your solution here"
                  readonly={false}
                />
              </div>
            </TabsContent>
          </Tabs>

          {/* Beautiful Completion Section */}
          <Card className="overflow-hidden border-0 bg-white/70 backdrop-blur-lg shadow-2xl">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {isCompleted ? (
                    <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                      <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                        <Trophy className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-green-800">Congratulations!</div>
                        <div className="text-sm text-green-600">You've completed this lesson</div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-3 p-4">
                      <div className="p-2 bg-gradient-to-r from-gray-400 to-gray-500 rounded-lg">
                        <CheckCircle2 className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">Ready to finish?</div>
                        <div className="text-sm text-gray-600">Mark this lesson as complete when you're done</div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-3">
                  {!isCompleted && (
                    <Button 
                      onClick={markAsCompleted} 
                      className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-3"
                      size="lg"
                    >
                      <Trophy className="h-5 w-5 mr-2" />
                      Mark as Complete
                    </Button>
                  )}
                  <Button 
                    variant="outline" 
                    className="border-2 border-blue-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:border-blue-300 transition-all duration-300 px-6 py-3"
                    size="lg"
                  >
                    Next Lesson
                    <ChevronRight className="h-5 w-5 ml-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
