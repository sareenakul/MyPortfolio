import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import excel from "../public/excel.png"; // Ensure this path is correct
import c4 from "../public/c4.png";
import ghLogo from "../public/ghLogo.png";
import reefers from "../public/ReefersInc.png";



type Props = {
};

const WorkExperience: React.FC<Props> = (props) => {

  const experiences = [
    {
      title: 'Engineering Intern',
      company: 'Reefers Technologies Inc.',
      companyLogo: reefers,
      logoWidth: 50,
      logoHeight: 50,
      technologies: [
        {
          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
          width: 50,
          height: 50
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
          width: 50,
          height: 50
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
          width: 50,
          height: 50
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
          width: 50,
          height: 50
        },
      ],
      startDate: 'Jul 2024',
      endDate: 'Nov 2024',
      summaryPoints: [
        "Assisted in the design, development, and testing of web projects",
        "Conducted research to improve efficiency and reduce deployment costs.",
        "Created promotional materials, including brochures and presentations.",
        "Worked closely with the CFO on budgeting, financial planning, and cost analysis of product deployment.",
      ],
    },
    {
      title: 'Volunteer Developer',
      company: 'GramerHub',
      companyLogo: ghLogo,
      logoWidth: 120,
      logoHeight: 120,
      technologies: [
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original-wordmark.svg",
          width: 50,
          height: 50
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
          width: 50,
          height: 50
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
          width: 50,
          height: 50
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
          width: 50,
          height: 50
        },
      ],
      startDate: 'Jun 2024',
      endDate: 'Jul 2024',
      summaryPoints: [
        'Developed user authentication using Firebase',
        'Error Handling',
        'Testing and Debugging',
        'Following Agile methodology',
      ],
    },
    // Add more experience objects here
    
    {
        title: 'Web Developer',
        company: 'InfiniGuard | York University C-4 Partnership',
        companyLogo: c4,
        logoWidth: 120,
        logoHeight: 120,
        technologies: [
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
            width: 50,
            height: 50
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
            width: 50,
            height: 50
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
            width: 50,
            height: 50
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
            width: 50,
            height: 50
          },
        ],
        startDate: 'Sep 2023',
        endDate: 'Apr 2024',
        summaryPoints: [
          'Assisted with lectures and labs',
          'Graded assignments and exams',
          'Provided one-on-one support to students',
          'Developed supplemental materials',
          'Led review sessions before exams',
        ],
      },
      {
        title: 'Teaching Assistant',
        company: 'Excel Lassonde',
        companyLogo: excel,
        logoWidth: 120,
        logoHeight: 120,
        technologies: [
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
            width: 50,
            height: 50
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
            width: 50,
            height: 50
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
            width: 50,
            height: 50
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
            width: 50,
            height: 50
          },
        ],
        startDate: 'Aug 2023',
        endDate: 'Aug 2024',
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
      title: 'Sales Associate',
      company: 'LoveAndPeaceForAll',
      companyLogo: "https://loveandpeaceforall.com/cdn/shop/files/LPFA-multicolor-logo-full_cb2609a3-dff5-4b20-b6ce-58fa729a38e5_180x@2x.png?v=1675801754",
      logoWidth: 120,
      logoHeight: 120,
      technologies: [],
      startDate: 'May 2022',
      endDate: 'Aug 2022',
      summaryPoints: [
        'Achieved the sales through strong persuasion and customer engagement.',
        'Built rapport with customers, effectively communicating to drive conversions.',
        'Consistently met and exceeded sales targets in a competitive retail environment.',
        'Demonstrated deep understanding of product offerings to provide tailored recommendations.',
        'Efficiently managed the inventory, ensuring stock levels were maintained, restocked timely.',
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative overflow-hidden flex-col text-left md:text-3xl max-w-full px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Experience
      </h3>
      <div className='mt-36 w-full flex space-x-5 overflow-x-scroll pb-0 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
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
            logoWidth = {experience.logoWidth}
            logoHeight = {experience.logoHeight}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
