import { games } from "@/lib/games";
import { mods } from "@/lib/mods";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const featuredGames = games.slice(0, 12);

  // You can later sort by created_at when using database
  const latestMods = mods.slice(0, 12);

  return (
    <div className="bg-[#111315] min-h-screen">

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

      {/* Latest Mods */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <h2 className="text-lg font-semibold mb-8">
          Latest Mods
        </h2>

        {latestMods.length === 0 ? (
          <p className="text-gray-400">No mods available yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {latestMods.map((mod) => (
              <Link
                key={mod.id}
                href={`/mods/${mod.id}`}
                className="bg-[#1a1d21] border border-[#2a2e35] rounded-md overflow-hidden hover:bg-[#20242a] transition"
              >
                {/* Thumbnail Placeholder */}
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
              </Link>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}