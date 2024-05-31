import { useContext } from "react";
import CartContext from "../contexts/cartContext/CartContext";

export default function CartView ({ item }) {
  const { deleteFromCart, addToCart} = useContext(CartContext);

  return (
    <div key={item} className="flex gap-5 px-2">
      <div className="flex gap-5 items-center">
        <div className="w-20">
          <img src={item.product.imgUrl} alt={item.product.title} />
        </div>
        <div>
          <p>{item.product.title}</p>
          <p>Esta llevando {item.quantity} unidades</p>
          <p>Precio: ${item.product.price}</p>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <button
          className="px-2 rounded-full bg-slate-300"
          onClick={() => deleteFromCart(item.product.id, 1)}
        >
          -
        </button>
        <p> {item.quantity}</p>

        <button
          className="px-2 rounded-full bg-slate-300"
          onClick={() => addToCart(item.product, 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}