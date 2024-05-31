import { serverTimestamp } from "firebase/firestore";
import { useState } from "react";

export default function useBuyer() {


  const [buyer, setBuyer] = useState({
    name: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    email2: "",   
    timestamp: serverTimestamp(),
    password:"",
 
  });

  const handleInputChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  return { buyer, handleInputChange };
}