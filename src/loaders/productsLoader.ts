import type { LoaderFunctionArgs } from "react-router"
import type { Products } from "../types/products"

const API_URL = import.meta.env.VITE_API_URL

export const productsLoader = async ({request}: LoaderFunctionArgs): Promise<Products[]> => {
    const response = await fetch(`${API_URL}/?limit=0`, { signal: request.signal })

    if(!response.ok){
        throw new Response("Failed to load products data", {
            status: response.status,
            statusText: response.statusText
        })
    }

    const data = await response.json()

    return data.products as Products[]
}

export const productDetailLoader = async ({request, params}: LoaderFunctionArgs): Promise<Products> => {
    const { id } = params;

    if(!id){
        throw new Response("Product id is required", {
            status: 400
        })
    }

    const response = await fetch(`${API_URL}/${id}`, { signal: request.signal })
    
    if(!response.ok){
        throw new Response("Product id not found", {
            status: response.status
        })
    }

    const detail = await response.json() as Products
    
    if(!detail.id){
        throw new Response("Product id not found", {
            status: 404
        })
    }

    return detail
}