


import ProductCard from "./ProductCard";          // reuse the card component// The "Popular right now" section with a 4-card grid

import type { Product } from "../types";          // shared type

// temporary placeholder data; later you’ll fetch from backend
const sampleProducts: Product[] = [
  {id: 1, name: "श्रीमद् भगवद् गीता", price: 799, image: "https://m.media-amazon.com/images/I/91msEbTletL._SY522_.jpg"},
  { id: 2, name: "Clean Code", price: 449, image: "https://picsum.photos/seed/book2/400/400" },
  { id: 3, name: "Deep Work", price: 349, image: "https://picsum.photos/seed/book3/400/400" },
  { id: 4, name: "Pragmatic Programmer", price: 499, image: "https://picsum.photos/seed/book4/400/400" },
];

export default function Popular() {
  return (
    <section id="popular" className="mx-auto max-w-7xl px-4 py-12">{/* container + spacing */}
      {/* section header with a small action link */}
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl font-bold">Popular right now</h2>
        <a className="text-sm text-blue-600 hover:underline" href="#">View all</a>
      </div>

      {/* responsive grid: 2 columns on small screens, 4 on large */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sampleProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
