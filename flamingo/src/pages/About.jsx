import React from 'react'
import Title from '../components/Title'
import NewsLetterBox from '../components/NewsLetterBox'
import about from '../components/assets/coffee.png'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT '} text2={'US'}/>
      </div>


      <div className='my-10 flex flex-col md:flex-row gap-16'>
         <img src={about} className='w-full md:max-w-[450px]'/>
         <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed necessitatibus doloremque dignissimos fugit nostrum pariatur, illo, voluptatem eaque laborum a explicabo qui ratione inventore est reprehenderit suscipit sunt cumque non harum, earum eveniet consequuntur nobis fugiat labore. Iusto molestiae impedit odit quia esse placeat, quam nesciunt quisquam aliquid dolore veritatis dicta culpa praesentium ducimus deserunt cupiditate sunt velit voluptatem doloremque?</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus corporis nostrum nesciunt, molestiae necessitatibus veniam dolores eos excepturi, fugiat eligendi voluptatibus dignissimos consectetur inventore error, incidunt quaerat rerum facilis! Iste delectus, eligendi voluptatem rem velit necessitatibus aliquid provident ex dignissimos, quisquam, doloribus repellat explicabo! Facilis animi nobis natus corrupti sapiente enim laborum quos optio reiciendis.</p>
           <b className='text=gray-800'>Our Mission</b>        
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolores, at architecto vel maiores eos modi sit nesciunt labore sapiente quia consectetur, minima fuga praesentium voluptatibus inventore voluptate ex? Ipsum modi quis odio quam natus, assumenda molestias, ipsam, optio explicabo corrupti ullam ex. Eaque, quos!</p>      
         </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY '} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Reassurance:</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit eveniet pariatur delectus obcaecati odio tempore fuga architecto quod excepturi laudantium recusandae suscipit accusantium eaque sequi eum eos dolore quisquam aliquam, molestias amet, exercitationem voluptate? Incidunt odio repudiandae magni molestias illum?</p>
         </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit eveniet pariatur delectus obcaecati odio tempore fuga architecto quod excepturi laudantium recusandae suscipit accusantium eaque sequi eum eos dolore quisquam aliquam, molestias amet, exercitationem voluptate? Incidunt odio repudiandae magni molestias illum?</p>
         </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit eveniet pariatur delectus obcaecati odio tempore fuga architecto quod excepturi laudantium recusandae suscipit accusantium eaque sequi eum eos dolore quisquam aliquam, molestias amet, exercitationem voluptate? Incidunt odio repudiandae magni molestias illum?</p>
         </div>
      </div>

      <NewsLetterBox/>
      
    </div>
  )
}

export default About
