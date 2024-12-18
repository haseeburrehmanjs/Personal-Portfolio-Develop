import React from 'react'
import PrimaryButton from './PrimaryBtn'

const HereSection = () => {
  return (
    <div className='bg-cover w-full h-[100vh] flex justify-center items-center bg-blend-overlay opacity-30' style={{
        backgroundImage : `url(https://www.securities.io/wp-content/uploads/2024/03/DALL%C2%B7E-2024-03-21-09.08.33-A-highly-detailed-and-realistic-image-showing-an-advanced-robot-seated-at-a-modern-sleek-desk-surrounded-by-multiple-screens-displaying-complex-algor.webp`
    }}>
      <div className=''><PrimaryButton children={'Download Cv'} /></div>
    </div>
  )
}

export default HereSection