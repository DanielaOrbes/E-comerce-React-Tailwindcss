import { ItemCart } from "./ItemCart";

export const DetailCart = ({ cart, cartTotal }) => {
  return (
    <div><div className="pt-3 flex flex-col gap-5">
    {cart.length === 0 ? (
      <h1>No hay productos en el carrito</h1>
    ) : (
      cart.map((item) => {
        return <ItemCart  key={item.product.id} item={item} />;
      })
    )}
  </div>
  <h3 className="text-xl font-semibold mt-3 px-20">Total: ${cartTotal}</h3></div>
  )
}

