import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-center relative w-full'>
        <div className='w-[40%] py-5 absolute top-0 NavbarClipPathShadowHere NavbarClipPathHere'>
        <div className='container mx-auto flex justify-center'>
            <ul className='flex gap-5 items-center text-white md:text-sm lg:text-1xl'>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Project</li>
                <li>Experience</li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Navbar