"use client";
import React from 'react';
import { useSpring, animated } from '@react-spring/web';

type Props = {}

const BackgroundCircles = (props: Props) => {
  const circleProps = (delay: number, size: string, color: string) => useSpring({
    from: { scale: 0.5, opacity: 0, borderRadius: '20%' },
    to: { scale: 1, opacity: 1, borderRadius: '50%' },
    config: { duration: 2000 },
    delay: delay,
    loop: { reverse: true }
  });

  return (
    <div className='relative flex justify-center items-center'>
      <animated.div
        style={{ ...circleProps(0, '200px', '#333333'), height: '200px', width: '200px', border: '1px solid #333333', marginTop: '13rem' }}
        className='absolute rounded-full animate-ping'
      />
      <animated.div
        style={{ ...circleProps(500, '300px', '#333333'), height: '300px', width: '300px', border: '1px solid #333333', marginTop: '13rem' }}
        className='absolute rounded-full'
      />
      <animated.div
        style={{ ...circleProps(1000, '500px', '#333333'), height: '500px', width: '500px', border: '1px solid #333333', marginTop: '13rem' }}
        className='absolute rounded-full'
      />
      <animated.div
        style={{ ...circleProps(1500, '650px', '#F7AB0A'), height: '650px', width: '650px', border: '1px solid #F7AB0A', marginTop: '13rem' }}
        className='absolute rounded-full animate-pulse'
      />
      <animated.div
        style={{ ...circleProps(2000, '800px', '#333333'), height: '800px', width: '800px', border: '1px solid #333333', marginTop: '13rem' }}
        className='absolute rounded-full'
      />
    </div>
  );
}

export default BackgroundCircles;
