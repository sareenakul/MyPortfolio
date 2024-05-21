"use client";
import React from 'react';
import akul from "../public/Akul.jpeg";
import Image from 'next/image';
import {motion} from "framer-motion";

type Props = {}

const About = (props: Props) => {
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
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        <motion.div initial={{
            x: -200,
            opacity: 0,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{
            x: 0,
            opacity: 1,
        }}
        className=' pt-36 flex-shrink-0 w-full md:w-auto' // Ensure the image container doesn't shrink
        >
            <Image src={akul} alt="Akul" className='-mb-20 md:mb-0 w-56 h-56 rounded-full object-cover
            md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]' />
        </motion.div>

        <div className='space-y-10 px-0 md:px-10 flex-1'> {/* Add flex-1 to allow this div to take remaining space */}
            <h4 className='text-4xl font-semibold'>A <span className='underline decoration-[#F7AB0A]/50'>little</span>{" "} background</h4>
            <p className='text-base'>
                I'm Akul. Mostly known for my infamous Canadian vlogs on my channel medleydiaries. Currently, I am persuing my 3rd year at YorkU in 
                Bachelor of Science with Specialized Honours in Computer Science. Ever since my degree began, I had little to no idea as what I would
                do in the feild of Computer Science. I was lucky enough to try my hands on Frontend Development at first. It really initiated a spark
                in me and within a year, I mastered Reactjs 
            </p>
        </div>
    </motion.div>
  )
}

export default About;
