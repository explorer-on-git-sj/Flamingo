import React from 'react'
import { useContext ,useEffect, useState} from 'react'
import { ShopContext } from '../context/ShopContext'
import sicon  from '../components/assets/sicon.png'
import cross  from '../components/assets/cart_cross_icon.png'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
    const {search,setSearch,showSearch,setShowSearch} =useContext(ShopContext);
    const [visible,setVisible] = useState(false);
    const location = useLocation();


    useEffect(()=>{
      if(location.pathname.includes('collection')){
         setVisible(true);
      }
      else{
        setVisible(false);
      }
      
    },[location,showSearch])
  return showSearch && visible? (
    <div className='text-center py-2 animate-fade-in-up'>
       <div className='inline-flex items-center justify-center 
       glass px-5 py-2.5 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 glow-ring transition-shadow duration-300'>
         <input value={search} 
         onChange={(e)=>setSearch(e.target.value)}
         className='flex-1 outline-none bg-transparent text-sm text-gray-700 dark:text-gray-200 placeholder:text-gray-400'
          type="text"  placeholder='Search'/>
          <img className='w-4 dark:invert' src={sicon} alt="search-icon" />
       </div>
         <img onClick={()=>{
          setShowSearch(false);
         }}
          className='inline w-3 
         cursor-pointer hover:scale-125 transition-transform duration-200 dark:invert' src={cross} alt="cross-option" />
    </div>
  ): null
}

export default SearchBar
