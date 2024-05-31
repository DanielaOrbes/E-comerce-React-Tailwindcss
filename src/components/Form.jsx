import { doc, getDoc, updateDoc, collection, getFirestore, addDoc} from 'firebase/firestore';
import { useContext } from 'react';
import CartContext from '../../contexts/cartContext/CartContext';
import useBuyer from '../../customHook/useBuyer';
import { DetailCart } from './DetailCart';

export const Form = () => {

    const {cart, clearCart, cartTotal} = useContext(CartContext);
    const {buyer, handleInputChange} = useBuyer();

    //falta limpiar los inputs al terminar compra***

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const { name, lastName, phoneNumber, email, email2 } = buyer;

        if (!name || !lastName || !phoneNumber || !email || !email2) {
          alert('Por favor complete todos los campos para realizar compra.');
          return;
      }
        
        if (email !== email2) {
          alert('Los correos electrónicos no coinciden');
          return;
        }
        const order = {
            buyer,
            cart,
            cartTotal,
        };

        const db = getFirestore();
        // antes de hacer el addDoc, verifico que haya stock suficiente para todos los productos
        for (const productInCart of cart) {
          const productRef = doc(db, "products", productInCart.product.id);
          const product = await getDoc(productRef);
          const productData = product.data();
          if (productData.stock < productInCart.quantity) {
            alert(`No hay stock suficiente para el producto ${productData.title}`);
            // el return corta el flujo de toda función, si no hay stock suficiente, no hago el addDoc
            return;
          }
        }
    
        // si tengo stock de todos los productos, entonces hago el addDoc
        const ordersCollection = collection(db, "orders");
    
        addDoc(ordersCollection, order).then(async ({ id }) => {
          alert(`Compra realizada con éxito, tu número de orden es: ${id}`);
          clearCart();

          handleInputChange({ target: { name: 'name', value: '' } });
          handleInputChange({ target: { name: 'lastName', value: '' } });
          handleInputChange({ target: { name: 'phoneNumber', value: '' } });
          handleInputChange({ target: { name: 'email', value: '' } });
          handleInputChange({ target: { name: 'email2', value: '' } });
    
          // si la compra se realizó correctamente (por eso este código va en el .then()), actualizo mi stock de productos en firestore
    
          for (const productInCart of cart) {
            const productRef = doc(db, "products", productInCart.product.id);
            const product = await getDoc(productRef);
            const productData = product.data();
    
            const newStock = productData.stock - productInCart.quantity;
    
            await updateDoc(productRef, { stock: newStock });
          }
        });
      };

  return (
    

          <form onSubmit={handleSubmit} className="flex flex-col gap-3 ml-4 ">
        <div className="flex flex-col gap-1">
          <span>Nombre</span>
          <input
            type="text"
            placeholder="Nombre"
            className="bg-inherit border-2 border-gray-300 rounded-md p-1 focus:outline-none focus:border-blue-400"
            name="name"
            value={buyer.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <span htmlFor="">Apellido</span>
          <input
            type="text"
            placeholder="Apellido"
            className="bg-inherit border-2 border-gray-300 rounded-md p-1 focus:outline-none focus:border-blue-400"
            name="lastName"
            value={buyer.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <span>Celular</span>
          <input
            type="text"
            placeholder="Celular"
            className="bg-inherit border-2 border-gray-300 rounded-md p-1 focus:outline-none focus:border-blue-400"
            name="phoneNumber"
            value={buyer.phoneNumber}
            onChange={handleInputChange}
          />

        </div>
        <div className="flex flex-col gap-1">
          <span>Email</span>
          <input
            type="email"
            placeholder="Email"
            className="bg-inherit border-2 border-gray-300 rounded-md p-1 focus:outline-none focus:border-blue-400"
            name="email"
            value={buyer.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <span>Email</span>
          <input
            type="email"
            placeholder="Repita su Email"
            className="bg-inherit border-2 border-gray-300 rounded-md p-1 focus:outline-none focus:border-blue-400"
            name="email2"
            value={buyer.email2}
            onChange={handleInputChange}
          />
        </div>
        <DetailCart cart={cart} cartTotal={cartTotal} />
        <div className={`${cart.length === 0 ? "hidden" : ""}`}>
        <button
          className="mt-3 bg-blue-400 text-white rounded-md px-2 py-1"
          type="submit"
        >
          Comprar
        </button>
        </div>
       
       
       
      </form>
   
  )
}
