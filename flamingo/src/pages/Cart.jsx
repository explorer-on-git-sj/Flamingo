import React, { useState, useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import bin from '../components/assets/bin.webp'

const Cart = () => {

  const { products, currency, cartItems, updateQuantity, navigate}=useContext(ShopContext);
  const [cartData,setCartData]=useState([]);

  useEffect(()=>{
    const tempData=[];
    for(const items in cartItems){
      for(const item in cartItems[items]){
        if(cartItems[items][item]>0){
          tempData.push({
            id: items,
            size: item,
            quantity: cartItems[items][item]
          })
        }
      }
    }
    setCartData(tempData);
    console.log(tempData);
    
    
  },[cartItems])
  return (
    <div className='border-t border-gray-200 dark:border-white/10 pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR '} 
        text2={'CART'} />
      </div>

      <div className='flex flex-col gap-3'>
        {
          cartData.map((item,index)=>{
            const productData=products.find((product)=>
              product.id===Number(item.id)
            )

            return(
              <div key={index} className='py-4 px-4 glass rounded-2xl text-gray-700 dark:text-gray-300
              grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-6'>
                   <img className='w-16 sm:w-20 rounded-xl' src={productData.image[0]} alt="" />
                   <div>
                    <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p>
                        {currency}{productData.new_price}
                        <p className='px-2 sm:px-3 sm:py-1 mt-1 rounded-lg glass-strong inline-block'>{item.size}</p>
                      </p>
                    </div>
                   </div>
                </div>

                <input onChange={(e)=> e.target.value===''||e.target.value==='0'? null: updateQuantity(item.id,item.size,Number(e.target.value))} type="number" className='glass max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 rounded-lg text-center outline-none'
                 min={1} defaultValue={item.quantity} />

                 <img onClick={()=>updateQuantity(item.id,item.size,0)} className='w-7 mr-4 sm:w-5 cursor-pointer hover:scale-110 transition-transform duration-200 dark:invert' src={bin} alt="" />
              </div>
            )
          })
        }
      </div>

       <div className='flex justify-end my-20'>
          <div className='w-full sm:w-[450px]'>
            <CartTotal/>
            <div className='bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm my-8 px-8 py-3.5
            rounded-full text-center cursor-pointer hover:shadow-lg hover:shadow-rose-500/30 active:scale-95 transition-all duration-300'
            onClick={()=>{
              navigate('/place-order')
            }}>
                  PROCEED TO CHECKOUT
            </div>
          </div>
        </div>
    </div>
  )
}

export default Cart
