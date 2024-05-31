import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './childrens/Layout.jsx';
import { ProductDatailComponent } from './components/ProductDatailComponent.jsx';
import { ItemListContainer } from './components/ItemListContainer.jsx';
import { CartProvider } from '../contexts/cartContext/CartProvider.jsx';
import { CartContainer } from './components/CartContainer.jsx';
import { Form } from './components/Form.jsx';
import { User } from './components/User.jsx';

export const App = () => {
  return (
    <BrowserRouter>

      <CartProvider>

        <Layout>

          <Routes>

            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/product/:productId" element={<ProductDatailComponent />} />

            <Route path="/cart" element={<CartContainer />} />
            <Route path="/user" element={<User/>} />
            <Route path="/checkout" element={<Form />} />


            <Route path="*" element={<h1>Not Found</h1>} />

          </Routes>

        </Layout>

      </CartProvider>



    </BrowserRouter>
  )
}


