import { useTheme } from "./ThemeProvider"

export const App = () => {
    const { theme, toggleTheme } = useTheme()
    return(
        <>
            <button onClick={toggleTheme}>{theme === 'dark' ? 'Dark' : 'Light'} Mode</button>
            <h1 className="">Test Theme</h1>
        </>
)}