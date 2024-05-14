import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../views/Home.jsx';
import { Layout } from './childrens/Layout.jsx';
import { CartView } from '../views/CartView.jsx'
import { ProductView } from '../views/ProductView.jsx';
import { CategoryView } from '../views/CategoryView.jsx';

export const App = () => {
  return (
    <BrowserRouter>

      <Layout>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/CartView" element={<CartView />} />
          <Route path="/views/ProductView/:productID" element={<ProductView />} />
          ///////**RUTAS DE CategoryList**///////
          <Route path="/mangas" element={<h1>MANGAS</h1>} />
          <Route path="/animes" element={<h1>ANIMES</h1>} />
          <Route path="comics" element={<h1>COMICS</h1>} />

          <Route
            path="/category/:categoryId"
            element={<CategoryView />}
          />
          <Route
            path="*"
            element={<h1>Not Found</h1>}
          />

        </Routes>

      </Layout>

    </BrowserRouter>
  )
}
 

