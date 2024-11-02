import React from 'react'
import image1 from "../../images/earphone.png";
import image2 from "../../images/watch.png";
import image3 from "../../images/macbook.png";
import Button from '../shared/Button';

const Category = () => {
  return (
    <div className='py-8'>
        <div className='container'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* First Col  */}
                <div className='py-10 pl-5 bg-gradient-to-br from-black/90 to-black
                /70 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-gray-400'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Earphone</p>
                            <Button text="Browse" bgColor="bg-primary" textColor="text-white" />
                        </div>
                    </div>
                    <img src={image1} className='w-[320px] absolute bottom-0'/>
                </div>

                {/* second Col  */}

                <div className='py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/90
                 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Gadget</p>
                            <Button text="Browse" bgColor="bg-white" textColor="text-brandYellow" />
                        </div>
                    </div>
                    <img src={image2} className='w-[320px] absolute -right-4 lg:top-[5px]'/>
                </div>

                {/* third Col  */}

                <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90
                 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='space-y-1 mb-4'>
                            <p className=' text-white'>Enjoy</p>
                            <p className='text-2xl font-semibold '>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 '>Laptop</p>
                            <Button text="Browse" bgColor="bg-white" textColor="text-primary" />
                        </div>
                    </div>
                    <img src={image3} className='w-[320px] absolute top-1/2 -translate-y-1/2 -right-0'/>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Category