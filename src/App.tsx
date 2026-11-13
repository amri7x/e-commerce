import { useTheme } from "./ThemeProvider"

export const App = () => {
    const { theme, toggleTheme } = useTheme()
    return(
        <main className="bg-app-bg">
            <button onClick={toggleTheme}>{theme === 'dark' ? 'Dark' : 'Light'} Mode</button>
            <h1 className="text-app-text">Test Theme</h1>
        </main>
)}