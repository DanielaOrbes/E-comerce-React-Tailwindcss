import { useParams } from 'react-router-dom';
import { ProductDetail } from './ProductDetail';
import useProductById from '../../customHook/useProductById';

export const ProductDatailComponent = () => {

  const params = useParams();
  const { productId } = params;
  const { loading, product } = useProductById(productId);
  console.log(product);


  if (loading) {
    return <h1>Cargando...</h1>;
  }


  if (!product) {
    return <h1>No disponible</h1>;
  
  }

    return (
    <div>
      <ProductDetail product={product} />
    </div>
  );
}



 


  


