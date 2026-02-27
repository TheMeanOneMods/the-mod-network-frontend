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
      <body className="bg-black text-white antialiased">
        <div className="min-h-screen flex flex-col">

          {/* Navbar */}
          <header className="border-b border-zinc-900 bg-black/80 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
              
              <div className="text-xl font-bold tracking-wide">
                <span className="text-red-600">The</span>ModNetwork
              </div>

              <nav className="hidden md:flex items-center gap-8 text-sm text-gray-400">
                <a href="/" className="hover:text-white transition">Home</a>
                <a href="/mods" className="hover:text-white transition">Mods</a>
                <a href="/forums" className="hover:text-white transition">Forums</a>
              </nav>

              <div className="flex items-center gap-4">
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
          <footer className="border-t border-zinc-900 py-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} The Mod Network
          </footer>

        </div>
      </body>
    </html>
  );
}
