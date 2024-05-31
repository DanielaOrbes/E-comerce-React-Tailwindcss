import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

export default function useProducts(categoryId) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const db = getFirestore();
    const productsCollection = collection(db, "products");
    if (categoryId) {
      const productsQuery = query(
        productsCollection,
        where("categoryId", "==", categoryId)
      );

      getDocs(productsQuery)
        .then((snapshot) => {
          setProducts(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        })
        .finally(() => setIsLoading(false));
    } else {
      getDocs(productsCollection)
        .then((snapshot) => {
          setProducts(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        })
        .finally(() => setIsLoading(false));
    }
  }, [categoryId]);

  return { products, isLoading };
}