import { Code2, Gift, Layout, GraduationCap, Award, BookOpen,Layers } from 'lucide-react';
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
    name: 'Tech Stack',
    icon: Layers,
    description: 'MERN',
    level: 55,
  },
];

export const projects: Project[] = [
  {
    title: 'Amazon Clone',
    description: 'An Amazon clone using JavaScript, HTML, and CSS replicates key e-commerce features like product listings, cart.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
    technologies: ['Javascript', 'CSS', 'HTML', 'Jasmine'],
    githubUrl: 'https://github.com/ImAjay01/Amazon-clone',
    liveUrl: 'https://imajay01.github.io/Amazon-clone/',
  },
  {
    title: 'Personal Portfolio',
    description: 'A portfolio built with TypeScript, Vite, and React showcases projects with fast performance, type safety, and modern UI components.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1000',
    technologies: ['React', 'Vite','Typescript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/ImAjay01/portfolio',
    liveUrl: 'https://portfolio-gamma-virid-11.vercel.app/',
  },
  {
    title: 'YouTube Clone',
    description: 'A YouTube clone built with HTML and CSS replicates the video streaming platforms layout, including video thumbnails, navigation, and responsive design.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1000',
    technologies: ['React', 'OpenWeather API', 'Chart.js'],
    githubUrl: 'https://github.com/ImAjay01/youtube-clone',
    liveUrl: 'https://imajay01.github.io/youtube-clone/',
  },
];

export const experiences: Experience[] = [
  {
    title: 'Computer Science Student',
    organization: 'Amity University',
    period: '2024 - Present',
    description: 'Pursuing Bachelor\'s degree with focus on web development, cybersecurity and software engineering',
    icon: GraduationCap,
  },
  {
    title: 'Responsive Web Design',
    organization: 'freeCodeCamp',
    period: '9 Jan 2024',
    description: 'Completed comprehensive web development curriculum covering front-end technologies',
    icon: Award,
  },
  {
    title: 'Data Structures & Algorithms',
    organization: 'GeekforGeeks',
    period: 'Nov 2024 - Present',
    description: 'Learning algorithmic problem solving and optimization',
    icon: BookOpen,
  },
];