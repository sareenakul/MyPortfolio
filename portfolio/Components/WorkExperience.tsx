import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import excel from "../public/excel.png"; // Ensure this path is correct
import c4 from "../public/c4.png";


type Props = {};

const WorkExperience: React.FC<Props> = (props) => {
  const experiences = [
    {
      title: 'Teaching Assistant',
      company: 'Excel Lassonde',
      companyLogo: excel,
      technologies: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
      ],
      startDate: 'Aug 2023',
      endDate: 'Present',
      summaryPoints: [
        'Assisted with lectures and labs',
        'Graded assignments and exams',
        'Provided one-on-one support to students',
        'Developed supplemental materials',
        'Led review sessions before exams',
      ],
    },
    // Add more experience objects here
    {
        title: 'Web Developer',
        company: 'InfiniGuard | York University C-4 Partnership',
        companyLogo: c4,
        technologies: [
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
        ],
        startDate: 'January 2021',
        endDate: 'Present',
        summaryPoints: [
          'Assisted with lectures and labs',
          'Graded assignments and exams',
          'Provided one-on-one support to students',
          'Developed supplemental materials',
          'Led review sessions before exams',
        ],
      },
    // Add more experience objects here
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Experience
      </h3>
      <div className='mt-36 w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            title={experience.title}
            company={experience.company}
            companyLogo={experience.companyLogo}
            technologies={experience.technologies}
            startDate={experience.startDate}
            endDate={experience.endDate}
            summaryPoints={experience.summaryPoints}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
