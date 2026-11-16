import { useTheme } from "../ThemeProvider"
import { NavLink } from "react-router"

export const Header = () => {
    const { theme, toggleTheme } = useTheme()
    return(
        <header className="flex justify-between">
            <div>
                <h1>E-Commerce</h1>
                <button onClick={toggleTheme}>{theme === 'dark' ? 'Dark' : 'Light'}Mode</button>
            </div>
            <nav className="flex gap-3 mx-3 p-3">
                <NavLink to="/">Home</NavLink>
                <NavLink to="products">Products</NavLink>
                <NavLink to="calculator">Calculator</NavLink>
            </nav>
        </header>
    )
}