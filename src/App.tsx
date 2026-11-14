import { createBrowserRouter, RouterProvider } from "react-router"
import { Layout } from "./components/Layout"
import { Products } from "./pages/Products"


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
                lazy: async () => {
                    const { Products } = await import("./pages/Products")
                    return { Component: Products }
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