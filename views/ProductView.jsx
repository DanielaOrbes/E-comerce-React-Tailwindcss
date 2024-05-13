import { useProducts } from "../customHook/useProducts";
import { useParams } from "react-router-dom";




export const ProductView = () => {

    const { productID } = useParams();

    const { productsMock, isLoading } = useProducts();

    if (isLoading) {
        return <h1 className="cursor-wait	">CARGANDO..</h1>
    }

    const product = productsMock.find(product => product.id === productID);
    if (!product) {
        return <h1>Product not found</h1>;
    }

    return (
        <div>
        <h1>Product ID: {product.id}</h1>
        <h2>{product.title}</h2>
        <img src={product.sprites.front_default} alt={product.title} />
    </div>
    );
}