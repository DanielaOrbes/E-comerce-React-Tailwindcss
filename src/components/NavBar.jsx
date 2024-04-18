import { CartWidget } from "./CartWidget"
import { CategoryList } from "./CategoryList"

export const NavBar = () => {
  return (
    <div className="flex justify-evenly" >
    <CategoryList />
    <CartWidget />
  </div>
  )
}
