import { useEffect, useState } from "react"

export const ItemCounts = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(parseInt(initial));
    useEffect(() =>{
        setCount(parseInt(initial));
   }, [initial]);  // setea el valor inicial
    
    const decreaseCount = () => {
        setCount(count - 1);
    }
    const increaseCount = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <button disabled={count>=stock} onClick={increaseCount}>+</button>
            <span>{count}</span>
            <button disabled={count == 0} onClick={decreaseCount}>-</button>
            <div>
                <button disabled={stock<=1 || count ==0} onClick={() => onAdd(count)}>Agregar al carrito</button>   {/*  onAdd LO EJECUTARA EN EL CONTENEDOR PADRE */}
            </div>
        </div>
    )
}
