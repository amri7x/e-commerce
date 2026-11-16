# PROJECT_MAP.md — Peta Repositori

> Dokumen ini adalah peta navigasi, bukan pengganti pemeriksaan kode aktual.
> Jangan menaruh secret, token, password, atau data pribadi di sini.

## Ringkasan

- **Nama/tujuan proyek:** E-commerce SPA untuk menampilkan daftar dan detail produk.
- **Jenis aplikasi:** React client-side single-page application.
- **Status peta:** Terverifikasi sebagian.
- **Terakhir diperiksa:** 2026-11-16.
- **Belum diverifikasi:** Deployment dan kontrak API di luar field yang digunakan UI.

## Teknologi dan batasan

- React 19, React Router 8, TypeScript 6, Vite 8, Tailwind CSS 4, dan Zod 4.
- Package manager menggunakan npm dengan `package-lock.json`.
- Pemeriksaan proyek: `npm run lint` dan `npm run build`.
- Belum ada automated test framework.
- `VITE_API_URL` adalah konfigurasi browser dan tidak boleh berisi secret.

## Struktur dan alur utama

```text
src/
├── App.tsx                         # Definisi data router
├── loaders/productsLoader.ts      # Fetch dan validasi respons produk
├── features/products/             # Schema, tipe, kontrol, dan logika filter
├── pages/Products.tsx             # Daftar produk dan state URL filter
├── pages/ProductDetail.tsx        # Detail produk
└── components/ErrorBoundary.tsx   # Error route dan loader
```

- `/products` mengambil seluruh daftar sekali, lalu filter client-side memakai
  query `category`, `brand`, dan `sort`.
- Perubahan query pada `/products` tidak merevalidasi loader.
- `/products/:id` mengambil satu produk berdasarkan parameter route.
- Respons daftar dan detail divalidasi dengan Zod sebelum diberikan ke UI.
- Respons HTTP gagal mempertahankan status API; payload tidak valid menghasilkan
  status 502 dan ditangani `ErrorBoundary`.

## Guardrail dan validasi

- Schema produk adalah sumber type `Product`; jangan menambahkan type API manual
  yang menduplikasi schema.
- Field `brand` bersifat opsional sesuai respons API; produk tanpa brand tetap
  ditampilkan dan tidak dimasukkan ke pilihan filter brand.
- Sorting harus dilakukan pada array hasil filter agar data loader tidak dimutasi.
- Build output berada di `dist/` dan tidak diedit atau di-commit.
- Lint baseline memiliki error Fast Refresh di `src/ThemeProvider.tsx` yang belum
  termasuk lingkup fitur produk.

## Riwayat pembaruan

| Tanggal | Perubahan | Alasan |
| --- | --- | --- |
| 2026-11-16 | Peta awal dibuat | Dokumentasi loader, validasi, dan filter produk |
