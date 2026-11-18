import type { LoaderFunctionArgs } from 'react-router'
import {
  productSchema,
  productsResponseSchema,
  type Product,
} from '../features/products/productSchema'

const API_URL = import.meta.env.VITE_API_URL

const invalidApiResponse = () => new Response('Invalid product data received', {
  status: 502,
  statusText: 'Bad Gateway',
})

const readJson = async (response: Response): Promise<unknown> => {
  try {
    return await response.json()
  } catch {
    throw invalidApiResponse()
  }
}

export const productsLoader = async ({
  request,
}: LoaderFunctionArgs): Promise<Product[]> => {
  const response = await fetch(`${API_URL}/?limit=0`, {
    signal: request.signal,
  })

  if (!response.ok) {
    throw new Response('Failed to load products data', {
      status: response.status,
      statusText: response.statusText,
    })
  }

  const result = productsResponseSchema.safeParse(await readJson(response))

  if (!result.success) {
    throw invalidApiResponse()
  }
  
  return result.data.products
}

export const productDetailLoader = async ({
  request,
  params,
}: LoaderFunctionArgs): Promise<Product> => {
  const { id } = params

  if (!id) {
    throw new Response('Product id is required', {
      status: 400,
      statusText: 'Bad Request',
    })
  }

  const response = await fetch(`${API_URL}/${id}`, {
    signal: request.signal,
  })

  if (!response.ok) {
    throw new Response('Product id not found', {
      status: response.status,
      statusText: response.statusText,
    })
  }

  const result = productSchema.safeParse(await readJson(response))

  if (!result.success) {
    throw invalidApiResponse()
  }

  return result.data
}
