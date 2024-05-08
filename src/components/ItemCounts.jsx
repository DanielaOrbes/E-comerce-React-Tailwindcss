

export const ItemCounts = ({ stock, count, increment, decrement }) => {


    return (
        
        <div className="">

            <button className="border-2 p-1 m-2 w-h-5 " disabled={count == 0} onClick={decrement}>-</button>
            <span>{count}</span>
            <button className="border-2 p-1 m-2 w-h-5" disabled={count >= stock} onClick={increment}>+</button>
            <button disabled={stock <= 1 || count == 0} className="bg-sky-200 hover:bg-sky-500 p-2 m-2 rounded" >Agregar al carrito</button>{/*  onAdd LO EJECUTARA EN EL CONTENEDOR PADRE */}

            <div>
                <h1>Stock: {stock}</h1>
            </div>

        </div>
    )
}

