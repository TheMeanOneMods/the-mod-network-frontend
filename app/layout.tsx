import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Mod Network",
  description: "Modern survival game mod platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#111315] text-white antialiased">
        <div className="min-h-screen flex flex-col">

          {/* Header */}
          <header className="border-b border-[#2a2e35] bg-[#111315] sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

              {/* Logo */}
              <div className="text-lg font-semibold tracking-wide">
                <span className="text-red-600">The</span>ModNetwork
              </div>

              {/* Nav */}
              <nav className="hidden md:flex items-center gap-8 text-sm text-gray-400">
                <a href="/" className="hover:text-white transition">Home</a>
                <a href="/mods" className="hover:text-white transition">Mods</a>
                <a href="/collections" className="hover:text-white transition">Collections</a>
                <a href="/media" className="hover:text-white transition">Media</a>
                <a href="/forums" className="hover:text-white transition">Community</a>
                <a href="/support" className="hover:text-white transition">Support</a>
              </nav>

              {/* Right */}
              <div className="flex items-center gap-4">
                <input
                  placeholder="Search"
                  className="hidden md:block bg-[#1a1d21] border border-[#2a2e35] px-3 py-1.5 rounded-md text-sm focus:outline-none focus:border-red-600 transition"
                />
                <a
                  href="/upload"
                  className="hidden md:block bg-[#1a1d21] border border-[#2a2e35] hover:border-red-600 px-4 py-2 rounded-md text-sm transition"
                >
                  Upload
                </a>
                <a
                  href="/login"
                  className="text-sm text-gray-400 hover:text-white transition"
                >
                  Login
                </a>
                <a
                  href="/register"
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm font-semibold transition"
                >
                  Sign Up
                </a>
              </div>

            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t border-[#2a2e35] py-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} The Mod Network
          </footer>

        </div>
      </body>
    </html>
  );
}