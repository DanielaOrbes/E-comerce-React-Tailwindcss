import { CartWidget } from "./CartWidget"
import { CategoryList } from "./CategoryList"
import { FaUserAstronaut } from "react-icons/fa";
import { Link } from "react-router-dom";


export const NavBar = () => {

  
  return (
    <div className="flex  space-x-3  items-center " >

      <Link to={"/user"} ><FaUserAstronaut  /></Link>
      <CategoryList />
      <div>
        <CartWidget />
      </div>
      

    </div>
  )
}




