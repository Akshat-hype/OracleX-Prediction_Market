import { useParams } from "react-router-dom";
import { useMarkets } from "../hooks/useMarkets";

const MarketView = () => {
  const { id } = useParams();
  const { getMarketById } = useMarkets();
  const market = getMarketById(id);

  if (!market) return <p>Market not found</p>;

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-3">
        {market.title}
      </h1>

      <p className="text-gray-600 mb-8">
        {market.description}
      </p>

      <div className="bg-white border rounded-xl p-6 shadow-sm">
        <div className="flex justify-between mb-6">
          <div>
            <p className="text-xs text-gray-500">Category</p>
            <p className="font-medium">{market.category}</p>
          </div>

          <div>
            <p className="text-xs text-gray-500">Status</p>
            <span className="px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-700">
              {market.status}
            </span>
          </div>
        </div>

        <h3 className="font-semibold mb-4">Outcomes</h3>

        <div className="grid grid-cols-2 gap-4">
          {market.options.map((opt) => (
            <div
              key={opt}
              className="border rounded-lg p-4 text-center font-medium hover:bg-gray-50 transition cursor-pointer"
            >
              {opt}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketView;
