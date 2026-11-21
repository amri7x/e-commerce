import { z } from "zod"
import type { Product } from "./productSchema"

export const productSortSchema = z.enum(['price-asc','price-desc'])
export const productFilterSchema = z.object({
  category: z.string().trim().min(1).optional().catch(undefined),
  brand: z.string().trim().min(1).optional().catch(undefined),
  sort: productSortSchema.optional().catch(undefined)
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

export const getProductFilter = (products: Product[]) => {
  const sortOption = (values: string[]) =>
  [...new Set(values)].sort((first,second) => first.localeCompare(second))

  return{
    categories: sortOption(products.map(product => product.category)),
    brand: sortOption(
      products.flatMap(product => product.brand ? [product.brand] : [])
    )
  }
}

export const filterProducts = (
  products: Product[],
  filters: ProductFilter
): Product[] => {
  const filteredProduct = products.filter(product => {
    const matchesCategory = !filters.category || product.category === filters.category
    const matchesBrand = !filters.brand || product.brand === filters.brand

    return matchesCategory && matchesBrand
  })

  if (filters.sort === 'price-asc'){
    return filteredProduct.sort((first, second) => first.price - second.price)
  }

  if (filters.sort === 'price-desc'){
    return filteredProduct.sort((first, second) => second.price - first.price)
  }

  return filteredProduct
}
