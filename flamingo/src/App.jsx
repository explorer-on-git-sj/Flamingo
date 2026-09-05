import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home' // age se dhyan rkhna hai
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import About from './pages/About'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
const App = () => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-rose-50 via-white to-pink-50
    dark:from-[#0b0f1a] dark:via-[#0d1220] dark:to-[#0b0f1a]
    text-gray-800 dark:text-gray-200 transition-colors duration-500'>
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer theme='colored'/>
      <Navbar/> 
      <SearchBar/> 
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/collection' element={<Collection/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/contact' element={<Contact/>} />
         <Route path='/product/:productId' element={<Product/>} />
         <Route path='/cart' element={<Cart/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/place-order' element={<PlaceOrder/>} />
         <Route path='/orders' element={<Orders/>} />
      </Routes>

      <Footer/>
    </div>
    </div>
  )
}

export default App