import { LessonContent } from '../types/LessonTypes';
import {
  lesson_18_1,
  lesson_18_2,
  lesson_18_3,
  lesson_18_4,
  lesson_18_5,
  lesson_18_6,
  lesson_18_7
} from './module-18/index';

export const module18: LessonContent[] = [
  lesson_18_1,
  lesson_18_2,
  lesson_18_3,
  lesson_18_4,
  lesson_18_5,
  lesson_18_6,
  lesson_18_7
];

export const module18Info = {
  id: 'module-18',
  title: 'Advanced Topics and Best Practices',
  description: 'Master advanced Java development topics including code review standards, documentation practices, internationalization, performance optimization, security best practices, scalability patterns, and industry standards.',
  duration: '7 weeks',
  difficulty: 'Expert',
  prerequisites: ['Microservices and Cloud', 'Spring Framework', 'Database Design', 'Security Fundamentals'],
  learningObjectives: [
    'Implement effective code review processes and quality standards',
    'Create comprehensive documentation with JavaDoc',
    'Develop internationalized applications for global markets',
    'Optimize application performance and resource usage',
    'Apply security best practices to protect applications',
    'Design scalable architectures using proven patterns',
    'Follow industry best practices and professional standards'
  ],
  lessons: module18,
  tags: ['Best Practices', 'Performance', 'Security', 'Scalability', 'Documentation', 'Internationalization', 'Code Quality']
};