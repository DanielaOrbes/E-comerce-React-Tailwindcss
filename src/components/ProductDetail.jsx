import { ItemCounts } from "./ItemCounts";
import useCount from "../../customHook/useCount";
import "/src/css/product.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../contexts/cartContext/CartContext";


export const ProductDetail = ({ product }) => {


  const { count, increment, decrement, reset } = useCount(0)
  const { addToCart } = useContext(CartContext);
  


  const handleAddToCart = () => {
    addToCart(product, count);
    reset();
  };

  return (

    <div className="product-component rounded items-center bg-sky-50 flex hover:bg-sky-200 border-2">

      <div className="">

      <img className="img-product" src={product.imgUrl} alt={product.title} />
            </div>
      <Link to={`/product/${product.id}`} className="item--title">
        <h2 className="title-produtc pt-3 text-indigo-600">
          {product.title}
        </h2>
      </Link>
      <p className="description-product h-20 " >
        {product.description}
      </p>
      <p className="price-product ">
        ${product.price}
      </p>
      <div>
        <ItemCounts
          stock={product.stock}
          count={count}
          increment={increment}
          decrement={decrement}
        />
      </div>
      <button className="bg-sky-200 hover:bg-sky-500 p-2 m-2 rounded" onClick={handleAddToCart} disabled={count === 0}>
        Agregar al carrito
      </button>
      <p>
        Disponibles :
        <strong> {product.stock - count } </strong>
      </p>
      <div>

      </div>
    </div>



  )

}