# MORA — Project Roadmap & Learning Protocol

> **SINGLE SOURCE OF TRUTH untuk kelanjutan proyek MORA dan pembelajaran syntax.**
> Saat memulai chat baru: cari/baca file ini **dan verifikasi kondisi repository terbaru** sebelum memberi saran atau mengubah status.
> **File roadmap tidak memperbarui dirinya sendiri.** Setelah sesi coding/review yang menghasilkan perubahan progres, asisten sebaiknya memperbarui file ini dalam sesi yang sama ketika tersedia akses penyimpanan. Tidak ada pembaruan otomatis saat chat tidak aktif.

| Metadata | Nilai |
|---|---|
| Nama proyek | MORA — DummyJSON E-commerce (frontend portfolio/capstone) |
| Roadmap version | **1.2.1** |
| Last verified | **2026-11-26** (GitHub default branch `main`; `docs/MORA_PROJECT_ROADMAP.md`, `src/features/products/ProductFilters.tsx`, dan `src/features/products/productFilters.ts` diperiksa. Working branch/HEAD fitur terbaru belum ditentukan dari tautan ini. **Lint/build/tests belum dijalankan**.) |
| Last learning topic | **Tahap 6 — `ProductFilters.tsx` dinyatakan selesai atas persetujuan pengguna (2026-11-26)**: kuis mandiri 6/6 setelah klarifikasi callback `onChange` dan operator `??`; mini-task gabungan A/B/C dibuat dan direview manual melalui perbaikan terarah serta contoh kode lengkap. Penilaian adalah hasil belajar/review chat, bukan bukti compiler, lint, build, atau test. Tahap berikutnya: Tahap 7 integrasi `ProductFilters.tsx` ↔ `Products.tsx`. |
| Status utama | **Fase 1: katalog + filter URL; belum merge; fitur detail masih minimal** |
| GitHub repo | https://github.com/amri7x/e-commerce |
| Current feature branch (verified) | `main` diperiksa 2026-11-26; URL yang diberikan menunjuk default branch `main`. Working branch/HEAD aktif pengguna belum dikonfirmasi dan status ahead/behind tidak dihitung ulang. |
| Figma mobile design | https://www.figma.com/design/g7NRuCh1mApDRAn7kfLdf3 |
| Library canonical path (jika berhasil disimpan) | `/Projects/MORA/MORA_PROJECT_ROADMAP.md` |
| Target pekerjaan | Junior/Entry-level Frontend Web Developer remote internasional; bangun bukti kemampuan, bukan sekadar demo kosmetik |

## 0. Instruksi wajib untuk setiap chat baru

**Baca bagian ini dulu; jangan menyimpulkan status berdasarkan roadmap lama tanpa memverifikasi kode.**

1. Identifikasi tujuan chat baru dan kode/branch/commit/diff terbaru yang diberikan pengguna. Jangan meminta ulang informasi yang sudah tersedia.
2. Baca file roadmap terbaru dari ChatGPT Library di `/Projects/MORA/MORA_PROJECT_ROADMAP.md` (atau gunakan file yang dilampirkan pengguna). Jika tersedia versi di repository, bandingkan versi/tanggal; tanyakan hanya jika ada konflik penting.
3. Periksa implementasi sesungguhnya di GitHub, terutama **repository + branch/commit yang paling baru diberikan pengguna**, saat tugas bergantung pada status saat ini. Jika belum ada referensi baru, gunakan referensi terakhir yang telah diverifikasi (`amri7x/e-commerce`, `feature/searchParams` saat pembaruan ini). File roadmap adalah catatan, **kode adalah sumber kebenaran fitur**.
4. Perlakukan tiga status secara tegas: **[DONE/VERIFIED]** ada bukti implementasi dan review; **[IN PROGRESS]** ada pengerjaan tetapi belum memenuhi acceptance criteria; **[PLANNED]** belum terbukti di kode. Jangan menandai DONE hanya karena pernah dibahas atau ada desain Figma.
5. Saat pengguna memberikan kode, **utamakan membedah kode yang benar-benar dikirim** daripada langsung mengganti semua pendekatan atau menggenerasikan solusi panjang. Patuhi *Learning Protocol* di bawah.
6. Setelah menyelesaikan pekerjaan yang mengubah progress/keputusan/issue: revisi roadmap **dalam sesi tersebut**: tanggal, branch/commit yang dicek, status, keputusan, blocker, `Next Action`, `Change Log`. Simpan ke file Library yang sama jika akses tersedia, dan berikan tautan unduhan versi baru. Jangan hanya menyatakan “sudah saya ingat”.
7. **Tidak melakukan commit, push, merge, deployment, perubahan akun, atau modifikasi repository tanpa permintaan eksplisit.** Review dan roadmap tidak berarti otomatis menyentuh source code.
8. Jika tidak bisa membaca repo, tidak bisa menyimpan ulang Library, atau tidak ada bukti test, tuliskan keterbatasannya; **jangan membuat status atau hasil pengujian palsu**.
9. **Referensi repository dinamis:** pengguna akan mengirim tautan repo/branch/commit ketika berubah. Saat menerima referensi baru, gunakan itu untuk sesi berikutnya dan validasi file roadmap serta struktur source dari referensi tersebut. Jangan menganggap branch lama sebagai yang aktif jika referensi baru berbeda; jangan menebak isi perubahan lokal yang belum di-push. Jika tautan tidak merinci branch, periksa branch yang dituju tautan dan tanyakan hanya jika konflik menghalangi pekerjaan.
10. **Mini-task Syntax Breakdown default memakai Live Review** jika kontrol interaktif lokal tersedia. Penilaian ini terbatas pada persyaratan latihan; jangan mengklaim sama dengan TypeScript compiler, lint, testing, atau review logika menyeluruh. Ikuti protokol §6.

**Prompt pendek untuk chat baru (salin dan kirim):**

> Lanjutkan MORA. Baca `MORA_PROJECT_ROADMAP.md` di Library `/Projects/MORA/`, kemudian cek source GitHub berdasarkan **tautan repository/branch terbaru yang saya kirim**; jika belum ada perubahan referensi, gunakan referensi terakhir di roadmap. Ikuti *Syntax Breakdown* dan berikan mini-task dengan **Live Review langsung** (input kode → tombol Review Kode → Benar/Perlu perbaikan + alasan), jika fitur interaktif tersedia. Saya ingin mencoba sendiri; jangan bocorkan solusi sebelum saya minta. Kerjakan satu target kecil saja, catat bukti belajar, perbarui roadmap setelah progres berubah, dan jangan commit/merge otomatis.

## 1. Visi, ruang lingkup, dan prinsip proyek

- **Tujuan utama:** membuat portofolio frontend e-commerce **mobile-first** berkualitas, sekaligus menguasai React, React Router, TypeScript, pengujian, dan pemecahan masalah secara mandiri.
- **Backend:** tidak membuat backend khusus pada fase ini. API katalog dan autentikasi latihan memakai **DummyJSON**; sesuai perkembangan dapat dievaluasi ulang, tetapi **jangan migrasi API tanpa alasan yang jelas**.
- **Transaksi:** keranjang, checkout, payment success/failure, dan order history adalah **simulasi frontend**. DummyJSON carts tidak bertindak sebagai database toko permanen. **Tidak ada transaksi uang sungguhan**; UI wajib jelas menyatakan demo/simulation.
- **Desain:** MORA, warna utama `#6254EA`, background `#F8F9FC`, teks `#182033`, font Inter, grid mobile 390 × 844 px. Ada **12 layar mobile + 1 design system** di Figma; desain tidak berarti fitur sudah diimplementasikan.
- **Prioritas:** selesaikan proyek berkualitas lebih penting daripada banyak repository setengah jadi. Jangan menerapkan hook/performance pattern hanya untuk menyebutnya di CV.
- **Target jangka panjang:** bisa memahami, membangun, menguji, dan menjelaskan fitur dari requirement; dokumentasi resmi tetap boleh dibuka. Tidak diwajibkan menghafal semua sintaks atau menolak bantuan AI sepenuhnya.

## 2. Stack dan kondisi teknis terverifikasi

| Area | Implementasi saat diperiksa | Status |
|---|---|---|
| React | React 19.x (`package.json`: `^19.3.1`) | [DONE/VERIFIED] dependencies terpasang di manifest; tidak berarti build dijalankan |
| React Router | `react-router ^8.5.1`, data router, nested routes, `loader`, `Outlet`, `NavLink` | [DONE/VERIFIED] dari kode |
| TypeScript | `~6.0.3`, tipe loader dan `z.infer` | [DONE/VERIFIED] dari kode |
| Vite | `^8.3.6` | [DONE/VERIFIED] manifest |
| Tailwind CSS | `^4.3.5` | [DONE/VERIFIED] manifest, styling visual belum lengkap |
| Zod | `^4.6.7` | [DONE/VERIFIED] schema produk dan filter |
| API | `VITE_API_URL=https://dummyjson.com/products` (file `.env` **terlacak di Git**) | [DONE/VERIFIED] URL publik, bukan secret |
| Testing | Belum ada automated test framework pada `package.json` | [PLANNED] Vitest + React Testing Library |
| Build & lint | Tersedia script `npm run build`, `npm run lint` | **BELUM DIEKSEKUSI/VERIFIKASI DI SESI INI** |
| Known issue | `PROJECT_MAP.md` menyebut lint baseline Fast Refresh pada `src/ThemeProvider.tsx` | [OPEN/NOT RE-TESTED] |
| Deployment | Belum diverifikasi | [UNKNOWN] |

**Keamanan:** jangan taruh private key/secret di variabel `VITE_*`, frontend, atau Git. Auth DummyJSON adalah demo; proteksi route client-side **bukan** keamanan data server-side. Validasi input di frontend tidak menggantikan validasi di server untuk sistem nyata.

### Struktur file yang penting saat ini

```text
src/
├── App.tsx                              # createBrowserRouter + routes + shouldRevalidate
├── components/
│   ├── Layout.tsx                       # Header, Footer, Outlet, useNavigation, skeleton
│   └── ErrorBoundary.tsx                # Penanganan route/loader errors
├── features/products/
│   ├── ProductFilters.tsx               # UI kategori, brand, sort
│   ├── productFilters.ts                # parse URL + filter/sort + opsi
│   └── productSchema.ts                 # Zod Product, Product[] response
├── loaders/productsLoader.ts           # product list + detail loaders
├── pages/
│   ├── Products.tsx                     # useLoaderData, useSearchParams, useMemo
│   └── ProductDetail.tsx                # saat diperiksa baru judul + Back link
└── ThemeProvider.tsx                    # tema lokal; diketahui lint issue sebelumnya
```

## 3. Checkpoint kode terakhir — 2026-11-19 (review parsial)

### Sudah terbukti di kode (bukan sekadar rencana)

- [x] `productsLoader()` memakai `fetch`, `request.signal`, `response.ok`, `readJson()`, validasi Zod `productsResponseSchema.safeParse`, dan `Response` error (HTTP 502 untuk payload invalid).
- [x] `productDetailLoader()` memakai dynamic `params.id`, validasi `productSchema.safeParse`, pengembalian satu `Product`.
- [x] `Products.tsx` mengambil data via `useLoaderData<typeof productsLoader>()`, memakai URL search params `category`, `brand`, `sort`, dan `useMemo()` untuk filter/options/list.
- [x] `productFilters.ts` menangani invalid search params dengan Zod `.catch(undefined)`; sort `price-asc`/`price-desc` hanya pada array hasil `.filter()` sehingga array loader tidak dimutasi.
- [x] `App.tsx` memakai nested routes dan route-level `lazy()`; `shouldRevalidate` tidak re-fetch katalog hanya untuk perubahan query pada path yang sama.
- [x] `Layout.tsx` memakai `useNavigation()` + skeleton khusus jalur `/products`.
- [x] `ErrorBoundary.tsx` memproses `useRouteError()` dan `isRouteErrorResponse()`.
- [x] `ProductDetail.tsx` menyimpan URL query ketika kembali ke katalog (`useLocation()`), namun **detail UI masih sangat minim**.
- [x] Branch `feature/searchParams` dibanding `main`: ahead 7 / behind 0 pada 2026-11-19; HEAD `0118e31` (pembaruan roadmap, bukan bukti source code diubah pada commit tersebut).

### Belum ada bukti selesai

- [ ] Search by product name; pagination; robust empty state; aksesibilitas penuh.
- [ ] UI detail produk lengkap (image gallery, harga, deskripsi, rating, stok, quantity, add to bag).
- [ ] Shopping cart fungsional + persistence.
- [ ] Login/logout, refresh demo session, protected route.
- [ ] Form checkout dengan Zod, payment demo, order history.
- [ ] Automated tests, profiler measurements, README portofolio, verifikasi deployment.

### Pembelajaran syntax — progres diperbarui 2026-11-21

**Pisahkan status pembelajaran dari status implementasi**: `[REVIEWED]` berarti telah dijelaskan/diperiksa dalam chat, **bukan** bukti pengguna telah menguasai seluruh materi atau source code sudah diuji. `[LIVE CHECK PASSED]` berarti persyaratan mini-task lolos pemeriksaan otomatis yang tersedia, **bukan** jaminan TypeScript dapat dikompilasi atau logika bebas bug. Status fitur aplikasi tetap mengikuti bukti pada checkpoint.

| Tahap | File / fokus | Status belajar | Bukti / tindak lanjut |
|---|---|---|---|
| 1 | `src/features/products/productSchema.ts` — Zod + `z.infer` | **[REVIEWED]** | Kuis 4/4 benar; latihan schema user memenuhi aturan, dengan perbaikan konvensi nama dan `z.email()` untuk Zod 4. User paham string `"25"` gagal `z.number()`. |
| 2 | `src/loaders/productsLoader.ts` — fetch, `async/await`, Response, `safeParse`, detail loader | **[REVIEWED / RECALL TO RECHECK]** | User menulis `usersLoader()` sendiri. Alur utama benar, tetapi perlu memperbaiki `statusText: response.status` → `.statusText`, `safeParse(await data(response))` → `safeParse(data)`, dan `return result.user` → `result.data.users` (sesuai bentuk schema). Belum ada pengiriman ulang kode hasil koreksi. |
| 3 | `src/App.tsx` — React Router route config, loader, `lazy`, `RouterProvider` | **[COMPLETED — USER-REPORTED]** | Pengguna menyatakan revisi dan hasil kuis Tahap 3 telah selesai (2026-11-19); rincian jawaban kuis dan hasil uji lokal tidak tersedia di sesi pembaruan ini. |
| 4 | `src/pages/Products.tsx` — tahap dasar `useLoaderData`, render/map/empty state | **[REVIEWED / LEARNING COMPLETED]** | Revisi mini-task `Products.tsx` menerima penilaian mentor 6/6: useLoaderData, empty state, map/key, title, price, alt; penilaian statis, bukan lint/build/test. |
| 5 | `src/features/products/productFilters.ts` — parse query, opsi, filter/sort | **[LEARNING COMPLETED — USER SIGN-OFF]** | Segmen 1 dibahas & mini-task dicoba (4/5, koreksi `.optional()` belum dikirim ulang); Segmen 2 kuis 4/4, mini-task 5/5; Segmen 3 kuis 4/5, mini-task 5/5. Pengguna meminta tandai selesai pada 2026-11-21. Sisa recall Segmen 1 menjadi catatan opsional; tidak dinyatakan semua kriteria tes lolos. |
| 6 | `src/features/products/ProductFilters.tsx` — props, controlled inputs, callback | **[LEARNING COMPLETED — USER SIGN-OFF + MANUAL REVIEW]** | Kuis mandiri 6/6 benar setelah klarifikasi ulang nomor 2 dan 3. Mini-task A/B/C digabung menjadi `BookFilters`; versi awal pengguna memiliki kesalahan tipe `currentGenre`, controlled value, active-filter detection, tombol Reset, dan missing option. Mentor memberi koreksi/hints lalu full example atas permintaan pengguna. Pengguna kemudian meminta tahap ditandai selesai. Ini sign-off pembelajaran, bukan verifikasi compiler/lint/build/test. |
| 7 | `src/pages/Products.tsx` — integrasi `useSearchParams`, `useMemo` | **[PLANNED — NEXT LEARNING STAGE]** | Sambungkan UI `ProductFilters` dengan URL search params dan derivasi/filter data di parent. Verifikasi kecocokan nama props/tipe dengan kode `main` terbaru sebelum latihan. |
| 8 | `src/App.tsx` — pendalaman `shouldRevalidate` | **[PLANNED]** | Bahas tradeoff refresh/revalidation dan edge cases, meskipun syntax dikenalkan pada Tahap 3. |

**Konsep yang telah dibedah:**
- Tahap 1: `z.object`, `z.string`, `z.number`, `.trim`, `.min`, `.int`, `.positive`, `.nonnegative`, `.optional`, `z.array`, `z.infer<typeof schema>`, compile-time vs runtime.
- Tahap 2: `import type`, arrow function, implicit return, `new Response`, `throw` vs `return`, `async/await`, `Promise<unknown>`, `Promise<Product[]>`, destructuring, `fetch`, template literal, `request.signal`, `response.ok`, `try/catch`, parsing JSON, `.safeParse`, dynamic `params.id`.
- Tahap 3: array/object konfigurasi route, `path`, `children`, `index: true`, dynamic `:id`, **referensi fungsi** `loader: productsLoader` (bukan langsung memanggil `productsLoader()`), `lazy: async () => import(...)`, named export `Component`, `ErrorBoundary`, `RouterProvider`, operator `===`, `&&`, ternary `?:`.

**Catatan kualitas / klarifikasi:**
- `readJson()` pada loader menangkap error dari `response.json()` dan mengubahnya menjadi Response 502; `AbortError` ketika fetch dibatalkan juga dapat terkena penanganan ini. Bahas pembedaan abort vs malformed JSON pada sesi review, jangan refactor otomatis.
- `shouldRevalidate` pada `/products` menolak revalidasi ketika **hanya search query berubah di pathname yang sama**. Efektif untuk client-side filtering dataset penuh, tetapi perlu uji kebutuhan refresh dan perubahan data.
- `lazy()` pada data router dapat berjalan bersamaan dengan loader; jangan mengajarkan urutan keduanya selalu serial.
- Contoh `https://example.com/api/users` pada latihan adalah placeholder, bukan API siap pakai. Tidak ada bukti endpoint latihan pernah diuji.
- Jangan menandai Tahap 3 selesai hanya karena materi dijelaskan atau Live Review ditampilkan; tunggu hasil kuis/revisi serta bukti pemeriksaan yang relevan.

## 4. Roadmap implementasi — urutan prioritas

**Fase 1 — Foundation / Product discovery** (SAAT INI)

- [x] Data router + product loader/detail loader + Zod validation.
- [x] Filter kategori, brand, sort melalui `useSearchParams` + pure filtering.
- [x] Basic error boundary, navigation skeleton, route lazy.
- [ ] **Review manual branch `feature/searchParams`**: filter combinations, invalid query params, no results, refresh/back/forward URL, detail-back retains filters.
- [ ] Tambahkan unit test `productFilters`, schema dan behavior pilihan filter (Vitest); cek penempatan test dan setup.
- [ ] Jalankan **lokal** `npm run lint` dan `npm run build`; catat output nyata, perbaiki lint known issue secara tepat.
- [ ] Dokumentasi fitur, PR review, lalu **merge ke `main` hanya atas keputusan pengguna**.

**Fase 2 — Product detail & responsive visual** (NEXT setelah fase 1 stabil)

- [ ] Buat `feature/product-detail` **setelah sinkron dengan main**.
- [ ] Detail: gallery, thumbnail, nama, harga, diskon, review, brand, stok, deskripsi.
- [ ] Responsive mobile-first berdasarkan Figma MORA, grid dan tombol yang keyboard-accessible.
- [ ] Loading/empty/error states + image fallback + minimal component tests.

**Fase 3 — Cart + wishlist**

- [ ] Implement `ProductCard` dan komponen UI reusable (komposisi seperlunya).
- [ ] Cart dengan `useReducer`/Context bila memenuhi kebutuhan; jangan overengineer; quantity, remove, subtotal, stock limits, persistence di `localStorage`.
- [ ] Wishlist (frontend state + persistence); cart bisa diakses tanpa login.
- [ ] Uji reducer, storage serialization, edge cases (empty cart, reload, corrupted storage).

**Fase 4 — Auth + Protected Routes**

- [ ] Login/logout demo via DummyJSON auth, status loading, error, session, cek `/auth/me` bila sesuai kontrak API.
- [ ] Route `/checkout`, `/orders`, `/profile` membutuhkan login; katalog dan `/cart` tetap public. Wishlist bisa public dengan penyimpanan lokal, atau protected jika keputusan UX berubah.
- [ ] Preserve intended location: selesai login → kembali ke halaman sebelumnya.
- [ ] Pelajari beda `<Navigate>` saat render vs `redirect()` di loader, dan risiko loader memuat data protected sebelum guard UI.
- [ ] Jangan klaim proteksi client-side menggantikan server authorization.

**Fase 5 — Checkout & demo transaction**

- [ ] Form kontak + alamat dengan Zod; error field dan submission states; evaluasi React Router `action`/`useFetcher` bila cocok.
- [ ] Ringkasan biaya, konfirmasi stok dan harga **simulasi**, metode pembayaran **demo**.
- [ ] Demo success/failure + order history di localStorage atau IndexedDB; jelas bahwa ini bukan pembayaran uang asli.
- [ ] Validasi harga tidak didasarkan pada input pengguna untuk aplikasi nyata; jangan menampilkan status “paid” sebenarnya tanpa verifikasi backend.

**Fase 6 — Performance / Quality / Portfolio**

- [ ] React DevTools Profiler: ukur sebelum optimasi; pertimbangkan memoization hanya jika perlu.
- [ ] Accessibility: semantik HTML, labels, tab order, focus, aria, contrast, mobile touch targets.
- [ ] Unit/component/integration tests dan proses review; loading, empty, API fail, slow network, malformed data.
- [ ] English README lengkap: problem, stack, features, architecture, API limits, demo login, testing, screenshots, live link.
- [ ] Deployment verified; latihan interview berdasarkan keputusan teknis dan tradeoffs yang benar-benar ada.

### Rute target (tidak semua sudah diimplementasikan)

| Path | Akses yang direncanakan | Status |
|---|---|---|
| `/` | Public | Basic home tersedia |
| `/products` | Public | Ada |
| `/products/:id` | Public | Basic ada; perlu lengkapi |
| `/cart` | Public/guest | Planned |
| `/login` | Public | Planned |
| `/checkout` | Protected | Planned |
| `/orders` | Protected | Planned |
| `/profile` | Protected | Planned |
| `/wishlist` | Public/local atau Protected (keputusan nanti) | Planned |

## 5. Design handoff — Figma MORA

**Figma file:** https://www.figma.com/design/g7NRuCh1mApDRAn7kfLdf3

12 layar mobile yang dilaporkan sudah dibuat di Figma dengan frame editable:

1. Home  2. Catalog  3. Filter & Sort  4. Search Results
5. Product Detail  6. Shopping Bag  7. Checkout  8. Payment / Demo
9. Order Success  10. My Orders  11. Profile  12. Wishlist

Plus satu layar **MORA Mobile Design System**. Desain adalah *handoff* UI/UX; proses menerjemahkan ke React dibahas per screen dan per state. DummyJSON product images/metadata asli dapat berbeda dari mockup dan perlu diperiksa ketika dipakai.

Design tokens awal: primary `#6254EA`, background `#F8F9FC`, text `#182033`, font Inter, border radius sekitar 12–16px. Ukuran mobile 390x844; implementasi harus responsif untuk 320px, 375px, tablet, dan desktop (bukan fixed frame literal).

## 6. Aturan pembelajaran: **Syntax Breakdown** (WAJIB pada kode kiriman pengguna)

**Tujuan:** pengguna sanggup menerangkan dan menulis ulang kode sendiri, bukan menghafal skrip panjang secara mekanis.

Format untuk setiap potongan kode baru:

1. **Tujuan fitur:** Apa yang ingin dicapai dan hubungannya dengan halaman/user flow.
2. **Peta kode:** Nama file, input/output, dependency, kapan fungsi dieksekusi, siapa pemanggilnya.
3. **Potongan asli yang dikirim:** Jangan diam-diam mengubah sintaks; jika ada kesalahan tampilkan sebelum/sesudah.
4. **Bedah setiap bagian, dari kecil ke besar:** `const`/`let`, `=>`, `()`, `{}`, `[]`, `.`, `?`, `!`, `:`, generics `<T>`, destructuring, async/await, `return`, `throw`, dependency array, dsb. Jelaskan bentuk dan alasan penggunaannya **di konteks kode**.
5. **Versi sangat sederhana:** Analogi atau contoh kecil terpisah agar sintaks terasa familiar (misalnya `const { id } = params` vs `params.id`).
6. **Urutan eksekusi:** Step-by-step lifecycle/render/router/network; tunjukkan bentuk data input/output dan state penting; bedakan compile-time vs runtime.
7. **Alternatif & tradeoff:** `useEffect` vs loader, `.then` vs `await`, `parse` vs `safeParse`, `useMemo` vs tanpa memo — pilih berdasarkan kebutuhan, bukan klaim “wajib industri”.
8. **Edge case & error:** Periksa data kosong, API gagal, invalid JSON, loading, cancellation, undefined, accessibility, security.
9. **Ringkasan hafalan:** Tabel `syntax → fungsi → kapan digunakan` (padat agar dapat dicatat).
10. **Latihan recall:** Tanyakan 2–5 soal/mini-task relevan; biarkan pengguna mencoba sendiri. **Default: mini-task dengan Live Review lokal** sesuai protokol di bawah, jika tersedia. Jika user meminta solusi lengkap, boleh beri dengan penjelasan.

**Pacing:** satu konsep/segmen per sesi jika panjang; jangan menjelaskan fitur yang belum diminta secara berlebihan. Gunakan penjelasan bahasa Indonesia yang natural, contoh TypeScript/React Router mengikuti versi repo. Arahkan ke dokumentasi resmi jika ada API yang berubah.


### Aturan baru — PDF Syntax Breakdown bilingual (mulai 2026-11-21)

1. **Wajib bilingual untuk semua PDF Syntax Breakdown MORA:** setiap paragraf penjelasan bahasa Indonesia diikuti **terjemahan bahasa Inggris tepat di bawahnya**, bukan dijadikan satu paragraf. Bahasa Inggris memakai *italic*, ukuran sedikit lebih kecil, dan warna sekunder (mis. abu-abu kebiruan); teks Indonesia tetap utama.
2. **Terjemahan harus alami dan benar secara tata bahasa**, bukan terjemahan harfiah yang salah. Contoh: "Fungsi ini tidak melakukan filtering produk." -> *"This function does not filter products."*
3. Terapkan juga pada tujuan pembelajaran, bedah syntax, catatan penting, contoh penjelasan, tabel konseptual, pertanyaan kuis, instruksi mini-task, petunjuk, dan ringkasan. Untuk tabel sempit, tampilkan pasangan bahasa secara ringkas dalam satu sel atau baris di bawahnya tanpa membuat tabel meluber.
4. **Kode TypeScript/TSX asli tetap persis seperti repository** pada blok "Kode asli"; jangan menerjemahkan identifier, prop, keyword, nilai string, URL, atau sintaks. Potongan kode ilustrasi diberi label jelas dan dibedakan dari kode asli.
5. Urutan materi tetap **dasar -> contoh kecil -> kode asli -> alur eksekusi -> edge cases -> kuis -> mini-task**. Jangan menampilkan kunci jawaban kuis/solusi mini-task sebelum pengguna mencoba, kecuali diminta.
6. PDF harus dapat dibaca dengan nyaman di HP maupun laptop: heading jelas, jeda rapi, kode tidak terpotong, pasangan Indonesia/Inggris tetap berdekatan, dan pemeriksaan visual setiap halaman dilakukan sebelum dikirim.
7. **Status pembelajaran tidak sama dengan status fitur produksi**. Persetujuan pengguna untuk menutup tahap dapat dicatat sebagai `[LEARNING COMPLETED — USER SIGN-OFF]` walau ada catatan recall; jangan mengubahnya menjadi klaim automated test atau build lulus.


### Protokol Mini-task Live Review (DEFAULT mulai roadmap v1.1.0)

**Tujuan:** pengguna berlatih menulis kode sendiri di dalam chat, menekan **Review Kode**, lalu menerima hasil **Benar / Lolos pemeriksaan latihan** atau **Perlu perbaikan** per kriteria dengan penjelasan ringkas, **tanpa harus mengirim pesan/chat baru untuk setiap revisi**.

1. **Satu tugas kecil dan relevan:** pilih satu file/konsep yang sedang dipelajari; cantumkan tujuan, lokasi kode, asumsi import/export dan 3–7 acceptance criteria yang konkret. Gunakan kode source dari repository/branch terbaru yang dikirim pengguna, bukan menebak versi.
2. **Input editable dalam chat:** tampilkan editor/textarea berisi instruksi dan, jika sesuai, jawaban terakhir yang pengguna kirim. Sertakan tombol **Review Kode** dan **Reset**; pengguna bebas mencoba berulang kali tanpa memerlukan respons ChatGPT baru.
3. **Pemeriksaan langsung berbasis aturan:** saat tombol ditekan, validasi kriteria yang bisa diperiksa secara lokal (mis. route path, referensi `loader` tanpa `()`, case-sensitive import, keberadaan `lazy`, return `Component`). Tampilkan status masing-masing, ringkasan lulus/gagal, dan **petunjuk minimal untuk bagian yang salah**. Jangan langsung memberikan seluruh solusi kecuali diminta.
4. **Tidak hanya pencocokan teks kaku:** pertimbangkan variasi sintaks yang ekuivalen bila mampu. Jika pengecek sederhana tidak memahami variasi valid, tulis **'belum bisa diverifikasi otomatis'** atau tawarkan review AI; jangan menandai kesalahan secara pasti tanpa dasar.
5. **Batasan harus eksplisit:** pemeriksaan pola/regex di chat **tidak menjalankan TypeScript, build, aplikasi, unit test, network request, ESLint, atau memahami seluruh alur semantik**. Status 'Benar' hanya bermakna **persyaratan yang diperiksa terpenuhi**, bukan jaminan production-ready. Jangan klaim compiler/test telah lulus.
6. **Review ChatGPT sebagai jalur kedua:** sediakan opsi pengguna mengirim jawabannya untuk review semantik, error kompleks, jawaban alternatif, penjelasan lebih dalam, atau verifikasi status pembelajaran. Jangan otomatis mengirim setiap ketikan maupun mengirim pesan baru hanya untuk memberi label benar/salah.
7. **Fallback bila Live Review tidak tersedia:** berikan mini-task berbentuk teks/textarea biasa dan minta jawaban pengguna untuk di-review dalam chat, tanpa berpura-pura ada evaluasi langsung. Jangan menganggap antarmuka interaktif selalu persisten lintas chat/perangkat.
8. **Catat hasil secara jujur:** bedakan `[EXPLAINED]`, `[ATTEMPTED]`, `[LIVE CHECK PASSED]`, `[REVIEWED]`, dan `[RECALL VERIFIED]` menurut bukti nyata. Tombol sudah ditampilkan ≠ pengguna sudah lolos. Untuk menandai tahapan selesai, butuh jawaban/revisi yang terlihat dan diperiksa atau ringkasan hasil yang disampaikan pengguna; status proyek `[DONE/VERIFIED]` tetap memerlukan quality gate di §7.
9. **Pacing:** prioritaskan kuis konsep singkat bila relevan, diikuti satu mini-task; jangan paksakan mini-task panjang. Tetap izinkan pengguna menjawab sendiri dan meminta hint sebelum solusi.

**Contoh rubrik Tahap 3 (`App.tsx`, belum ditutup):** child route `path: "users"`; `loader: usersLoader` sebagai function reference; `ErrorBoundary`; `lazy: async () => ...`; dynamic import sesuai `./pages/Users` (case-sensitive di Linux); `return { Component: Users }`. Ini adalah **latihan ilustrasi**, bukan penambahan route `/users` sungguhan ke repository MORA.

### Aturan AI mentor / reviewer

- **Mode belajar default: AI sebagai mentor, bukan autopilot.** Mulai dari petunjuk, konsep, lalu contoh kecil; solusi lengkap saat diminta atau saat benar-benar dibutuhkan.
- Ketika pengguna meminta code review: jelaskan **apa yang sudah benar**, risiko nyata, prioritas bug, dan perubahan paling kecil. Hindari rewrite seluruh file jika tidak perlu.
- Sebelum menambah dependency: jelaskan alasannya dan tradeoff. Hindari menjejalkan library baru.
- Bedakan **syntax error**, **type error**, **runtime error**, dan **logic bug**; tunjukkan cara membaca console/error overlay/Network tab.
- Minta pengguna mencoba implementasi lalu melakukan pengecekan: `lint`, `build`, dan test yang tersedia; **jangan mengklaim tes lulus tanpa bukti**.
- Dokumentasi resmi bukan “curang”; tujuan mandiri adalah mampu memecahkan masalah tanpa disuapi solusi AI, bukan menghafal semua fungsi.
- Latih jawaban interview sederhana **“Mengapa menggunakan X, bukan Y?”**, termasuk versi bahasa Inggris jika diperlukan; jawaban harus sesuai pengalaman sebenarnya.

## 7. Git, quality gate, dan definition of done

**Workflow aman:** `main` stabil → branch fitur → commit kecil → lint/test/build → PR → review → merge → sinkronkan `main` → branch berikutnya. Pengguna mengendalikan publish/commit/merge.

Sebuah fitur hanya **DONE/VERIFIED** bila:

- Requirement jelas; UI mengikuti desain pada viewport relevan; fitur berfungsi untuk skenario normal dan edge case penting.
- Tipe TypeScript sesuai; input/data eksternal divalidasi di trust boundary seperlunya.
- `npm run lint`, `npm run build`, dan tes terkait **telah benar-benar dijalankan** (status dan lingkungan tercatat). Kalau gagal atau belum dijalankan, status tetap IN PROGRESS.
- Sudah manual check: navigasi maju/mundur, refresh URL, state kosong/loading/error, keyboard, mobile.
- PR/review bila fitur siap merge; **merge tidak diasumsikan hanya karena branch ahead**.
- Roadmap diperbarui dengan bukti yang tersedia, bukan asumsi.

**Known technical backlog (belum ditutup):**
- Lint issue Fast Refresh di `ThemeProvider.tsx` (disebut di `PROJECT_MAP.md`, perlu reproduce).
- Perbaikan error treatment untuk aborted fetch pada `readJson()`.
- `README.md` masih template default Vite menurut review sebelumnya.
- `ProductDetail.tsx` masih placeholder judul saja; UI detail belum selesai.
- Test framework belum ada dan deployment belum diverifikasi.

## 8. Materi Scrimba FDCP yang dipadankan ke proyek

- **React Router:** nested routes, `Outlet`, dynamic params, loaders, `useLoaderData`, error boundary, navigation state, URL search params; lanjut protected route, auth, redirect, actions/useFetcher saat diperlukan.
- **Reusability:** composable UI, Context, custom hooks, reusable form/input/product card, reducer bila cocok.
- **Performance:** render lifecycle, StrictMode, lazy routes/code splitting, DevTools Profiler, referential equality, `React.memo`, `useMemo`, `useCallback`, dan kemungkinan `Suspense` **jika ada use case**.
- **Prioritas:** memahami *mengapa* sebuah API digunakan. Jangan memaksakan setiap materi Scrimba harus muncul di proyek.
- Versi/lesson Scrimba dapat berubah. Jika daftar isi resmi dibutuhkan untuk mapping yang presisi, verifikasi lagi dari kurikulum saat itu; jangan menganggap urutan/topik kursus yang terdahulu selalu identik.

## 9. Format update roadmap wajib setiap sesi

### Aturan update satu file yang sama

1. Baca versi ini terlebih dahulu; baca kode/diff GitHub dari **tautan repository/branch/commit terbaru yang diberikan pengguna**. Bila pengguna belum mengirim perubahan referensi, gunakan referensi terakhir yang terverifikasi di metadata; jangan otomatis menganggap branch sebelumnya masih aktif setelah pengguna memberi tautan baru.
2. **Jangan hapus histori penting atau rencana yang belum dikerjakan.** Tandai item selesai hanya dengan bukti; tambahkan item/bug jika ada.
3. Perbarui metadata `Roadmap version` (contoh 1.0.1 untuk log progres; minor untuk perubahan roadmap penting), `Last verified`, branch, dan `Last learning topic`.
4. Perbarui `Checkpoint`, checkboxes fase terkait, `Known backlog`, serta **Next Action** di bawah. Pada pembelajaran, tuliskan apakah mini-task baru **ditampilkan**, **dicoba**, **lulus Live Review**, atau **direview manual**; jangan menyamakan keempatnya.
5. Tambahkan entri `Change Log` berupa tanggal, pekerjaan, bukti, dampak, serta kendala terbuka.
6. Simpan ulang file dengan **nama yang sama** di `/Projects/MORA/MORA_PROJECT_ROADMAP.md` jika akses Library tersedia. Jika perlu pembaruan ke GitHub, **minta pengguna untuk menyuruhnya** atau kirim file unduhan untuk disalin ke repo `docs/`.
7. Tunjukkan tautan roadmap terbaru / file download kepada pengguna setiap kali ada pembaruan. Jika save gagal, nyatakan dengan jelas.
8. Untuk mini-task, catat rubrik dan bukti hasil yang tersedia; keputusan **Live Review** berlaku pada pengalaman belajar di chat, bukan fitur yang harus ditambahkan ke kode produksi MORA.

### Template ringkas sesi baru

```markdown
### Session log — YYYY-MM-DD
- Task / user request:
- Branch / commit examined:
- Files reviewed:
- Changes actually made (if any):
- Verification performed (lint/build/tests/manual):
- Syntax practiced and recall result:
- Decisions / tradeoffs:
- Outstanding bugs / limitations:
- Roadmap status changes:
- NEXT ACTION (one small task):
```

### Session log — 2026-11-19 (sinkronisasi v1.0.1 dari GitHub)
- Task / user request: lanjut Syntax Breakdown Tahap 3 dan siapkan roadmap sesuai source terbaru.
- Branch / commit examined: `feature/searchParams` @ `60363982c368c4d79151292e16b35b38138343f5` (catatan pada roadmap GitHub v1.0.1).
- Files reviewed: `docs/MORA_PROJECT_ROADMAP.md`, `src/App.tsx`, `src/loaders/productsLoader.ts`, `src/features/products/productSchema.ts`, `AGENTS.md`.
- Changes actually made: roadmap v1.0.1 dibuat pada sesi terdahulu; kemudian di-push oleh pengguna pada commit `0118e31`.
- Verification performed: pembacaan kode GitHub pada sesi terdahulu; tidak ada bukti lint/build/tests.
- Syntax practiced and recall result: Tahap 1 4/4; Tahap 2 latihan usersLoader direview, perlu revisi; Tahap 3 breakdown sudah diberikan.
- Roadmap status changes: pembaruan status belajar, bukan penyelesaian fitur.

### Session log — 2026-11-19 (protokol Live Review v1.1.0)
- Task / user request: jadikan mini-task Live Review sebagai metode default Syntax Breakdown; pengguna akan mengirim referensi repo/branch baru saat berubah.
- Branch / commit examined: `amri7x/e-commerce`, `feature/searchParams` @ `0118e31cd1b084f5abbecc9d91a0fa7d2bff7331` (GitHub). Compare `main`: ahead 7, behind 0.
- Files reviewed: roadmap v1.0.1 di GitHub; code `src/App.tsx`, `src/loaders/productsLoader.ts`, `src/pages/Products.tsx`, `src/features/products/productFilters.ts`, `src/features/products/ProductFilters.tsx`, `src/pages/ProductDetail.tsx`, `package.json`.
- Changes actually made: roadmap v1.1.0 diperbarui; protokol mini-task Live Review dan prioritas referensi repo ditambahkan; tidak mengubah source aplikasi, tidak commit/push GitHub.
- Verification performed: pemeriksaan konten source dan commit GitHub. **Lint, build, automated tests, dan Live Review revisi pengguna belum dijalankan/terbukti**.
- Syntax practiced and recall result: pengguna mengirim mini-task route `/users`; hampir benar, tetapi lupa properti `loader` dan menulis `./pages/users` alih-alih `./pages/Users`. Contoh Live Review interaktif sudah disediakan; revisi dan hasil kuis belum terkonfirmasi.
- Decisions / tradeoffs: Live Review lokal menjadi default ketika tersedia, dengan caveat bukan compiler; ChatGPT review tetap tersedia untuk logika dan solusi alternatif.
- Outstanding bugs / limitations: backlog teknis §7 terbuka; input UI interaktif tidak otomatis menetap antar chat atau tersimpan sebagai bukti penilaian.
- Roadmap status changes: **Tahap 3 tetap IN PROGRESS**; Fase 1 aplikasi tetap IN PROGRESS.
- NEXT ACTION (one small task): koreksi mini-task route `/users` via Live Review, lalu bahas function reference vs call vs arrow function dan konfirmasi hasil kuis. Setelah itu Tahap 4 `Products.tsx` dasar.

### NEXT ACTION — prioritas terdekat (2026-11-26)

**Learning Mode:** Tahap 6 `src/features/products/ProductFilters.tsx` dinyatakan **LEARNING COMPLETED — USER SIGN-OFF + MANUAL REVIEW**. Kuis mandiri 6/6; Mini-task A/B/C dikerjakan sebagai satu latihan `BookFilters`, direview dan dibahas, kemudian contoh lengkap diberikan atas permintaan pengguna. Catatan: pengguna belum menyerahkan ulang full code versi revisinya sendiri; sign-off ini mencatat penyelesaian belajar berdasarkan review dan contoh pembahasan, bukan bukti compiler/test.

Lanjut **Tahap 7 — integrasi `ProductFilters.tsx` dengan `Products.tsx`**: verifikasi kontrak props aktual di `main`, telusuri `useSearchParams`, callback update/reset URL, dan `useMemo`; tetap gunakan pendekatan hint-first.

**Development Mode — Fase 1 tetap IN PROGRESS:** review kombinasi filter, invalid query, empty state, URL refresh/back/forward, navigasi kembali dari detail; jalankan `npm run lint` dan `npm run build` di lingkungan yang sesuai sebelum PR/merge.

**Sinkronisasi referensi:** pada 2026-11-26, link yang diberikan menunjuk `main`. Roadmap dan `ProductFilters.tsx` serta `productFilters.ts` pada `main` telah diperiksa. Tidak ada perubahan source aplikasi, commit, push, merge, lint, build, atau automated test yang dilakukan dalam sesi ini.

### Session log — 2026-11-21 (Tahap 5 sign-off + PDF Tahap 6 + aturan bilingual)
- Task / user request: tandai Tahap 5 selesai, perbarui roadmap dengan aturan PDF bilingual, lanjut Tahap 6 dalam bentuk PDF lengkap.
- Branch / commit examined: `feature/searchParams` @ `380991d044c09ce4ad72a82d5328fbf08e52b9f2` (commit source sebelum update roadmap).
- Files reviewed: `src/features/products/productFilters.ts`, `src/features/products/ProductFilters.tsx`, `src/pages/Products.tsx`, `docs/MORA_PROJECT_ROADMAP.md`.
- Changes actually made: status belajar Tahap 3-6 dan protokol bilingual PDF diperbarui; source aplikasi tidak diubah.
- Verification performed: review kode GitHub dan jawaban di chat. `npm run lint`, build, dan automated test belum dijalankan.
- Syntax practiced and recall result: Tahap 5 Segmen 2 dan 3 lulus mini-task 5/5; Segmen 1 ada koreksi kecil yang belum dikirim ulang, tetapi pengguna meminta sign-off. Tahap 6 PDF disiapkan, belum ada jawaban.
- Decisions / tradeoffs: terjemahan Inggris italic langsung di bawah teks Indonesia; bedakan sign-off belajar dari validasi produksi.
- Outstanding bugs / limitations: catatan recall Segmen 1 (`.optional()`, `keyof`, null/undefined) dapat diulas lagi; tidak menghambat memulai Tahap 6.
- Roadmap status changes: Tahap 5 `LEARNING COMPLETED — USER SIGN-OFF`; Tahap 6 `IN PROGRESS — MATERIAL PREPARED`; Fase 1 kode tetap IN PROGRESS.
- NEXT ACTION (one small task): mini-task awal Tahap 6 tentang tipe props dan destructuring.

### Session log — 2026-11-26 (Tahap 6 sign-off + sinkronisasi main/Library)
- Task / user request: tandai Tahap 6 selesai dan bandingkan/perbarui roadmap pada Library `/Projects/MORA/` dengan GitHub `main`.
- Branch / commit examined: GitHub default branch `main` (repository metadata menyatakan default branch `main`); roadmap blob SHA `8960c2266aaa5c9d0f00702133cad85af7b9efb0`; source `ProductFilters.tsx` blob SHA `c444b0c779a3676b666462f4d17783fd9a9ca35f`. Tidak menetapkan working branch aktif karena tautan yang diberikan menunjuk `main`.
- Files reviewed: Library `/Projects/MORA/MORA_PROJECT_ROADMAP.md` version 2; GitHub `docs/MORA_PROJECT_ROADMAP.md`; `src/features/products/ProductFilters.tsx`; `src/features/products/productFilters.ts`.
- Changes actually made: roadmap disinkronkan ke v1.2.1; metadata, tahap 6, next action Tahap 7, session log, dan change log diperbarui. Source aplikasi tidak diubah.
- Verification performed: manual review jawaban kuis dan mini-task dalam chat; pembacaan file GitHub dan Library. Kuis 6/6. Mini-task gabungan A/B/C dibahas; full example diberikan atas permintaan pengguna. **Lint/build/automated tests belum dijalankan**; tidak ada klaim compiler pass.
- Syntax practiced and recall result: `import type`, callback signature `(name, value) => void`, `??` fallback, dynamic `.map()`, conditional rendering `&&`, controlled select, missing option, Boolean active state, `disabled`, `onClick` callback reference.
- Decisions / tradeoffs: Tahap 6 ditutup sebagai penyelesaian pembelajaran berdasarkan persetujuan pengguna dan review mentor; tidak dinaikkan menjadi status implementasi source MORA. Karena pengguna meminta kode lengkap, mentor memberikan contoh gabungan `BookFilters`.
- Outstanding bugs / limitations: pengguna belum mengirim ulang revisi `BookFilters` setelah menerima full example; contoh latihan tidak otomatis masuk source repo. Fase 1 quality gates dan backlog tetap terbuka.
- Roadmap status changes: Tahap 6 `LEARNING COMPLETED — USER SIGN-OFF + MANUAL REVIEW`; Tahap 7 tetap `PLANNED` dan menjadi next learning stage; Fase 1 tetap `IN PROGRESS`.
- NEXT ACTION (one small task): mulai Tahap 7 dengan tracing props `ProductFilters` pada source `main` dan alur `useSearchParams` di `Products.tsx`.

## 10. Change Log / Audit Trail

| Tanggal | Versi | Aktivitas dan bukti | Dampak status |
|---|---|---|---|
| 2026-11-18 | 1.0.0 | Roadmap awal dibuat dari diskusi, review kode GitHub (branch `feature/searchParams` ahead 3 dari `main`), `PROJECT_MAP.md`, `package.json`, dan tautan Figma mobile MORA. Pembelajaran terakhir membedah `productsLoader.ts` dan `productDetailLoader`. | Fase 1 masih IN PROGRESS. Tidak ada source code yang diubah / PR yang di-merge oleh pembuatan roadmap. |
| 2026-11-19 | 1.0.1 | GitHub roadmap commit `0118e31` (berasal dari review commit sebelumnya `60363982`). Menambahkan status rinci Syntax Breakdown Tahap 1–8 serta session log. | Tahap 3 telah dijelaskan; pada versi ini kuis/mini-task masih pending. Fase 1 tetap IN PROGRESS. |
| 2026-11-19 | 1.1.0 | Review GitHub `feature/searchParams` HEAD `0118e31` (ahead 7/behind 0), sinkronisasi roadmap 1.0.1, tambahkan protokol Live Review untuk mini-task dan aturan referensi repo dinamis. Catat percobaan mini-task Tahap 3 dan dua koreksi yang masih harus diperiksa. | Mini-task interaktif menjadi metode belajar default ketika didukung; **Tahap 3 belum dinyatakan selesai**; tidak ada commit, push, merge, build, lint, atau tes aplikasi dalam sesi ini. |
| 2026-11-21 | 1.2.0 | Verifikasi source `380991d`, catat Tahap 4 lulus review 6/6, Tahap 5 user sign-off (Segmen 2 dan 3 lulus, Segmen 1 ada catatan), siapkan materi PDF Tahap 6; tambah aturan wajib PDF bilingual: Indonesia + terjemahan Inggris italic tepat di bawahnya. | Pembelajaran Tahap 5 ditutup berdasarkan instruksi pengguna; Tahap 6 dimulai. Fase 1 aplikasi masih IN PROGRESS; tidak menyatakan lint/build/test sukses. |
| 2026-11-26 | 1.2.1 | Bandingkan Library roadmap v1.2.0 dengan GitHub `main`; periksa `ProductFilters.tsx` dan `productFilters.ts`; catat kuis Tahap 6 6/6 serta mini-task A/B/C yang direview manual dan contoh lengkap yang diminta pengguna. | Tahap 6 ditutup sebagai **LEARNING COMPLETED — USER SIGN-OFF + MANUAL REVIEW**. Tahap 7 menjadi next learning stage. Fase 1 tetap IN PROGRESS; source MORA tidak diubah dan lint/build/tests tidak dijalankan. |

---

> **Ingat:** Roadmap memandu proses belajar dan membantu kelanjutan lintas chat; keberhasilan sebuah fitur harus terbukti dari kode dan verifikasi. Tidak ada proses background/autoupdate; sesi baru harus secara eksplisit membuka dan memperbarui file ini setelah progres berubah.