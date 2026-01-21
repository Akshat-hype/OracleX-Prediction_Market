import HomeBackground from "../components/three/HomeBackground";

export default function Home() {
  return (
    <>
      {/* 3D Background */}
      <HomeBackground />

      {/* Dark overlay for readability */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 -z-10" />

      {/* CONTENT */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-20">
        
        {/* HERO */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">
          Predict the future.
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
            Trade on outcomes.
          </span>
        </h1>

        <p className="text-lg text-gray-400 max-w-2xl mb-10">
          OracleX is a decentralized prediction market where users forecast
          real-world events and stake conviction on what they believe will happen.
        </p>

        <div className="flex gap-4 mb-16">
          <a
            href="/markets"
            className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition text-white font-medium"
          >
            Explore Markets
          </a>

          <a
            href="/create"
            className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition font-medium text-gray-200"
          >
            Create Market
          </a>
        </div>

        {/* INFO GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Create",
              desc: "Anyone can create prediction markets on real-world events.",
            },
            {
              title: "Predict",
              desc: "Users participate by choosing outcomes they believe in.",
            },
            {
              title: "Resolve",
              desc: "Markets settle transparently once outcomes are known.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
