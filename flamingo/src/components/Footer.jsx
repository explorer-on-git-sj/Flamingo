import React from 'react'
import logo from './assets/logo.png.png'

const Footer = () => {
  return (
    <div className='glass rounded-t-3xl mt-16 px-6 sm:px-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14
      py-10 pt-14 text-sm'>
        <div>
            <img src={logo} className='mb-5 w-32 dark:brightness-110 dark:contrast-125' />
            <p className='w-full md:w-2/3 text-gray-600 dark:text-gray-400'>
            Dummy Text Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, odit voluptates. Cumque cum asperiores beatae esse maiores perferendis blanditiis nihil fuga eius aperiam ad aliquid architecto magnam qui voluptatibus quae suscipit officiis natus ullam aut est, delectus tempore. Hic, nemo.</p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5 text-gray-800 dark:text-gray-100'>COMPANY</p>
            <ul className='text-gray-600 dark:text-gray-400 flex flex-col gap-1'>
                <li className='hover:text-rose-500 dark:hover:text-rose-400 transition-colors cursor-pointer w-fit'>Home</li>
                <li className='hover:text-rose-500 dark:hover:text-rose-400 transition-colors cursor-pointer w-fit'>About us</li>
                <li className='hover:text-rose-500 dark:hover:text-rose-400 transition-colors cursor-pointer w-fit'>Delivery</li>
                <li className='hover:text-rose-500 dark:hover:text-rose-400 transition-colors cursor-pointer w-fit'>Privacy Policy</li>
            </ul>
        </div>

          <div>
             <p className='text-xl font-medium mb-5 text-gray-800 dark:text-gray-100'>GET IN TOUCH</p>
             <ul className='flex flex-col gap-1 text-gray-600 dark:text-gray-400'>
                <li>+91-88824814XX</li>
                <li>teamflamingo@gmail.com</li>
             </ul>
          </div>
      </div>
      <div>
        <hr className='border-white/30 dark:border-white/10'/>
        <p className='py-5 text-sm text-center text-gray-500 dark:text-gray-500'>Copyright 2026@ Flamingo.com -All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
