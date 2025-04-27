import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github ,ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Amazon Clone',
    description: 'An Amazon clone using JavaScript, HTML, and CSS replicates key e-commerce features like product listings, cart.',
    image: 'images/amazon.png',
    technologies: ['Javascript', 'CSS', 'HTML', 'Jasmine'],
    githubUrl: 'https://github.com/ImAjay01/Amazon-clone',
    liveUrl: 'https://imajay01.github.io/Amazon-clone/',
  },
  {
    title: 'Personal Portfolio',
    description: 'A portfolio built with TypeScript, Vite, and React showcases projects with fast performance, type safety, and modern UI components.',
    image: 'images/portfolio.png',
    technologies: ['React', 'Vite','Typescript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/ImAjay01/portfolio',
    liveUrl: 'https://portfolio-gamma-virid-11.vercel.app/',
  },
  {
    title: 'YouTube Clone',
    description: 'A YouTube clone built with HTML and CSS replicates the video streaming platforms layout, including video thumbnails, navigation, and responsive design.',
    image: 'images/youtube.png',
    technologies: ['HTML', 'Vanilla CSS'],
    githubUrl: 'https://github.com/ImAjay01/youtube-clone',
    liveUrl: 'https://imajay01.github.io/youtube-clone/',
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;