import { useMemo } from 'react'
import { NavLink, useLoaderData, useSearchParams } from 'react-router'
import { ProductFilters } from '../features/products/ProductFilters'
import {
  filterProducts,
  getProductFilter,
  ProductFilter,
  type ProductFilterName,
} from '../features/products/productFilters'
import { listProductsLoader } from '../loaders/productsLoader'

export const Products = () => {
  const products = useLoaderData<typeof listProductsLoader>()
  const [searchParams, setSearchParams] = useSearchParams()
  const filters = useMemo(
    () => ProductFilter(searchParams),
    [searchParams],
  )
  const { categories, brand } = useMemo(
    () => getProductFilter(products),
    [products],
  )
  const visibleProducts = useMemo(
    () => filterProducts(products, filters),
    [filters, products],
  )

  const updateFilter = (name: ProductFilterName, value: string) => {
    const nextSearchParams = new URLSearchParams(searchParams)

    if (value) {
      nextSearchParams.set(name, value)
    } else {
      nextSearchParams.delete(name)
    }

    setSearchParams(nextSearchParams, { preventScrollReset: true })
  }

  const resetFilters = () => {
    const nextSearchParams = new URLSearchParams(searchParams)

    nextSearchParams.delete('category')
    nextSearchParams.delete('brand')
    nextSearchParams.delete('sort')

    setSearchParams(nextSearchParams, { preventScrollReset: true })
  }

  if (products.length === 0) {
    return <main><p>Data products not found</p></main>
  }

  return (
    <main>
      <ProductFilters
        categories={categories}
        brands={brand}
        filters={filters}
        onChange={updateFilter}
        onReset={resetFilters}
      />

      {visibleProducts.length === 0 ? (
        <p>No products match the selected filters.</p>
      ) : (
        <section className="grid grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {visibleProducts.map((product) => (
            <NavLink
              to={{
                pathname: `${product.id}`,
                search: searchParams.toString()
              }}
              key={product.id}
              >
              <p>{product.title}</p>
              <img src={product.images[0]} alt={product.title} />
              <p>{product.price}</p>
            </NavLink>
          ))}
        </section>
      )}
    </main>
  )
}
