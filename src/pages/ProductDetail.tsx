import { useLoaderData, NavLink, useLocation } from "react-router"
import { productDetailLoader } from "../loaders/productsLoader"

export const ProductDetail = () => {
    const detail = useLoaderData<typeof productDetailLoader>()
    const location = useLocation()

    return(
        <main>
            <NavLink 
                to={{ 
                    pathname: "/products",
                    search: location.search
                }}
                >
                    Back to Products
            </NavLink>
            <h1>{detail.title} </h1>
        </main>
    )
}