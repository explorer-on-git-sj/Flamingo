import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({id,image,name,price}) => {
    const {currency}= useContext(ShopContext);
  return (
    <Link className='text-gray-700 dark:text-gray-200 cursor-pointer group block rounded-2xl
    glass p-2.5 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-rose-200/40 dark:hover:shadow-black/40
    transition-all duration-300' to={`/product/${id}`}>
        <div className='overflow-hidden rounded-xl bg-white/40 dark:bg-white/5'>
            <img className='group-hover:scale-110 transition-transform duration-500 ease-out w-full aspect-square object-cover'
             src={image[0]} alt="" />
        </div>
        <p className='pt-3 pb-1 text-sm truncate'>{name}</p>
        <p className='text-sm font-semibold gradient-text'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem
