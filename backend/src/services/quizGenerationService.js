import { generateContent } from './geminiService.js';
import { logger } from '../utils/monitoring.js';

/**
 * Quiz Generation Service
 * Generates dynamic quiz questions using Gemini API
 */

const JAVA_MODULES = [
  'Java Fundamentals',
  'Object-Oriented Programming',
  'Data Structures',
  'Collections Framework',
  'Exception Handling',
  'File I/O',
  'Multithreading',
  'Networking',
  'Database Connectivity',
  'Web Development',
  'Spring Framework',
  'Microservices',
  'Design Patterns',
  'Testing',
  'Performance Optimization'
];

/**
 * Generate quiz questions for a specific module
 */
export async function generateQuizForModule(moduleName, questionCount = 10, difficulty = 'mixed') {
  try {
    logger.info('Generating quiz for module', {
      module: moduleName,
      count: questionCount,
      difficulty
    });

    const prompt = buildQuizPrompt(moduleName, questionCount, difficulty);
    const result = await generateContent(prompt, {
      temperature: 0.7,
      maxOutputTokens: 8192,
      topP: 0.95,
      topK: 40
    });

    const questions = parseQuizResponse(result.text);
    
    logger.info('Quiz generated successfully', {
      module: moduleName,
      questionsGenerated: questions.length
    });

    return {
      success: true,
      module: moduleName,
      difficulty,
      questions,
      generatedAt: new Date().toISOString()
    };
  } catch (error) {
    logger.error('Quiz generation failed', {
      module: moduleName,
      error: error.message
    });
    throw error;
  }
}

/**
 * Generate mixed quiz from multiple modules
 */
export async function generateMixedQuiz(modules, questionCount = 20, difficulty = 'mixed') {
  try {
    logger.info('Generating mixed quiz', {
      modules,
      count: questionCount,
      difficulty
    });

    const prompt = buildMixedQuizPrompt(modules, questionCount, difficulty);
    const result = await generateContent(prompt, {
      temperature: 0.7,
      maxOutputTokens: 8192,
      topP: 0.95,
      topK: 40
    });

    const questions = parseQuizResponse(result.text);

    logger.info('Mixed quiz generated successfully', {
      modules,
      questionsGenerated: questions.length
    });

    return {
      success: true,
      modules,
      difficulty,
      questions,
      generatedAt: new Date().toISOString()
    };
  } catch (error) {
    logger.error('Mixed quiz generation failed', {
      modules,
      error: error.message
    });
    throw error;
  }
}

/**
 * Generate adaptive quiz based on user performance
 */
export async function generateAdaptiveQuiz(userPerformance, questionCount = 15) {
  try {
    logger.info('Generating adaptive quiz', {
      performanceData: userPerformance,
      count: questionCount
    });

    // Determine difficulty based on performance
    const avgScore = calculateAverageScore(userPerformance);
    const difficulty = determineDifficulty(avgScore);

    // Select modules where user needs improvement
    const weakModules = identifyWeakModules(userPerformance);
    const selectedModules = weakModules.length > 0 ? weakModules : JAVA_MODULES.slice(0, 3);

    const prompt = buildAdaptiveQuizPrompt(selectedModules, questionCount, difficulty, avgScore);
    const result = await generateContent(prompt, {
      temperature: 0.8,
      maxOutputTokens: 8192,
      topP: 0.95,
      topK: 40
    });

    const questions = parseQuizResponse(result.text);

    logger.info('Adaptive quiz generated successfully', {
      difficulty,
      selectedModules,
      questionsGenerated: questions.length
    });

    return {
      success: true,
      modules: selectedModules,
      difficulty,
      questions,
      adaptiveReason: `Based on your performance (${avgScore.toFixed(1)}%), focusing on ${selectedModules.join(', ')}`,
      generatedAt: new Date().toISOString()
    };
  } catch (error) {
    logger.error('Adaptive quiz generation failed', {
      error: error.message
    });
    throw error;
  }
}

/**
 * Generate practice exam
 */
export async function generatePracticeExam(modules = null, questionCount = 50) {
  try {
    logger.info('Generating practice exam', {
      modules,
      count: questionCount
    });

    const selectedModules = modules || JAVA_MODULES;
    const prompt = buildExamPrompt(selectedModules, questionCount);
    const result = await generateContent(prompt, {
      temperature: 0.6,
      maxOutputTokens: 8192,
      topP: 0.95,
      topK: 40
    });

    const questions = parseQuizResponse(result.text);

    logger.info('Practice exam generated successfully', {
      questionsGenerated: questions.length
    });

    return {
      success: true,
      type: 'practice_exam',
      modules: selectedModules,
      questions,
      totalQuestions: questions.length,
      estimatedDuration: `${Math.ceil(questions.length * 1.5)} minutes`,
      generatedAt: new Date().toISOString()
    };
  } catch (error) {
    logger.error('Practice exam generation failed', {
      error: error.message
    });
    throw error;
  }
}

/**
 * Build quiz prompt for single module
 */
function buildQuizPrompt(moduleName, count, difficulty) {
  const difficultyDesc = {
    easy: 'beginner-friendly, testing basic concepts',
    medium: 'intermediate, testing understanding and application',
    hard: 'advanced, testing deep knowledge and edge cases',
    mixed: 'a mix of easy, medium, and hard questions'
  }[difficulty] || 'mixed difficulty';

  return `Generate ${count} multiple-choice questions about "${moduleName}" in Java programming.

Requirements:
1. Each question must be ${difficultyDesc}
2. Each question must have exactly 4 options
3. Clearly indicate the correct answer
4. Include a brief explanation for the correct answer
5. Format as JSON array with this structure:
{
  "questions": [
    {
      "id": "q1",
      "module": "${moduleName}",
      "question": "Question text here?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctAnswer": 0,
      "explanation": "Why this is correct...",
      "difficulty": "easy|medium|hard"
    }
  ]
}

Focus on:
- Core concepts and best practices
- Common mistakes and misconceptions
- Real-world applications
- Code examples and output prediction
- Performance and optimization considerations

Generate ONLY valid JSON, no additional text.`;
}

/**
 * Build mixed quiz prompt
 */
function buildMixedQuizPrompt(modules, count, difficulty) {
  const moduleList = modules.join(', ');
  const difficultyDesc = {
    easy: 'beginner-friendly',
    medium: 'intermediate',
    hard: 'advanced',
    mixed: 'mixed difficulty'
  }[difficulty] || 'mixed difficulty';

  return `Generate ${count} multiple-choice questions covering these Java topics: ${moduleList}.

Requirements:
1. Distribute questions evenly across the modules
2. Difficulty level: ${difficultyDesc}
3. Each question must have exactly 4 options
4. Clearly indicate the correct answer
5. Include explanations
6. Format as JSON array:
{
  "questions": [
    {
      "id": "q1",
      "module": "Module Name",
      "question": "Question text?",
      "options": ["A", "B", "C", "D"],
      "correctAnswer": 0,
      "explanation": "Explanation...",
      "difficulty": "easy|medium|hard"
    }
  ]
}

Ensure variety in question types:
- Conceptual understanding
- Code output prediction
- Best practices
- Error identification
- Performance considerations

Generate ONLY valid JSON.`;
}

/**
 * Build adaptive quiz prompt
 */
function buildAdaptiveQuizPrompt(modules, count, difficulty, avgScore) {
  const moduleList = modules.join(', ');
  const performanceLevel = avgScore > 80 ? 'advanced' : avgScore > 60 ? 'intermediate' : 'beginner';

  return `Generate ${count} adaptive multiple-choice questions for a Java learner.

User Profile:
- Current performance level: ${performanceLevel} (${avgScore.toFixed(1)}% average)
- Weak areas: ${moduleList}
- Target difficulty: ${difficulty}

Requirements:
1. Focus on the weak areas listed above
2. Gradually increase difficulty to challenge the learner
3. Include questions that address common misconceptions
4. Each question must have exactly 4 options
5. Include detailed explanations
6. Format as JSON:
{
  "questions": [
    {
      "id": "q1",
      "module": "Module Name",
      "question": "Question text?",
      "options": ["A", "B", "C", "D"],
      "correctAnswer": 0,
      "explanation": "Detailed explanation...",
      "difficulty": "easy|medium|hard"
    }
  ]
}

Adaptive Strategy:
- Start with ${difficulty} questions
- Include questions that build on each other
- Focus on practical application
- Include edge cases and gotchas

Generate ONLY valid JSON.`;
}

/**
 * Build practice exam prompt
 */
function buildExamPrompt(modules, count) {
  const moduleList = modules.join(', ');

  return `Generate ${count} comprehensive multiple-choice questions for a Java certification practice exam.

Modules to cover: ${moduleList}

Requirements:
1. Simulate a real certification exam
2. Mix of easy (20%), medium (50%), and hard (30%) questions
3. Distribute evenly across all modules
4. Each question must have exactly 4 options
5. Include detailed explanations
6. Format as JSON:
{
  "questions": [
    {
      "id": "q1",
      "module": "Module Name",
      "question": "Question text?",
      "options": ["A", "B", "C", "D"],
      "correctAnswer": 0,
      "explanation": "Detailed explanation...",
      "difficulty": "easy|medium|hard"
    }
  ]
}

Exam Focus Areas:
- Core Java concepts
- OOP principles
- Collections and Generics
- Exception handling
- Multithreading
- I/O and NIO
- Design patterns
- Best practices
- Performance optimization
- Real-world scenarios

Generate ONLY valid JSON.`;
}

/**
 * Parse quiz response from Gemini
 */
function parseQuizResponse(text) {
  try {
    // Try to extract JSON from the response
    let jsonStr = text;

    // If wrapped in markdown code blocks, extract
    const jsonMatch = text.match(/```json\s*([\s\S]*?)\s*```/);
    if (jsonMatch) {
      jsonStr = jsonMatch[1];
    } else {
      // Try to find JSON object
      const objectMatch = text.match(/\{[\s\S]*\}/);
      if (objectMatch) {
        jsonStr = objectMatch[0];
      }
    }

    const parsed = JSON.parse(jsonStr);
    const questions = parsed.questions || parsed;

    if (!Array.isArray(questions)) {
      throw new Error('Response is not an array of questions');
    }

    // Validate and normalize questions
    return questions
      .filter(q => validateQuestion(q))
      .map(q => normalizeQuestion(q));
  } catch (error) {
    logger.error('Failed to parse quiz response', {
      error: error.message,
      textPreview: text.substring(0, 200)
    });
    throw new Error(`Failed to parse quiz response: ${error.message}`);
  }
}

/**
 * Validate question structure
 */
function validateQuestion(q) {
  return (
    q &&
    typeof q.question === 'string' &&
    Array.isArray(q.options) &&
    q.options.length === 4 &&
    typeof q.correctAnswer === 'number' &&
    q.correctAnswer >= 0 &&
    q.correctAnswer < 4
  );
}

/**
 * Normalize question data
 */
function normalizeQuestion(q) {
  return {
    id: q.id || `q_${Date.now()}_${Math.random()}`,
    module: q.module || 'Java',
    question: q.question.trim(),
    options: q.options.map(o => String(o).trim()),
    correctAnswer: parseInt(q.correctAnswer),
    explanation: q.explanation || 'No explanation provided',
    difficulty: q.difficulty || 'medium',
    type: 'multiple-choice'
  };
}

/**
 * Calculate average score from performance data
 */
function calculateAverageScore(performance) {
  if (!performance || Object.keys(performance).length === 0) {
    return 50;
  }

  const scores = Object.values(performance);
  return scores.reduce((a, b) => a + b, 0) / scores.length;
}

/**
 * Determine difficulty based on score
 */
function determineDifficulty(avgScore) {
  if (avgScore >= 80) return 'hard';
  if (avgScore >= 60) return 'medium';
  return 'easy';
}

/**
 * Identify weak modules based on performance
 */
function identifyWeakModules(performance) {
  if (!performance || Object.keys(performance).length === 0) {
    return JAVA_MODULES.slice(0, 3);
  }

  return Object.entries(performance)
    .filter(([_, score]) => score < 70)
    .map(([module, _]) => module)
    .slice(0, 5);
}

/**
 * Get available modules
 */
export function getAvailableModules() {
  return JAVA_MODULES;
}

export default {
  generateQuizForModule,
  generateMixedQuiz,
  generateAdaptiveQuiz,
  generatePracticeExam,
  getAvailableModules
};
