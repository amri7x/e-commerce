import type {
  ProductFilter as getProductFilter,
  ProductFilterName
} from "./productFilters"

type productFilter = ({
  categories: string[]
  brands: string[]
  filters: getProductFilter
  onChange: (name: ProductFilterName, values: string) => void
  onReset: () => void
})

export const ProductFilters = ({
  filters,
  categories,
  brands,
  onChange,
  onReset
}: productFilter) => {
  const isActiveFilter = Boolean(
    filters.category || filters.brand || filters.sort
  )

  return(
    <main>
      <section>
        <label
        > Category
          <select
            aria-label="Product Filters"
            value={filters.category ?? ""}
            onChange={e => onChange('category',e.target.value)}
            >
            <option
              value="">All Categories</option>
            {
              filters.category &&
              !categories.includes(filters.category) &&
              <option value={filters.category}>{filters.category}</option>
            }
            {
              categories.map(category => 
                <option key={category} value={category}>{category}</option>
              )
            }
          </select>
        </label>

        <label
        > Brands
          <select
            aria-label="Product Filters"
            value={filters.brand ?? ""}
            onChange={e => onChange('brand',e.target.value)}
            >
            <option
              value="">All Brands</option>
            {
              filters.brand &&
              !brands.includes(filters.brand) &&
              <option value={filters.brand}>{filters.brand}</option>
            }
            {
              brands.map(brand => 
                <option key={brand} value={brand}>{brand}</option>
              )
            }
          </select>
        </label>

        <label className="flex flex-col gap-1">
        Sort by price
          <select
            value={filters.sort ?? ''}
            onChange={e => onChange('sort', e.target.value)}
          >
            <option value="">Default order</option>
            <option value="price-asc">Lowest first</option>
            <option value="price-desc">Highest first</option>
          </select>
        </label>

        <button
          className="w-5"
          type="button"
          disabled={!isActiveFilter}
          onClick={onReset}
        >
          Reset Filters
        </button>
      </section>
    </main>
  )
}