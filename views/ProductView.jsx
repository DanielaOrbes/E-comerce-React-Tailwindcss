import { useProducts } from "../customHook/useProducts";



export const ProductView = () => {

    const { productsMock, isLoading} = useProducts();

    if (isLoading) {
        return <h1 className="cursor-wait	">CARGANDO..</h1>
      }

 
  return (
    <div>
      <h1>Producto n° {productsId = productsMock.id}</h1>
      <h2>{productsMock?.title}</h2>
      <img src={productsMock?.sprites.front_default} alt={productsMock?.title} />
    </div>
  );
}