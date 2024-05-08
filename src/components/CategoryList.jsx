import '../css/categorylist.css';
import { ShadowComponents } from './ShadowComponents';

export const CategoryList = () => {

  return (
    <div>
      <nav>
        <ul className="flex items-center mt-2" >

            <ShadowComponents props="Mangas" />

            <ShadowComponents props="Animes" />

            <ShadowComponents props="Comics" />
        </ul>
      </nav>
    </div>
  )
}