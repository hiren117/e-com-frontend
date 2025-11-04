import './App.css'

type Product = { id: number; name: string; price: number; image: string };

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="rounded-2xl border overflow-hidden hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full aspect-square object-cover" />
      <div className="p-4">
        <h4 className="font-semibold">{product.name}</h4>
        <p className="mt-1 text-blue-600 font-bold">₹{product.price}</p>
        <div className="mt-3 flex gap-2">
          <button className="px-4 py-2 rounded-xl border hover:bg-gray-50">Add to cart</button>
          <button className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700">Buy now</button>
        </div>
      </div>
    </div>
  );
}

function App() {
  
  {/*const oneProduct: Product = {
    id: 1,
    name: "श्रीमद् भगवद् गीता",
    price: 299,
    image: "https://m.media-amazon.com/images/I/91msEbTletL._SY522_.jpg",
  };
  */}   
  const sampleProducts: Product[] = [
    {id: 1, name: "श्रीमद् भगवद् गीता", price: 799, image: "https://m.media-amazon.com/images/I/91msEbTletL._SY522_.jpg"},
    { id: 2, name: "Clean Code", price: 449, image: "https://picsum.photos/seed/book2/400/400" },
  { id: 3, name: "Deep Work", price: 349, image: "https://picsum.photos/seed/book3/400/400" },
  { id: 4, name: "Pragmatic Programmer", price: 499, image: "https://picsum.photos/seed/book4/400/400" },

  ];

  return (
     <>
      <header className="sticky top-0 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
          <a className="text-xl font-bold tracking-tight" href="/">📚 BookBazaar</a>
          <nav className="flex items-center gap-6 text-sm">
            <a className="hover:text-blue-600" href="#features">Features</a>
            <a className="hover:text-blue-600" href="#popular">Popular</a>
            <a className="hover:text-blue-600" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/*<div className="mx-auto max-w-7xl px-4 py-10">
        <h1 className="text-3xl font-bold">Home content starts here</h1>
      </div>
      */}
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3">
            New • Winter Collection
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Find your next <span className="text-blue-600">favorite book</span>.
          </h1>
          <p className="mt-4 text-gray-600">
            Curated titles for developers, creators, and lifelong learners.
          </p>
        </div>
        <div className="mt-6 flex gap-3">
            <a href="#popular" className="px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700">
              Shop popular
            </a>
            <button className="px-5 py-3 rounded-xl border hover:bg-gray-50">
              Browse categories
            </button>
          </div>
          
          <div className="relative">
            <img
              className="w-full rounded-2xl shadow-xl"
              src="https://picsum.photos/seed/hero-books/900/600"
              alt="Stack of books"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow p-4">
              <p className="text-sm font-semibold">2,000+ happy readers</p>
              <p className="text-xs text-gray-500">Average rating 4.8/5</p>
            </div>
          </div>

          <section id="features" className="mx-auto max-w-7xl px-4 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Curated Picks", desc: "Only the best titles make it here." },
          { title: "Fast Shipping", desc: "Pan-India delivery in 2–4 days." },
          { title: "Best Prices", desc: "Great deals, all year round." },
          { title: "Support 24/7", desc: "We’re here when you need us." },
        ].map((f) => (
          <div key={f.title} className="rounded-2xl border p-6 hover:shadow-md transition">
            <h3 className="font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
          </div>
        ))}
      </section>
      <section className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="text-2xl font-bold mb-4">Sample product (single)</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sampleProducts.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
      </section>

      <footer id="contact" className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} BookBazaar. All rights reserved.</p>
          <div className="flex gap-4 text-sm">
            <a className="hover:text-blue-600" href="#">Privacy</a>
            <a className="hover:text-blue-600" href="#">Terms</a>
            <a className="hover:text-blue-600" href="mailto:support@bookbazaar.dev">Support</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
