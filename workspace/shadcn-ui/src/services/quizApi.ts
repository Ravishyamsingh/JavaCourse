/**
 * ⚠️ DEPRECATED - DO NOT USE ⚠️
 * 
 * This file contains backend API quiz generation logic that is NO LONGER USED.
 * All quiz generation now uses the local quiz bank (localQuizService.ts).
 * 
 * This file is kept for reference and backward compatibility only.
 * It should not be imported or called in new code.
 * 
 * Migration: Use @/services/localQuizService instead
 */

import { apiClient } from '@/lib/api';
import { DynamicQuizQuestion } from '@/data/dynamicQuizGenerator';

export interface ModuleSelection {
  range?: { from: number; to: number };
  modules?: number[];
}

/**
 * Generate quiz questions using the backend API (which calls Gemini)
 * This avoids CORS issues by proxying through the backend
 */
export async function generateQuizViaBackend(
  selection: ModuleSelection,
  count: number
): Promise<DynamicQuizQuestion[]> {
  try {
    // Convert module selection to module names/numbers
    const modulesList = selection.modules || [];
    if (selection.range) {
      for (let i = selection.range.from; i <= selection.range.to; i++) {
        modulesList.push(i);
      }
    }

    // Call backend API to generate quiz
    // Limit to 10 questions to avoid response truncation from Gemini
    const response = await apiClient.post('/quiz/generate-mixed', {
      modules: modulesList.map(m => `Module ${m}`),
      count: Math.min(count, 10), // Limit to 10 to prevent truncation
      difficulty: 'mixed'
    }, {
      timeout: 60000 // 60 second timeout for AI generation
    });

    if (response.data.success && response.data.data?.questions) {
      // Transform backend format to frontend format
      const questions = response.data.data.questions;
      return questions.map((q: any, index: number) => ({
        id: q.id || `q-${Date.now()}-${index}`,
        question: q.question || q.text,
        options: q.options || q.choices || [],
        correctAnswer: parseInt(q.correctAnswer) || q.answer || 0,
        difficulty: (q.difficulty || 'medium') as 'easy' | 'medium' | 'hard',
        module: q.module || `Module ${modulesList[index % modulesList.length] || 1}`,
        explanation: q.explanation || q.hint || 'Check the documentation for more details.',
        tags: q.tags || []
      }));
    }

    throw new Error('Backend returned invalid quiz data');
  } catch (error: any) {
    console.error('Backend quiz generation failed:', error);
    
    // Provide user-friendly error messages
    if (error.response?.status === 401) {
      throw new Error('Please log in to generate AI quizzes');
    } else if (error.response?.status === 403) {
      throw new Error('Gemini API billing not enabled. Using local questions instead.');
    } else if (error.response?.status === 429) {
      throw new Error('Rate limit exceeded. Please try again in a moment.');
    } else if (error.message?.includes('Network Error')) {
      throw new Error('Cannot connect to quiz server. Using local questions instead.');
    }
    
    throw new Error(error.message || 'Failed to generate quiz');
  }
}
