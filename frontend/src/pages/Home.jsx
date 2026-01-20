const Home = () => {
  return (
    <section className="py-24">
      <div className="max-w-4xl">
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Predict real-world outcomes.
          <br />
          <span className="text-indigo-600">Trade on truth.</span>
        </h1>

        <p className="text-lg text-gray-600 mb-10">
          OracleX is a decentralized prediction market where users create,
          trade, and resolve markets transparently.
        </p>

        <div className="flex gap-4">
          <a
            href="/markets"
            className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
          >
            Explore Markets
          </a>

          <a
            href="/create"
            className="px-6 py-3 rounded-lg border font-medium hover:bg-gray-100 transition"
          >
            Create Market
          </a>
        </div>

      </div>
    </section>
  );
};

export default Home;
