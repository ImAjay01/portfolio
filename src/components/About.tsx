import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Gift, Layout, Database } from 'lucide-react';

const skills = [
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

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate student developer currently pursuing my degree in Computer Science.
            My journey in web development started with curiosity and has evolved into a deep love
            for creating beautiful, functional user interfaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center">
                <skill.icon className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                  {skill.description}
                </p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="bg-purple-600 h-2.5 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;