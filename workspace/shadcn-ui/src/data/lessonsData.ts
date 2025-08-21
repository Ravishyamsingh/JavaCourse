import { LessonDatabase } from './types/LessonTypes';

// Module 1: Java Fundamentals
import { lesson_1_1 } from './lessons/module-01/lesson-1-1';
import { lesson_1_2 } from './lessons/module-01/lesson-1-2';
import { lesson_1_3 } from './lessons/module-01/lesson-1-3';
import { lesson_1_4 } from './lessons/module-01/lesson-1-4';
import { lesson_1_5 } from './lessons/module-01/lesson-1-5';

// Module 2: Control Structures
import { lesson_2_1 } from './lessons/module-02/lesson-2-1';
import { lesson_2_2 } from './lessons/module-02/lesson-2-2';
import { lesson_2_3 } from './lessons/module-02/lesson-2-3';
import { lesson_2_4 } from './lessons/module-02/lesson-2-4';
import { lesson_2_5 } from './lessons/module-02/lesson-2-5';

// Module 3: Object-Oriented Programming
import { lesson_3_1 } from './lessons/module-03/lesson-3-1';
import { lesson_3_2 } from './lessons/module-03/lesson-3-2';
import { lesson_3_3 } from './lessons/module-03/lesson-3-3';
import { lesson_3_4 } from './lessons/module-03/lesson-3-4';
import { lesson_3_5 } from './lessons/module-03/lesson-3-5';
import { lesson_3_6 } from './lessons/module-03/lesson-3-6';
import { lesson_3_7 } from './lessons/module-03/lesson-3-7';

export const lessonsDatabase: LessonDatabase = {
  // Module 1: Java Fundamentals
  'lesson-1-1': lesson_1_1,
  'lesson-1-2': lesson_1_2,
  'lesson-1-3': lesson_1_3,
  'lesson-1-4': lesson_1_4,
  'lesson-1-5': lesson_1_5,

  // Module 2: Control Structures
  'lesson-2-1': lesson_2_1,
  'lesson-2-2': lesson_2_2,
  'lesson-2-3': lesson_2_3,
  'lesson-2-4': lesson_2_4,
  'lesson-2-5': lesson_2_5,

  // Module 3: Object-Oriented Programming
  'lesson-3-1': lesson_3_1,
  'lesson-3-2': lesson_3_2,
  'lesson-3-3': lesson_3_3,
  'lesson-3-4': lesson_3_4,
  'lesson-3-5': lesson_3_5,
  'lesson-3-6': lesson_3_6,
  'lesson-3-7': lesson_3_7,
};
