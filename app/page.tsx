export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-32">

      <h1 className="text-6xl font-bold tracking-tight leading-tight">
        Built for <span className="text-red-600">Survival</span> Modding
      </h1>

      <p className="mt-6 text-gray-400 text-lg max-w-2xl">
        A modern, secure and scalable platform for hosting and discovering
        survival game modifications.
      </p>

      <div className="mt-12 flex gap-6">
        <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition">
          Explore Mods
        </button>

        <button className="border border-zinc-800 hover:border-red-600 px-8 py-3 rounded-lg transition">
          Community Forums
        </button>
      </div>

    </div>
  );
}
