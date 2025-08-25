import { LessonContent } from '../types/LessonTypes';
import {
  lesson_16_1,
  lesson_16_2,
  lesson_16_3,
  lesson_16_4,
  lesson_16_5,
  lesson_16_6,
  lesson_16_7
} from './module-16/index';

export const module16: LessonContent[] = [
  lesson_16_1,
  lesson_16_2,
  lesson_16_3,
  lesson_16_4,
  lesson_16_5,
  lesson_16_6,
  lesson_16_7
];

export const module16Info = {
  id: 'module-16',
  title: 'Web Development with Java',
  description: 'Master web development using Java technologies including Servlets, JSP, Spring Framework, Spring Boot, RESTful services, Spring Data, and Spring Security.',
  duration: '8 weeks',
  difficulty: 'Advanced',
  prerequisites: ['Object-Oriented Programming', 'Java Fundamentals', 'Database Concepts', 'HTTP Protocol'],
  learningObjectives: [
    'Build web applications using Java Servlets and JSP',
    'Master the Spring Framework ecosystem and dependency injection',
    'Develop modern applications with Spring Boot',
    'Design and implement RESTful web services',
    'Implement data persistence with Spring Data JPA',
    'Secure applications using Spring Security',
    'Apply web development best practices and patterns'
  ],
  lessons: module16,
  tags: ['Java', 'Spring', 'Web Development', 'REST API', 'Security', 'Database', 'Microservices']
};