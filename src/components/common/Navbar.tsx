export default function Navbar() {
    return (
        <header className="sticky top-0 bg-white/80 backdrop-blur border-b">{/* outer bar with blur + border */}
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        {/* brand on the left */}
        <a className="text-xl font-bold tracking-tight" href="/">📚 BookBazaar</a>

        {/* simple nav links on the right (hidden on very small screens if you want later) */}
        <nav className="flex items-center gap-6 text-sm">
          <a className="hover:text-blue-600" href="#features">Features</a>
          <a className="hover:text-blue-600" href="#popular">Popular</a>
          <a className="hover:text-blue-600" href="#contact">Contact</a>
        </nav>
      </div>
    </header>
    );
}