import { useEffect, useState } from "react";
import CartContext from "./CartContext";


export const CartProvider = ({ children }) => {

 
    const [cart, setCart] = useState(
        localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
    );

    const calculateCount = cart.reduce((acc, item) => acc + item.quantity, 0);


    const addToCart = (product, quantity) => {
        const itemInCart = cart.find((item) => item.product.id === product.id);

        if (itemInCart) {
            const updatedCart = cart.map((item) => {
                if (item.product.id === product.id) {
                    return { product, quantity: item.quantity + quantity };
                }
                return item;
            });
            setCart(updatedCart);
        } else {
            setCart([...cart, { product, quantity }]);
        }
    };
    const decrementStock = (product, quantity) => {
        setCart(prevCart => {// actualizar el estado del carrito
          const updatedCart = prevCart.map(item => ({
            ...item,
            product: item.product.id === product ? {
              ...item.product,
              stock: item.product.stock - quantity
            } : item.product
          }));
          return updatedCart;
        });
      };

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const deleteFromCart = (productId, quantity) => {
        const itemInCart = cart.find((item) => item.product.id === productId);
        if (itemInCart) {
            const updatedCart = cart.map((item) => {
                if (item.product.id === productId) {
                    return { product: item.product, quantity: item.quantity - quantity };
                }
                return item;
            });

            const filteredCart = updatedCart.filter((item) => item.quantity > 0);

            setCart(filteredCart);
        }
    };

    const clearCart = () => {
        setCart([]);
    };

    const cartTotal = cart
        .reduce((acc, item) => {
            return acc + item.product.price * item.quantity;
        }, 0)
        .toFixed(2); //muestra dos numeros despues de la coma

    return (
        <CartContext.Provider
            value={{ cart, addToCart,decrementStock, deleteFromCart, clearCart, cartTotal,calculateCount }}
        >
            {children}
        </CartContext.Provider>
    );
}