import '../css/product.css';
import { Product } from './Product';

export const ListProducts = ({ items }) => {

  return (
    <div className=' '>
      <div className='grid grid-rows-2 grid-flow-col gap-4 '>
        {items.map((item) => (
          <Product key={item.id} product={item} />))}
      </div>

    </div>
  );
  
}
