import React, { useContext, useEffect, useState } from 'react'
import logo from './assets/logo.png.png';
import sicon from './assets/sicon.png';
import carti from './assets/cart_icon.png';
import dropdown from './assets/dropdown_icon.png'
import profileicon from './assets/profileicon.png'
import menuicon from './assets/menuicon.png'
import { Link,NavLink, useLocation } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
 
    const {search,setSearch,showSearch,setShowSearch} =useContext(ShopContext);
    const [visible,setVisible] = useState(false);
    const nav = useNavigate();
   

  return (
    <div className='flex items-center justify-between py-5 font-medium relative'>
     <NavLink to='/'>
      <img src={logo} className='w-36' alt="logo" />
    </NavLink>
    
      <ul className='hidden sm:flex items-start gap-5 text-sm text-gray-700'>

  <NavLink to='/' end className='flex flex-col items-center gap-1'>
    {({ isActive }) => (
      <>
        <p>HOME</p>
        <hr className={`w-3/4 border-none h-[1.5px] bg-gray-700 ${isActive ? '' : 'hidden'}`} />
      </>
    )}
  </NavLink>

  <NavLink to='/collection' className='flex flex-col items-center gap-1'>
    {({ isActive }) => (
      <>
        <p>COLLECTION</p>
        <hr className={`w-3/4 border-none h-[1.5px] bg-gray-700 ${isActive ? '' : 'hidden'}`} />
      </>
    )}
  </NavLink>

  <NavLink to='/about' className='flex flex-col items-center gap-1'>
    {({ isActive }) => (
      <>
        <p>ABOUT</p>
        <hr className={`w-3/4 border-none h-[1.5px] bg-gray-700 ${isActive ? '' : 'hidden'}`} />
      </>
    )}
  </NavLink>

  <NavLink to='/contact' className='flex flex-col items-center gap-1'>
    {({ isActive }) => (
      <>
        <p>CONTACT</p>
        <hr className={`w-3/4 border-none h-[1.5px] bg-gray-700 ${isActive ? '' : 'hidden'}`} />
      </>
    )}
  </NavLink>

</ul>
    


      <div  className='flex items-center gap-6'> 
          <img onClick={()=>{
             setShowSearch(true);
             nav('/collection');
          }} src={sicon} className='w-6' alt="search-icon"/>
      <div className='group relative'>
        <img src={profileicon} className='w-5 cursor-pointer' alt="profile-icon"/>
      
         <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>

           <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 
           text-gray-500 rounded'>
            <p className='cursor-pointer hover:text-black'>My-Profile</p>
            <p className='cursor-pointer hover:text-black'>Orders</p>
            <p className='cursor-pointer hover:text-black'>Logout</p>
            

           </div>
         </div>
      
      </div>

      <Link to='/cart'  className='relative'>
          <img src={carti} className='w-5 min-w-5' alt="cart-icon"/>

          <p className='absolute right-[-5px] bottom-[-5px] w-4 
          text-center leading-4 bg-black text-white aspect-square rounded-full
          text-[8px]'>10</p>
      </Link>

       <img onClick={()=>setVisible(true)} src={menuicon} alt="menu-icon" className='w-10 cursor-pointer sm:hidden'/>
      </div>
      {/*sidebar menu for small devices*/}
      <div className={`fixed top-0 right-0 bottom-0 overflow-hidden 
      bg-white transition-all ${visible? 'w-full': 'w-0'}
        `}>
           <div className='flex flex-col text-gray-600'>
              <div onClick = {()=>{
                setVisible(false)
              }} className='flex items-center gap-4 p-3 cursor-pointer'>
                <img className='h-4 rotate-270' src={dropdown} alt="" />
                <p>Back</p>
              </div>
              <NavLink onClick={()=>{
                setVisible(false)
              }} className='py-2 pl-6 border ' to='/'>HOME</NavLink>
              <NavLink onClick={()=>{
                setVisible(false)
              }} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
              <NavLink onClick={()=>{
                setVisible(false)
              }} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
              <NavLink onClick={()=>{
                setVisible(false)
              }} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
           </div>
        </div>
      
    </div>
  )
}

export default Navbar
