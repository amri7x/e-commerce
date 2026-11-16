import { z } from 'zod'

export const productSchema = z.object({
  id: z.number().int().positive(),
  title: z.string().trim().min(1),
  brand: z.string().trim().min(1).optional(),
  category: z.string().trim().min(1),
  price: z.number().nonnegative(),
  images: z.array(z.string().url()).min(1),
})

export const productsResponseSchema = z.object({
  products: z.array(productSchema),
})

export type Product = z.infer<typeof productSchema>
export type ProductsResponse = z.infer<typeof productsResponseSchema>
