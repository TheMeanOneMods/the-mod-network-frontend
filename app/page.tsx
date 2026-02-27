import { games } from "@/lib/games";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const fakeMods = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    title: `Survival Expansion Pack ${i + 1}`,
    author: "TMO Dev",
    downloads: Math.floor(Math.random() * 5000 + 500),
    likes: Math.floor(Math.random() * 300 + 20),
  }));

  const featuredGames = games.slice(0, 12);

  return (
    <div className="bg-[#111315] min-h-screen">

      {/* Filter Bar */}
      <div className="border-b border-[#2a2e35]">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between text-sm">

          <div className="flex items-center gap-6 text-gray-400">
            <button className="hover:text-white transition">My Games</button>
            <button className="text-white font-medium">New</button>
            <button className="hover:text-white transition">Updated</button>
            <button className="hover:text-white transition">Trending</button>
            <button className="hover:text-white transition">Popular</button>
            <button className="hover:text-white transition">Surprise</button>
          </div>

          <div>
            <select className="bg-[#1a1d21] border border-[#2a2e35] px-3 py-1 rounded-md text-sm focus:outline-none focus:border-red-600">
              <option>All Time</option>
              <option>This Month</option>
              <option>This Week</option>
            </select>
          </div>

        </div>
      </div>

      {/* Top Survival Games */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        <h2 className="text-lg font-semibold mb-6">
          Top Survival Games
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">

          {featuredGames.map((game) => (
            <Link
              key={game.id}
              href={`/games/${game.slug}`}
              className="bg-[#1a1d21] border border-[#2a2e35] rounded-md p-4 flex flex-col items-center justify-center hover:bg-[#20242a] transition"
            >
              <Image
                src={game.logo}
                alt={game.name}
                width={64}
                height={64}
                className="mb-3 object-contain"
              />
              <span className="text-xs text-center text-gray-300">
                {game.name}
              </span>
            </Link>
          ))}

        </div>

      </div>

      {/* Mods Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16">

        <h2 className="text-lg font-semibold mb-8">
          Latest Mods
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {fakeMods.map((mod) => (
            <div
              key={mod.id}
              className="bg-[#1a1d21] border border-[#2a2e35] rounded-md overflow-hidden hover:bg-[#20242a] transition"
            >
              <div className="h-40 bg-[#20242a]" />

              <div className="p-4 space-y-2">

                <h3 className="font-semibold text-sm leading-snug">
                  {mod.title}
                </h3>

                <p className="text-xs text-gray-400">
                  by {mod.author}
                </p>

                <div className="flex justify-between text-xs text-gray-400 pt-3 border-t border-[#2a2e35]">
                  <span>⬇ {mod.downloads}</span>
                  <span>❤ {mod.likes}</span>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}