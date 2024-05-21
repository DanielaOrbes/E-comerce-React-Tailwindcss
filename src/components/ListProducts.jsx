import '../css/product.css';
import { Product } from './Product';

export const ListProducts = ({ items }) => {

  return (
    <div className='product-list flex  h-10 xw-20'>
      <div className='w-2'>
        {items.map((item) => (
          <Product key={item.id} product={item} />))}
      </div>

    </div>
  );
  
}
