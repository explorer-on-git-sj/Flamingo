import React from 'react'
import heroimage from './assets/hero_image.png'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row glass rounded-3xl overflow-hidden mt-6 animate-fade-in-up'>
       {/* Hero left side*/}
       <div className='w-full sm:w-1/2 flex items-center justify-center
        py-14 sm:py-0 px-6 sm:px-0'>
            <div className='text-[#414141] dark:text-gray-100'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-gradient-to-r from-rose-500 to-pink-500'>

                    </p>
                    <p className='font-medium text-sm md:text-base tracking-wide text-rose-500 dark:text-rose-400'>
                        OUR BEST SELLER
                    </p>
                </div>
                 <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'
                 ><span className='gradient-text'>Latest Arrivals</span></h1>
                 
                 <div className='flex items-center gap-2 group cursor-pointer w-fit'>
                    <p  className='font-semibold text-sm md:text-base group-hover:text-rose-500 transition-colors'>
                        SHOP NOW
                    </p>
                      <p className='w-8 md:w-11 h-[1px] bg-[#414141] dark:bg-gray-300 group-hover:w-12 transition-all'></p>
                 </div>
                 
            </div>
        </div>

      {/* Hero Right Side */}
      <div className='w-full sm:w-1/2 overflow-hidden'>
        <img src={heroimage} alt="hero-image-element" 
        className='w-full h-full object-cover animate-float'/>
      </div>
    </div>
  )
}

export default Hero
