import React,{useContext} from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title'

const CartTotal = () => {
    const {currency,delivery_fee,getCartAmount}=useContext(ShopContext);
  return (
    <div className='w-full glass rounded-2xl p-6'>

        <div className='text-2xl'>
          <Title text1={'CART '} text2={'TOTALS'}/>
        </div>

        <div className='flex flex-col gap-2 mt-2 text-sm text-gray-700 dark:text-gray-300'>
           <div className='flex justify-between'>

            <p>Subtotal</p>
            <p>{currency} {getCartAmount()}.00</p>

           </div>
           <hr className='border-white/30 dark:border-white/10'/>

           <div className='flex justify-between'>
             <p>Shipping Fee</p>
             <p>{currency} {delivery_fee}.00</p>
           </div>
           <hr className='border-white/30 dark:border-white/10'/>

           <div className='flex justify-between text-gray-900 dark:text-gray-100'>
              <b>Total</b>
              <b className='gradient-text'>{currency} {getCartAmount()===0? 0: getCartAmount()+delivery_fee}.00</b>
           </div>

        </div>

       
      
    </div>
  )
}

export default CartTotal
