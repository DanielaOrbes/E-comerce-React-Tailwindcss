import { useContext } from "react";
import CartContext from "../../contexts/cartContext/CartContext";

export const ButtonAddCart = () => {
    const { addToCart } = useContext(CartContext);


    const handleAddToCart = () => {
      addToCart(product, count);
      reset();
    }


  return (
  
        <button className="" onClick={handleAddToCart} disabled={count === 0}>
        Agregar al carrito
      </button>
  )
}
