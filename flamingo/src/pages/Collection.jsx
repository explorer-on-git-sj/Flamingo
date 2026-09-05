// Here we will display all the products and create the filters 
import React, { useContext ,useState} from 'react'
import { ShopContext } from '../context/ShopContext'
import ddown from '../components/assets/dropdown_icon.png'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'
import { useEffect } from 'react'

const Collection = () => {
  const { products,search, showSearch } =useContext(ShopContext);
  const [showFilter,setshowFilter]=useState(false); 
  const [filterProducts,SetFilterProducts]=useState([]);
  const [category,setCategory]=useState([]);
  const [subCategory,setSubCategory]=useState([]);
  const[sortType,setSortType]= useState('relevant');

  const toggleCategory = (e)=>{
    if(category.includes(e.target.value)){
      setCategory(prev=> prev.filter(item=>item!==e.target.value))
    }
    else{
      setCategory(prev=>[...prev,e.target.value])
    }
  }
  const togglesubCategory = (e)=>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=> prev.filter(item=>item!==e.target.value))
    }
    else{
      setSubCategory(prev=>[...prev,e.target.value])
    }
  }

  const applyFilter=()=>{
    let productsCopy = products.slice();

    if (showSearch && search){
      productsCopy= productsCopy.filter(
         item=> item.name.toLowerCase().includes(
            search.toLowerCase()
         )
      )
    }

    if(category.length >0 ){
      productsCopy= 
      productsCopy.filter(item=> category.includes(item.category));
    }
    if(subCategory.length >0 ){
      productsCopy= 
      productsCopy.filter(item=> subCategory.includes(item.subCategory));
    }
    
  
      switch(sortType){
        
         case 'low-high':  
         productsCopy=productsCopy.sort((a,b)=>a.new_price-b.new_price );
         break;
         case 'high-low':  
         productsCopy=productsCopy.sort((a,b)=>b.new_price-a.new_price); 
         break;
         default:
            break;

      }
     SetFilterProducts(productsCopy);
   
  }

   

  useEffect(()=>{
   applyFilter();
  },
[category, subCategory, sortType, search, showSearch, products]);


   useEffect(()=>{
      console.log(category);
      
   },[category])
   useEffect(()=>{
      console.log(subCategory);
      
   },[subCategory])

  return (
    <div className='flex flex-col sm:flex-row gap-4 sm:gap-10 pt-10 border-t border-gray-200 dark:border-white/10'>

      {/* Filter Options */}

      <div className='min-w-60 '>
        
        <p onClick={() => setshowFilter(prev => !prev)} className='my-2 text-xl flex items-center cursor-pointer 
        gap-2 text-gray-800 dark:text-gray-100'>Filters
         <img className={`h-3 sm:hidden dark:invert transition-transform duration-300 ${showFilter?'rotate-90':''}`}
         src={ddown} alt="" />
</p>
       
         
      {/* Category basis Filtering */}
      <div className={`glass rounded-2xl pl-5 py-4 mt-6 
      ${showFilter?'' : 'hidden'} sm:block`}>
       <p className='text-gray-800 dark:text-gray-100 font-medium'>CATEGORIES</p>
       <div className='flex flex-col gap-2 text-sm font-light text-gray-700 dark:text-gray-300 mt-2'>
          <p className='flex gap-2 items-center'>
             <input className='w-3.5 h-3.5 accent-rose-500' type="checkbox" onChange={toggleCategory} value={'men'} /> Men 
          </p>      
       </div>
      
       <div className='flex flex-col gap-2 text-sm font-light text-gray-700 dark:text-gray-300 mt-1'>
          <p className='flex gap-2 items-center'>
             <input className='w-3.5 h-3.5 accent-rose-500' type="checkbox" onChange={toggleCategory} value={'women'} />  Women 
          </p>      
       </div>

       <div className='flex flex-col gap-2 text-sm font-light text-gray-700 dark:text-gray-300 mt-1'>
          <p className='flex gap-2 items-center'>
             <input className='w-3.5 h-3.5 accent-rose-500' type="checkbox" onChange={toggleCategory} value={'kid'} />  Kids 
          </p>      
       </div>

       
      </div>
       {/* Sub Category Filtering */}
      <div className={`glass rounded-2xl pl-5 py-4 my-5 
      ${showFilter?'' : 'hidden'} sm:block`}>
       <p className='text-gray-800 dark:text-gray-100 font-medium'>TYPE</p>
       <div className='flex flex-col gap-2 text-sm font-light text-gray-700 dark:text-gray-300 mt-2'>
          <p className='flex gap-2 items-center'>
             <input className='w-3.5 h-3.5 accent-rose-500' type="checkbox" onChange={togglesubCategory} value={'Topwear'} /> Topwear 
          </p>      
       </div>
      
       <div className='flex flex-col gap-2 text-sm font-light text-gray-700 dark:text-gray-300 mt-1'>
          <p className='flex gap-2 items-center'>
             <input className='w-3.5 h-3.5 accent-rose-500' type="checkbox" onChange={togglesubCategory} value={'BottomWear'} />  BottomWear 
          </p>      
       </div>

       <div className='flex flex-col gap-2 text-sm font-light text-gray-700 dark:text-gray-300 mt-1'>
          <p className='flex gap-2 items-center'>
             <input className='w-3.5 h-3.5 accent-rose-500' type="checkbox" onChange={togglesubCategory} value={'Winterwear'} />  Winterwear 
          </p>      
       </div>

       
      </div>
      </div>
 {/* Collections Page Right side */}
     <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
           <Title text1={'ALL '} text2={'COLLECTIONS'}/>
           {/* Product Sort */}
           <select className="glass rounded-full text-sm px-4 py-1 text-gray-700 dark:text-gray-200 outline-none cursor-pointer"
           value={sortType}
            onChange={(e)=>{
                setSortType(e.target.value);
            }}>
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
           </select>
        </div>

        {/* MAP PRODUCTS */}

          <div className='grid grid-cols-2 md:grid-cols-3
           lg:grid-cols-4 gap-4 gap-y-6 '>
            {
             filterProducts.map((item,index)=>(
                   <ProductItem key={index} id={item.id} image={item.image}
                 name={item.name} price={item.new_price} />
             ))
            }
          </div>


     </div>     
    </div>
  )
}

export default Collection



