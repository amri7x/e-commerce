import { useMemo } from "react"
import { useLoaderData, NavLink, useSearchParams } from "react-router"
import { listProductsLoader } from "../loaders/productsLoader"
import {
  ProductFilter,
  filterProducts,
  getProductFilter,
  type ProductFilterName
} from "../features/products/productFilters"
import { ProductFilters } from "../features/products/ProductFilters"

export const Products = () => {
  const products = useLoaderData<typeof listProductsLoader>()
  const [searchParams, setSearchParams] = useSearchParams()

  const filters = useMemo(
    ()=> ProductFilter(searchParams),
    [searchParams]
  )

  const filteredProduct = useMemo(
    () =>  filterProducts(products, filters),
    [products, filters]
  )

  const { categories, brands } = useMemo(
    () => getProductFilter(products),
    [products]
  )

  const updateFilter = (name: ProductFilterName, values: string) => {
    const nextSearchParams = new URLSearchParams(searchParams)

    if(values){
      nextSearchParams.set(name, values)
    } else {
      nextSearchParams.delete(name)
    }

    setSearchParams(nextSearchParams, {preventScrollReset: true})
  }

  const resetFilter = () => {
    const nextSearchParams = new URLSearchParams(searchParams)

    nextSearchParams.delete('category')
    nextSearchParams.delete('brands')
    nextSearchParams.delete('sort')

    setSearchParams(nextSearchParams, {preventScrollReset: true})
  }

  return(
    <main>
      <div>
        <ProductFilters
          filters={filters}
          categories={categories}
          brands={brands}
          onChange={updateFilter}
          onReset={resetFilter}
        />
      </div>
      <section className="grid grid-cols-6">
          {
            filteredProduct.map(product => 
              <NavLink
                to={{
                  pathname: `${product.id}`,
                  search: searchParams.toString()
                }}
              >
                <img
                  src={product.images[0]}
                />
                <p>{product.title}</p>
                <p>{product.category}</p>
                <p>{product.brand}</p>
                <p>{product.price}</p>
              </NavLink>
            )
          }
      </section>
    </main>
  )

}