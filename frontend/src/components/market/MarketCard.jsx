import { Link } from "react-router-dom";

const MarketCard = ({ market }) => {
  return (
    <div className="bg-white rounded-xl border p-5 hover:shadow-lg transition hover:-translate-y-1">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-semibold text-lg leading-snug">
          {market.title}
        </h3>

        <span
          className={`text-xs px-2 py-1 rounded-full font-medium ${
            market.status === "RESOLVED"
              ? "bg-green-100 text-green-700"
              : "bg-blue-100 text-blue-700"
          }`}
        >
          {market.status}
        </span>
      </div>

      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
        {market.description}
      </p>

      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-500">
          Category: {market.category}
        </span>

        <Link
          to={`/markets/${market._id}`}
          className="text-sm font-medium text-indigo-600 hover:underline"
        >
          View →
        </Link>
      </div>
    </div>
  );
};

export default MarketCard;
