import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Plus,
  Trash2,
  Save,
  Eye,
  Copy,
  Move,
  GripVertical,
  HelpCircle,
  CheckCircle,
  XCircle,
  Clock,
  Target,
  Settings,
  Play,
  Pause,
  RotateCcw,
  FileText,
  Code,
  Image,
  Video,
} from 'lucide-react';
import {
  Quiz,
  Question,
  QuestionOption,
  QuestionType,
  ContentStatus,
  MediaFile,
} from '@/types/cms';
import RichTextEditor from './RichTextEditor';
import MediaManager from './MediaManager';
import { toast } from 'sonner';

interface QuizBuilderProps {
  quizId?: string;
  lessonId?: string;
  onSave?: (quiz: Quiz) => void;
  className?: string;
}

const QUESTION_TYPE_ICONS = {
  [QuestionType.MULTIPLE_CHOICE]: <CheckCircle className="h-4 w-4" />,
  [QuestionType.MULTIPLE_SELECT]: <CheckCircle className="h-4 w-4" />,
  [QuestionType.TRUE_FALSE]: <XCircle className="h-4 w-4" />,
  [QuestionType.SHORT_ANSWER]: <FileText className="h-4 w-4" />,
  [QuestionType.ESSAY]: <FileText className="h-4 w-4" />,
  [QuestionType.CODE]: <Code className="h-4 w-4" />,
  [QuestionType.FILL_BLANK]: <FileText className="h-4 w-4" />,
  [QuestionType.MATCHING]: <Move className="h-4 w-4" />,
  [QuestionType.ORDERING]: <Move className="h-4 w-4" />,
};

const QUESTION_TYPE_LABELS = {
  [QuestionType.MULTIPLE_CHOICE]: 'Multiple Choice',
  [QuestionType.MULTIPLE_SELECT]: 'Multiple Select',
  [QuestionType.TRUE_FALSE]: 'True/False',
  [QuestionType.SHORT_ANSWER]: 'Short Answer',
  [QuestionType.ESSAY]: 'Essay',
  [QuestionType.CODE]: 'Code',
  [QuestionType.FILL_BLANK]: 'Fill in the Blank',
  [QuestionType.MATCHING]: 'Matching',
  [QuestionType.ORDERING]: 'Ordering',
};

export const QuizBuilder: React.FC<QuizBuilderProps> = ({
  quizId,
  lessonId,
  onSave,
  className = '',
}) => {
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [activeTab, setActiveTab] = useState('details');
  const [editingQuestion, setEditingQuestion] = useState<Question | null>(null);
  const [showMediaManager, setShowMediaManager] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Mock data - in real app, this would come from API
  useEffect(() => {
    if (quizId) {
      // Load existing quiz
      const mockQuiz: Quiz = {
        id: quizId,
        lessonId: lessonId,
        title: 'Java Fundamentals Quiz',
        description: 'Test your understanding of Java basics',
        instructions: 'Answer all questions to the best of your ability. You have 30 minutes to complete this quiz.',
        questions: [
          {
            id: 'q1',
            quizId: quizId,
            type: QuestionType.MULTIPLE_CHOICE,
            question: 'What is the main method signature in Java?',
            explanation: 'The main method is the entry point of a Java program.',
            points: 10,
            order: 1,
            options: [
              { id: 'opt1', text: 'public static void main(String[] args)', isCorrect: true },
              { id: 'opt2', text: 'public void main(String[] args)', isCorrect: false },
              { id: 'opt3', text: 'static void main(String[] args)', isCorrect: false },
              { id: 'opt4', text: 'public static main(String[] args)', isCorrect: false },
            ],
            correctAnswer: 'opt1',
            mediaFiles: [],
          },
        ],
        timeLimit: 30,
        maxAttempts: 3,
        passingScore: 70,
        showCorrectAnswers: true,
        randomizeQuestions: false,
        randomizeAnswers: true,
        status: ContentStatus.DRAFT,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      setQuiz(mockQuiz);
    } else {
      // Create new quiz
      const newQuiz: Quiz = {
        id: '',
        lessonId: lessonId,
        title: '',
        description: '',
        instructions: '',
        questions: [],
        timeLimit: 30,
        maxAttempts: 3,
        passingScore: 70,
        showCorrectAnswers: true,
        randomizeQuestions: false,
        randomizeAnswers: false,
        status: ContentStatus.DRAFT,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      setQuiz(newQuiz);
    }
  }, [quizId, lessonId]);

  const handleQuizUpdate = (updates: Partial<Quiz>) => {
    if (!quiz) return;
    const updatedQuiz = { ...quiz, ...updates, updatedAt: new Date() };
    setQuiz(updatedQuiz);
  };

  const handleSave = async () => {
    if (!quiz) return;
    
    setIsLoading(true);
    try {
      if (onSave) {
        onSave(quiz);
      }
      toast.success('Quiz saved successfully!');
    } catch (error) {
      toast.error('Failed to save quiz');
    } finally {
      setIsLoading(false);
    }
  };

  const addQuestion = (type: QuestionType) => {
    if (!quiz) return;

    const newQuestion: Question = {
      id: `q${Date.now()}`,
      quizId: quiz.id,
      type: type,
      question: '',
      points: 10,
      order: quiz.questions.length + 1,
      options: type === QuestionType.MULTIPLE_CHOICE || type === QuestionType.MULTIPLE_SELECT
        ? [
            { id: `opt${Date.now()}_1`, text: '', isCorrect: false },
            { id: `opt${Date.now()}_2`, text: '', isCorrect: false },
          ]
        : type === QuestionType.TRUE_FALSE
        ? [
            { id: `opt${Date.now()}_true`, text: 'True', isCorrect: false },
            { id: `opt${Date.now()}_false`, text: 'False', isCorrect: false },
          ]
        : undefined,
      correctAnswer: '',
      mediaFiles: [],
    };

    handleQuizUpdate({ questions: [...quiz.questions, newQuestion] });
    setEditingQuestion(newQuestion);
  };

  const updateQuestion = (questionId: string, updates: Partial<Question>) => {
    if (!quiz) return;

    const updatedQuestions = quiz.questions.map(q =>
      q.id === questionId ? { ...q, ...updates } : q
    );

    handleQuizUpdate({ questions: updatedQuestions });
  };

  const deleteQuestion = (questionId: string) => {
    if (!quiz) return;

    const updatedQuestions = quiz.questions.filter(q => q.id !== questionId);
    handleQuizUpdate({ questions: updatedQuestions });
    toast.success('Question deleted successfully');
  };

  const addOption = (questionId: string) => {
    if (!quiz) return;

    const question = quiz.questions.find(q => q.id === questionId);
    if (!question || !question.options) return;

    const newOption: QuestionOption = {
      id: `opt${Date.now()}`,
      text: '',
      isCorrect: false,
    };

    const updatedOptions = [...question.options, newOption];
    updateQuestion(questionId, { options: updatedOptions });
  };

  const updateOption = (questionId: string, optionId: string, updates: Partial<QuestionOption>) => {
    if (!quiz) return;

    const question = quiz.questions.find(q => q.id === questionId);
    if (!question || !question.options) return;

    const updatedOptions = question.options.map(opt =>
      opt.id === optionId ? { ...opt, ...updates } : opt
    );

    updateQuestion(questionId, { options: updatedOptions });
  };

  const deleteOption = (questionId: string, optionId: string) => {
    if (!quiz) return;

    const question = quiz.questions.find(q => q.id === questionId);
    if (!question || !question.options) return;

    const updatedOptions = question.options.filter(opt => opt.id !== optionId);
    updateQuestion(questionId, { options: updatedOptions });
  };

  const calculateTotalPoints = () => {
    if (!quiz) return 0;
    return quiz.questions.reduce((total, question) => total + question.points, 0);
  };

  const renderQuestionEditor = (question: Question) => {
    return (
      <Card key={question.id} className="mb-4">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {QUESTION_TYPE_ICONS[question.type]}
              <span className="font-medium">Question {question.order}</span>
              <Badge variant="outline">{QUESTION_TYPE_LABELS[question.type]}</Badge>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setEditingQuestion(question)}
              >
                <Settings className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => deleteQuestion(question.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div>
            <Label>Question Text</Label>
            <RichTextEditor
              content={question.question}
              onChange={(content) => updateQuestion(question.id, { question: content })}
              placeholder="Enter your question..."
              showToolbar={true}
              showPreview={false}
            />
          </div>

          {question.codeSnippet && (
            <div>
              <Label>Code Snippet</Label>
              <Textarea
                value={question.codeSnippet}
                onChange={(e) => updateQuestion(question.id, { codeSnippet: e.target.value })}
                placeholder="Enter code snippet..."
                className="font-mono"
                rows={6}
              />
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Points</Label>
              <Input
                type="number"
                value={question.points}
                onChange={(e) => updateQuestion(question.id, { points: parseInt(e.target.value) || 0 })}
                min="1"
              />
            </div>
            <div>
              <Label>Question Type</Label>
              <Select
                value={question.type}
                onValueChange={(value) => updateQuestion(question.id, { type: value as QuestionType })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(QUESTION_TYPE_LABELS).map(([type, label]) => (
                    <SelectItem key={type} value={type}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Render options based on question type */}
          {(question.type === QuestionType.MULTIPLE_CHOICE || 
            question.type === QuestionType.MULTIPLE_SELECT ||
            question.type === QuestionType.TRUE_FALSE) && question.options && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <Label>Answer Options</Label>
                {question.type !== QuestionType.TRUE_FALSE && (
                  <Button
                    size="sm"
                    onClick={() => addOption(question.id)}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Option
                  </Button>
                )}
              </div>
              <div className="space-y-2">
                {question.options.map((option, index) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    {question.type === QuestionType.MULTIPLE_CHOICE ? (
                      <RadioGroup
                        value={option.isCorrect ? option.id : ''}
                        onValueChange={(value) => {
                          // Update all options to be incorrect, then set the selected one as correct
                          question.options?.forEach(opt => {
                            updateOption(question.id, opt.id, { isCorrect: opt.id === value });
                          });
                        }}
                      >
                        <RadioGroupItem value={option.id} />
                      </RadioGroup>
                    ) : (
                      <Checkbox
                        checked={option.isCorrect}
                        onCheckedChange={(checked) => 
                          updateOption(question.id, option.id, { isCorrect: checked as boolean })
                        }
                      />
                    )}
                    <Input
                      value={option.text}
                      onChange={(e) => updateOption(question.id, option.id, { text: e.target.value })}
                      placeholder={`Option ${index + 1}`}
                      className="flex-1"
                    />
                    {question.type !== QuestionType.TRUE_FALSE && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteOption(question.id, option.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {(question.type === QuestionType.SHORT_ANSWER || 
            question.type === QuestionType.FILL_BLANK) && (
            <div>
              <Label>Correct Answer</Label>
              <Input
                value={question.correctAnswer as string}
                onChange={(e) => updateQuestion(question.id, { correctAnswer: e.target.value })}
                placeholder="Enter the correct answer..."
              />
            </div>
          )}

          <div>
            <Label>Explanation (Optional)</Label>
            <Textarea
              value={question.explanation || ''}
              onChange={(e) => updateQuestion(question.id, { explanation: e.target.value })}
              placeholder="Explain why this is the correct answer..."
              rows={3}
            />
          </div>
        </CardContent>
      </Card>
    );
  };

  if (!quiz) {
    return <div>Loading...</div>;
  }

  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center space-x-2">
              <HelpCircle className="h-5 w-5" />
              <span>{quiz.title || 'New Quiz'}</span>
              <Badge variant="outline">{quiz.status}</Badge>
            </CardTitle>
            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
              <span className="flex items-center space-x-1">
                <Target className="h-4 w-4" />
                <span>{quiz.questions.length} questions</span>
              </span>
              <span className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{quiz.timeLimit} minutes</span>
              </span>
              <span className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4" />
                <span>{calculateTotalPoints()} points total</span>
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              onClick={() => setPreviewMode(!previewMode)}
            >
              {previewMode ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
              {previewMode ? 'Edit Mode' : 'Preview'}
            </Button>
            <Button onClick={handleSave} disabled={isLoading}>
              <Save className="h-4 w-4 mr-2" />
              {isLoading ? 'Saving...' : 'Save Quiz'}
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="details">Quiz Details</TabsTrigger>
            <TabsTrigger value="questions">Questions</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Quiz Title</Label>
                  <Input
                    id="title"
                    value={quiz.title}
                    onChange={(e) => handleQuizUpdate({ title: e.target.value })}
                    placeholder="Enter quiz title"
                  />
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={quiz.description}
                    onChange={(e) => handleQuizUpdate({ description: e.target.value })}
                    placeholder="Enter quiz description"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="instructions">Instructions</Label>
                  <Textarea
                    id="instructions"
                    value={quiz.instructions}
                    onChange={(e) => handleQuizUpdate({ instructions: e.target.value })}
                    placeholder="Enter instructions for students"
                    rows={4}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="timeLimit">Time Limit (minutes)</Label>
                  <Input
                    id="timeLimit"
                    type="number"
                    value={quiz.timeLimit || ''}
                    onChange={(e) => handleQuizUpdate({ timeLimit: parseInt(e.target.value) || undefined })}
                    placeholder="No time limit"
                  />
                </div>

                <div>
                  <Label htmlFor="maxAttempts">Maximum Attempts</Label>
                  <Input
                    id="maxAttempts"
                    type="number"
                    value={quiz.maxAttempts}
                    onChange={(e) => handleQuizUpdate({ maxAttempts: parseInt(e.target.value) || 1 })}
                    min="1"
                  />
                </div>

                <div>
                  <Label htmlFor="passingScore">Passing Score (%)</Label>
                  <Input
                    id="passingScore"
                    type="number"
                    value={quiz.passingScore}
                    onChange={(e) => handleQuizUpdate({ passingScore: parseInt(e.target.value) || 0 })}
                    min="0"
                    max="100"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="showCorrectAnswers">Show Correct Answers</Label>
                    <Switch
                      id="showCorrectAnswers"
                      checked={quiz.showCorrectAnswers}
                      onCheckedChange={(checked) => handleQuizUpdate({ showCorrectAnswers: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="randomizeQuestions">Randomize Questions</Label>
                    <Switch
                      id="randomizeQuestions"
                      checked={quiz.randomizeQuestions}
                      onCheckedChange={(checked) => handleQuizUpdate({ randomizeQuestions: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="randomizeAnswers">Randomize Answers</Label>
                    <Switch
                      id="randomizeAnswers"
                      checked={quiz.randomizeAnswers}
                      onCheckedChange={(checked) => handleQuizUpdate({ randomizeAnswers: checked })}
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="questions" className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Questions</h3>
              <Select onValueChange={(value) => addQuestion(value as QuestionType)}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Add Question" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(QUESTION_TYPE_LABELS).map(([type, label]) => (
                    <SelectItem key={type} value={type}>
                      <div className="flex items-center space-x-2">
                        {QUESTION_TYPE_ICONS[type as QuestionType]}
                        <span>{label}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {quiz.questions.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <HelpCircle className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>No questions added yet</p>
                <p className="text-sm">Use the dropdown above to add your first question</p>
              </div>
            ) : (
              <div className="space-y-4">
                {quiz.questions.map(renderQuestionEditor)}
              </div>
            )}
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quiz Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="status">Status</Label>
                  <Select
                    value={quiz.status}
                    onValueChange={(value) => handleQuizUpdate({ status: value as ContentStatus })}
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

                <Separator />

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Total Questions</Label>
                    <div className="text-2xl font-bold">{quiz.questions.length}</div>
                  </div>
                  <div>
                    <Label>Total Points</Label>
                    <div className="text-2xl font-bold">{calculateTotalPoints()}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default QuizBuilder;