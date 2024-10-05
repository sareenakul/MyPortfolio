import React, { useState, useEffect, useRef } from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {};

const Projects: React.FC<Props> = (props) => {
  const projects = [
    {
      title: 'My Portfolio',
      description: '• Implemented UX-focused smooth, interactive animations using Framer Motion and React Spring. \n• Developed with TypeScript for type safety and improved code quality. \n• Ensured seamless mobile responsiveness with Tailwind CSS.',
      imageUrl: '/portPhoto.png',
      videoUrl: 'https://www.youtube.com/embed/reJyFC5NfDs?autoplay=1',
      technologies: ['Next.js','Node.js', 'Framer Motion', 'React Spring'],
      githubLink: 'https://github.com/sareenakul/EmpowerU',
    },
    {
      title: 'Course Announcement Application',
      description: '• An announcement application allowing CRUD operations with GraphQL.\n• Customized root queries and mutations for data alteration. \n• Designed mobile-friendly UI for enhanced user experience.',
      imageUrl: '/ca.png',
      videoUrl: 'https://youtube.com/embed/NataxT7JY7s?autoplay=1',
      technologies: ['GraphQL', 'Reactjs', "MongoDB", "Node.js", "JavaScript", "Apolo", "Tailwind CSS"],
      githubLink: 'https://github.com/sareenakul/Course-Announcement',
    },
    {
      title: 'Akul\'s Chess',
      description: '• A real-time multiplayer chess game using Chess.js library. \n• Ensured type safety and code quality with React and TypeScript. \n• Implemented reliable gameplay with WebSockets.',
      imageUrl: '/ch.png',
      videoUrl: 'https://www.youtube.com/embed/reJyFC5NfDs?autoplay=1',
      technologies: ['Reactjs', 'TypeScript', 'Node.js', 'WebSockets', 'Tailwind CSS', "Figma"],
      githubLink: 'https://github.com/sareenakul/Chess',
    },
    {
      title: 'YouTube Vlog Portfolio',
      description: '• Built a mobile responsive web design using React and Bootstrap. \n• Designed the UI using Figma. \n• Deployed using AWS services such as S3 and Amplify.',
      imageUrl: '/mDimage.png',
      videoUrl: 'https://youtube.com/embed/QlYNAHMuFT8?autoplay=1',
      technologies: ['Reactjs' ,'JavaScript', 'Tailwind CSS', "Figma"],
      webURL: 'https://main.d1jm76fngccuyv.amplifyapp.com/',
      githubLink: 'https://github.com/sareenakul/Medley-Diaries-Website',
    },
    {
      title: 'Resource Website EmpowerU',
      description: "• A mobile-responsive web application for the EmpowerU capstone project.\n• Leveraged Github for team collaboration with cross-functional teams.\n• Achieved a notable 15% increase in user engagement for better client experience.",
      imageUrl: '/eU.png',
      videoUrl: 'https://www.youtube.com/embed/0kMTyinxsrU?autoplay=1',
      technologies: ['Node.js', 'Gemini AI', 'Reactjs', 'TypeScript'],
      githubLink: 'https://github.com/sareenakul/EmpowerU',
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? projects.length - 1 : newIndex;
    });
    setClickedIndex(null);
  };
  
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    setClickedIndex(null);
  };
  
  useEffect(() => {
    if (containerRef.current) {
      const scrollWidth = containerRef.current.scrollWidth / projects.length;
      containerRef.current.scrollTo({
        left: currentIndex * scrollWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex, projects.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3 }}
      className="h-screen relative flex flex-col text-left overflow-hidden md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-16 sm:top-24 uppercase tracking-[10px] sm:tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div ref={containerRef} className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, index) => (
          <div key={index} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-start p-5 sm:p-10 md:p-20 h-screen">
            <div 
              className="w-full max-w-lg md:max-w-xl lg:max-w-2xl h-auto rounded-md relative mt-16 sm:mt-20"
              onClick={() => setClickedIndex(index)}
            >
              {clickedIndex === index ? (
                <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-md">
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full rounded-md border-2 border-gray-200"
                    src={project.videoUrl}
                    title={project.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <motion.img
                  initial={{ opacity: 0, y: -300 }}
                  transition={{ duration: 1 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="w-full h-full rounded-md cursor-pointer object-contain"
                  src={project.imageUrl}
                  alt={project.title}
                />
              )}
            </div>
            <div className="space-y-4 px-0 md:px-10 max-w-4xl text-center">
              <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold flex items-center justify-center">
                {project.title} 
                {project.webURL && (
                  <a href={project.webURL} target='_blank' rel="noopener noreferrer" className="text-gray-500 text-sm ml-2">↗</a>
                )}
                <div className="ml-4 text-gray-500 hover:text-gray-900">
                  <SocialIcon url={project.githubLink} fgColor="white" bgColor="black" style={{ height: 30, width: 30 }} />
                </div>
              </h4>
              <div>
                {project.description.split('\n').map((line, index) => (
                  <p className="text-sm sm:text-base" key={index}>{line}</p>
                ))}
              </div>
              <div className="flex flex-wrap justify-center">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-gray-700 text-gray-100 rounded-md text-xs sm:text-sm m-1">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-4 z-30">
        <button 
          onClick={handlePrevClick} 
          className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm sm:text-base"
        >
          Prev
        </button>
        <button 
          onClick={handleNextClick} 
          className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm sm:text-base"
        >
          Next
        </button>
      </div>
    </motion.div>
  );
};

export default Projects;