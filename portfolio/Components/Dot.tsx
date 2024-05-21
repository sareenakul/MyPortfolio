import React from 'react';

type DotProps = {
  currentIndex: number;
  totalProjects: number;
};

const Dot: React.FC<DotProps> = ({ currentIndex, totalProjects }) => {
  return (
    <div className="flex justify-center mt-5">
      {[...Array(totalProjects)].map((_, index) => (
        <div
          key={index}
          className={`w-3 h-3 rounded-full mx-1 ${
            currentIndex === index ? 'bg-gray-700' : 'bg-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

export default Dot;
