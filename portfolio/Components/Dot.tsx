"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type DotProps = {
  currentIndex: number;
  totalProjects: number;
};

const Dot: React.FC<DotProps> = ({ currentIndex, totalProjects }) => {
  const [dots, setDots] = useState<JSX.Element[]>([]);

  useEffect(() => {
    // Update the dots array whenever currentIndex changes
    const updatedDots = Array.from({ length: totalProjects }, (_, index) => (
      <motion.div
        key={index}
        className={`w-3 h-3 rounded-full mx-1`}
        initial={{ scale: 0.5, opacity: 0.5 }}
        animate={{ scale: currentIndex === index ? 1.5 : 0.5, opacity: currentIndex === index ? 1 : 0.5 }}
        transition={{ duration: 1 }}
        style={{ backgroundColor: currentIndex === index ? '#333' : '#ccc' }}
      />
    ));
    setDots(updatedDots);
  }, [currentIndex, totalProjects]);

  return (
    <div className="flex justify-center mt-5">
      {dots}
    </div>
  );
};

export default Dot;
