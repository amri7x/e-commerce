import { z } from "zod"
import type { DetailProduct } from "./productSchema"

export const sortProductSchema = z.enum(['price-asc','price-desc'])
export const productFilterSchema = z.object({
  category: z.string().trim().min(1).optional().catch(undefined),
  brand: z.string().trim().min(1).optional().catch(undefined),
  sort: sortProductSchema.optional().catch(undefined)
})

export type ProductFilter = z.infer<typeof productFilterSchema>
export type ProductFilterName = keyof ProductFilter

export const ProductFilter = (
  searchParams: URLSearchParams
): ProductFilter => productFilterSchema.parse({
  category: searchParams.get('category') ?? undefined,
  brand: searchParams.get('brand') ?? undefined,
  sort: searchParams.get('sort') ?? undefined
})

export const getProductFilter = (detailProduct: DetailProduct[]) => {
  const sortOption = (values: string[]) =>
  [...new Set(values)].sort((first, second) => first.localeCompare(second))

  return{
    categories: sortOption(detailProduct.map(product => product.category)),
    brand: sortOption(detailProduct.flatMap(product => product.brand ? [product.brand] : []))
  }
}

export const filterProducts = (
  products: DetailProduct[],
  filters: ProductFilter
): DetailProduct[] => {
  const filteredProduct = products.filter(product => {
    const matchesCategory = !filters.category || product.category === filters.category
    const matchesBrand = !filters.brand || product.brand === filters.brand

    return matchesCategory && matchesBrand
  })

  if (filters.sort === 'price-asc'){
    return filteredProduct.sort((first,second) => first.price - second.price)
  }

  if (filters.sort === 'price-desc'){
    return filteredProduct.sort((first, second) => second.price - first.price)
  }

  return filteredProduct
}