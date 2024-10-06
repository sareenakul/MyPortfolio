import React, { useState, useEffect } from 'react';
import BackgroundCircles from './BackgroundCircles';
import akul from "../public/Akul.jpeg";
import Image from 'next/image';
import Link from 'next/link';
import two from "../public/photosMe/hero2.jpg";
import six from "../public/photosMe/hero6.jpg";
import seven from "../public/photosMe/hero7.jpg";
import ScrollText from './ScrollText';
import im1 from "../public/imAkul/im1.png";
import im2 from "../public/imAkul/im2.png";
import im3 from "../public/imAkul/im3.png";
import im4 from "../public/imAkul/im4.png";
import im5 from "../public/imAkul/im5.png";
import im6 from "../public/imAkul/im6.png";

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

    const descps = ["kul Sareen", "daptive","stute"," <Coder>"];
    const st = "Hi, I'm a"
    const images = [im1, im2, im3, im4, im5, im6, im5, im4, im3, im2, im1];
    const [currentImage, setCurrentImage] = useState(0);
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimating(true);
            setTimeout(() => {
                setCurrentImage((prevImage) => (prevImage + 1) % images.length);
                setAnimating(false);
            }, 0); // 1 second animation
        }, 300); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className='h-screen flex flex-col space-y-4 sm:space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <div className={`relative rounded-full h-24 w-24 sm:h-32 sm:w-32 mx-auto ${animating ? 'image-transition' : ''}`}>
                <Image src={images[currentImage]} alt='me' layout='fill' objectFit='cover' className='rounded-full' />
            </div>
            <div className='z-20 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl'>
                <h2 className='text-xs sm:text-sm uppercase text-gray-400 pb-2 tracking-[10px] sm:tracking-[15px]'>Software Developer</h2>
                {/* <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>Hi, I'm a{text}</span>
                    <Cursor cursorColor='orange'/>
                </h1> */}
                <div className=''>
                    <ScrollText words={descps} st = {st}/>
                </div>
                <div className='mt-4 sm:mt-8'>
                    <div className='flex'>
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
                    <div className='flex justify-center mt-[1rem]'>
                        <Link href="/resume.pdf" passHref>
                            <button className='heroResume'>Resume</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
