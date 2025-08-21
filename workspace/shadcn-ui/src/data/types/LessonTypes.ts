export interface LessonContent {
  title: string;
  type: string;
  duration: string;
  module: string;
  content: {
    overview: string;
    objectives: string[];
    theory: string;
    codeExample: string;
    exercise: string;
  };
}

export type LessonDatabase = Record<string, LessonContent>;
