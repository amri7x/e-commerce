import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Theme = 'dark' | 'light'
type ThemeContextProviderValue = {
    theme: Theme
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextProviderValue | null>(null)

export const ThemeProvider = ({children}: {children: ReactNode}) => {
    const [theme, setTheme] = useState<Theme>(() =>
        localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
    )

    useEffect(()=>{
        document.documentElement.classList.toggle('dark', theme === 'dark')
        localStorage.setItem('theme', theme)
    },[theme])

    const toggleTheme = () => setTheme(current => current === 'dark' ? 'light' : 'dark')

    return(
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
)}


export const useTheme = () => {
    const context = useContext(ThemeContext)
    if(!context){
        throw new Error(`useTheme must be put inside ThemeProvider`)
    }
    return context
}