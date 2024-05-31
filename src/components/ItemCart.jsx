import React, { useContext } from 'react'
import CartContext from '../../contexts/cartContext/CartContext';

export const ItemCart = ({item}) => {

  const { deleteFromCart, addToCart } = useContext(CartContext);
  return (
    <div key={item} className="flex items-center justify-between px-20">
    <div className="flex gap-5 items-center">
      <div className="max-w-[100px]">
        <img src={item.product.imgUrl} alt={item.product.title} />
      </div>
      <div className='w-52'>
        <p>{item.product.title}</p>
        <p>Precio: ${item.product.price}</p>
      </div>
    </div>
    <div className="flex gap-3">
      <button className="px-1 rounded-full bg-slate-300" onClick={() => deleteFromCart(item.product.id, 1)} type="button"
      >
        -
      </button>
      <p>{item.quantity}</p>

      <button className="px-1 rounded-full bg-slate-300"  onClick={() => addToCart(item.product, 1)}  type="button"
      >
        +
      </button>
    </div>
  </div>
  )
}


