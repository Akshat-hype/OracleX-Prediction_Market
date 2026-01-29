import MarketCard from "./MarketCard";

const MarketList = ({ markets }) => {
  if (!markets.length) {
    return <p className="text-gray-400">No markets available.</p>;
  }

  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-4
        sm:gap-6
      "
    >
      {markets.map((market) => (
        <MarketCard key={market._id} market={market} />
      ))}
    </div>
  );
};

export default MarketList;
