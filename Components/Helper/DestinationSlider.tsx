import Image from 'next/image';
import React from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {

    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 5,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1300, min: 764 },
      items: 3,
      slidesToSlide: 1

    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

const DestinationSlider = () => {
  return (
    <Carousel additionalTransfrom={0} arrows={true} autoPlay={true} autoPlaySpeed={5000} centerMode={false} infinite responsive={responsive} itemClass='item'>
        <div>
            <Image src="/Images/d1.png" alt="destination" width={200} height={100} className="rounded-full mx-auto"/>
            <h1 className='destination_h1'>New York</h1>
            <p className='destination_p'> 7 Hotels</p>
        </div>
        <div>
            <Image src="/Images/d2.png" alt="destination" width={200} height={100} className="rounded-full mx-auto"/>
            <h1 className='destination_h1'>Japan</h1>
            <p className='destination_p'> 17 Hotels</p>
        </div>
        <div>
            <Image src="/Images/d3.png" alt="destination" width={200} height={100} className="rounded-full mx-auto"/>
            <h1 className='destination_h1'>Bangladesh</h1>
            <p className='destination_p'> 7 Hotels</p>
        </div>
        
        <div>
            <Image src="/Images/d4.png" alt="destination" width={200} height={100} className="rounded-full mx-auto"/>
            <h1 className='destination_h1'>Sri Lanka</h1>
            <p className='destination_p'> 10 Hotels</p>
        </div>
        <div>
            <Image src="/Images/d5.png" alt="destination" width={200} height={100} className="rounded-full mx-auto"/>
            <h1 className='destination_h1'>England</h1>
            <p className='destination_p'> 40 Hotels</p>
        </div>
        <div>
            <Image src="/Images/d6.png" alt="destination" width={200} height={100} className="rounded-full mx-auto"/>
            <h1 className='destination_h1'>Australia</h1>
            <p className='destination_p'> 23 Hotels</p>
        </div>
        

    </Carousel>
  )
}

export default DestinationSlider
