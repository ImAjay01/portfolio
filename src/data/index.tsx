import { Code2, Gift, Layout, Database, GraduationCap, Award, BookOpen } from 'lucide-react';
import { Skill, Project, Experience } from '../types';

export const skills: Skill[] = [
  {
    name: 'Front-end Development',
    icon: Layout,
    description: 'React, TypeScript, Tailwind CSS',
    level: 90,
  },
  {
    name: 'Version Control',
    icon: Gift,
    description: 'Git, GitHub, Collaborative Development',
    level: 85,
  },
  {
    name: 'Programming',
    icon: Code2,
    description: 'JavaScript, Python, Java',
    level: 88,
  },
  {
    name: 'Database Management',
    icon: Database,
    description: 'SQL, MongoDB, Firebase',
    level: 75,
  },
];

export const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com/username/ecommerce',
    liveUrl: 'https://ecommerce-demo.com',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1000',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/username/task-manager',
    liveUrl: 'https://task-manager-demo.com',
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather application with detailed forecasts and interactive maps',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1000',
    technologies: ['React', 'OpenWeather API', 'Chart.js'],
    githubUrl: 'https://github.com/username/weather-app',
    liveUrl: 'https://weather-dashboard-demo.com',
  },
];

export const experiences: Experience[] = [
  {
    title: 'Computer Science Student',
    organization: 'University Name',
    period: '2021 - Present',
    description: 'Pursuing Bachelor\'s degree with focus on web development and software engineering',
    icon: GraduationCap,
  },
  {
    title: 'Web Development Certification',
    organization: 'freeCodeCamp',
    period: '2022',
    description: 'Completed comprehensive web development curriculum covering front-end and back-end technologies',
    icon: Award,
  },
  {
    title: 'Data Structures & Algorithms',
    organization: 'Coursera',
    period: '2023',
    description: 'Advanced course in algorithmic problem solving and optimization',
    icon: BookOpen,
  },
];