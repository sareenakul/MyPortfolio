import React, { useEffect, useRef } from 'react';
import { SocialIcon } from 'react-social-icons'; // Import SocialIcon

type Props = {}

const Projects = (props: Props) => {
  const projects = [
    {
      title: 'FaceTrack',
      description: 'FaceTrack records facial attendance by detecting and recognizing faces in real-time video and saving the data to a .csv file with a timestamp.',
      imageUrl: 'https://main.d1jm76fngccuyv.amplifyapp.com/static/media/webL.8adf32335e51ac45b253.png',
      technologies: ['Python', 'OpenCV'],
      githubLink: 'https://github.com/yourusername/facetrack', // GitHub link for the project
    },
    {
      title: 'ProjectX',
      description: 'ProjectX is a groundbreaking application that revolutionizes the way users interact with technology, providing seamless integration and intuitive design.',
      imageUrl: 'https://via.placeholder.com/300x200', // Replace with your actual image URL
      technologies: ['React', 'Node.js', 'MongoDB'],
      githubLink: 'https://github.com/yourusername/projectx', // GitHub link for the project
    },
    {
      title: 'ProjectX',
      description: 'ProjectX is a groundbreaking application that revolutionizes the way users interact with technology, providing seamless integration and intuitive design.',
      imageUrl: 'https://via.placeholder.com/300x200', // Replace with your actual image URL
      technologies: ['React', 'Node.js', 'MongoDB'],
      githubLink: 'https://github.com/yourusername/projectx', // GitHub link for the project
    },
    {
      title: 'ProjectX',
      description: 'ProjectX is a groundbreaking application that revolutionizes the way users interact with technology, providing seamless integration and intuitive design.',
      imageUrl: 'https://via.placeholder.com/300x200', // Replace with your actual image URL
      technologies: ['React', 'Node.js', 'MongoDB'],
      githubLink: 'https://github.com/yourusername/projectx', // GitHub link for the project
    }
    // Add more projects here as needed
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  let scrollIndex = 0;
  let autoScrollInterval: NodeJS.Timeout;

  const startAutoScroll = () => {
    autoScrollInterval = setInterval(() => {
      if (containerRef.current) {
        const container = containerRef.current;
        const numberOfProjects = projects.length;
        scrollIndex = (scrollIndex + 1) % numberOfProjects;
        container.scrollTo({
          left: container.offsetWidth * scrollIndex,
          behavior: 'smooth',
        });
      }
    }, 3000);
  };

  const stopAutoScroll = () => {
    clearInterval(autoScrollInterval);
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
        stopAutoScroll();
        container.removeEventListener('scroll', handleUserScroll);
      };
    }
  }, [projects.length]);

  return (
    <div className='h-screen flex relative flex-col text-left overflow-hidden md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>

      <div ref={containerRef} className='mt-20 relative flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
        {projects.map((project, index) => (
          <div key={index} className='w-screen flex-shrink-0 snap-center flex flex-col md:flex-row space-y-5 md:space-y-0 items-center justify-center p-10 md:p-20 h-screen'>
            <img 
              className='w-full md:w-1/2 h-auto rounded-md' 
              src={project.imageUrl} 
              alt={project.title} 
            />
            <div className='space-y-2 px-0 md:px-10 max-w-4xl text-center md:text-left'>
              <h4 className='text-3xl md:text-4xl font-semibold flex items-center'>
                {project.title} <span className='text-gray-500 text-sm ml-2'>↗</span>
                <div className='ml-4 text-gray-500 hover:text-gray-900'>
                  <SocialIcon url={project.githubLink} fgColor="white" bgColor="black" style={{ height: 30, width: 30 }} />
                </div>
              </h4>
              <p className='text-sm md:text-lg'>
                {project.description}
              </p>
              <div className='flex space-x-2 justify-center md:justify-start'>
                {project.technologies.map((tech, i) => (
                  <span key={i} className='px-2 py-1 bg-gray-700 text-gray-100 rounded-md text-xs md:text-sm'>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div>
    </div>
  );
}

export default Projects;
