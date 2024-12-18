import React from 'react';
import Link from 'next/link'; // Import the Link component

const Navbar = () => {
  return (
    <div className="flex justify-center relative w-full">
      <div className="w-[40%] py-5 absolute top-0 NavbarClipPathShadowHere NavbarClipPathHere">
        <div className="container mx-auto flex justify-center">
          <ul className="flex gap-5 items-center text-white md:text-sm lg:text-1xl">
            {/* Navigation Links with hover and active border animation */}
            <li className="relative group">
              <Link href="/" className="text-white">
                Home
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <Link href="/about" className="text-white">
                About
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <Link href="/contact" className="text-white">
                Contact Us
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <Link href="/project" className="text-white">
                Project
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <Link href="/experience" className="text-white">
                Experience
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
