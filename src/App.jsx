import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../views/Home.jsx';
import { Layout } from './childrens/Layout.jsx';
import { CartView } from '../views/CartView.jsx'
import { ProductView } from '../views/ProductView.jsx';

export const App = () => {
  return (
    <BrowserRouter>

    <Layout>

      <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="CartView"  element={<CartView />}/>
        <Route path="/ProductView/:productId" element={<ProductView />} />
        <Route
            path="/category/:categoryName"
            element={<h1>Categoría de Producto</h1>}
          />
        <Route path="*" element={<h1>Not Found</h1>} />
        

      </Routes>

    </Layout>
      
    </BrowserRouter>
  )
}


