import React from 'react'

const About = () => {
  return (
    <div className='w-full text-center mx-auto px-4 py-16'>
      <div className='w-[60%] flex flex-col items-center gap-3 justify-center mx-auto'>
        <div>
          <h3 className="text-4xl font-semibold font-serif">About Me</h3>
          <h1 className="text-5xl border-b-2 border-[#FF2600] font-medium font-serif">Frontend Developer</h1>
        </div>
        <div className='flex flex-col font-serif text-center'>
          <p>I love programming and have learned a lot! 😊</p>
          <p>I’m skilled in JavaScript, React.js, and React Native.
            I enjoy building web technologies and digital products.
            I’m also interested in Deep Learning and Natural Language Processing.
            I use modern JavaScript libraries and frameworks like React.js.
            I love solving problems and creating smooth user experiences.
            Building interactive and responsive websites is my passion.
            I always explore new technologies to improve my skills.</p>
        </div>
      </div>
    </div>
  )
}

export default About