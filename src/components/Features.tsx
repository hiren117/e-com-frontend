// Small grid of “feature” cards (USP highlights)

type Feature = { title: string; desc: string }; // local type for clarity

const items: Feature[] = [
  { title: "Curated Picks", desc: "Only the best titles make it here." },
  { title: "Fast Shipping", desc: "Pan-India delivery in 2–4 days." },
  { title: "Best Prices", desc: "Great deals, all year round." },
  { title: "Support 24/7", desc: "We’re here when you need us." },
];

export default function Features() {
  // map over items to render identical cards
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((f) => (
        <div key={f.title} className="rounded-2xl border p-6 hover:shadow-md transition">
          <h3 className="font-semibold">{f.title}</h3>
          <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
        </div>
      ))}
    </section>
  );
}
