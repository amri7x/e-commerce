import { useTheme } from "../ThemeProvider"
import { NavLink } from "react-router"

export const Header = () => {
    const { theme, toggleTheme } = useTheme()
    return(
        <header>
            <button onClick={toggleTheme}>{theme === 'dark' ? 'Dark' : 'Light'}Mode</button>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="products">Products</NavLink>
            </nav>
        </header>
    )
}