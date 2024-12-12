import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const experiences = [
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

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Experience & Education</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My academic journey and professional development
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-purple-200 dark:bg-purple-900" />
          
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-8 md:text-right md:ml-auto' : 'md:pl-8'
              } md:w-1/2`}
            >
              <div className={`flex items-center ${
                index % 2 === 0 ? 'md:justify-end' : ''
              } mb-4`}>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                  <experience.icon className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              
              <div className={`bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md ${
                index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
              }`}>
                <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
                <p className="text-purple-600 dark:text-purple-400 mb-2">
                  {experience.organization}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                  {experience.period}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {experience.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;