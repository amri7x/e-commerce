import { useLoaderData } from "react-router"
import { productDetailLoader } from "../loaders/productsLoader"

export const ProductDetail = () => {
    const detail = useLoaderData<typeof productDetailLoader>()

    return(
        <main>
            <h1>{detail.title} </h1>
        </main>
    )
}