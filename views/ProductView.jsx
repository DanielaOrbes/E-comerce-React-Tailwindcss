import { useProducts } from "../customHook/useProducts";
import { useParams, Link } from "react-router-dom";
import '/src/css/product.css';
import { ProductComponent } from "../src/components/ProductComponent";



export const ProductView = ({ pro }) => {

    



 

    return (


        <div>
            <h1>Product n°: {productID}</h1>
          <ProductComponent product={product} />
    </div>




                );
}