import useProducts from "../../customHook/useProducts";
import { ListProducts } from "./ListProducts";
import { useParams } from "react-router-dom";


export const ItemListContainer = () => {

  const { categoryId } = useParams();
  const { products, isLoading } = useProducts(categoryId);
  

  if (categoryId) {
    return(
       <div>
      <ListProducts items={products} />
    </div>

    )
  }
  
  if (isLoading) {
    return <h1 className="cursor-wait	">CARGANDO..</h1>
  }

  return ( 

    <div>     
      <ListProducts items={products} />
    </div>

  )
}
