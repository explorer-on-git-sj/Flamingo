import React from 'react'
import Title from '../components/Title'
import NewsLetterBox from '../components/NewsLetterBox'
import about from '../components/assets/coffee.png'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-10 border-t border-gray-200 dark:border-white/10'>
        <Title text1={'ABOUT '} text2={'US'}/>
      </div>


      <div className='my-10 flex flex-col md:flex-row gap-16 items-center'>
         <img src={about} className='w-full md:max-w-[450px] rounded-3xl shadow-xl shadow-rose-200/30 dark:shadow-black/30'/>
         <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 dark:text-gray-400'>
        
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed necessitatibus doloremque dignissimos fugit nostrum pariatur, illo, voluptatem eaque laborum a explicabo qui ratione inventore est reprehenderit suscipit sunt cumque non harum, earum eveniet consequuntur nobis fugiat labore. Iusto molestiae impedit odit quia esse placeat, quam nesciunt quisquam aliquid dolore veritatis dicta culpa praesentium ducimus deserunt cupiditate sunt velit voluptatem doloremque?</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus corporis nostrum nesciunt, molestiae necessitatibus veniam dolores eos excepturi, fugiat eligendi voluptatibus dignissimos consectetur inventore error, incidunt quaerat rerum facilis! Iste delectus, eligendi voluptatem rem velit necessitatibus aliquid provident ex dignissimos, quisquam, doloribus repellat explicabo! Facilis animi nobis natus corrupti sapiente enim laborum quos optio reiciendis.</p>
           <b className='text-gray-800 dark:text-gray-100'>Our Mission</b>        
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolores, at architecto vel maiores eos modi sit nesciunt labore sapiente quia consectetur, minima fuga praesentium voluptatibus inventore voluptate ex? Ipsum modi quis odio quam natus, assumenda molestias, ipsam, optio explicabo corrupti ullam ex. Eaque, quos!</p>      
         </div>
      </div>

      <div className='text-xl py-4 text-gray-800 dark:text-gray-100'>
        <Title text1={'WHY '} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20 gap-4'>
         <div className='glass rounded-2xl px-10 md:px-12 py-8 sm:py-16 flex flex-col gap-5 hover:-translate-y-1 transition-transform duration-300'>
            <b className='text-gray-800 dark:text-gray-100'>Quality Reassurance:</b>
            <p className='text-gray-600 dark:text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit eveniet pariatur delectus obcaecati odio tempore fuga architecto quod excepturi laudantium recusandae suscipit accusantium eaque sequi eum eos dolore quisquam aliquam, molestias amet, exercitationem voluptate? Incidunt odio repudiandae magni molestias illum?</p>
         </div>
         <div className='glass rounded-2xl px-10 md:px-12 py-8 sm:py-16 flex flex-col gap-5 hover:-translate-y-1 transition-transform duration-300'>
            <b className='text-gray-800 dark:text-gray-100'>Convenience:</b>
            <p className='text-gray-600 dark:text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit eveniet pariatur delectus obcaecati odio tempore fuga architecto quod excepturi laudantium recusandae suscipit accusantium eaque sequi eum eos dolore quisquam aliquam, molestias amet, exercitationem voluptate? Incidunt odio repudiandae magni molestias illum?</p>
         </div>
         <div className='glass rounded-2xl px-10 md:px-12 py-8 sm:py-16 flex flex-col gap-5 hover:-translate-y-1 transition-transform duration-300'>
            <b className='text-gray-800 dark:text-gray-100'>Exceptional Customer Service:</b>
            <p className='text-gray-600 dark:text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit eveniet pariatur delectus obcaecati odio tempore fuga architecto quod excepturi laudantium recusandae suscipit accusantium eaque sequi eum eos dolore quisquam aliquam, molestias amet, exercitationem voluptate? Incidunt odio repudiandae magni molestias illum?</p>
         </div>
      </div>

      <NewsLetterBox/>
      
    </div>
  )
}

export default About
