import type {
  ProductFilterName,
  ProductFilters as ProductFiltersValue,
} from './productFilters'

type ProductFiltersProps = {
  categories: string[]
  brands: string[]
  filters: ProductFiltersValue
  onChange: (name: ProductFilterName, value: string) => void
  onReset: () => void
}

export const ProductFilters = ({
  categories,
  brands,
  filters,
  onChange,
  onReset,
}: ProductFiltersProps) => {
  const hasActiveFilters = Boolean(
    filters.category || filters.brand || filters.sort,
  )

  return (
    <section
      aria-label="Product filters"
      className="mb-6 flex flex-wrap items-end gap-3"
    >
      <label className="flex flex-col gap-1">
        Category
        <select
          value={filters.category ?? ''}
          onChange={(event) => onChange('category', event.target.value)}
        >
          <option value="">All categories</option>
          {filters.category && !categories.includes(filters.category) && (
            <option value={filters.category}>{filters.category}</option>
          )}
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-1">
        Brand
        <select
          value={filters.brand ?? ''}
          onChange={(event) => onChange('brand', event.target.value)}
        >
          <option value="">All brands</option>
          {filters.brand && !brands.includes(filters.brand) && (
            <option value={filters.brand}>{filters.brand}</option>
          )}
          {brands.map((brand) => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-1">
        Sort by price
        <select
          value={filters.sort ?? ''}
          onChange={(event) => onChange('sort', event.target.value)}
        >
          <option value="">Default order</option>
          <option value="price-asc">Lowest first</option>
          <option value="price-desc">Highest first</option>
        </select>
      </label>

      <button
        type="button"
        disabled={!hasActiveFilters}
        onClick={onReset}
      >
        Reset filters
      </button>
    </section>
  )
}
