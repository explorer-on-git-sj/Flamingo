import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';

const Orders = () => {

  const {products,currency} = useContext(ShopContext);

  return (
    <div className='border-t border-gray-200 dark:border-white/10 pt-16'>
        <div className='text-2xl'>
          <Title text1={'MY'} text2={'ORDERS'}/>  
        </div>

        <div className='flex flex-col gap-3 mt-4'>
           {
             products.slice(1,4).map((item,index)=>(
              <div key={index} className='py-4 px-4 glass rounded-2xl
              text-gray-700 dark:text-gray-300 flex flex-col md:flex-row md:items-center md:justify-between gap-4 '>
                 <div className='flex items-start gap-6 text-sm'>
                  <img className='w-16 sm:w-20 rounded-xl' src={item.image[0]} alt="" />
                     <div>
                       <p className='sm:text-base font-medium text-gray-800 dark:text-gray-100'>{item.name}</p>


                        <div className='flex items-center gap-3 mt-2 text-base text-gray-700 dark:text-gray-300'>
                          <p className='text-lg font-semibold gradient-text'>{currency}{item.new_price}</p>
                          <p>Quantity: 1</p>
                          <p>Size: medium</p>
            
                        </div>

                         <p className='mt-2'>Date: <span className='text-gray-400 dark:text-gray-500'>25, Jul, 2026</span></p>

                     </div>
                 </div>

                  <div className='md:w-1/2 flex justify-between'>
                    <div className='flex items-center gap-2'>
                       <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                       <p className='text-sm md:text-base'>Ready to ship</p>
                   
                    </div>

                    <button className='glass-strong px-4 py-2 text-sm font-medium rounded-full hover:-translate-y-0.5 transition-transform duration-200'>Track Order</button>
                  </div>

              </div>
             ))
           }
        </div>

    </div>
  )
}

export default Orders
