import { useState } from 'react';
import '../css/categorylist.css';
import { NavLink } from 'react-router-dom';

export const CategoryList = () => {
  const RUTAS = [
    {
      path: '/category/mangas',
      label: 'Mangas',
    },
    {
      path: '/category/animes',
      label: 'Animes',
    },
    {
      path: '/category/comics',
      label: 'Comics',
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="">
        <button onClick={toggleMenu} className="">
          Categoría
        </button>
        {isOpen && (
          <ul className="categoryMenu">
            {RUTAS.map((ruta) => (
              <li className="itemNav shadow hover:shadow-lg" key={ruta.path}>
                <NavLink to={ruta.path} onClick={toggleMenu}>
                  {ruta.label}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};
