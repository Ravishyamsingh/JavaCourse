import { LessonContent } from '../types/LessonTypes';
import {
  lesson_17_1,
  lesson_17_2,
  lesson_17_3,
  lesson_17_4,
  lesson_17_5,
  lesson_17_6,
  lesson_17_7
} from './module-17/index';

export const module17: LessonContent[] = [
  lesson_17_1,
  lesson_17_2,
  lesson_17_3,
  lesson_17_4,
  lesson_17_5,
  lesson_17_6,
  lesson_17_7
];

export const module17Info = {
  id: 'module-17',
  title: 'Microservices and Cloud',
  description: 'Learn microservices architecture, Spring Boot for microservices, service discovery, API gateways, message queues, containerization with Docker, and cloud deployment strategies.',
  duration: '8 weeks',
  difficulty: 'Expert',
  prerequisites: ['Web Development with Java', 'Spring Framework', 'Database Concepts', 'Docker Fundamentals'],
  learningObjectives: [
    'Design and implement microservices architecture',
    'Build microservices with Spring Boot',
    'Implement service discovery and configuration management',
    'Create API gateways with Spring Cloud Gateway',
    'Use message queues and event streaming platforms',
    'Containerize applications with Docker',
    'Deploy microservices to cloud platforms (AWS, Azure, GCP)'
  ],
  lessons: module17,
  tags: ['Microservices', 'Spring Boot', 'Docker', 'Kubernetes', 'Cloud', 'AWS', 'Azure', 'GCP']
};