import { z } from 'zod'
import type { Product } from './productSchema'

export const productSortSchema = z.enum(['price-asc', 'price-desc'])

export const productFiltersSchema = z.object({
  category: z.string().trim().min(1).optional().catch(undefined),
  brand: z.string().trim().min(1).optional().catch(undefined),
  sort: productSortSchema.optional().catch(undefined),
})

export type ProductFilters = z.infer<typeof productFiltersSchema>
export type ProductFilterName = keyof ProductFilters

export const parseProductFilters = (
  searchParams: URLSearchParams,
): ProductFilters => productFiltersSchema.parse({
  category: searchParams.get('category') ?? undefined,
  brand: searchParams.get('brand') ?? undefined,
  sort: searchParams.get('sort') ?? undefined,
})

export const getProductFilterOptions = (products: Product[]) => {
  const sortOptions = (values: string[]) =>
    [...new Set(values)].sort((first, second) => first.localeCompare(second))

  return {
    categories: sortOptions(products.map((product) => product.category)),
    brands: sortOptions(
      products.flatMap((product) => product.brand ? [product.brand] : []),
    ),
  }
}

export const filterProducts = (
  products: Product[],
  filters: ProductFilters,
): Product[] => {
  const filteredProducts = products.filter((product) => {
    const matchesCategory = !filters.category
      || product.category === filters.category
    const matchesBrand = !filters.brand || product.brand === filters.brand

    return matchesCategory && matchesBrand
  })

  if (filters.sort === 'price-asc') {
    return filteredProducts.sort((first, second) => first.price - second.price)
  }

  if (filters.sort === 'price-desc') {
    return filteredProducts.sort((first, second) => second.price - first.price)
  }

  return filteredProducts
}
