import { useContext } from "react";
import { MdTrolley } from "react-icons/md";
import { Link } from 'react-router-dom';
import CartContext from '../../contexts/cartContext/CartContext';


export const CartWidget = () => {

const { cart, calculateCount} = useContext(CartContext);

  return (
    <Link to={"/cart"}>
      <div className='flex items-center relative p-4 mr-9 bg-purple-300 rounded-full shadow-inner ring-purple-700 m-b-1'>
      <MdTrolley />
      <div className={`${cart.length === 0 ? "hidden" : ""}`}>
        <span className='absolute bottom-0 right-0 px-1 rounded-full bg-orange-200'>
        {calculateCount}
        </span>
      </div>
      
    </div>
    </Link>
    
  )
}
