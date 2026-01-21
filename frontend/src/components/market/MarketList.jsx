import MarketCard from "./MarketCard";

const MarketList = ({ markets }) => {
  if (!markets.length) {
    return (
      <p className="text-gray-400">
        No markets available yet.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {markets.map((market) => (
        <MarketCard key={market._id} market={market} />
      ))}
    </div>
  );
};

export default MarketList;
