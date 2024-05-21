import React, { useState } from 'react';
import { motion } from 'framer-motion';

type Props = {
  icon: string;
  proficiency: string;
  directionLeft?: boolean;
};

const Skill = ({ icon, proficiency, directionLeft }: Props) => {
  const [animationComplete, setAnimationComplete] = useState(false);
  let iconUrl: string;

  // Check if the icon is "graphql" and assign the correct URL
  if (icon === 'graphql') {
    iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg';
  } else {
    iconUrl = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}/${icon}-original.svg`;
  }

  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        src={iconUrl}
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        transition={{
          duration: 1,
        }}
        onAnimationComplete={() => setAnimationComplete(true)}
        className=' rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter transition duration-300 ease-in-out'
      />
      {animationComplete && (
        <div
          className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'
        >
          <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100'>{proficiency}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skill;