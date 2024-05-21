import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "/mock/asyncMock";

export const useProducts = (categoryId) => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      setIsLoading(true);
      if (categoryId) {
        getProductsByCategory(categoryId)
          .then((data) => setProducts(data))
          .finally(() => setIsLoading(false));

      } else {
        getProducts()
          .then((data) => setProducts(data))
          .finally(() => setIsLoading(false));
      }

    }, [categoryId]
  );   
      
    return { products, isLoading };
  }

  

