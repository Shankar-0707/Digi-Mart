import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero'
import Category from './components/Category/Category'
import Category2 from './components/Category/Category2'
import Services from './components/Services/Services'
import Banner from './components/Banner/Banner'
import headphone from './images/headphone.png';
import smartwatch2 from './images/smartwatch2.png';
import Products from './components/Products/Products'
import Blogs from './components/Blogs/Blogs'
import Partners from './components/Partners/Partners'
import Footer from './components/Footer/Footer'
import PopUp from './components/PopUp/PopUp'

const BannerData = {
  discount : "30% Off",
  title : "Fine Smile",
  date : " 1 Nov to 30 Nov",
  image : headphone ,
  title2 : "Air Solo Bass",
  title3 : "Winter Sale",
  title4 : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias in deleniti deserunt quae tempore quasi non, obcaecati blanditiis! Illum, deserunt.",
  bgColor : "#f42c37",
}

const BannerData2 = {
  discount : "30% Off",
  title : "Happy Hours",
  date : " 10 Nov to 25 Nov",
  image : smartwatch2 ,
  title2 : "Smart Solo",
  title3 : "Winter Sale",
  title4 : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias in deleniti deserunt quae tempore quasi non, obcaecati blanditiis! Illum, deserunt.",
  bgColor : "#2dcc6f",
}

const App = () => {

    const [orderPopup, setOrderPopup] = useState(true)

    const handleOrderPopup = () => {
      setOrderPopup(!orderPopup) 
    }

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <Blogs />
      <Partners />
      <Footer />
      <PopUp orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
    </div>
  )
}

export default App