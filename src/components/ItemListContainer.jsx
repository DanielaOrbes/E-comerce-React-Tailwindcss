import { useProducts } from "../../customHook/useProducts";
import { ListProducts } from "./ListProducts";
import { useParams } from "react-router-dom";


export const ItemListContainer = ({ greeting }) => {

  const { categoryId } = useParams();
  const { products, isLoading } = useProducts(categoryId);

  if (isLoading) {
    return <h1 className="cursor-wait	">CARGANDO..</h1>
  }
  


  return ( 

    <div>
      <h1 className=" text-3xl italic animate-pulse">
        {greeting}
      </h1>
      <ListProducts items={products} />
    </div>

  )
}
