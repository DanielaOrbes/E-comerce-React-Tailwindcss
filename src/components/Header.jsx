import { Brand } from "./Brand"
import { NavBar } from "./NavBar"

export const Header = () => {
    return (
        <div className="flex justify-between bg-sky-100 py-10">
            <Brand />
            
            <NavBar />
        </div>
    )
}
