import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';

type Props = {}

const Skills = (props: Props) => {
  const skills = [
    { icon: 'mongodb', proficiency: '60%', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg' },
    { icon: 'express', proficiency: '70%', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg' },
    { icon: 'react', proficiency: '90%', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { icon: 'nodejs', proficiency: '90%', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg' },
    { icon: 'graphql', proficiency: '75%', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-original.svg' },
    { icon: 'nextjs', proficiency: '70%', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg' },
    { icon: 'javascript', proficiency: '90%', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { icon: 'typescript', proficiency: '80%', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    { icon: 'java', proficiency: '90%', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg' },
    { icon: 'python', proficiency: '90%', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { icon: 'github', proficiency: '80%', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg' },
    { icon: 'mysql', proficiency: '80%', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg' },
    { icon: 'git', proficiency: '90%', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg' },
    { icon: 'tailwindcss', proficiency: '85%', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain.svg' },
    { icon: 'bootstrap', proficiency: '80%', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg' },
    { icon: 'latex', proficiency: '60%', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/latex/latex-original.svg' },
    // Add more skills here
  ];

  const getRowNumber = (index: number, columns: number) => Math.floor(index / columns);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over skill for current proficiency</h3>
        <div className='pt-36 grid grid-cols-4 gap-5'>
          {skills.map((skill, index) => {
            const rowNumber = getRowNumber(index, 4);
            const direction = rowNumber % 2 === 0 ? -100 : 100;
            return (
              <motion.div
                key={index}
                initial={{ x: direction, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 2 }}
              >
                <Skill icon={skill.icon} proficiency={skill.proficiency} />
              </motion.div>
            );
          })}
        </div>
    </motion.div>
  )
}

export default Skills;
