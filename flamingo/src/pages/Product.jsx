import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext'
import star from '../components/assets/star_icon.png'
import star_dull from '../components/assets/star_dull_icon.png'
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [ProductData, setProductData] = useState(false);
  const [image, setImage] = useState('')
  const [size,setSize] = useState('')


  const fetchProductData =  () => {
      products.map((item) => {
         if (item.id == productId) {
            setProductData(item);
            setImage(item.image[0]);
         }
         return null;
      })
  }

  useEffect(() => {
     fetchProductData();
  }, [productId, products])

  return ProductData?(
    <div className='border-t-2 border-gray-200 dark:border-white/10 pt-10 transition-opacity ease-in 
    duration-500 opacity-100'> 
    <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

      {/* PRODUCT IMAGE */}
      <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto
           sm:overflow-y-scroll justify-between 
           sm:justify-normal sm:w-[18.7%] w-full'>
             
             
              {
                ProductData.image.map((item,index)=>(
                    <img onClick={()=>
                      setImage(item)
                     
                    }
                    src={item} key={index} className={`w-[24%] sm:w-full
                     sm:mb-3 flex-shrink-0 cursor-pointer rounded-xl transition-all duration-200
                     hover:opacity-80 ${item===image? 'ring-2 ring-rose-400' : ''}`} />
                ))
              }
             
           </div>

            <div className='w-full sm:w-[80%] glass rounded-2xl overflow-hidden'>
               <img className='w-full h-auto' src={image} alt="" />
            </div>

      </div>

      {/* Product Info */}

      <div className='flex-1'>
        <h1 className='font-medium text-2xl mt-2 text-gray-800 dark:text-gray-100'>
          {ProductData.name}
        </h1>
        <div className='flex items-center gap-1 mt-2'>
          <img src={star} className='w-3 5' />
          <img src={star} className='w-3 5' />
          <img src={star} className='w-3 5' />
          <img src={star} className='w-3 5' />
          <img src={star} className='w-3 5' />
          <img src={star_dull} className='w-3 5' />
          <p className='pl-2 text-gray-600 dark:text-gray-400'>{122}</p>
        </div>
        <div>
          <p
          className='mt-5 text-3xl font-semibold gradient-text'
          >{currency}{ProductData.new_price}</p>
          <p className='mt-5 
          text-gray-500 dark:text-gray-400 md:w-4/5'>{ProductData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p className='text-gray-700 dark:text-gray-300'>Select Size</p>
            <div className='flex gap-2'>
               {
                ProductData.sizes.map((item,index)=>(
                     <button onClick={
                      ()=> 
                        setSize(item)
                      
                      
                     }
                    className={`rounded-lg py-2 px-4 text-gray-700 dark:text-gray-200
                    transition-all duration-200
                         ${item === size
                   ? 'border-2 border-pink-500 ring-2 ring-rose-500'
                   : 'border-2 border-transparent'}`} key={index}>{item}</button>
                ))
               }
            </div>
          </div>
          <button className='bg-gradient-to-r from-rose-500 to-pink-500 text-white 
          px-8 py-3.5 text-sm rounded-full hover:shadow-lg hover:shadow-rose-500/30 active:scale-95 transition-all duration-300'
          onClick={()=>addToCart(ProductData.id, size)}
          >ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5 border-gray-200 dark:border-white/10'/>

          <div className='text-sm text-gray-500 dark:text-gray-400 mt-5 flex
           flex-col gap-1'>
               <p>100% Original product.</p>
               <p>Cash on delivery is available for this product</p>
               <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>
      </div>

      {/* Description and Review section */}

      <div className='mt-20'>
         <div className='flex'>
            <b className='glass-strong rounded-t-xl px-5 py-3 text-sm text-gray-800 dark:text-gray-100'>
              Description
            </b>
            <p className='glass rounded-t-xl px-5 py-3 text-sm text-gray-600 dark:text-gray-400'>
              Reviews {122}
            </p>
         </div>

         <div className='flex flex-col gap-4 glass rounded-b-2xl rounded-tr-2xl px-6 
         py-6 text-sm text-gray-500 dark:text-gray-400'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aut alias ex. Error voluptate deserunt ipsum earum maiores cum magni! Quis neque deserunt quo, eaque similique tenetur numquam eveniet soluta. Excepturi officiis praesentium nesciunt necessitatibus blanditiis veniam, eos facere fuga.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem iste, voluptate est obcaecati optio minima, facere quis, eos maiores laudantium magnam dolorem voluptatum aliquid? Ipsam delectus iure minima reiciendis tenetur.</p>
         </div>
      </div>
{/* DISPLAYING RELATED PRODUCTS */}
      <RelatedProducts category={ProductData.category}
      subCategory={ProductData.subCategory}/>
    </div>
  ): <div className='opacity-0'></div>
}
export default Product
