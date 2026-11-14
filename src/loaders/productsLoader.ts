import type { LoaderFunctionArgs } from "react-router";
import type { Products } from "../types/products";

const API_URL = import.meta.env.VITE_API_URL;

export const productsLoader = async ({request}: LoaderFunctionArgs): Promise<Products[]> => {
    const response = await fetch(API_URL, { signal: request.signal })

    if(!response.ok)
        throw new Response("Failed to load data products", {
            status: response.status,
            statusText: response.statusText
        })
    
    const data = await response.json()

    return data as Products[]
}