// Card UI for a single product (image, name, price, actions)

import type { Product } from "../../types"; // import shared type

// Component props are strongly typed: product must match Product shape
export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="rounded-2xl border overflow-hidden hover:shadow-lg transition">{/* card container */}
      {/* keep images square using aspect-square for consistency */}
      <img src={product.image} alt={product.name} className="w-full aspect-square object-cover" />

      {/* text + actions area */}
      <div className="p-4">
        <h4 className="font-semibold">{product.name}</h4>
        <p className="mt-1 text-blue-600 font-bold">₹{product.price}</p>

        {/* action buttons */}
        <div className="mt-3 flex gap-2">
          <button className="px-4 py-2 rounded-xl border hover:bg-gray-50">Add to cart</button>
          <button className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700">Buy now</button>
        </div>
      </div>
    </div>
  );
}
