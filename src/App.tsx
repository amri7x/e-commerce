import { createBrowserRouter, RouterProvider } from "react-router"
import { Layout } from "./components/Layout"
import { productsLoader } from "./loaders/productsLoader"
import { ErrorBoundary } from "./components/ErrorBoundary"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                lazy: async () => {
                    const { Home } = await import("./pages/Home")
                    return { Component: Home }
                }
            },
            {
                path: "products",
                loader: productsLoader,
                ErrorBoundary: ErrorBoundary,
                lazy: async () => {
                    const { Products } = await import("./pages/Products")
                    return { Component: Products }
                }
            },
            {
                path: "calculator",
                ErrorBoundary: ErrorBoundary,
                lazy: async () => {
                    const { Calculator } = await import("./pages/Calculator")
                    return { Component: Calculator }
                }
            }
        ]
    }
])

export const App = () => {
    return(
        <RouterProvider router={router}>
            
        </RouterProvider>
)}