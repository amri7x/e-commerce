import { z } from 'zod'

export const detailProductSchema = z.object({
  id: z.number().int().positive(),
  title: z.string().trim().min(1),
  brand: z.string().trim().min(1).optional(),
  category: z.string().trim().min(1),
  price: z.number().nonnegative(),
  images: z.array(z.url()).min(1),
})

export const listProductsSchema = z.object({
  products: z.array(detailProductSchema),
})

export type DetailProduct = z.infer<typeof detailProductSchema>
export type ListProducts = z.infer<typeof listProductsSchema>