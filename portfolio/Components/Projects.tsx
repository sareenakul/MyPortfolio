import React, { useState, useEffect, useRef } from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Dot from './Dot';
const portPhoto = require('../public/portPhoto.png');
const mdImage = require('../public/mDimage.png');

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
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1 < 0 ? projects.length - 1 : prevIndex - 1);
  };
  
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };
  
  

  

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
      <div ref={containerRef} className="mt-20 relative flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, index) => (
          <div key={index} className="w-screen flex-shrink-0 snap-center flex flex-col md:flex-row space-y-5 md:space-y-0 items-center justify-center p-5 pb-0 md:p-20 h-screen">
            <div 
              className="w-full md:w-1/2 h-auto rounded-md relative"
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
                  className="w-full h-full rounded-md cursor-pointer"
                  src={project.imageUrl}
                  alt={project.title}
                />
              )}
            </div>
            <div className="space-y-2 px-0 md:px-10 max-w-4xl text-center md:text-left">
              <h4 className="text-3xl md:text-4xl font-semibold flex items-center">
                {project.title} 
                <a href={project.webURL} target='_blank' className="text-gray-500 text-sm ml-2">↗</a>
                <div className="ml-4 text-gray-500 hover:text-gray-900">
                  <SocialIcon url={project.githubLink} fgColor="white" bgColor="black" style={{ height: 30, width: 30 }} />
                </div>
              </h4>
              <div>
                {project.description.split('\n').map((line, index) => (
                  <p className="text-sm md:text-lg" key={index}>{line}</p>
                ))}
              </div>
              <div className="flex space-x-2 justify-center md:justify-start">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-gray-700 text-gray-100 rounded-md text-xs md:text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-2 justify-center md:justify-start">
                {/* <Dot currentIndex={currentIndex} totalProjects={projects.length} /> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <button onClick={handlePrevClick} className="px-4 py-2 bg-gray-700 text-white rounded-md">Prev</button>
        <button onClick={handleNextClick} className="px-4 py-2 bg-gray-700 text-white rounded-md">Next</button>
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
