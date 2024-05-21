import React from 'react'
import {motion} from "framer-motion";
import Skill from './Skill';

type Props = {}

const Skills = (props: Props) => {
  const skills = [
    { icon: 'mongodb', proficiency: '70%', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg' },
    { icon: 'express', proficiency: '70%', src: 'https://cdn.jsdeliv'},
    { icon: 'react', proficiency: '70%', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { icon: 'nodejs', proficiency: '70%', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg' },
    { icon: 'graphql', proficiency: '100%', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-original.svg' },
    { icon: 'nextjs', proficiency: '70%', src: 'https://cdn.jsdeliv'},
    { icon: 'javascript', proficiency: '90%', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { icon: 'typescript', proficiency: '80%', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    { icon: 'java', proficiency: '70%', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg' },
    { icon: 'python', proficiency: '70%', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { icon: 'github', proficiency: '70%', src: 'https://cdn.jsdeliv'},    
    { icon: 'mysql', proficiency: '70%', src: 'https://cdn.jsdeliv'},
    { icon: 'git', proficiency: '70%', src: 'https://cdn.jsdeliv'},
    { icon: 'tailwindcss', proficiency: '70%', src: 'https://cdn.jsdeliv'},
    { icon: 'bootstrap', proficiency: '70%', src: 'https://cdn.jsdeliv'},
    { icon: 'latex', proficiency: '70%', src: 'https://cdn.jsdeliv'},
    // Add more skills here
  ];

  return (
    <motion.div 
    initial={{
        opacity: 0,
    }}
    whileInView={{
        opacity: 1,
    }}
    transition={{
        duration: 1.5,
    }}
    className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>

        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over skill for current proficiency</h3>
        <div className='pt-36 grid grid-cols-4 gap-5'>
          {skills.map((skill, index) => (
            <Skill key={index} icon={skill.icon} proficiency={skill.proficiency} />
          ))}
        </div>
    </motion.div>
  )
}

export default Skills;