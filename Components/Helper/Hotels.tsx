import React from 'react'
import HotelCards from './HotelCards'

const Hotels = () => {
  return (
    <div className='pt-[5rem] bg-gray-200 pb-[4rem]'>
      <h1 className='heading'>Best Hotels</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center w-[80%] mx-auto mt-[4rem]'>
        <div data-aos ="fade-left"> 
            <HotelCards name="hotel Nextus" city="Sydney" price="$125" reviewNum='37' image='/Images/h1.png'/>
         </div>
        <div data-aos="zoom-in" daya-aos-delay = "300"> 
            <HotelCards name="hotel Reactive" city="Dhaka" price="$125" reviewNum='27' image='/Images/h2.png'/>
         </div>
        <div data-aos="fade-right" daya-aos-delay = "600"> 
            <HotelCards name="hotel TypeScript" city="Tokyo" price="$125" reviewNum='53' image='/Images/h3.png'/>
         </div>
        <div data-aos="fade-left" daya-aos-delay = "900"> 
            <HotelCards name="hotel Postgreys" city="London" price="$125" reviewNum='37' image='/Images/h4.png'/>
         </div>
        <div data-aos="zoom-in" daya-aos-delay = "1000"> 
            <HotelCards name="hotel Crimsus" city="Bankok" price="$125" reviewNum='17' image='/Images/h5.png'/>
         </div>
        <div data-aos="fade-right" daya-aos-delay = "1600"> 
            <HotelCards name="hotel Thai" city="Texas" price="$725" reviewNum='47' image='/Images/h6.png'/>
         </div>
        <div></div>
      </div>
    </div>
  )
}

export default Hotels
