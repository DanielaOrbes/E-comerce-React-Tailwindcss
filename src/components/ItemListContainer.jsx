import { ItemCounts } from "./ItemCounts"

export const ItemListContainer = ({greeting}) => {

  const onAdd = (product) => {
    console.log(`Hay ${product} unidades en el carrito`);
   }
    return (
      <div>
        <h1 className=" text-3xl italic animate-pulse">
          {greeting}
        </h1>
        <ItemCounts initial={0} stock={4} onAdd={onAdd} />
      </div>
    )
  }
  