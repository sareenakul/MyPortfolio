"use client";
import React from 'react'
import {motion} from "framer-motion";

type Props = {}

const Skills = (props: Props) => {
  return (
    <div className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
    </div>
  )
}

export default Skills