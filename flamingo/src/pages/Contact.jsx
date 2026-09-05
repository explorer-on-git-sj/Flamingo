import React from 'react'
import Title from '../components/Title'
import contact from '../components/assets/contact.png'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
       
       <div className='text-center text-2xl pt-10 border-t border-gray-200 dark:border-white/10'>
         <Title text1={'Contact '} text2={'US'}/>
       </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 items-center'>
        <img src={contact} alt="" className='
        w-full md:max-w-[480px] rounded-3xl shadow-xl shadow-rose-200/30 dark:shadow-black/30'/>
       <div className='flex flex-col justify-center items-start gap-6 glass rounded-2xl p-8 md:p-10'>
        <p className='font-semibold text-xl text-gray-700 dark:text-gray-200'>Our Store</p>
        <p className='text-gray-500 dark:text-gray-400'>54709 Willims Station <br /> Suite 350, Washington, USA</p>
        <p className='text-gray-500 dark:text-gray-400'>Tel: (415) 555-0132 <br /> Email:jahhdhe@gmail.com</p>
        <p className='font-semibold text-xl text-gray-700 dark:text-gray-200'>Careers at Flamingo</p>
        <p className='text-gray-500 dark:text-gray-400'>Learn more about Job openings at Flamingo</p>
        <button className='border border-rose-400 dark:border-rose-400/60 rounded-full px-8 py-3.5 text-sm
        text-rose-500 dark:text-rose-400 hover:bg-gradient-to-r hover:from-rose-500 hover:to-pink-500
        hover:text-white hover:border-transparent transition-all duration-500'>Explore Jobs</button>

       </div>
      </div>  

      <NewsLetterBox/> 

    </div>
  )
}

export default Contact
