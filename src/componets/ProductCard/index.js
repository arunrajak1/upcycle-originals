import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ products =[]}) => {
    return (
        <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <Link to={'/product'} class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="pots" class="object-contain h-full w-96 block" src="https://www.lucknownursery.com/wp-content/uploads/2021/07/lucknow-nursery-plastic-pots-round1.jpg"/>
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">Octagonal plastic pot gamla (12.75 inch)</h2>
                <p class="mt-1">₹100.00</p>
              </div>
            </Link>
            <Link  to={'/product'} class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-contain h-full w-96 block" src="https://m.media-amazon.com/images/I/31FOGKY0-2S._SY445_SX342_QL70_FMwebp_.jpg"/>
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">Multi-color plastic bins</h2>
                <p class="mt-1">₹150.00</p>
              </div>
            </Link>
            <Link to={'/product'} class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-contain h-60 w-96 block" src="https://5.imimg.com/data5/MS/KI/MY-55891922/nylon-mat.jpg"/>
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">Printed Plastic Floor Mat, Mat Size: 6 to 8 feet</h2>
                <p class="mt-1">₹120.00</p>
              </div>
            </Link>
            <Link to={'/product'} class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-contain h-full w-96 block" src="https://i.pinimg.com/564x/42/5f/a6/425fa6150a31e6de0b8c2a82efd34997--recycled-plastic-bags-art-plastic.jpg"/>
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">Recycled | Recycled Plastic Bags</h2>
                <p class="mt-1">₹1020.00</p>
              </div>
            </Link>
            <Link to={'/product'} class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-contain h-full w-full block" src="https://5.imimg.com/data5/SELLER/Default/2021/10/RF/WV/CX/138500350/recycle-plastic-chair-500x500.jpg"/>
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">Recycled chair</h2>
                <p class="mt-1">₹1500.00</p>
              </div>
            </Link>
            <Link to={'/product'} class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-contain h-full w-96  block" src="https://m.media-amazon.com/images/I/812vy+hfIyL._AC_UY1100_.jpg"/>
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium"> Roo Rain Gear Boys Recycled Plastic Bottle Packable Rain Poncho</h2>
                <p class="mt-1">₹500.00</p>
              </div>
            </Link>
            <Link to={'/product'} class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-contain h-full w-full  block" src="https://m.media-amazon.com/images/I/81Lk4ovIX3L._SX522_.jpg"/>
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">Econiture Coffee Recycled Plastic Stool </h2>
                <p class="mt-1">₹2,700</p>
              </div>
            </Link>
            <Link to={'/product'} class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-contain h-full w-96  block" src="https://m.media-amazon.com/images/I/71xI7zIY4CL._AC_UF894,1000_QL80_.jpg"/>
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">Green Toys Dining Set - CB</h2>
                <p class="mt-1">₹400.00</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    )
}

export default ProductCard
