import '../css/categorylist.css';
import { NavLink } from "react-router-dom";

export const CategoryList = () => {


const RUTAS= [
  {
    path: "/category/mangas", //A DONDE APUNTA EL LINK
    label: "Mangas", //NOMBRE PARA QUE VEA EL USUARIO
  },
  {
    path: "/category/animes",
    label: "Animes",
  },
  {
    path: "/category/comics",
    label: "Comics",
  },
  
]; 

return (
  <nav>
    <ul className="flex items-center mt-2">
      {RUTAS.map((ruta) => (
        <li className='m-2 itemNav shadow hover:shadow-lg ' key={ruta.path}>
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





