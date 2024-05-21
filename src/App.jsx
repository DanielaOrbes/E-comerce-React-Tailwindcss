import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './childrens/Layout.jsx';
import { CartView } from '../views/CartView.jsx'
import { ProductDatailComponent } from './components/ProductDatailComponent.jsx';
import { ItemListContainer } from './components/ItemListContainer.jsx';

export const App = () => {
  return (
    <BrowserRouter>

      <Layout>

        <Routes>

          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/CartView" element={<CartView />} />
          <Route path="/product/:productId" element={<ProductDatailComponent />} />

          <Route path="/cart" element={<CartView />} />
         

          <Route path="*" element={<h1>Not Found</h1>}/>

        </Routes>

      </Layout>

    </BrowserRouter>
  )
}
 

