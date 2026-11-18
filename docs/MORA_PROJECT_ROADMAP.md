# MORA — Project Roadmap & Learning Protocol

> **SINGLE SOURCE OF TRUTH untuk kelanjutan proyek MORA dan pembelajaran syntax.**
> Saat memulai chat baru: cari/baca file ini **dan verifikasi kondisi repository terbaru** sebelum memberi saran atau mengubah status.
> **File roadmap tidak memperbarui dirinya sendiri.** Setelah sesi coding/review yang menghasilkan perubahan progres, asisten sebaiknya memperbarui file ini dalam sesi yang sama ketika tersedia akses penyimpanan. Tidak ada pembaruan otomatis saat chat tidak aktif.

| Metadata | Nilai |
|---|---|
| Nama proyek | MORA — DummyJSON E-commerce (frontend portfolio/capstone) |
| Roadmap version | **1.0.0** |
| Last verified | **2026-11-18** (GitHub: compare `main` vs `feature/searchParams`; `PROJECT_MAP.md`; `package.json`; kode telah diperiksa pada percakapan ini) |
| Last learning topic | Bedah `src/loaders/productsLoader.ts` sampai `productDetailLoader`, async/await, destructuring, Response, Zod |
| Status utama | **Fase 1: katalog + filter URL; belum merge; fitur detail masih minimal** |
| GitHub repo | https://github.com/amri7x/e-commerce |
| Current feature branch (verified) | `feature/searchParams` — **ahead 3**, behind 0 dibanding `main` (pemeriksaan 2026-11-18; dapat berubah) |
| Figma mobile design | https://www.figma.com/design/g7NRuCh1mApDRAn7kfLdf3 |
| Library canonical path (jika berhasil disimpan) | `/Projects/MORA/MORA_PROJECT_ROADMAP.md` |
| Target pekerjaan | Junior/Entry-level Frontend Web Developer remote internasional; bangun bukti kemampuan, bukan sekadar demo kosmetik |

## 0. Instruksi wajib untuk setiap chat baru

**Baca bagian ini dulu; jangan menyimpulkan status berdasarkan roadmap lama tanpa memverifikasi kode.**

1. Identifikasi tujuan chat baru dan kode/branch/commit/diff terbaru yang diberikan pengguna. Jangan meminta ulang informasi yang sudah tersedia.
2. Baca file roadmap terbaru dari ChatGPT Library di `/Projects/MORA/MORA_PROJECT_ROADMAP.md` (atau gunakan file yang dilampirkan pengguna). Jika tersedia versi di repository, bandingkan versi/tanggal; tanyakan hanya jika ada konflik penting.
3. Periksa implementasi sesungguhnya di GitHub `amri7x/e-commerce`, terutama **branch yang sedang dikerjakan**, saat task bergantung pada status saat ini. File roadmap adalah catatan, **kode adalah sumber kebenaran fitur**.
4. Perlakukan tiga status secara tegas: **[DONE/VERIFIED]** ada bukti implementasi dan review; **[IN PROGRESS]** ada pengerjaan tetapi belum memenuhi acceptance criteria; **[PLANNED]** belum terbukti di kode. Jangan menandai DONE hanya karena pernah dibahas atau ada desain Figma.
5. Saat pengguna memberikan kode, **utamakan membedah kode yang benar-benar dikirim** daripada langsung mengganti semua pendekatan atau menggenerasikan solusi panjang. Patuhi *Learning Protocol* di bawah.
6. Setelah menyelesaikan pekerjaan yang mengubah progress/keputusan/issue: revisi roadmap **dalam sesi tersebut**: tanggal, branch/commit yang dicek, status, keputusan, blocker, `Next Action`, `Change Log`. Simpan ke file Library yang sama jika akses tersedia, dan berikan tautan unduhan versi baru. Jangan hanya menyatakan “sudah saya ingat”.
7. **Tidak melakukan commit, push, merge, deployment, perubahan akun, atau modifikasi repository tanpa permintaan eksplisit.** Review dan roadmap tidak berarti otomatis menyentuh source code.
8. Jika tidak bisa membaca repo, tidak bisa menyimpan ulang Library, atau tidak ada bukti test, tuliskan keterbatasannya; **jangan membuat status atau hasil pengujian palsu**.

**Prompt pendek untuk chat baru (salin dan kirim):**

> Lanjutkan proyek MORA. Cari dan baca `MORA_PROJECT_ROADMAP.md` di Library pada `/Projects/MORA/`. Bandingkan dengan kondisi branch GitHub `amri7x/e-commerce` terbaru atau kode/diff yang saya lampirkan. Gunakan aturan *Syntax Breakdown* dan AI mentor di roadmap. Kita kerjakan satu target kecil saja. Setelah selesai, perbarui file roadmap yang sama: status, apa yang diverifikasi, catatan pembelajaran, dan langkah berikutnya. Jangan commit/merge otomatis.

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

## 3. Checkpoint kode terakhir — 2026-11-18

### Sudah terbukti di kode (bukan sekadar rencana)

- [x] `productsLoader()` memakai `fetch`, `request.signal`, `response.ok`, `readJson()`, validasi Zod `productsResponseSchema.safeParse`, dan `Response` error (HTTP 502 untuk payload invalid).
- [x] `productDetailLoader()` memakai dynamic `params.id`, validasi `productSchema.safeParse`, pengembalian satu `Product`.
- [x] `Products.tsx` mengambil data via `useLoaderData<typeof productsLoader>()`, memakai URL search params `category`, `brand`, `sort`, dan `useMemo()` untuk filter/options/list.
- [x] `productFilters.ts` menangani invalid search params dengan Zod `.catch(undefined)`; sort `price-asc`/`price-desc` hanya pada array hasil `.filter()` sehingga array loader tidak dimutasi.
- [x] `App.tsx` memakai nested routes dan route-level `lazy()`; `shouldRevalidate` tidak re-fetch katalog hanya untuk perubahan query pada path yang sama.
- [x] `Layout.tsx` memakai `useNavigation()` + skeleton khusus jalur `/products`.
- [x] `ErrorBoundary.tsx` memproses `useRouteError()` dan `isRouteErrorResponse()`.
- [x] `ProductDetail.tsx` menyimpan URL query ketika kembali ke katalog (`useLocation()`), namun **detail UI masih sangat minim**.
- [x] Branch `feature/searchParams` dibanding `main`: ahead 3 / behind 0 pada 2026-11-18.

### Belum ada bukti selesai

- [ ] Search by product name; pagination; robust empty state; aksesibilitas penuh.
- [ ] UI detail produk lengkap (image gallery, harga, deskripsi, rating, stok, quantity, add to bag).
- [ ] Shopping cart fungsional + persistence.
- [ ] Login/logout, refresh demo session, protected route.
- [ ] Form checkout dengan Zod, payment demo, order history.
- [ ] Automated tests, profiler measurements, README portofolio, verifikasi deployment.

### Pembelajaran syntax terakhir

File yang **sudah dibedah secara konseptual** dalam percakapan ini: `src/loaders/productsLoader.ts`.

- Import biasa vs `import type`; named import; `const`; Vite `import.meta.env`.
- Arrow function, implicit return, `new Response`, `throw` vs `return`.
- `async`, `await`, `Promise<unknown>`, `Promise<Product[]>`, `Promise<Product>`.
- Function parameter destructuring `({ request, params }: LoaderFunctionArgs)`.
- `fetch(url, options)`, template literal, `request.signal`, `response.ok`.
- `try/catch`, parsing JSON, Zod `safeParse`, pembatasan tipe `unknown`.
- Dynamic URL `:id`, `params.id`, `useLoaderData<typeof loader>()`.
- Perbandingan `useEffect` data fetching vs React Router loader.

**Catatan kualitas untuk belajar lebih lanjut:** `readJson()` yang menangkap semua error `response.json()` lalu melempar 502 juga dapat menangkap `AbortError` karena request dibatalkan. Nanti bahas pembedaan abort vs invalid JSON; jangan otomatis mengganti kode tanpa konteks.

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
10. **Latihan recall:** Tanyakan 2–5 soal/mini-task relevan; biarkan pengguna mencoba sendiri. Jika user meminta solusi lengkap, boleh beri dengan penjelasan.

**Pacing:** satu konsep/segmen per sesi jika panjang; jangan menjelaskan fitur yang belum diminta secara berlebihan. Gunakan penjelasan bahasa Indonesia yang natural, contoh TypeScript/React Router mengikuti versi repo. Arahkan ke dokumentasi resmi jika ada API yang berubah.

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

1. Baca versi ini terlebih dahulu; baca kode/diff GitHub terbaru yang relevan.
2. **Jangan hapus histori penting atau rencana yang belum dikerjakan.** Tandai item selesai hanya dengan bukti; tambahkan item/bug jika ada.
3. Perbarui metadata `Roadmap version` (contoh 1.0.1 untuk log progres; minor untuk perubahan roadmap penting), `Last verified`, branch, dan `Last learning topic`.
4. Perbarui `Checkpoint`, checkboxes fase terkait, `Known backlog`, serta **Next Action** di bawah.
5. Tambahkan entri `Change Log` berupa tanggal, pekerjaan, bukti, dampak, serta kendala terbuka.
6. Simpan ulang file dengan **nama yang sama** di `/Projects/MORA/MORA_PROJECT_ROADMAP.md` jika akses Library tersedia. Jika perlu pembaruan ke GitHub, **minta pengguna untuk menyuruhnya** atau kirim file unduhan untuk disalin ke repo `docs/`.
7. Tunjukkan tautan roadmap terbaru / file download kepada pengguna setiap kali ada pembaruan. Jika save gagal, nyatakan dengan jelas.

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

### NEXT ACTION — prioritas terdekat (2026-11-18)

**Tuntaskan dan review `feature/searchParams` sebelum pindah fitur besar.** Pada chat berikutnya, pengguna dapat mengirim kode/diff terbaru dari VS Code untuk membedah syntax dan memeriksa behavior kategori, brand, sort, invalid query, empty results, dan tautan detail → kembali ke katalog. Jika sudah sesuai, lanjut setup test dasar dan verifikasi lokal sebelum PR/merge.

**Jika pengguna ingin mempelajari materi secara terpisah:** lanjut mini-task `userLoader()` DummyJSON `/users/1` menggunakan `async/await`, `fetch`, `response.ok`, error handling, tanpa AI menulis solusi dulu.

## 10. Change Log / Audit Trail

| Tanggal | Versi | Aktivitas dan bukti | Dampak status |
|---|---|---|---|
| 2026-11-18 | 1.0.0 | Roadmap awal dibuat dari diskusi, review kode GitHub (branch `feature/searchParams` ahead 3 dari `main`), `PROJECT_MAP.md`, `package.json`, dan tautan Figma mobile MORA. Pembelajaran terakhir membedah `productsLoader.ts` dan `productDetailLoader`. | Fase 1 masih IN PROGRESS. Tidak ada source code yang diubah / PR yang di-merge oleh pembuatan roadmap. |

---

> **Ingat:** Roadmap memandu proses belajar dan membantu kelanjutan lintas chat; keberhasilan sebuah fitur harus terbukti dari kode dan verifikasi. Tidak ada proses background/autoupdate; sesi baru harus secara eksplisit membuka dan memperbarui file ini setelah progres berubah.
