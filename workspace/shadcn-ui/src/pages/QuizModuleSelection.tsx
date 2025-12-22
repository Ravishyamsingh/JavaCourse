import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import {
  BookOpen,
  Star,
  ChevronRight,
  Clock,
  Trophy,
  Brain,
  Target,
  Zap,
  TrendingUp,
  Settings,
  Sparkles,
  ListChecks,
  AlertCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '@/contexts/QuizContext';
import { dynamicQuizGenerator } from '@/data/dynamicQuizGenerator';
import { courseModules } from '@/data/courseStructure';
import { QUIZ_RULES } from '@/services/localQuizService';
import UserProfile from '@/components/UserProfile';
import BackButton from '@/components/BackButton';
import useScrollToTop from '@/hooks/useScrollToTop';
import { useState } from 'react';
import { toast } from 'sonner';

export default function QuizModuleSelection() {
  const navigate = useNavigate();
  const { getQuizStats, getModulePerformance, getRecommendedDifficulty } = useQuiz();
  
  // Scroll to top when component mounts
  useScrollToTop();
  
  // Gemini AI quiz state
  const [selectionMode, setSelectionMode] = useState<'range' | 'individual'>('range');
  const [rangeFrom, setRangeFrom] = useState<string>('1');
  const [rangeTo, setRangeTo] = useState<string>('5');
  const [selectedModules, setSelectedModules] = useState<number[]>([]);
  const [questionCount, setQuestionCount] = useState<string>('15');
  
  // Get available modules from dynamic quiz generator
  const availableModules = dynamicQuizGenerator.getAvailableModules();
  const questionStats = dynamicQuizGenerator.getQuestionStats();
  const quizStats = getQuizStats();
  const recommendedDifficulty = getRecommendedDifficulty();

  const modules = availableModules.map(module => {
    const stats = questionStats[module];
    const performance = getModulePerformance(module);
    return {
      name: module,
      questionCount: stats.total,
      performance: performance,
      difficulty: stats.byDifficulty
    };
  });

  // Handle module checkbox toggle with 5-module limit
  const toggleModuleSelection = (moduleNumber: number) => {
    setSelectedModules(prev => {
      if (prev.includes(moduleNumber)) {
        // Always allow removing
        return prev.filter(m => m !== moduleNumber);
      } else {
        // Check if max reached
        if (prev.length >= QUIZ_RULES.MAX_MODULES_PER_QUIZ) {
          toast.warning(`Maximum ${QUIZ_RULES.MAX_MODULES_PER_QUIZ} modules allowed per quiz`);
          return prev;
        }
        return [...prev, moduleNumber];
      }
    });
  };

  // Generate quiz with validation
  const handleGenerateGeminiQuiz = () => {
    const count = Math.min(parseInt(questionCount) || 15, QUIZ_RULES.MAX_QUESTIONS_PER_QUIZ);
    
    if (selectionMode === 'range') {
      const from = parseInt(rangeFrom) || 1;
      const to = parseInt(rangeTo) || 5;
      
      // Validate range doesn't exceed 5 modules
      const rangeSize = to - from + 1;
      if (rangeSize > QUIZ_RULES.MAX_MODULES_PER_QUIZ) {
        toast.error(`Range cannot exceed ${QUIZ_RULES.MAX_MODULES_PER_QUIZ} modules. Please select a smaller range.`);
        return;
      }
      if (rangeSize < 1) {
        toast.error('Invalid range. "From" must be less than or equal to "To".');
        return;
      }
      
      navigate(`/quiz?gemini=true&from=${from}&to=${to}&count=${count}`);
    } else {
      if (selectedModules.length === 0) {
        toast.error('Please select at least one module');
        return;
      }
      if (selectedModules.length > QUIZ_RULES.MAX_MODULES_PER_QUIZ) {
        toast.error(`Maximum ${QUIZ_RULES.MAX_MODULES_PER_QUIZ} modules allowed`);
        return;
      }
      const modulesList = selectedModules.sort((a, b) => a - b).join(',');
      navigate(`/quiz?gemini=true&modules=${modulesList}&count=${count}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Star className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Java Mastery Quiz</h1>
          </div>
          <div className="flex items-center space-x-3">
            <Button onClick={() => navigate('/')} variant="outline">
              Back to Home
            </Button>
            <UserProfile />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <BackButton to="/course" label="Back to Course" />
          </div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dynamic Quiz System
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience personalized quizzes that adapt to your learning progress and focus on areas that need improvement
            </p>
          </div>

          {/* Quiz Statistics Overview */}
          {quizStats.totalQuizzesTaken > 0 && (
            <Card className="mb-8 border-0 shadow-xl bg-gradient-to-r from-green-50 to-blue-50">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{quizStats.totalQuizzesTaken}</div>
                    <div className="text-sm text-gray-600">Quizzes Taken</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{(quizStats.averageScore * 100).toFixed(1)}%</div>
                    <div className="text-sm text-gray-600">Average Score</div>
                  </div>
                  <div className="text-center">
                    <Badge className={`${
                      recommendedDifficulty === 'easy' ? 'bg-green-100 text-green-800' :
                      recommendedDifficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {recommendedDifficulty.toUpperCase()}
                    </Badge>
                    <div className="text-sm text-gray-600 mt-1">Recommended Level</div>
                  </div>
                  <div className="text-center">
                    <Button
                      onClick={() => navigate(`/quiz?adaptive=true&count=15`)}
                      size="sm"
                      className="bg-gradient-to-r from-purple-500 to-pink-500"
                    >
                      <Brain className="h-4 w-4 mr-2" />
                      Adaptive Quiz
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Quick Start Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-100 hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-fit mx-auto mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Quick Quiz</h3>
                <p className="text-gray-600 text-sm mb-4">5 random questions from all modules</p>
                <Button
                  onClick={() => navigate('/quiz?count=5')}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-500"
                >
                  Start Quick Quiz
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-pink-100 hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-fit mx-auto mb-4">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Adaptive Quiz</h3>
                <p className="text-gray-600 text-sm mb-4">Personalized based on your performance</p>
                <Button
                  onClick={() => navigate('/quiz?adaptive=true&count=10')}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500"
                >
                  Start Adaptive Quiz
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-emerald-100 hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-fit mx-auto mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Challenge Mode</h3>
                <p className="text-gray-600 text-sm mb-4">Hard questions for advanced learners</p>
                <Button
                  onClick={() => navigate('/quiz?difficulty=hard&count=15')}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500"
                >
                  Start Challenge
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Module Selection */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Quiz by Module</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {modules.map((module, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-xl bg-white/80 backdrop-blur-lg hover:shadow-2xl transition-all duration-300"
                >
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                          <BookOpen className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <div className="text-lg font-bold text-gray-800">{module.name}</div>
                          <div className="text-sm text-gray-600">{module.questionCount} questions available</div>
                        </div>
                      </div>
                      {module.performance > 0 && (
                        <Badge className={`${
                          module.performance >= 0.8 ? 'bg-green-100 text-green-800' :
                          module.performance >= 0.6 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {(module.performance * 100).toFixed(0)}%
                        </Badge>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Difficulty Distribution:</span>
                        <div className="flex space-x-2">
                          <Badge variant="outline" className="text-xs">
                            Easy: {module.difficulty.easy}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            Medium: {module.difficulty.medium}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            Hard: {module.difficulty.hard}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        <Button
                          onClick={() => navigate(`/quiz?module=${encodeURIComponent(module.name)}&count=10`)}
                          size="sm"
                          variant="outline"
                          className="flex items-center space-x-1"
                        >
                          <span>Mixed</span>
                          <ChevronRight className="h-3 w-3" />
                        </Button>
                        <Button
                          onClick={() => navigate(`/quiz?module=${encodeURIComponent(module.name)}&difficulty=easy&count=8`)}
                          size="sm"
                          variant="outline"
                          className="text-green-600 border-green-200 hover:bg-green-50"
                        >
                          Easy
                        </Button>
                        <Button
                          onClick={() => navigate(`/quiz?module=${encodeURIComponent(module.name)}&difficulty=medium&count=8`)}
                          size="sm"
                          variant="outline"
                          className="text-yellow-600 border-yellow-200 hover:bg-yellow-50"
                        >
                          Medium
                        </Button>
                        <Button
                          onClick={() => navigate(`/quiz?module=${encodeURIComponent(module.name)}&difficulty=hard&count=8`)}
                          size="sm"
                          variant="outline"
                          className="text-red-600 border-red-200 hover:bg-red-50"
                        >
                          Hard
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Gemini AI Quiz Generator */}
          <Card className="mb-8 border-0 shadow-xl bg-gradient-to-r from-orange-50 via-pink-50 to-purple-50">
            <CardHeader>
              <CardTitle className="flex items-center justify-center space-x-3">
                <div className="p-3 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">AI-Powered Quiz Generator</h3>
                  <p className="text-sm text-gray-600 font-normal mt-1">
                    Generate custom quizzes using Google Gemini AI
                  </p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Selection Mode Toggle */}
              <div className="flex justify-center space-x-4">
                <Button
                  onClick={() => setSelectionMode('range')}
                  variant={selectionMode === 'range' ? 'default' : 'outline'}
                  className={selectionMode === 'range' ? 'bg-gradient-to-r from-orange-500 to-pink-500' : ''}
                >
                  <Target className="h-4 w-4 mr-2" />
                  Module Range
                </Button>
                <Button
                  onClick={() => setSelectionMode('individual')}
                  variant={selectionMode === 'individual' ? 'default' : 'outline'}
                  className={selectionMode === 'individual' ? 'bg-gradient-to-r from-orange-500 to-pink-500' : ''}
                >
                  <ListChecks className="h-4 w-4 mr-2" />
                  Individual Modules
                </Button>
              </div>

              <Separator />

              {/* Range Selection Mode */}
              {selectionMode === 'range' && (
                <div className="space-y-4">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Select Module Range</h4>
                    <p className="text-sm text-gray-600">Choose a range of modules (max {QUIZ_RULES.MAX_MODULES_PER_QUIZ} modules)</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
                    <div className="space-y-2">
                      <Label htmlFor="range-from" className="text-gray-700">From Module</Label>
                      <Input
                        id="range-from"
                        type="number"
                        min="1"
                        max="20"
                        value={rangeFrom}
                        onChange={(e) => setRangeFrom(e.target.value)}
                        className="text-center font-semibold"
                        placeholder="1"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="range-to" className="text-gray-700">To Module</Label>
                      <Input
                        id="range-to"
                        type="number"
                        min="1"
                        max="20"
                        value={rangeTo}
                        onChange={(e) => setRangeTo(e.target.value)}
                        className="text-center font-semibold"
                        placeholder="5"
                      />
                    </div>
                  </div>
                  <div className="text-center max-w-md mx-auto">
                    <Badge className="bg-blue-100 text-blue-800 text-sm">
                      Generates questions from Module {rangeFrom || '1'} to Module {rangeTo || '5'}
                    </Badge>
                  </div>
                </div>
              )}

              {/* Individual Selection Mode */}
              {selectionMode === 'individual' && (
                <div className="space-y-4">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Select Individual Modules</h4>
                    <p className="text-sm text-gray-600">
                      Choose up to {QUIZ_RULES.MAX_MODULES_PER_QUIZ} modules for quiz generation
                    </p>
                    <Badge className={`mt-2 ${
                      selectedModules.length >= QUIZ_RULES.MAX_MODULES_PER_QUIZ 
                        ? 'bg-orange-100 text-orange-800' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {selectedModules.length}/{QUIZ_RULES.MAX_MODULES_PER_QUIZ} modules selected
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3 max-w-4xl mx-auto">
                    {courseModules.map((module, index) => {
                      const moduleNumber = index + 1;
                      const isSelected = selectedModules.includes(moduleNumber);
                      const isDisabled = !isSelected && selectedModules.length >= QUIZ_RULES.MAX_MODULES_PER_QUIZ;
                      return (
                        <div
                          key={moduleNumber}
                          className={`p-3 border-2 rounded-lg transition-all duration-200 ${
                            isSelected
                              ? 'border-pink-500 bg-pink-50 cursor-pointer'
                              : isDisabled
                              ? 'border-gray-100 bg-gray-50 opacity-50 cursor-not-allowed'
                              : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50 cursor-pointer'
                          }`}
                          onClick={() => !isDisabled && toggleModuleSelection(moduleNumber)}
                        >
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              checked={isSelected}
                              disabled={isDisabled}
                              onCheckedChange={() => !isDisabled && toggleModuleSelection(moduleNumber)}
                              className="pointer-events-none"
                            />
                            <div className="text-sm">
                              <div className="font-semibold text-gray-800">Module {moduleNumber}</div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {selectedModules.length > 0 && (
                    <div className="text-center">
                      <Badge className="bg-blue-100 text-blue-800 text-sm">
                        {selectedModules.length} module{selectedModules.length !== 1 ? 's' : ''} selected: {selectedModules.sort((a, b) => a - b).join(', ')}
                      </Badge>
                    </div>
                  )}
                </div>
              )}

              <Separator />

              {/* Question Count */}
              <div className="space-y-2 max-w-xs mx-auto">
                <Label htmlFor="question-count" className="text-gray-700 text-center block">
                  Number of Questions (max {QUIZ_RULES.MAX_QUESTIONS_PER_QUIZ})
                </Label>
                <Input
                  id="question-count"
                  type="number"
                  min="1"
                  max={QUIZ_RULES.MAX_QUESTIONS_PER_QUIZ}
                  value={questionCount}
                  onChange={(e) => {
                    const val = parseInt(e.target.value) || 0;
                    if (val > QUIZ_RULES.MAX_QUESTIONS_PER_QUIZ) {
                      setQuestionCount(String(QUIZ_RULES.MAX_QUESTIONS_PER_QUIZ));
                      toast({
                        title: "Maximum Limit",
                        description: `Questions capped at ${QUIZ_RULES.MAX_QUESTIONS_PER_QUIZ} per quiz`,
                        variant: "default",
                      });
                    } else {
                      setQuestionCount(e.target.value);
                    }
                  }}
                  className="text-center font-semibold"
                  placeholder="15"
                />
                <p className="text-xs text-gray-500 text-center">
                  Recommended: 10-20 questions • Max: {QUIZ_RULES.MAX_QUESTIONS_PER_QUIZ}
                </p>
              </div>

              {/* Generate Button */}
              <div className="flex justify-center pt-4">
                <Button
                  onClick={handleGenerateGeminiQuiz}
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 hover:from-orange-600 hover:via-pink-600 hover:to-purple-600 text-white font-semibold px-8"
                >
                  <Sparkles className="h-5 w-5 mr-2" />
                  Generate AI Quiz
                </Button>
              </div>

              <div className="text-center text-xs text-gray-500 max-w-2xl mx-auto">
                <p>
                  🤖 Powered by Google Gemini AI - Generates unique, contextually relevant questions
                  based on your selected modules and course content keywords.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Comprehensive Quiz Options */}
          <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Comprehensive Assessment</h3>
              <p className="text-gray-600 mb-6">
                Test your knowledge across all modules with our comprehensive quiz system
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  onClick={() => navigate('/quiz?count=20')}
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                >
                  Full Assessment (20 questions)
                </Button>
                <Button
                  onClick={() => navigate('/quiz?count=50')}
                  size="lg"
                  variant="outline"
                  className="border-purple-200 text-purple-600 hover:bg-purple-50"
                >
                  Extended Test (50 questions)
                </Button>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <Button
                  onClick={() => navigate('/quiz-results')}
                  variant="outline"
                  className="text-blue-600 hover:text-blue-700"
                >
                  <TrendingUp className="h-4 w-4 mr-2" />
                  View Performance Analytics
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
