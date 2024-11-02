import React from 'react'
import image1 from "../../images/br-1.png";
import image2 from "../../images/br-2.png";
import image3 from "../../images/br-3.png";
import image4 from "../../images/br-4.png";
import image5 from "../../images/br-5.png";

const Partners = () => {
  return (
    <div className='py-8 mt-24 hidden md:block bg-gray-200 dark:bg-white/10 '>
        <div className="container">
            <div className="grid grid-cols-5 gap-3 place-items-center opacity-50">
               <img src={image1} className='w-[80px] dark:invert'/>
               <img src={image2} className='w-[80px] dark:invert'/>
               <img src={image3} className='w-[80px] dark:invert'/>
               <img src={image4} className='w-[80px] dark:invert'/>
               <img src={image5} className='w-[80px] dark:invert'/>
            </div>
        </div>
    </div>
  )
}

export default Partners