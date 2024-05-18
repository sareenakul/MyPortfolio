import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";

type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 flex items-start justify-between p-5 max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div 
            initial={{ 
                opacity: 0,
                x: -500,
                scale: 0.5
            }}
            animate={{ 
                opacity: 1,
                x: 0,
                scale: 1
            }}
            className='flex flex-row items-center'>
                {/* Social Icons */}
                <SocialIcon url="https://www.linkedin.com/in/akuls51/" fgColor='gray' bgColor='transparent'/>
                <SocialIcon url="https://github.com/sareenakul" fgColor='gray' bgColor='transparent'/>
                <SocialIcon url="https://www.instagram.com/medleydiaries/" fgColor='gray' bgColor='transparent'/>
                <SocialIcon url='https://leetcode.com/u/sareenakul/' fgColor='gray' bgColor='transparent'/>
                <SocialIcon url='http://medleydiaries.com' fgColor='gray' bgColor='transparent'/>
        </motion.div>
        <div className='flex flex-row items-center cursor-pointer'>
            <SocialIcon className='cursor-pointer' network='email' fgColor='gray' bgColor='transparent'/>
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>
        </div>
    </header>
  )
}

export default Header;