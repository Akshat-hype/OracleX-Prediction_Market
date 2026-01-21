import { useMarkets } from "../hooks/useMarkets";
import MarketList from "../components/market/MarketList";
import Loader from "../components/common/Loader";

const Markets = () => {
  const { markets, loading } = useMarkets();

  if (loading) return <Loader />;

  return (
    <section className="max-w-7xl mx-auto pt-16 pb-20">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">
          Markets
        </h1>
        <p className="text-gray-400">
          Browse active prediction markets and trade on outcomes.
        </p>
      </div>

      {/* Market Grid */}
      <MarketList markets={markets} />
    </section>
  );
};

export default Markets;
