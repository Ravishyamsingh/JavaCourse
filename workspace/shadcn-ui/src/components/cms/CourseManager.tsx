import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import {
  Plus,
  Edit,
  Trash2,
  Save,
  Eye,
  Copy,
  GripVertical,
  BookOpen,
  Video,
  FileText,
  Code,
  Award,
  Users,
  Clock,
  Target,
  ChevronDown,
  ChevronRight,
} from 'lucide-react';
import {
  Course,
  Module,
  Lesson,
  ContentStatus,
  ContentVisibility,
  DifficultyLevel,
  LessonType,
} from '@/types/cms';
import { useRBAC } from '@/contexts/RBACContext';
import { toast } from 'sonner';

interface CourseManagerProps {
  courseId?: string;
  onSave?: (course: Course) => void;
  className?: string;
}

const LESSON_TYPE_ICONS = {
  [LessonType.LESSON]: <BookOpen className="h-4 w-4" />,
  [LessonType.TUTORIAL]: <Video className="h-4 w-4" />,
  [LessonType.CODING]: <Code className="h-4 w-4" />,
  [LessonType.PROJECT]: <FileText className="h-4 w-4" />,
  [LessonType.ASSESSMENT]: <Award className="h-4 w-4" />,
};

const STATUS_COLORS = {
  [ContentStatus.DRAFT]: 'bg-gray-100 text-gray-800',
  [ContentStatus.REVIEW]: 'bg-yellow-100 text-yellow-800',
  [ContentStatus.PUBLISHED]: 'bg-green-100 text-green-800',
  [ContentStatus.ARCHIVED]: 'bg-red-100 text-red-800',
};

export const CourseManager: React.FC<CourseManagerProps> = ({
  courseId,
  onSave,
  className = '',
}) => {
  const { hasPermission } = useRBAC();
  const [course, setCourse] = useState<Course | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedModules, setExpandedModules] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(false);

  // Mock data - in real app, this would come from API
  useEffect(() => {
    if (courseId) {
      // Load existing course
      const mockCourse: Course = {
        id: courseId,
        title: 'Complete Java Programming Course',
        description: 'Learn Java from basics to advanced concepts with hands-on projects and real-world examples.',
        slug: 'complete-java-programming',
        status: ContentStatus.PUBLISHED,
        visibility: ContentVisibility.PUBLIC,
        instructorId: 'instructor-1',
        modules: [
          {
            id: 'module-1',
            courseId: courseId,
            title: 'Java Fundamentals',
            description: 'Learn the basics of Java programming',
            order: 1,
            status: ContentStatus.PUBLISHED,
            estimatedDuration: 180,
            createdAt: new Date(),
            updatedAt: new Date(),
            lessons: [
              {
                id: 'lesson-1-1',
                moduleId: 'module-1',
                title: 'Introduction to Java',
                description: 'Overview of Java programming language',
                content: {
                  id: 'content-1-1',
                  lessonId: 'lesson-1-1',
                  content: '<h1>Introduction to Java</h1><p>Java is a powerful programming language...</p>',
                  codeExamples: [],
                  mediaFiles: [],
                  interactiveElements: [],
                  version: 1,
                  createdAt: new Date(),
                  updatedAt: new Date(),
                },
                type: LessonType.LESSON,
                order: 1,
                status: ContentStatus.PUBLISHED,
                estimatedDuration: 25,
                resources: [],
                assignments: [],
                quizzes: [],
                createdAt: new Date(),
                updatedAt: new Date(),
                version: 1,
              },
            ],
          },
        ],
        tags: ['java', 'programming', 'beginner'],
        difficulty: DifficultyLevel.BEGINNER,
        estimatedDuration: 40,
        prerequisites: [],
        learningObjectives: [
          'Understand Java syntax and fundamentals',
          'Build real-world Java applications',
          'Master object-oriented programming concepts',
        ],
        createdAt: new Date(),
        updatedAt: new Date(),
        version: 1,
        seoData: {
          title: 'Complete Java Programming Course - Learn Java from Scratch',
          description: 'Master Java programming with our comprehensive course. Perfect for beginners and intermediate developers.',
          keywords: ['java', 'programming', 'course', 'tutorial'],
        },
      };
      setCourse(mockCourse);
    } else {
      // Create new course
      const newCourse: Course = {
        id: '',
        title: '',
        description: '',
        slug: '',
        status: ContentStatus.DRAFT,
        visibility: ContentVisibility.PRIVATE,
        instructorId: 'current-user',
        modules: [],
        tags: [],
        difficulty: DifficultyLevel.BEGINNER,
        estimatedDuration: 0,
        prerequisites: [],
        learningObjectives: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        version: 1,
        seoData: {
          keywords: [],
        },
      };
      setCourse(newCourse);
    }
  }, [courseId]);

  const handleCourseUpdate = (updates: Partial<Course>) => {
    if (!course) return;
    const updatedCourse = { ...course, ...updates, updatedAt: new Date() };
    setCourse(updatedCourse);
  };

  const handleSave = async () => {
    if (!course) return;
    
    setIsLoading(true);
    try {
      // Generate slug from title if empty
      if (!course.slug && course.title) {
        course.slug = course.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      }
      
      if (onSave) {
        onSave(course);
      }
      toast.success('Course saved successfully!');
    } catch (error) {
      toast.error('Failed to save course');
    } finally {
      setIsLoading(false);
    }
  };

  const addModule = () => {
    if (!course) return;

    const newModule: Module = {
      id: `module-${Date.now()}`,
      courseId: course.id,
      title: 'New Module',
      description: '',
      order: course.modules.length + 1,
      status: ContentStatus.DRAFT,
      estimatedDuration: 0,
      lessons: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    handleCourseUpdate({ modules: [...course.modules, newModule] });
  };

  const addLesson = (moduleId: string) => {
    if (!course) return;

    const moduleIndex = course.modules.findIndex(m => m.id === moduleId);
    if (moduleIndex === -1) return;

    const module = course.modules[moduleIndex];
    const newLesson: Lesson = {
      id: `lesson-${Date.now()}`,
      moduleId: moduleId,
      title: 'New Lesson',
      description: '',
      content: {
        id: `content-${Date.now()}`,
        lessonId: `lesson-${Date.now()}`,
        content: '',
        codeExamples: [],
        mediaFiles: [],
        interactiveElements: [],
        version: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      type: LessonType.LESSON,
      order: module.lessons.length + 1,
      status: ContentStatus.DRAFT,
      estimatedDuration: 30,
      resources: [],
      assignments: [],
      quizzes: [],
      createdAt: new Date(),
      updatedAt: new Date(),
      version: 1,
    };

    const updatedModules = [...course.modules];
    updatedModules[moduleIndex] = {
      ...module,
      lessons: [...module.lessons, newLesson],
    };

    handleCourseUpdate({ modules: updatedModules });
  };

  const deleteModule = (moduleId: string) => {
    if (!course) return;
    
    const updatedModules = course.modules.filter(m => m.id !== moduleId);
    handleCourseUpdate({ modules: updatedModules });
    toast.success('Module deleted successfully');
  };

  const deleteLesson = (moduleId: string, lessonId: string) => {
    if (!course) return;

    const moduleIndex = course.modules.findIndex(m => m.id === moduleId);
    if (moduleIndex === -1) return;

    const module = course.modules[moduleIndex];
    const updatedLessons = module.lessons.filter(l => l.id !== lessonId);
    
    const updatedModules = [...course.modules];
    updatedModules[moduleIndex] = { ...module, lessons: updatedLessons };

    handleCourseUpdate({ modules: updatedModules });
    toast.success('Lesson deleted successfully');
  };

  const toggleModuleExpansion = (moduleId: string) => {
    const newExpanded = new Set(expandedModules);
    if (newExpanded.has(moduleId)) {
      newExpanded.delete(moduleId);
    } else {
      newExpanded.add(moduleId);
    }
    setExpandedModules(newExpanded);
  };

  const calculateCourseProgress = () => {
    if (!course) return 0;
    
    const totalLessons = course.modules.reduce((acc, module) => acc + module.lessons.length, 0);
    const publishedLessons = course.modules.reduce(
      (acc, module) => acc + module.lessons.filter(l => l.status === ContentStatus.PUBLISHED).length,
      0
    );
    
    return totalLessons > 0 ? (publishedLessons / totalLessons) * 100 : 0;
  };

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5" />
              <span>{course.title || 'New Course'}</span>
              <Badge className={STATUS_COLORS[course.status]}>
                {course.status}
              </Badge>
            </CardTitle>
            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
              <span className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>{course.modules.length} modules</span>
              </span>
              <span className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{course.estimatedDuration}h estimated</span>
              </span>
              <span className="flex items-center space-x-1">
                <Target className="h-4 w-4" />
                <span>{calculateCourseProgress().toFixed(0)}% complete</span>
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline">
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </Button>
            <Button onClick={handleSave} disabled={isLoading}>
              <Save className="h-4 w-4 mr-2" />
              {isLoading ? 'Saving...' : 'Save Course'}
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="structure">Structure</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Course Title</Label>
                  <Input
                    id="title"
                    value={course.title}
                    onChange={(e) => handleCourseUpdate({ title: e.target.value })}
                    placeholder="Enter course title"
                  />
                </div>
                
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={course.description}
                    onChange={(e) => handleCourseUpdate({ description: e.target.value })}
                    placeholder="Enter course description"
                    rows={4}
                  />
                </div>

                <div>
                  <Label htmlFor="difficulty">Difficulty Level</Label>
                  <Select
                    value={course.difficulty}
                    onValueChange={(value) => handleCourseUpdate({ difficulty: value as DifficultyLevel })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={DifficultyLevel.BEGINNER}>Beginner</SelectItem>
                      <SelectItem value={DifficultyLevel.INTERMEDIATE}>Intermediate</SelectItem>
                      <SelectItem value={DifficultyLevel.ADVANCED}>Advanced</SelectItem>
                      <SelectItem value={DifficultyLevel.EXPERT}>Expert</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="estimatedDuration">Estimated Duration (hours)</Label>
                  <Input
                    id="estimatedDuration"
                    type="number"
                    value={course.estimatedDuration}
                    onChange={(e) => handleCourseUpdate({ estimatedDuration: parseInt(e.target.value) || 0 })}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="tags">Tags (comma-separated)</Label>
                  <Input
                    id="tags"
                    value={course.tags.join(', ')}
                    onChange={(e) => handleCourseUpdate({ 
                      tags: e.target.value.split(',').map(tag => tag.trim()).filter(Boolean)
                    })}
                    placeholder="java, programming, beginner"
                  />
                </div>

                <div>
                  <Label htmlFor="prerequisites">Prerequisites (one per line)</Label>
                  <Textarea
                    id="prerequisites"
                    value={course.prerequisites.join('\n')}
                    onChange={(e) => handleCourseUpdate({ 
                      prerequisites: e.target.value.split('\n').filter(Boolean)
                    })}
                    placeholder="Basic computer knowledge"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="objectives">Learning Objectives (one per line)</Label>
                  <Textarea
                    id="objectives"
                    value={course.learningObjectives.join('\n')}
                    onChange={(e) => handleCourseUpdate({ 
                      learningObjectives: e.target.value.split('\n').filter(Boolean)
                    })}
                    placeholder="Understand Java fundamentals"
                    rows={4}
                  />
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-4">Course Progress</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Overall Completion</span>
                  <span>{calculateCourseProgress().toFixed(0)}%</span>
                </div>
                <Progress value={calculateCourseProgress()} className="h-2" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="structure" className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Course Structure</h3>
              <Button onClick={addModule}>
                <Plus className="h-4 w-4 mr-2" />
                Add Module
              </Button>
            </div>

            <div className="space-y-4">
              {course.modules.map((module, index) => (
                <Card key={module.id} className="border-l-4 border-l-blue-500">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <GripVertical className="h-5 w-5 text-gray-400" />
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleModuleExpansion(module.id)}
                        >
                          {expandedModules.has(module.id) ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </Button>
                        <div>
                          <h4 className="font-semibold">{module.title}</h4>
                          <p className="text-sm text-gray-500">{module.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={STATUS_COLORS[module.status]}>
                          {module.status}
                        </Badge>
                        <span className="text-sm text-gray-500">
                          {module.lessons.length} lessons
                        </span>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteModule(module.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>

                  {expandedModules.has(module.id) && (
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <h5 className="font-medium">Lessons</h5>
                        <Button
                          size="sm"
                          onClick={() => addLesson(module.id)}
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          Add Lesson
                        </Button>
                      </div>

                      <div className="space-y-2">
                        {module.lessons.map((lesson) => (
                          <div
                            key={lesson.id}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                          >
                            <div className="flex items-center space-x-3">
                              <GripVertical className="h-4 w-4 text-gray-400" />
                              {LESSON_TYPE_ICONS[lesson.type]}
                              <div>
                                <div className="font-medium">{lesson.title}</div>
                                <div className="text-sm text-gray-500">
                                  {lesson.type} • {lesson.estimatedDuration}min
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Badge className={STATUS_COLORS[lesson.status]}>
                                {lesson.status}
                              </Badge>
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => deleteLesson(module.id, lesson.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Publishing Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="status">Status</Label>
                    <Select
                      value={course.status}
                      onValueChange={(value) => handleCourseUpdate({ status: value as ContentStatus })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={ContentStatus.DRAFT}>Draft</SelectItem>
                        <SelectItem value={ContentStatus.REVIEW}>Under Review</SelectItem>
                        <SelectItem value={ContentStatus.PUBLISHED}>Published</SelectItem>
                        <SelectItem value={ContentStatus.ARCHIVED}>Archived</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="visibility">Visibility</Label>
                    <Select
                      value={course.visibility}
                      onValueChange={(value) => handleCourseUpdate({ visibility: value as ContentVisibility })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={ContentVisibility.PUBLIC}>Public</SelectItem>
                        <SelectItem value={ContentVisibility.PRIVATE}>Private</SelectItem>
                        <SelectItem value={ContentVisibility.UNLISTED}>Unlisted</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="slug">URL Slug</Label>
                    <Input
                      id="slug"
                      value={course.slug}
                      onChange={(e) => handleCourseUpdate({ slug: e.target.value })}
                      placeholder="course-url-slug"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>SEO Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="seoTitle">SEO Title</Label>
                    <Input
                      id="seoTitle"
                      value={course.seoData.title || ''}
                      onChange={(e) => handleCourseUpdate({ 
                        seoData: { ...course.seoData, title: e.target.value }
                      })}
                      placeholder="SEO optimized title"
                    />
                  </div>

                  <div>
                    <Label htmlFor="seoDescription">SEO Description</Label>
                    <Textarea
                      id="seoDescription"
                      value={course.seoData.description || ''}
                      onChange={(e) => handleCourseUpdate({ 
                        seoData: { ...course.seoData, description: e.target.value }
                      })}
                      placeholder="SEO meta description"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="seoKeywords">SEO Keywords</Label>
                    <Input
                      id="seoKeywords"
                      value={course.seoData.keywords.join(', ')}
                      onChange={(e) => handleCourseUpdate({ 
                        seoData: { 
                          ...course.seoData, 
                          keywords: e.target.value.split(',').map(k => k.trim()).filter(Boolean)
                        }
                      })}
                      placeholder="keyword1, keyword2, keyword3"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Modules</p>
                      <p className="text-2xl font-bold">{course.modules.length}</p>
                    </div>
                    <BookOpen className="h-8 w-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Lessons</p>
                      <p className="text-2xl font-bold">
                        {course.modules.reduce((acc, module) => acc + module.lessons.length, 0)}
                      </p>
                    </div>
                    <Video className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Completion Rate</p>
                      <p className="text-2xl font-bold">{calculateCourseProgress().toFixed(0)}%</p>
                    </div>
                    <Target className="h-8 w-8 text-purple-500" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default CourseManager;
