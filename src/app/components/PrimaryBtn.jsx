import React from 'react';

const PrimaryButton = ({ children }) => {
  return (
    <button className="relative text-white text-xl font-semibold border-none bg-none font-poppins before:absolute before:top-0 before:left-0 before:w-0 before:h-[2px] before:bg-blue-500  before:transition-all before:duration-500 before:origin-left after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[2px] after:bg-blue-500  after:transition-all after:duration-500 after:origin-right hover:before:w-full hover:after:w-full">
      {children}
    </button>
  );
};

export default PrimaryButton;
