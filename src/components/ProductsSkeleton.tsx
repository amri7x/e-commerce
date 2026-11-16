
export const ProductsSkeleton = () => {
  return (
    <section
      role="status"
      aria-label="Loading products"
      className="mx-auto w-full max-w-8xl p-6"
    >
      {/* Skeleton produk */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {Array.from({ length: 12 }, (_, index) => (
          <div
            key={index}
            className="flex animate-pulse flex-col gap-3"
          >
            {/* Skeleton judul */}
            <div className="mb-6 h-8 w-48 animate-pulse rounded-lg bg-app-bg" />

            {/* Gambar */}
            <div className="aspect-6/6 w-full rounded-xl bg-app-bg" />

            {/* Nama produk */}
            <div className="h-5 w-4/5 rounded bg-app-bg" />

            {/* Harga */}
            <div className="h-4 w-2/5 rounded bg-app-bg" />
          </div>
        ))}
      </div>
    </section>
  );
}