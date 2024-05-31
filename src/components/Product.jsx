import { Link } from "react-router-dom"
import '/src/css/product.css';

export const Product = ({ product }) => {

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
      <p className="price-product ">
        ${product.price}
      </p>
      <div>

      </div>
    </div>



  )
}
