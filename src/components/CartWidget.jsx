import React from 'react'
import { useState } from "react";
import { MdTrolley } from "react-icons/md";

export const CartWidget = () => {
  const [cartItems, setCartItems] = useState(0);
  return (
    <div className='flex items-center relative p-4 mr-9 bg-purple-300 rounded-full shadow-inner'>
    <span className=' '><MdTrolley /></span>
    <span className='absolute bottom-0 right-0 px-1 rounded-full bg-orange-200'>{cartItems}</span>
  </div>
  )
}
