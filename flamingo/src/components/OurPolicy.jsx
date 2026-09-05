import React from 'react'
import returnpolicyphoto from './assets/return.webp'
import quality from './assets/quality.png'
import support from './assets/support.webp'

const OurPolicy = () => {
  return (
     <div  className='flex flex-col sm:flex-row justify-around gap-8 sm:gap-4 text-center py-16 my-8
     text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300'>
    
    <div className='glass rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300'>
      <img src={returnpolicyphoto} alt="" className='w-12 m-auto mb-5' />
        <p className='font-semibold'>Easy Exchange Policy</p>
      <p className='text-gray-400 dark:text-gray-500'>We offer hastle free exchange policy</p>      
    </div>
    <div className='glass rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300'>
      <img src={quality} alt="" className='w-12 m-auto mb-5' />
        <p className='font-semibold'>7 Days Return Policy</p>
      <p className='text-gray-400 dark:text-gray-500'>We provide 7 days free exchange policy</p>      
    </div>
    <div className='glass rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300'>
      <img src={support} alt="" className='w-18 m-auto mb-5' />
        <p className='font-semibold'>Best Customer Service</p>
      <p className='text-gray-400 dark:text-gray-500'>we provide 24/7 customer support</p>      
    </div>
    
  </div>
  )
}

export default OurPolicy
