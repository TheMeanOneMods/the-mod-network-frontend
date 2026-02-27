import { games } from "@/lib/games";
import Link from "next/link";

const fakeMods = [
  {
    id: 1,
    title: "TMO Legendary Overhaul",
    author: "TMO Dev",
    game: "7-days-to-die",
    downloads: 8200,
    likes: 542,
  },
  {
    id: 2,
    title: "Ultra Rust Weapons Pack",
    author: "RustPro",
    game: "rust",
    downloads: 4100,
    likes: 230,
  },
  {
    id: 3,
    title: "ARK Dino Expansion",
    author: "ArkMaster",
    game: "ark-survival-evolved",
    downloads: 12200,
    likes: 880,
  },
  {
    id: 4,
    title: "7DTD UI Overhaul",
    author: "ModSmith",
    game: "7-days-to-die",
    downloads: 3200,
    likes: 210,
  },
];

export default function GamePage({ params }: { params: { slug: string } }) {
  const game = games.find((g) => g.slug === params.slug);

  if (!game) {
    return <div className="p-10">Game Not Found</div>;
  }

  const filteredMods = fakeMods.filter(
    (mod) => mod.game === params.slug
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      <h1 className="text-2xl font-semibold mb-8">
        {game.name} Mods
      </h1>

      {filteredMods.length === 0 ? (
        <p className="text-gray-400">No mods yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMods.map((mod) => (
            <div
              key={mod.id}
              className="bg-[#1a1d21] border border-[#2a2e35] rounded-md p-4"
            >
              <h3 className="font-semibold text-sm">
                {mod.title}
              </h3>
              <p className="text-xs text-gray-400 mt-2">
                by {mod.author}
              </p>
              <div className="flex justify-between text-xs text-gray-400 mt-4 pt-3 border-t border-[#2a2e35]">
                <span>⬇ {mod.downloads}</span>
                <span>❤ {mod.likes}</span>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}