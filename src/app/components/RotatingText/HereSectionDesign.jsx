import React from 'react';
import '@/assets/css/animation.css'

const RotatingText = () => {
  return (
    <div className="rotating-text-wrapper w-fit flex flex-col gap-2 justify-center items-center">
      <h2 className='text-2xl lg:text-4xl'>Hello, It's me</h2>
      <h2 className='text-2xl lg:text-4xl text-yellow-400'>Haseeb Ur Rehman</h2>
      <h2 className='text-2xl lg:text-4xl'>I am Frontend Developer</h2>
    </div>
  );
};

export default RotatingText;