/**
 * ⚠️ DEPRECATED - DO NOT USE ⚠️
 * 
 * This file contains direct Gemini API integration that is NO LONGER USED.
 * All quiz generation now uses the local quiz bank (localQuizService.ts).
 * 
 * This file is kept for reference and backward compatibility only.
 * It should not be imported or called in new code.
 * 
 * Migration: Use @/services/localQuizService instead
 */

import { DynamicQuizQuestion } from '@/data/dynamicQuizGenerator';
import { courseModules } from '@/data/courseStructure';
// DELETED: moduleKeywordsData.ts - no longer exists
// import { getMultipleModuleKeywords } from '@/data/moduleKeywordsData';

// Stub function to prevent runtime errors if this deprecated file is accidentally used
const getMultipleModuleKeywords = (_modules: string[]): string[] => [];

// Minimal Gemini text generation via fetch to Generative Language API
// We avoid adding heavy SDKs and call REST directly.

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;
// Using v1beta API with latest Gemini 2.0 Flash model
const GEMINI_API_VERSION = (import.meta.env.VITE_GEMINI_API_VERSION as string | undefined) || 'v1beta';
// Gemini 2.0 Flash Experimental - Latest model with best free tier limits
const GEMINI_MODEL = (import.meta.env.VITE_GEMINI_MODEL as string | undefined) || 'gemini-2.0-flash-exp';

if (!GEMINI_API_KEY) {
  // eslint-disable-next-line no-console
  console.warn('Gemini API key not found in environment (VITE_GEMINI_API_KEY). Gemini-based MCQ generation will be disabled.');
}

export interface ModuleSelection {
  // Either provide a range
  range?: { from: number; to: number };
  // Or provide individual modules as numbers (1-based, e.g., 1, 3, 5)
  modules?: number[];
}

type GeminiApiResponse = {
  candidates?: Array<{
    content?: {
      parts?: Array<{ text?: string }>;
    };
  }>;
};

export async function generateMCQsWithGemini(selection: ModuleSelection, count: number, retryCount = 0): Promise<DynamicQuizQuestion[]> {
  if (!GEMINI_API_KEY) {
    throw new Error('Gemini API key not configured. Set VITE_GEMINI_API_KEY to enable AI quizzes.');
  }

  const selectedModules = resolveSelectedModuleTitles(selection);

  // Build a compact prompt using module titles as topics
  const prompt = buildPrompt(selectedModules, count);

  const body = {
    contents: [
      {
        role: 'user',
        parts: [{ text: prompt }],
      },
    ],
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 2048,
      topP: 0.95,
      topK: 40,
    },
  } as const;

  const endpoint = `https://generativelanguage.googleapis.com/${GEMINI_API_VERSION}/${GEMINI_MODEL}:generateContent?key=${encodeURIComponent(
    GEMINI_API_KEY
  )}`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      const errorText = await safeReadText(res);
      console.error('Gemini request failed', errorText);

      // Handle rate limiting (429) with exponential backoff
      if (res.status === 429) {
        const maxRetries = 3;
        if (retryCount < maxRetries) {
          // Exponential backoff: 2s, 4s, 8s
          const delayMs = Math.pow(2, retryCount + 1) * 1000;
          console.warn(`Rate limited. Retrying in ${delayMs}ms (attempt ${retryCount + 1}/${maxRetries})`);
          
          await new Promise(resolve => setTimeout(resolve, delayMs));
          return generateMCQsWithGemini(selection, count, retryCount + 1);
        }
        
        // Extract retry delay from response if available
        let retryMsg = 'Rate limit exceeded. Please wait a moment and try again.';
        try {
          const errData = JSON.parse(errorText);
          const retryInfo = errData?.error?.details?.find?.((d: { '@type'?: string }) => d['@type']?.includes('RetryInfo'));
          if (retryInfo?.retryDelay) {
            retryMsg = `Rate limit exceeded. Please wait ${retryInfo.retryDelay} and try again.`;
          }
        } catch { /* ignore parse errors */ }
        throw new Error(retryMsg);
      }

      // Provide clearer errors for common 4xx cases (no billing / bad key)
      const lowered = errorText.toLowerCase();
      if (res.status === 401 || res.status === 403) {
        if (lowered.includes('billing') || lowered.includes('billable') || lowered.includes('billing_not_enabled')) {
          throw new Error('Gemini blocked: Billing is not enabled for this API key. Enable billing to use AI quizzes.');
        }
        if (lowered.includes('api key') || lowered.includes('invalid key') || lowered.includes('permission') || lowered.includes('unauthorized')) {
          throw new Error('Gemini blocked: API key is invalid or lacks permissions. Check VITE_GEMINI_API_KEY and allowed APIs.');
        }
      }

      const snippet = errorText ? ` - ${errorText.slice(0, 160)}` : '';
      throw new Error(`Gemini request failed: ${res.status} ${res.statusText}${snippet}`);
    }

    const data = (await res.json()) as GeminiApiResponse;
    const text = extractTextFromGemini(data);
    
    if (!text || text.trim().length === 0) {
      throw new Error('Gemini returned empty response.');
    }

    try {
      const parsed = JSON.parse(text) as RawGeminiQuestion[];
      const normalized = normalizeQuestions(parsed);
      if (!normalized.length) {
        throw new Error('Gemini returned no valid MCQs.');
      }
      return normalized;
    } catch (e) {
      // Try to salvage JSON from markdown code fences or text
      const salvaged = tryExtractJson(text);
      if (!salvaged) {
        throw new Error('Gemini response was not valid JSON.');
      }
      try {
        const parsed = JSON.parse(salvaged) as RawGeminiQuestion[];
        const normalized = normalizeQuestions(parsed);
        if (!normalized.length) {
          throw new Error('Gemini returned no valid MCQs after salvage.');
        }
        return normalized;
      } catch (e2) {
        console.error('Failed to parse Gemini JSON', e2);
        throw new Error('Failed to parse Gemini JSON.');
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        throw new Error('Gemini request timed out. Please try again.');
      }
      throw error;
    }
    throw new Error('Unknown error occurred while generating quiz.');
  }
}

function resolveSelectedModuleTitles(selection: ModuleSelection): string[] {
  const moduleMap = courseModules.reduce<Record<number, string>>((acc, m, idx) => {
    acc[idx + 1] = m.title;
    return acc;
  }, {});

  const titles: string[] = [];
  if (selection.range) {
    const from = Math.max(1, Math.min(selection.range.from, selection.range.to));
    const to = Math.min(courseModules.length, Math.max(selection.range.from, selection.range.to));
    for (let i = from; i <= to; i++) titles.push(moduleMap[i]);
  }
  if (selection.modules && selection.modules.length) {
    for (const n of selection.modules) {
      if (moduleMap[n] && !titles.includes(moduleMap[n])) titles.push(moduleMap[n]);
    }
  }
  return titles;
}

function buildPrompt(modules: string[], count: number): string {
  const fallbackList = courseModules.map((module) => module.title);
  const moduleWhitelist = modules.length ? modules : fallbackList;
  const topics = modules.length ? modules.join(', ') : 'the entire Java course outline';
  
  // Get keywords for selected modules
  const keywords = modules.length > 0 ? getMultipleModuleKeywords(modules) : [];
  const keywordString = keywords.length > 0 ? keywords.join(', ') : 'Java programming concepts';
  
  return `You are a strict exam generator. Generate ${count} high-quality multiple choice questions as a JSON array ONLY, no prose. Each item must be an object with exactly these keys: 
- id (string) unique
- module (string) one of [${moduleWhitelist.join(', ')}]
- lesson (string) concise concept/topic name
- question (string)
- options (array of 4 distinct strings)
- correctAnswer (number) index 0..3
- explanation (string)
- difficulty (one of: easy, medium, hard)
- type set to "multiple-choice"

Scope: Use only topics and keywords from these modules: ${topics}.
Key concepts and keywords to focus on: ${keywordString}.

Rules:
- No code blocks or markdown. Output ONLY valid JSON array.
- Ensure options are plausible and non-overlapping.
- Explanation must justify the correct option succinctly.
- Distribute difficulty evenly if possible.
- Questions should directly relate to the provided keywords and module topics.
`;
}

async function safeReadText(res: Response): Promise<string> {
  try {
    return await res.text();
  } catch (error) {
    return res.statusText || 'Unable to read error body';
  }
}

function extractTextFromGemini(response: GeminiApiResponse): string {
  // Typical structure: candidates[0].content.parts[0].text
  const text = response?.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
  return String(text);
}

function tryExtractJson(text: string): string | null {
  // Extract content between ```json ... ``` or first [ ... ]
  const fence = text.match(/```json[\s\S]*?```/i) || text.match(/```[\s\S]*?```/i);
  if (fence) {
    const inner = fence[0].replace(/```json|```/g, '');
    return inner.trim();
  }
  const bracket = text.indexOf('[');
  const lastBracket = text.lastIndexOf(']');
  if (bracket >= 0 && lastBracket > bracket) {
    return text.slice(bracket, lastBracket + 1);
  }
  return null;
}

// Raw shape returned by model
interface RawGeminiQuestion {
  id: string;
  module: string;
  lesson: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  type?: string;
}

function normalizeQuestions(items: RawGeminiQuestion[]): DynamicQuizQuestion[] {
  return items
    .filter((q) =>
      q &&
      typeof q.id === 'string' &&
      typeof q.question === 'string' &&
      Array.isArray(q.options) &&
      q.options.length === 4 &&
      typeof q.correctAnswer === 'number' &&
      q.correctAnswer >= 0 && q.correctAnswer < 4
    )
    .map((q) => ({
      id: q.id,
      module: q.module || 'Mixed',
      lesson: q.lesson || '',
      question: q.question,
      options: q.options.slice(0, 4),
      correctAnswer: q.correctAnswer,
      explanation: q.explanation || '',
      difficulty: q.difficulty || 'medium',
      type: 'multiple-choice',
    }));
}
