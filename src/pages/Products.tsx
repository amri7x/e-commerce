import { useLoaderData, NavLink } from "react-router"
import { productsLoader } from "../loaders/productsLoader"

export const Products = () => {
    const products = useLoaderData<typeof productsLoader>()

    return(
        <main className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {products.length === 0
                ? <p>Data Products not found</p>
                : products.map(product => (
                    <NavLink to={`${product.id}`} key={product.id}>
                        <p>{product.title}</p>
                        <img src={product.images[0]} />
                        <p>{product.price}</p>
                    </NavLink>
                ))
            }
        </main>
    ) 
}