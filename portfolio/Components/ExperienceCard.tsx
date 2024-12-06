"use client";
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';

type ExperienceCardProps = {
  title: string;
  company: string;
  companyLogo: StaticImageData;
  technologies: { src: string, width: number, height: number }[];
  startDate: string;
  endDate: string;
  summaryPoints: string[];
  logoWidth: number;
  logoHeight: number;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  companyLogo,
  technologies,
  startDate,
  endDate,
  summaryPoints,
  logoWidth,
  logoHeight,
}) => {
  return (
    <motion.article
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden scroll-auto'
    >
      <Image
        src={companyLogo}
        width={logoWidth}  
        height={logoHeight}
        alt='companyLogo'
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>{title}</h4>
        <p className='font-bold text-2xl mt-1 text-[wheat]'>{company}</p>
        <div className='flex space-x-2 my-2'>
          {technologies.map((tech, index) => (
            <Image key={index} className='h-10 w-10 rounded-full' src={tech} alt={`tech-${index}`} />
          ))}
        </div>
        <p className='uppercase py-5 text-gray-300'>
          <b>
            {startDate} - {endDate}
          </b>
        </p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          {summaryPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
};

export default ExperienceCard;
