import { useLoaderData, NavLink, useLocation } from "react-router"
import { detailProductLoader } from "../loaders/productsLoader"

export const ProductDetail = () => {
    const detail = useLoaderData<typeof detailProductLoader>()
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
            <img width="400px" src={detail.images[0]} />
            <h1>{detail.title}</h1>
        </main>
    )
}