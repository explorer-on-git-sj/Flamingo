import React from 'react'
import logo from './assets/logo.png.png'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14
      my-10 mt-40 text-sm'>
        <div>
            <img src={logo} className='mb-5 w-32' />
            <p className='w-full md:w-2/3 text-gray-600'>
            Dummy Text Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, odit voluptates. Cumque cum asperiores beatae esse maiores perferendis blanditiis nihil fuga eius aperiam ad aliquid architecto magnam qui voluptatibus quae suscipit officiis natus ullam aut est, delectus tempore. Hic, nemo.</p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

          <div>
             <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
             <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91-88824814XX</li>
                <li>teamflamingo@gmail.com</li>
             </ul>
          </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2026@ Flamingo.com -All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
