import { Header } from '../components/Header'

export const Layout = ({children}) => {
  return (
    <div className='relative w-full mx-auto flex flex-col justify-between'>
        <Header />
        <main className='flex-grow  h-max w-max '>
            {children}
        </main>
    </div>
  )
}
