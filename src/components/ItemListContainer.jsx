import { ListProducts } from "./ListProducts";
import { useProducts } from "../../customHook/useProducts";
import { Target } from "./styles/Target";


export const ItemListContainer = ({greeting}) => {

  const { productsMock, isLoading} = useProducts();

  if (isLoading) {
    return <h1 className="cursor-wait	">CARGANDO..</h1>
  }

    return (
      <>
      <div>
        <h1 className=" text-3xl italic animate-pulse">
          {greeting}
        </h1>
          <ListProducts items={productsMock} />
      </div>
      </>

    )
  }
  