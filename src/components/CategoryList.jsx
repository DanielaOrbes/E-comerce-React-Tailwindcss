import { getProductByCategory } from '../../mock/asyncMock';
import '../css/categorylist.css';
import { NavLink } from "react-router-dom";

export const CategoryList = () => {


const RUTAS_CATEGORY = [
  {
    path: "/mangas",
    label: "Mangas",
  },
  {
    path: "/anime",
    label: "Anime",
  },
  {
    path: "/comics",
    label: "Comics",
  },
  
];

return (
  <nav>
    <ul className="flex items-center mt-2 ">
      {RUTAS_CATEGORY.map((ruta) => (
        <li className='m-2 itemNav shadow hover:shadow-lg '>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to={ruta.path}
          >
            {ruta.label}
          </NavLink>
        </li>
        
      ))}
    </ul>
  </nav>
);
}





