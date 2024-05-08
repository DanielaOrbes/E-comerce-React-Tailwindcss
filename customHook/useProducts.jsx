import { useEffect, useState } from "react"
import { getProducts } from "/mock/asyncMock";

export const useProducts = () => {

    const [productsMock, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getProducts()
            .then((data) => setProducts(data))
            .finally(() => setIsLoading(false))
    }, []);

    return {
        productsMock,
        isLoading
    };

}
