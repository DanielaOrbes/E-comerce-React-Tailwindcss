import { useContext } from "react";
import CartView from "../../views/CartView";
import CartContext from "/contexts/cartContext/CartContext";
import { Link } from "react-router-dom";

export const CartContainer = () => {

    const { cart, cartTotal, clearCart, calculateCount } = useContext(CartContext);

    return (

        <div>
            <h1 className="text-3xl font-semibold">Carrito de compras</h1>
            <div className="pt-3 flex flex-col gap-5">
                {cart.length === 0 ? (<div>
                    <h1>No hay productos en el carrito</h1>
                    <img className="w-80" src="/public/img/cartVacio.jpg" alt="cartVacio" />

                </div>) : (
                    cart.map((item) => {
                        return <CartView key={item.product.id} item={item} />;
                    })
                )}
            </div>
            <h3 className="text-xl font-semibold mt-3 px-8">
                Total: ${cartTotal}
            </h3>
            <h3 className="text-xl font-semibold mt-3 px-8">
                Total de productos: {calculateCount}
            </h3>
           
            <div className="flex gap-5 justify-end">
                <div  className={`${cart.length === 0 ? "hidden" : ""}`}>
                    <button
          className="mt-3 bg-red-400 text-white rounded-md px-6 ml-4 py-1"
          onClick={clearCart}
        >
          Limpiar carrito
        </button> 
                </div>
       
        <Link className={`${cart.length === 0 ? "hidden" : ""}`}
         
          to="/checkout"  
        ><div  className="mt-3 bg-blue-400 text-white rounded-md px-2 py-1">
            Terminar mi compra
        </div>
          
        </Link>
        <Link to={"/"} className="mt-3 bg-blue-400 text-white rounded-md px-2 py-1">
            Ver productos disponibles
        </Link>
      </div>

        </div>
    )
}
