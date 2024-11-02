import React from 'react'
import Heading from '../shared/Heading'
import img1 from "../../images/blog-1.jpg";
import img2 from "../../images/blog-2.jpg";
import img3 from "../../images/blog-3.jpg";

const BlogData = [
    {
        title : "How to choose perfect smartwatch",
        subtitle : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus magni nemo eaque deleniti provident aperiam.",
        published : "1 Nov, 2024 by Shankar",
        image :img1,
    },

    {
        title : "How to choose perfect gadget",
        subtitle : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus magni nemo eaque deleniti provident aperiam.",
        published : "1 Nov, 2024 by Shivam",
        image : img2,
    },

    {
        title : "How to choose perfect VR Headset",
        subtitle : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus magni nemo eaque deleniti provident aperiam.",
        published : "1 Nov, 2024 by Piyush",
        image : img3,
    },
]

const Blogs = () => {

  return (
    <div className='my-12'>
        <div className="container">
            {/* Header Section  */}
        <Heading title="Recent News" subtitle="Explore Our Blogs"/>

            {/* Blogs Section  */}

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>

                {/* Blog Card  */}

                {
                    BlogData.map((data)=>(
                        <div className='bg-white dark:bg-gray-900'>
                            {/* Image Section  */}
                            <div className='overflow-hidden rounded-2xl mb-2'>
                                <img src={data.image} className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500 '/>
                            </div>

                            {/* Content Section  */}

                            <div className='space-y-2'>
                                <p className='text-xs text-gray-500'>{data.published}</p>
                                <p className='font-bold line-clamp-1'>{data.title}</p>
                                <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
                            </div>

                        </div>
                    ))
                }

            </div>

        </div>
    </div>
  )
}

export default Blogs