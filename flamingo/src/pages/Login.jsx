import React,{useState} from 'react'

const Login = () => {

 const onSubmitHandler = async (e)=>{
     e.preventDefault();
 }

  const [currentState,setCurrentState] = useState('Sign Up');
  return (
    <form className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 mb-20 gap-4
    text-gray-800 dark:text-gray-200 glass-strong rounded-3xl px-8 py-10'>
      <div className='inline-flex items-center gap-2 mb-2 mt-2'>
        <p className='prata-regular text-3xl gradient-text'>{currentState}</p>
       <hr className='border-none h-[1.5px] w-8 bg-gradient-to-r from-rose-400 to-pink-400'/>
      </div>

      {currentState==='Login'?'':<input type="text" className='w-full px-3 py-2.5 rounded-lg glass glow-ring outline-none text-sm' placeholder='Name' required/>}
      <input type="email" className='w-full px-3 py-2.5 rounded-lg glass glow-ring outline-none text-sm' placeholder='Email' required/>
      <input type="password" className='w-full px-3 py-2.5 rounded-lg glass glow-ring outline-none text-sm' placeholder='Password' required/>

     <div className='w-full flex justify-between text-sm mt-[-8px] text-gray-500 dark:text-gray-400'>
        <p className='cursor-pointer hover:text-rose-500 dark:hover:text-rose-400 transition-colors'>Forgot your password?</p>
        {
          currentState=== 'Login'
          ?
          <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer hover:text-rose-500 dark:hover:text-rose-400 transition-colors'>Create Account</p>:
          <p onClick={()=>setCurrentState('Login')} className='cursor-pointer hover:text-rose-500 dark:hover:text-rose-400 transition-colors'>Login Here</p>
        }
     </div>

     <button className='bg-gradient-to-r from-rose-500 to-pink-500 text-white font-light px-8 py-2.5 mt-4
     rounded-full hover:shadow-lg hover:shadow-rose-500/30 transition-shadow duration-300'>{currentState==='Login'? 'Sign In':'Sign Up'}</button>

    </form>
  )
}

export default Login
