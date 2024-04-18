import { Header } from './components/Header';
import { ItemListContainer } from './components/ItemListContainer';

export const App = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <ItemListContainer greeting="¡Hola Mundo!" />
    </div>
  )
}