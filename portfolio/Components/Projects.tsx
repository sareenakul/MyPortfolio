import React, { useState, useEffect, useRef } from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Dot from './Dot';

type Props = {};

const Projects: React.FC<Props> = (props) => {
  const projects = [
    {
      title: 'Course Announcement Application',
      description: 'FaceTrack records facial attendance by detecting and recognizing faces in real-time video and saving the data to a .csv file with a timestamp.',
      imageUrl: 'https://via.placeholder.com/300x200',
      technologies: ['GraphQL', 'Reactjs', "MongoDB", "Node.js", "JavaScript", "Apolo", "Tailwind CSS"],
      githubLink: 'https://github.com/sareenakul/Course-Announcement',
    },
    {
      title: 'Akul\'s Chess',
      description: 'ProjectX is a groundbreaking application that revolutionizes the way users interact with technology, providing seamless integration and intuitive design.',
      imageUrl: 'https://via.placeholder.com/300x200',
      technologies: ['Reactjs', 'TypeScript', 'Node.js', 'WebSockets', 'Tailwind CSS', "Figma"],
      githubLink: 'https://github.com/sareenakul/Chess',
    },
    {
      title: 'YouTube Vlog Portfolio',
      description: 'ProjectY is another innovative project that provides excellent solutions for modern problems.',
      imageUrl: 'https://via.placeholder.com/300x200',
      technologies: ['Reactjs' ,'JavaScript',],
      githubLink: 'https://github.com/yourusername/projecty',
    },
    {
      title: 'Resource Website EmpowerU',
      description: 'ProjectZ focuses on delivering robust backend services with high scalability.',
      imageUrl: 'https://via.placeholder.com/300x200',
      technologies: ['Node.js', 'Express', 'MongoDB'],
      githubLink: 'https://github.com/sareenakul/EmpowerU',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);

  const startAutoScroll = () => {
    autoScrollInterval.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= projects.length) {
          stopAutoScroll();
          return prevIndex;
        }
        return nextIndex;
      });
    }, 3000);
  };

  const stopAutoScroll = () => {
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
      autoScrollInterval.current = null;
    }
  };

  useEffect(() => {
    startAutoScroll();

    const container = containerRef.current;
    if (container) {
      const handleUserScroll = () => {
        stopAutoScroll();
      };

      container.addEventListener('scroll', handleUserScroll);

      return () => {
        container.removeEventListener('scroll', handleUserScroll);
      };
    }
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      container.scrollTo({
        left: container.offsetWidth * currentIndex,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3 }}
      className="h-screen flex relative flex-col text-left overflow-hidden md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div ref={containerRef} className="mt-20 relative flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, index) => (
          <div key={index} className="w-screen flex-shrink-0 snap-center flex flex-col md:flex-row space-y-5 md:space-y-0 items-center justify-center p-10 md:p-20 h-screen">
            <motion.img
              initial={{
                opacity: 0,
                y: -300,
              }}
              transition={{ duration: 1 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              className="w-full md:w-1/2 h-auto rounded-md"
              src={project.imageUrl}
              alt={project.title}
            />
            <div className="space-y-2 px-0 md:px-10 max-w-4xl text-center md:text-left">
              <h4 className="text-3xl md:text-4xl font-semibold flex items-center">
                {project.title} <span className="text-gray-500 text-sm ml-2">↗</span>
                <div className="ml-4 text-gray-500 hover:text-gray-900">
                  <SocialIcon url={project.githubLink} fgColor="white" bgColor="black" style={{ height: 30, width: 30 }} />
                </div>
              </h4>
              <p className="text-sm md:text-lg">
                {project.description}
              </p>
              <div className="flex space-x-2 justify-center md:justify-start">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-gray-700 text-gray-100 rounded-md text-xs md:text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-2 justify-center md:justify-start">
              <Dot currentIndex={currentIndex} totalProjects={projects.length} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
