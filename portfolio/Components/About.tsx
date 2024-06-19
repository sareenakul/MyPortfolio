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
            className="flex flex-col relative h-auto md:h-[100vh] text-center md:text-left md:flex-row max-w-7xl px-5 sm:px-10 justify-evenly mx-auto items-center"
        >
            <h3 className="absolute top-16 sm:top-24 uppercase tracking-[20px] text-gray-500 text-xl sm:text-2xl">
                About
            </h3>
            <div>
                <motion.div 
                    initial={{ x: -200, opacity: 0 }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className="pt-20 sm:pt-[10rem] flex-shrink-0 w-full md:w-auto"
                >
                    <Image 
                        src={mainImg} 
                        alt="Akul" 
                        className='mt-[1rem] mb-[1rem] sm:mb-0 w-40 h-40 sm:w-56 sm:h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]' 
                    />
                </motion.div>
            </div>

            <div className="space-y-5 sm:space-y-10 px-5 sm:px-10 flex-1">
                <h4 className="mt-[5rem] sm:mt-[7rem] text-2xl sm:text-4xl font-semibold">
                    <ScrollText words={words} st={start} />
                </h4>
                <p className=" border-[#3b3a3a] rounded-[1rem] text-center border-[3px] p-[1px] border-solid-[white] text-sm sm:text-base text-[wheat]">
                    I`&apos;`m Akul. Mostly known for my infamous Canadian vlogs on MedleyDiaries. At the moment, I am pursuing my 3rd year at York University in 
                    Bachelor of Science with Specialized Honours in Computer Science. Ever since my degree began, I had little to no idea as what all domains
                    would I be able to explore in the field of Computer Science. I was lucky enough to try my hands on Frontend Development at first, that sent
                    me on a stive to make several web-projects and increase my horizon of skills. I mastered Reactjs and upgraded to Nextjs. I prefer to work on the MVC 
                    architecture style in my projects. In addition to that, I have tried my hands on DBMS such as MySQL and MongoDB. Though I prefer to work on GraphQL
                    than restful APIs. At the moment, I find myself working more on backend projects to polish my reasoning and Object-oriented style of programming. 
                </p>
                <p className="border-[#3b3a3a] rounded-[1rem] text-center p-[1px] border-[3px] text-sm sm:text-base text-[wheat]">
                    Further, I plan to learn IOS App Development, polishing through Objective C and Swift language. I believe, it is crutial to switch towards mobile 
                    application development. Since, this niche is not as saturated as web development is at the moment. In my perspective, MERN Stack has actually given
                    me the confidence to keep exploring different tech stacks and growing. I believe in inclusivity and team spirit. My favourite saying goes without waste
                    `&quot;`Everyday is to learn something new!`&quot;`
                </p>
            </div>
        </motion.div>
    )
}

export default About;
