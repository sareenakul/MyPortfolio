import React from 'react'
import {motion} from "framer-motion";
import Image from 'next/image';

type Props = {
    directionLeft?: boolean;
}

const Skill = ({directionLeft}: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg'
        initial={{
            x: directionLeft ? -200: 200,
            opacity: 0,
        }}
        whileInView={{
            opacity: 1,
            x: 0
        }}
        transition={{
            duration: 1,
        }}
        className='rounder-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
    </div>
  )
}

export default Skill