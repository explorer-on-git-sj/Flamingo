import React,{useContext, useState} from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import stripe from '../components/assets/Stripe-logo.png'
import razorpay from '../components/assets/Razorpay_logo.svg'
import { ShopContext } from '../context/ShopContext'



const PlaceOrder = () => {
    const [method,setMethod] =useState('cod');
    const {navigate}=useContext(ShopContext);

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-8 pt-5 sm:pt-14 min-h-[80vh] border-t border-gray-200 dark:border-white/10'>     
     
     <div className='flex flex-col gap-4 w-full sm:max-w-[480px] glass rounded-2xl p-6'>
       <div className='text-xl sm:text-2xl my-3'>
            <Title text1={'DELIVERY   '} text2={' INFORMATION'}/>

       </div>
       <div className='flex gap-3'>
         <input className='glass glow-ring rounded-lg py-2 px-3.5
          w-full outline-none text-sm text-gray-700 dark:text-gray-200' type="text" placeholder='First Name' />
         <input className='glass glow-ring rounded-lg py-2 px-3.5
          w-full outline-none text-sm text-gray-700 dark:text-gray-200' type="text" placeholder='Last Name' />         
       </div>

        <input className='glass glow-ring rounded-lg py-2 px-3.5
          w-full outline-none text-sm text-gray-700 dark:text-gray-200' type="email" placeholder='Email Address' />
           <input className='glass glow-ring rounded-lg py-2 px-3.5
          w-full outline-none text-sm text-gray-700 dark:text-gray-200' type="text" placeholder='Street' />

       <div className='flex gap-3'>
         <input className='glass glow-ring rounded-lg py-2 px-3.5
          w-full outline-none text-sm text-gray-700 dark:text-gray-200' type="text" placeholder='City' />
         <input className='glass glow-ring rounded-lg py-2 px-3.5
          w-full outline-none text-sm text-gray-700 dark:text-gray-200' type="text" placeholder='State' />         
       </div>

       <div className='flex gap-3'>
         <input className='glass glow-ring rounded-lg py-2 px-3.5
          w-full outline-none text-sm text-gray-700 dark:text-gray-200' type="number" placeholder='Zipcode' />
         <input className='glass glow-ring rounded-lg py-2 px-3.5
          w-full outline-none text-sm text-gray-700 dark:text-gray-200' type="text" placeholder='Country' /> 

       </div>
      <input className='glass glow-ring rounded-lg py-2 px-3.5
          w-full outline-none text-sm text-gray-700 dark:text-gray-200' type="number" placeholder='Phone' />

     </div>


     {/* Right Side */}
     <div className='mt-8'>
        <div className='mt-8 min-w-80'>
            <CartTotal/>
        </div>
        <div className='mt-12'>
            <Title text1={'PAYMENT '} text2={'METHOD'}/>
            {/* -----Payment method selector------- */}
            <div className='flex gap-3 flex-col lg:flex-row'>
              <div className='flex items-center gap-3 glass rounded-xl p-2 px-3 
              cursor-pointer hover:-translate-y-0.5 transition-transform duration-200' onClick={
                ()=> setMethod('stripe')
              }>
                  <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='stripe'? 'bg-green-400 border-green-400':'border-gray-400'}`}></p>
                  <img className='h-5 mx-4' src={stripe} alt="" />
              </div>
              <div className='flex items-center gap-3 glass rounded-xl p-2 px-3 
              cursor-pointer hover:-translate-y-0.5 transition-transform duration-200' onClick={
                ()=> setMethod('razorpay')
              }>
                  <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='razorpay'? 'bg-green-400 border-green-400':'border-gray-400'}`}></p>
                  <img className='h-5 mx-4' src={razorpay} alt="" />
              </div>
              <div className='flex items-center gap-3 glass rounded-xl p-2 px-3 
              cursor-pointer hover:-translate-y-0.5 transition-transform duration-200' onClick={
                ()=> setMethod('cod')
              }>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='cod'? 'bg-green-400 border-green-400':'border-gray-400'}`}></p>
                <p className='text-gray-600 dark:text-gray-300 text-sm font-medium mx-4'>
                  CASH ON DELIVERY
                </p>
              </div>
            </div>

            <div className='w-full text-end mt-8'>
               <button onClick={()=>navigate('/orders')}
               className='bg-gradient-to-r from-rose-500 to-pink-500 text-white px-16 py-3.5 text-sm rounded-full
               hover:shadow-lg hover:shadow-rose-500/30 active:scale-95 transition-all duration-300'>PLACE ORDER</button>
            </div>
        </div>


     </div>
   
    </div>
  )
}
export default PlaceOrder
