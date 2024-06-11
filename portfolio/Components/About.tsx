"use client";
import React from 'react';
import akul from "../public/Akul.jpeg";
import Image from 'next/image';
import { motion } from "framer-motion";
import ScrollText from './ScrollText';
import mainImg from "../public/mainImg.png";

type Props = {}

const About = (props: Props) => {
    const words = ["About me", "Background", "Preview", "Summary"];
    const start = "A little ";

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative h-auto md:h-[100vh] text-center md:text-left md:flex-row max-w-7xl px-5 sm:px-10 justify-evenly mx-auto items-center'
        >
            <h3 className='absolute top-16 sm:top-24 uppercase tracking-[20px] text-gray-500 text-xl sm:text-2xl'>
                About
            </h3>
            <div>
                <motion.div 
                    initial={{ x: -200, opacity: 0 }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className='pt-20 sm:pt-[10rem] flex-shrink-0 w-full md:w-auto'
                >
                    <Image 
                        src={mainImg} 
                        alt="Akul" 
                        className='mt-[1rem] mb-[1rem] sm:mb-0 w-40 h-40 sm:w-56 sm:h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]' 
                    />
                </motion.div>
            </div>

            <div className='space-y-5 sm:space-y-10 px-5 sm:px-10 flex-1'>
                <h4 className='mt-[5rem] sm:mt-[7rem] text-2xl sm:text-4xl font-semibold'>
                    <ScrollText words={words} st={start} />
                </h4>
                <p className='text-sm sm:text-base text-[wheat]'>
                    I'm Akul. Mostly known for my infamous Canadian vlogs on MedleyDiaries. At the moment, I am pursuing my 3rd year at YorkU in 
                    Bachelor of Science with Specialized Honours in Computer Science. Ever since my degree began, I had little to no idea as what all domains
                    would I be able to explore in the field of Computer Science. I was lucky enough to try my hands on Frontend Development at first, that sent
                    me on a stive to make several web-projects and increase my horizon of skills. I mastered Reactjs. I'm Akul. Mostly known for my infamous Canadian vlogs on my channel medleydiaries. Currently,
                    I am pursuing my 3rd year at YorkU in Bachelor of Science with Specialized Honours in Computer Science. Ever since my degree began, I had 
                    little to no idea as what I would do in the field of Computer Science. I was lucky enough to try my hands on Frontend Development at first.
                    It really initiated a spark in me and within a year, I mastered Reactjs. I'm Akul. Mostly known for my infamous Canadian vlogs on my channel
                    medleydiaries. Currently, I am pursuing my 3rd year at YorkU in Bachelor of Science with Specialized Honours in Computer Science. Ever since my degree began, I had 
                    little to no idea as what I would do in the field of Computer Science. I was lucky enough to try my hands on Frontend Development at first.
                    It really initiated a spark in me and within a year, I mastered Reactjs It really initiated a spark in me and within a year, I mastered Reactjs. I'm Akul. Mostly known for my infamous Canadian vlogs on my channel
                    medleydiaries.
                </p>
            </div>
        </motion.div>
    )
}

export default About;
