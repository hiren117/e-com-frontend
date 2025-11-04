// The big banner section at the top of the page

export default function Hero() {
  // two-column hero: text (left) and image (right on md+ screens)
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white">{/* soft background gradient */}
      <div className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* left column: text, subtitle, and CTAs */}
        <div>
          {/* tiny eyebrow label */}
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3">
            New • Winter Collection
          </span>

          {/* main headline with highlighted word */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Find your next <span className="text-blue-600">favorite book</span>.
          </h1>

          {/* supporting paragraph */}
          <p className="mt-4 text-gray-600">
            Curated titles for developers, creators, and lifelong learners.
          </p>

          {/* primary + secondary call-to-action buttons */}
          <div className="mt-6 flex gap-3">
            <a href="#popular" className="px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700">
              Shop popular
            </a>
            <button className="px-5 py-3 rounded-xl border hover:bg-gray-50">
              Browse categories
            </button>
          </div>
        </div>

        {/* right column: decorative hero image + stats card */}
        <div className="relative">
          {/* placeholder image; replace with your asset later */}
          <img
            className="w-full rounded-2xl shadow-xl"
            src="https://i.pinimg.com/236x/c4/3e/78/c43e789529e65057cfaa75e12621458e.jpg"
            alt="Stack of books"
          />
          {/* floating small card with social proof */}
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow p-4">
            <p className="text-sm font-semibold">2,000+ happy readers</p>
            <p className="text-xs text-gray-500">Average rating 4.8/5</p>
          </div>
        </div>
      </div>
    </section>
  );
}
