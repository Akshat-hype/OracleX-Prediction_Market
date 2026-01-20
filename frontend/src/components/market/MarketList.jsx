import MarketCard from "./MarketCard";

const MarketList = ({ markets }) => (
  <>
    {markets.map((m) => (
      <MarketCard key={m._id} market={m} />
    ))}
  </>
);

export default MarketList;
