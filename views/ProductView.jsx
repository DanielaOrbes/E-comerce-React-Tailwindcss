import { useProducts } from "../customHook/useProducts";
import { useParams, Link } from "react-router-dom";
import '/src/css/product.css';
import { ProductComponent } from "../src/components/ProductComponent";



export const ProductView = () => {

    const { productID } = useParams();



    const { productsMock, isLoading } = useProducts();
    console.log(productsMock);

    if (isLoading) {
        return <h1 className="cursor-wait	">CARGANDO..</h1>
    }
    const product = productsMock.find(product => product.id ===Number(productID));   
    console.log(product);

    if (!product) {
        return <h1>Product not found</h1>;
    }


    return (


        <div>
            <h1>Product n°: {productID}</h1>
          <ProductComponent product={product} />
    </div>




                );
}