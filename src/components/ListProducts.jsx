import {ProductComponent} from './ProductComponent';
import '../css/product.css';

export const ListProducts = ({ items }) => {
  
    return (
        <div className='product-list flex  h-10 w-20'>
          <div className='border-2'>PRODUCTOS</div>
          <div>
            {items.map((item)  => (
            <ProductComponent  key={item.id} product={item} />                       ))}
          </div>
          
        </div>
      );
    }
