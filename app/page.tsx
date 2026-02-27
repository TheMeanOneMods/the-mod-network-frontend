export default function Home() {
  return (
    <div className="min-h-screen bg-[#111315] text-white">

      <div className="max-w-7xl mx-auto px-6 py-28">

        <h1 className="text-5xl font-bold tracking-tight">
          Built for <span className="text-red-500">Survival</span> Modding
        </h1>

        <p className="mt-6 text-gray-400 text-lg max-w-2xl">
          A professional platform for discovering, managing and publishing
          survival game modifications.
        </p>

        <div className="mt-10 flex gap-6">
          <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-md font-semibold transition">
            Explore Mods
          </button>

          <button className="bg-[#1a1d21] border border-[#2a2e35] hover:border-red-500 px-8 py-3 rounded-md transition">
            Community Forums
          </button>
        </div>

      </div>

      <div className="border-t border-[#2a2e35] py-6 text-center text-gray-500 text-sm">
        © 2026 The Mod Network
      </div>

    </div>
  );
}