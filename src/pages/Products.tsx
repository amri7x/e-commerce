import { useMemo } from 'react'
import { NavLink, useLoaderData, useSearchParams } from 'react-router'
import { ProductFilters as ProductFilterList } from '../features/products/ProductFilters'
import {
  filterProducts,
  getProductFilter,
  ProductFilter,
  type ProductFilterName,
} from '../features/products/productFilters'
import { listProductsLoader } from '../loaders/productsLoader'

export const Products = () => {
  const products = useLoaderData<typeof listProductsLoader>()

  return (
    <main>
      {products.length === 0 ? (
        <p>No products match the selected filters.</p>
      ) : (
        <section className="grid grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {products.map((product) => (
            <NavLink
              to={{
                pathname: `${product.id}`,
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
