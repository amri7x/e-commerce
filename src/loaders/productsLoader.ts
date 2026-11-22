import type { LoaderFunctionArgs } from "react-router"
import {
  listProductsSchema,
  detailProductSchema,
  type DetailProduct
} from '../features/products/productSchema'

const API_URL = import.meta.env.VITE_API_URL

export const invalidApiData = () => new Response("Invalid data product recived", {
  status: 502,
  statusText: 'Bad Gateway'
})

export const readJson = async (
  response: Response
): Promise<unknown> => {
  try {
    return await response.json()
  } catch {
    throw invalidApiData()
  }
}

export const listProductsLoader = async ({
  request}: LoaderFunctionArgs
): Promise<DetailProduct[]> => {
  const response = await fetch(`${API_URL}/?limit=0`, {
    signal: request.signal
  })

  if (!response.ok){
    throw new Response('Failed to load data product', {
      status: response.status,
      statusText: response.statusText
    })
  }

  const result = listProductsSchema.safeParse(await readJson(response))

  if (!result.success){
    throw invalidApiData()
  }

  return result.data.products
}

export const detailProductLoader = async ({
  request,
  params}: LoaderFunctionArgs
): Promise<DetailProduct> => {
  const { id } = params

  if (!id){
    throw new Response('Product id is required', {
      status: 400,
      statusText: 'Bad Request'
    })
  }

  const response = await fetch(`${API_URL}/${id}`, {
    signal: request.signal
  })

  if (!response.ok){
    throw new Response("Product is not found", {
      status: response.status,
      statusText: response.statusText
    })
  }

  const result = detailProductSchema.safeParse(await readJson(response))

  if (!result.success){
    throw invalidApiData()
  }

  return result.data
}