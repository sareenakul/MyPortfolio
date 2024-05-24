"use client";

import React, { useEffect, useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import { useSpring, animated } from '@react-spring/web';

type Props = {}

function Header({}: Props) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const leftSpring = useSpring({
    from: { scale: 0.5, opacity: 0, x: -500 },
    to: { scale: 1, opacity: 1, x: 0 },
    config: { duration: 1000 },
  });

  const rightSpring = useSpring({
    from: { scale: 0.5, opacity: 0, x: 500 },
    to: { scale: 1, opacity: 1, x: 0 },
    config: { duration: 1000 },
  });

  if (!isClient) {
    // Render a placeholder while waiting for the client-side rendering
    return null;
  }

  return (
    <header className='sticky top-0 flex items-start justify-between p-5 max-w-7xl mx-auto z-20 xl:items-center'>
      <animated.div style={leftSpring} className='flex flex-row items-center'>
        {/* Social Icons */}
        <SocialIcon url="https://www.linkedin.com/in/akuls51/" fgColor='gray' bgColor='transparent'/>
        <SocialIcon url="https://github.com/sareenakul" fgColor='gray' bgColor='transparent'/>
        <SocialIcon url="https://www.instagram.com/medleydiaries/" fgColor='gray' bgColor='transparent'/>
        <SocialIcon url='https://leetcode.com/u/sareenakul/' fgColor='gray' bgColor='transparent'/>
        <SocialIcon url='http://medleydiaries.com' fgColor='gray' bgColor='transparent'/>
      </animated.div>
      <animated.div style={rightSpring} className='flex flex-row items-center cursor-pointer'>
        <SocialIcon url='mailto:akuls18@my.yorku.ca' className='cursor-pointer' network='email' fgColor='gray' bgColor='transparent'/>
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>
      </animated.div>
    </header>
  );
}

export default Header;
