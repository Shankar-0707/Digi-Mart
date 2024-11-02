import React from 'react'
import Heading from '../shared/Heading'
import ProductCard from './ProductCard'
import img1 from "../../images/p-1.jpg";
import img2 from "../../images/p-2.jpg";
import img3 from "../../images/p-3.jpg";
import img4 from "../../images/p-4.jpg";
import img5 from "../../images/p-5.jpg";
import img7 from "../../images/p-7.jpg";
import img9 from "../../images/p-9.jpg";



const ProductsData = [
    {
        id : 1,
        img : img1,
        title : "Boat Headphone",
        price : "120",
        aosDelay : "0"
    },

    {
        id : 2,
        img : img2,
        title : "Rocky Mountain",
        price : "420",
        aosDelay : "200"
    },

    {
        id : 3,
        img : img3,
        title : "Goggles",
        price : "320",
        aosDelay : "400"
    },

    {
        id : 4,
        img : img4,
        title : "Printed",
        price : "220",
        aosDelay : "600"
    },

]

const ProductsData2 = [
    {
        id : 1,
        img : img9,
        title : "Boat Headphone",
        price : "120",
        aosDelay : "0"
    },

    {
        id : 2,
        img : img7,
        title : "Rocky Mountain",
        price : "420",
        aosDelay : "200"
    },

    {
        id : 3,
        img : img5,
        title : "Goggles",
        price : "320",
        aosDelay : "400"
    },

    {
        id : 4,
        img : img2,
        title : "Printed",
        price : "220",
        aosDelay : "600"
    },

]

const Products = () => {
  return (
    <div>
        <div className="container">
            {/* Header Section  */}

                <Heading title="Our Products" subtitle="Explore Our Products"/>

            {/* Body Section  */}

                <ProductCard data={ProductsData} />
                <ProductCard data={ProductsData2} />

        </div>
    </div>
  )
}

export default Products