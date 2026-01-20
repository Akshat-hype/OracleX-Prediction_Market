import { useMarkets } from "../hooks/useMarkets";
import MarketList from "../components/market/MarketList";
import Loader from "../components/common/Loader";

const Markets = () => {
  const { markets, loading } = useMarkets();

  if (loading) return <Loader />;

  return (
    <>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Markets</h2>
        <p className="text-gray-600">
          Browse and participate in active prediction markets.
        </p>
      </div>

      <MarketList markets={markets} />
    </>
  );
};

export default Markets;
