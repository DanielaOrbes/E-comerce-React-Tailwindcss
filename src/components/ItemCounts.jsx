

export const ItemCounts = ({ stock, count, increment, decrement }) => {


    return (
        
        <div className="">

            <button className="border-2 p-1 m-2 w-h-5 " disabled={count == 0} onClick={decrement}>-</button>
            <span>{count}</span>
            <button className="border-2 p-1 m-2 w-h-5" disabled={count >= stock} onClick={increment}>+</button>

            <div>
            </div>

        </div>
    )
}

