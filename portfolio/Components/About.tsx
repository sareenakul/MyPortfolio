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
            className="flex flex-col relative min-h-screen py-24 sm:py-32 text-center md:text-left md:flex-row max-w-7xl px-5 sm:px-10 justify-evenly mx-auto items-center"
        >
            {/* <h3 className="absolute pb-[1rem] top-24 sm:top-28 md:top-32 uppercase tracking-[20px] text-gray-500 text-xl sm:text-2xl">
                About
            </h3> */}
            <div className='flex align-center'>
            <div className="flex-shrink-0 mt-16 sm:mt-0">
                <motion.div 
                    initial={{ x: -200, opacity: 0 }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className="w-full md:w-auto"
                    //className="pt-20 sm:pt-[10rem] flex-shrink-0 w-full md:w-auto"
                >
                    <Image 
                        src={mainImg} 
                        alt="Akul" 
                        className='mx-auto w-40 h-40 sm:w-56 sm:h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
                        //className='mt-[1rem] mb-[1rem] sm:mb-0 w-40 h-40 sm:w-56 sm:h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]' 
                    />
                </motion.div>
            </div>

            <div className="space-y-4 sm:space-y-6 px-2 sm:px-6 md:px-10 mt-6 sm:mt-8 md:mt-0 flex-1">
                <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                    <ScrollText words={words} st={start} />
                </h4>
                <p className=" border-[#3b3a3a] rounded-lg text-center border-2 p-3 sm:p-4 text-xs sm:text-sm md:text-base text-[wheat]">
                    I&apos;m Akul. Mostly known for my infamous Canadian vlogs on MedleyDiaries. At the moment, I am pursuing my 3rd year at York University in 
                    Bachelor of Science with Specialized Honours in Computer Science. Ever since my degree began, I had little to no idea as what all domains
                    would I be able to explore in the field of Computer Science. I was lucky enough to try my hands on Frontend Development at first, that sent
                    me on a stive to make several web-projects and increase my horizon of skills. I mastered Reactjs and upgraded to Nextjs. I prefer to work on the MVC 
                    architecture style in my projects. In addition to that, I have tried my hands on DBMS such as MySQL and MongoDB. Though I prefer to work on GraphQL
                    than restful APIs. At the moment, I find myself working more on backend projects to polish my reasoning and Object-oriented style of programming. 
                </p>
                <p className="border-[#3b3a3a] rounded-lg text-center border-2 p-3 sm:p-4 text-xs sm:text-sm md:text-base text-[wheat]">
                Furthermore, I plan to learn iOS app development, focusing on Objective-C and Swift. I believe transitioning to mobile application development is crucial, as this niche is currently less saturated compared to web development. In my view, working with the MERN stack has given me the confidence to explore different tech stacks and continue growing. I strongly value inclusivity and team spirit. One of my favorite sayings is: 
                <b className='text-white'>
                    &quot;Everyday is to learn something new!&quot;
                </b>
                </p>
            </div>
            </div>
        </motion.div>
    )
}

export default About;
