import React from 'react';

type Props = {}

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5, 6];
  return (
    <div className='h-screen flex relative flex-col text-left overflow-hidden md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>

      <div className='mt-40 relative flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
        {projects.map((project, index) => (
          <div key={index} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <img 
              className='w-48 h-48 md:w-64 md:h-64 object-cover' 
              src='https://main.d1jm76fngccuyv.amplifyapp.com/static/media/webL.8adf32335e51ac45b253.png' 
              alt={`Project ${project}`}
            />
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl md:text-4xl font-semibold text-center'>
                Project {project}
              </h4>
              <p className=' underline text-sm md:text-lg text-center'>
                Description of Project {project}. This project is a demonstration of various skills and technologies used in its development.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div>
    </div>
  );
}

export default Projects;
