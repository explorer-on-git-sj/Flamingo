import React from 'react'

const NewsLetterBox = () => {
    const onsubmithandler = (event)=>{
      event.preventDefault();
      
    }
  return (
    <div className='text-center glass-strong rounded-3xl py-12 px-6 my-16'>
        <p className='text-2xl font-medium 
        text-gray-800 dark:text-gray-100'>Subscribe now and get <span className='gradient-text font-semibold'>20% off</span></p>
         <p className='text-gray-400 dark:text-gray-500 mt-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, neque blanditiis! Aut ullam iusto praesentium? Veniam nostrum nihil veritatis maxime.
         </p>
         <form onClick={onsubmithandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 
         glass rounded-full pl-5 pr-1.5 py-1.5 glow-ring transition-shadow duration-300'>
            <input className='w-full sm:flex-1 outline-none bg-transparent text-gray-700 dark:text-gray-200 placeholder:text-gray-400' 
            type="email" placeholder='Enter your email' required/>
            <button type='submit' className='bg-gradient-to-r from-rose-500 to-pink-500 text-white
             text-xs px-8 py-3.5 rounded-full hover:shadow-lg hover:shadow-rose-500/30 transition-shadow duration-300'>SUBSCRIBE</button>
         </form>
    </div> 
  )
}

export default NewsLetterBox
