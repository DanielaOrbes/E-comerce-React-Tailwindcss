import { useEffect, useState } from "react";

 import {
   collection,
   getDocs,
   getFirestore,
   query,
   where,
 } from "firebase/firestore";

 export default function useProductsByCategory(category) {
   const [products, setProduct] = useState(null);
   const [loading, setloading] = useState(true);

   useEffect(() => {
     const bd = getFirestore();

     const q = query(
       collection(bd, "products"),
       where("category", "===", category)
     );

     getDocs(q)
       .then((snapshot) => {
         setProduct(
           snapshot.docs.map((doc) => ({
             category: doc.category,
             ...doc.data(),
           }))
         );
       })
       .finally(() => {
         setloading(false);
       });
   }, [category]);

   return {
     products,
     loading,
   };
 }