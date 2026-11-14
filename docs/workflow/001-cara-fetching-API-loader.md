Untuk kasus React Router, biasanya yang dipakai adalah `useLoaderData`, sedangkan proses fetch-nya dibuat dalam `loader`. API fetch sebaiknya dipisahkan ke file service—bukan component UI—agar bisa dipakai oleh loader mana pun.

Struktur sederhananya:

```txt
src/
  services/
    productApi.ts
  pages/
    ProductsPage.tsx
    ProductDetailPage.tsx
  router.tsx
```

`src/services/productApi.ts`:

```ts
const API_URL = 'https://api-contoh.com'

export type Product = {
  id: string
  name: string
  price: number
}

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${API_URL}/products`)

  if (!response.ok) {
    throw new Response('Gagal mengambil daftar produk', {
      status: response.status,
    })
  }

  return response.json()
}

export async function getProductById(id: string): Promise<Product> {
  const response = await fetch(`${API_URL}/products/${id}`)

  if (!response.ok) {
    throw new Response('Produk tidak ditemukan', {
      status: response.status,
    })
  }

  return response.json()
}
```

Untuk halaman daftar produk, loader memanggil service `getProducts()`.

```tsx
// src/pages/ProductsPage.tsx
import { useLoaderData } from 'react-router'
import type { Product } from '../services/productApi'

export function ProductsPage() {
  const products = useLoaderData() as Product[]

  return (
    <section>
      <h1>Produk</h1>

      {products.map((product) => (
        <article key={product.id}>
          <h2>{product.name}</h2>
          <p>Rp{product.price}</p>
        </article>
      ))}
    </section>
  )
}
```

Untuk detail produk, loader menerima `params.id`.

```tsx
// src/pages/ProductDetailPage.tsx
import { useLoaderData } from 'react-router'
import type { Product } from '../services/productApi'

export function ProductDetailPage() {
  const product = useLoaderData() as Product

  return (
    <section>
      <h1>{product.name}</h1>
      <p>Rp{product.price}</p>
    </section>
  )
}
```

Lalu daftarkan loader pada routing:

```tsx
// src/router.tsx
import { createBrowserRouter } from 'react-router'
import { getProductById, getProducts } from './services/productApi'
import { ProductsPage } from './pages/ProductsPage'
import { ProductDetailPage } from './pages/ProductDetailPage'

export const router = createBrowserRouter([
  {
    path: '/products',
    element: <ProductsPage />,
    loader: () => getProducts(),
  },
  {
    path: '/products/:id',
    element: <ProductDetailPage />,
    loader: ({ params }) => {
      if (!params.id) {
        throw new Response('ID produk tidak tersedia', { status: 400 })
      }

      return getProductById(params.id)
    },
  },
])
```

Intinya:

- `productApi.ts` menyimpan fungsi fetch untuk endpoint `/products` dan `/products/:id`.
- `loader` dipasang pada route, bukan dipanggil dari component biasa.
- Component mengambil hasilnya memakai `useLoaderData()`.
- Component lain yang membutuhkan API cukup mengimpor `getProducts` atau `getProductById`.

Kalau Anda memang menggunakan React Router, pastikan memakai package/import yang sesuai versi proyek Anda (`react-router` atau `react-router-dom`).