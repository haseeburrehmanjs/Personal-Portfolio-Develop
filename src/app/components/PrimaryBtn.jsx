// import React from "react";

// const PrimaryButton = ({ children }) => {
//   return (
//     <button className="relative text-white text-xl font-semibold border-none bg-none font-poppins before:absolute before:top-0 before:left-0 before:w-0 before:h-[2px] before:bg-blue-500  before:transition-all before:duration-500 before:origin-left after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[2px] after:bg-blue-500  after:transition-all after:duration-500 after:origin-right hover:before:w-full hover:after:w-full">
//       {children}
//     </button>
//   );
// };

// export default PrimaryButton;


import React from 'react'

const PrimaryBtn = ({ btnText, additnalClass, primaryBtn}) => {
  return (
    <button className={`${primaryBtn ? "py-2 px-10 flex items-center justify-center bg-[#FF2600] text-white font-semibold rounded-full transform duration-300 ease-linear border border-[#FF2600] hover:bg-white hover:border hover:border-[#FF2600] hover:text-[#FF2600]" : 'py-2 px-10 flex items-center justify-center bg-white text-[#FF2600] font-semibold rounded-full transform duration-300 ease-linear border border-[#FF2600] hover:bg-[#FF2600] hover:border hover:border-[#FF2600] hover:text-white'}`}>
      {btnText}
    </button>
  )
}

export default PrimaryBtn