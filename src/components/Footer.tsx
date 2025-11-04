// Simple footer with links

export default function Footer() {
  return (
    <footer id="contact" className="border-t">{/* thin top border to separate from content */}
      <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* copyright text; year auto-updates */}
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} BookBazaar. All rights reserved.</p>

        {/* inline page links */}
        <div className="flex gap-4 text-sm">
          <a className="hover:text-blue-600" href="#">Privacy</a>
          <a className="hover:text-blue-600" href="#">Terms</a>
          <a className="hover:text-blue-600" href="mailto:support@bookbazaar.dev">Support</a>
        </div>
      </div>
    </footer>
  );
}
