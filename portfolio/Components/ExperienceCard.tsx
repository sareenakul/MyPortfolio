"use client";
import React from 'react'
import excel from "../public/excel.png";
import Image from 'next/image';
import {motion} from "framer-motion";

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <motion.article 
    initial={{
        y: -100,
        opacity: 0,
    }}
    whileInView={{
        y: 0,
        opacity: 1,
    }}
    transition={{
        duration: 1.2,
    }}
    viewport={{once: true}}
    className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'
    >
        <Image src={excel} alt='companyLogo' className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' />
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Teaching Assistant</h4>
            <p className='font-bold text-2xl mt-1'>Excel Lassonde</p>
            <div className='flex space-x-2 my-2'>
                {/*Tech Used */}   
                <img className='h-10 w-10 rounded-full' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" />
                <img className='h-10 w-10 rounded-full' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg" />
                <img className='h-10 w-10 rounded-full' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
                <img className='h-10 w-10 rounded-full' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                <img className='h-10 w-10 rounded-full' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                <img className='h-10 w-10 rounded-full' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
            </div>
            <p className='uppercase py-5 text-gray-300'>Started...  Ended...</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary Pointer</li>
                <li>Summary Pointer</li>
                <li>Summary Pointer</li>
                <li>Summary Pointer</li>
                <li>Summary Pointer</li>
            </ul>
        </div>
    </motion.article>
  )
}

export default ExperienceCard