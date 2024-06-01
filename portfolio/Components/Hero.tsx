import React, { useState, useEffect } from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import akul from "../public/Akul.jpeg";
import Image from 'next/image';
import Link from 'next/link';
import two from "../public/photosMe/hero2.jpg";
import six from "../public/photosMe/hero6.jpg";
import seven from "../public/photosMe/hero7.jpg";
import ScrollText from './ScrollText';

type Props = {}

const Hero = (props: Props) => {
    // const [text, count] = useTypewriter({
    //     words: ["kul",
    //     " Web-Developer",
    //     " Problem Solver",
    //     " <Coder>"],
    //     loop: true,
    //     delaySpeed: 100,
    // });

    const descps = ["kul"," Web-Developer"," Problem Solver"," <Coder>"];
    const images = [akul, two, six, seven];
    const [currentImage, setCurrentImage] = useState(0);
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimating(true);
            setTimeout(() => {
                setCurrentImage((prevImage) => (prevImage + 1) % images.length);
                setAnimating(false);
            }, 0); // 1 second animation
        }, 100); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden object-cover'>
            <BackgroundCircles />
            <div className={`relative rounded-full h-32 w-32 mx-auto ${animating ? 'image-transition' : ''}`}>
                <Image src={images[currentImage]} alt='me' layout='fill' objectFit='cover' className='rounded-full' />
            </div>
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Developer</h2>
                {/* <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>Hi, I'm a{text}</span>
                    <Cursor cursorColor='orange'/>
                </h1> */}
                <ScrollText words={descps}/>
                <div className='pt-5 mt-[2rem]'>
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
    );
}

export default Hero;
