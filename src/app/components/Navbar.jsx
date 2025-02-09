"use client"

import { useState } from "react";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);

  const navItems = [
    { name: "Product", width: 100, left: 60 },
    { name: "Solutions", width: 110, left: 195 },
    { name: "Overview", width: 100, left: 337 },
    { name: "Clients", width: 100, left: 477 },
  ];

  return (
    <div className="flex justify-center items-center mt-2">
      <nav className="relative flex items-center justify-center px-2 h-[55px] overflow-hidden bg-[#E2DEDE] rounded-full shadow-md gap-10">
        {navItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`w-[100px] font-semibold uppercase hover:text-white  text-sm text-center relative z-10 transition-colors duration-300 ${
              activeIndex === index ? "text-white" : "text-black"
            }`}
            onClick={() => setActiveIndex(index)}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {item.name}
          </a>
        ))}
        <div
          className="absolute top-2 h-[40px] bg-[#FF2600] rounded-full z-0 transition-all duration-500"
          style={{
            width: `${
              navItems[hoverIndex !== null ? hoverIndex : activeIndex].width
            }px`,
            left: `${
              navItems[hoverIndex !== null ? hoverIndex : activeIndex].left - 50
            }px`,
          }}
        ></div>
      </nav>
    </div>
  );
};

export default Navbar;
