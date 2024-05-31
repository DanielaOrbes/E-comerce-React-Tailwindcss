import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export const Layout = ({children}) => {
  return (
    <div className=' w-full mx-auto flex flex-col'>
        <Header />
        <main className='mx-auto h-full'>
            {children}
        </main>
        <Footer />
    </div>
  )
}
