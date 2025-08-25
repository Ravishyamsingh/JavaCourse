import { LessonContent } from '../types/LessonTypes';
import {
  lesson_19_1,
  lesson_19_2,
  lesson_19_3,
  lesson_19_4,
  lesson_19_5,
  lesson_19_6,
  lesson_19_7
} from './module-19/index';

export const module19: LessonContent[] = [
  lesson_19_1,
  lesson_19_2,
  lesson_19_3,
  lesson_19_4,
  lesson_19_5,
  lesson_19_6,
  lesson_19_7
];

export const module19Info = {
  id: 'module-19',
  title: 'Project Development',
  description: 'Comprehensive project development covering console applications, GUI applications, web applications, database integration, REST APIs, and complete full-stack projects with deployment strategies.',
  duration: '14 weeks',
  difficulty: 'Advanced',
  prerequisites: ['Web Development with Java', 'Microservices and Cloud', 'Advanced Topics and Best Practices'],
  learningObjectives: [
    'Master project planning and design methodologies',
    'Build robust console applications with advanced features',
    'Create professional GUI applications using JavaFX',
    'Develop comprehensive web applications with Spring Boot',
    'Implement advanced database integration and optimization',
    'Design and build production-ready REST APIs',
    'Create complete full-stack applications with modern technologies',
    'Apply DevOps practices for deployment and monitoring'
  ],
  lessons: module19,
  tags: ['Project Development', 'Full-Stack', 'Console Apps', 'GUI', 'Web Apps', 'Database', 'REST API', 'DevOps']
};