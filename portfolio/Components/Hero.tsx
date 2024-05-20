import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import akul from "../public/Akul.jpeg";
import akuls from "../public/Akuls.jpg";
import akuls1 from "../public/akuls1.jpg";
import Image from 'next/image';
import Link from 'next/link';

type Props = {}

const Hero = (props: Props) => {
    const [text, count] = useTypewriter({
        words: ["Akul Sareen",
        "a Creative Developer",
        "a Problem Solver",
        "an Innovator",
        "a Tech Enthusiast",
        "<Code with Passion>",
        "<Build with Purpose>",
        "an Avid Learner"],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden object-cover'>
        <BackgroundCircles/>
        <Image src={akul} alt='me' className='relative rounded-full h-32 w-32 mx-auto'/>
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Developer</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>Hi, I am {text}</span>
                <Cursor cursorColor='orange'/>
            </h1>
            <div className='pt-5'>
                <Link href="#about">
                    <button className='heroButton'>About</button>
                </Link>
                <Link href="#experience">
                    <button className='heroButton'>Experience</button>
                </Link>
                <Link href="#skills">
                    <button className='heroButton'>Skills</button>
                </Link>
                <Link href="#projects">
                <button className='heroButton'>Projects</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero