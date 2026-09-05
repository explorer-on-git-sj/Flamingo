import React, { useContext, useEffect, useState } from 'react'
import logo from './assets/logo.png.png';
import sicon from './assets/sicon.png';
import carti from './assets/cart_icon.png';
import dropdown from './assets/dropdown_icon.png'
import profileicon from './assets/profileicon.png'
import menuicon from './assets/menuicon.png'
import { Link,NavLink, useLocation } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { ThemeContext } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
 
    const {search,setSearch,showSearch,setShowSearch,getCartCount} =useContext(ShopContext);
    const {theme,toggleTheme} = useContext(ThemeContext);
    const [visible,setVisible] = useState(false);
    const nav = useNavigate();
   

  return (
    <div className='flex items-center justify-between py-4 font-medium relative
    sticky top-0 z-50 glass rounded-b-2xl px-4 -mx-4 sm:px-6 sm:-mx-6 transition-colors duration-500'>
     <NavLink to='/'>
      <img src={logo} className='w-36 dark:brightness-110 dark:contrast-125' alt="logo" />
    </NavLink>
    
      <ul className='hidden sm:flex items-start gap-5 text-sm text-gray-700 dark:text-gray-300'>

  <NavLink to='/' end className='flex flex-col items-center gap-1 hover:text-rose-500 dark:hover:text-rose-400 transition-colors'>
    {({ isActive }) => (
      <>
        <p>HOME</p>
        <hr className={`w-3/4 border-none h-[1.5px] bg-gradient-to-r from-rose-400 to-pink-400 ${isActive ? '' : 'hidden'}`} />
      </>
    )}
  </NavLink>

  <NavLink to='/collection' className='flex flex-col items-center gap-1 hover:text-rose-500 dark:hover:text-rose-400 transition-colors'>
    {({ isActive }) => (
      <>
        <p>COLLECTION</p>
        <hr className={`w-3/4 border-none h-[1.5px] bg-gradient-to-r from-rose-400 to-pink-400 ${isActive ? '' : 'hidden'}`} />
      </>
    )}
  </NavLink>

  <NavLink to='/about' className='flex flex-col items-center gap-1 hover:text-rose-500 dark:hover:text-rose-400 transition-colors'>
    {({ isActive }) => (
      <>
        <p>ABOUT</p>
        <hr className={`w-3/4 border-none h-[1.5px] bg-gradient-to-r from-rose-400 to-pink-400 ${isActive ? '' : 'hidden'}`} />
      </>
    )}
  </NavLink>

  <NavLink to='/contact' className='flex flex-col items-center gap-1 hover:text-rose-500 dark:hover:text-rose-400 transition-colors'>
    {({ isActive }) => (
      <>
        <p>CONTACT</p>
        <hr className={`w-3/4 border-none h-[1.5px] bg-gradient-to-r from-rose-400 to-pink-400 ${isActive ? '' : 'hidden'}`} />
      </>
    )}
  </NavLink>

</ul>
    


      <div  className='flex items-center gap-5'> 

          {/* Light / Dark mode toggle — new, additive, doesn't touch any existing state */}
          <button
            type='button'
            onClick={toggleTheme}
            aria-label='Toggle dark mode'
            className='relative w-9 h-9 flex items-center justify-center rounded-full
            glass hover:scale-110 active:scale-95 transition-transform duration-300 cursor-pointer'
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='w-4.5 h-4.5 text-yellow-300'>
                <path d="M12 4.5a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1.5a1 1 0 0 1-1 1Zm0 15a1 1 0 0 1 1 1V22a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1ZM4.5 12a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h1.5a1 1 0 0 1 1 1Zm17.5 0a1 1 0 0 1-1 1h-1.5a1 1 0 1 1 0-2H21a1 1 0 0 1 1 1ZM6.343 7.757a1 1 0 0 1-1.414 0L3.05 5.879a1 1 0 1 1 1.414-1.414l1.879 1.878a1 1 0 0 1 0 1.414Zm12.021 12.021a1 1 0 0 1-1.414 0l-1.879-1.878a1 1 0 1 1 1.414-1.414l1.879 1.878a1 1 0 0 1 0 1.414ZM6.343 16.243a1 1 0 0 1 0 1.414l-1.879 1.878A1 1 0 1 1 3.05 18.12l1.879-1.878a1 1 0 0 1 1.414 0Zm12.021-12.021a1 1 0 0 1 0 1.414l-1.879 1.878a1 1 0 1 1-1.414-1.414l1.879-1.878a1 1 0 0 1 1.414 0ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='w-4.5 h-4.5 text-slate-700'>
                <path d="M21.752 15.002A9.718 9.718 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"/>
              </svg>
            )}
          </button>

          <img onClick={()=>{
             setShowSearch(true);
             nav('/collection');
          }} src={sicon} className='w-6 cursor-pointer hover:scale-110 transition-transform duration-300 dark:invert' alt="search-icon"/>
      <div className='group relative'>
       <Link to='/login'>
        <img src={profileicon} className='w-5 cursor-pointer hover:scale-110 transition-transform duration-300 dark:invert' alt="profile-icon"/>
        </Link>
         <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>

           <div className='flex flex-col gap-2 w-36 py-3 px-5 glass-strong
           text-gray-600 dark:text-gray-300 rounded-xl animate-fade-in-up'>
            <p className='cursor-pointer hover:text-rose-500 dark:hover:text-rose-400 transition-colors'>My-Profile</p>
            <p className='cursor-pointer hover:text-rose-500 dark:hover:text-rose-400 transition-colors'>Orders</p>
            <p className='cursor-pointer hover:text-rose-500 dark:hover:text-rose-400 transition-colors'>Logout</p>
            

           </div>
         </div>
      
      </div>

      <Link to='/cart'  className='relative'>
          <img src={carti} className='w-5 min-w-5 cursor-pointer hover:scale-110 transition-transform duration-300 dark:invert' alt="cart-icon"/>

          <p className='absolute right-[-5px] bottom-[-5px] w-4 
          text-center leading-4 bg-gradient-to-br from-rose-500 to-pink-500 text-white aspect-square rounded-full
          text-[8px] shadow-md shadow-rose-500/30'>{getCartCount()}</p>
      </Link>

       <img onClick={()=>setVisible(true)} src={menuicon} alt="menu-icon" className='w-10 cursor-pointer sm:hidden dark:invert'/>
      </div>
      {/*sidebar menu for small devices*/}
      <div className={`fixed top-0 right-0 bottom-0 overflow-hidden 
      glass-strong transition-all duration-500 ${visible? 'w-full': 'w-0'}
        `}>
           <div className='flex flex-col text-gray-600 dark:text-gray-300'>
              <div onClick = {()=>{
                setVisible(false)
              }} className='flex items-center gap-4 p-3 cursor-pointer'>
                <img className='h-4 rotate-270 dark:invert' src={dropdown} alt="" />
                <p>Back</p>
              </div>
              <NavLink onClick={()=>{
                setVisible(false)
              }} className='py-3 pl-6 border-b border-white/20 hover:bg-rose-50/60 dark:hover:bg-white/5 transition-colors' to='/'>HOME</NavLink>
              <NavLink onClick={()=>{
                setVisible(false)
              }} className='py-3 pl-6 border-b border-white/20 hover:bg-rose-50/60 dark:hover:bg-white/5 transition-colors' to='/collection'>COLLECTION</NavLink>
              <NavLink onClick={()=>{
                setVisible(false)
              }} className='py-3 pl-6 border-b border-white/20 hover:bg-rose-50/60 dark:hover:bg-white/5 transition-colors' to='/about'>ABOUT</NavLink>
              <NavLink onClick={()=>{
                setVisible(false)
              }} className='py-3 pl-6 border-b border-white/20 hover:bg-rose-50/60 dark:hover:bg-white/5 transition-colors' to='/contact'>CONTACT</NavLink>
           </div>
        </div>
      
    </div>
  )
}

export default Navbar
