import { useNavigate } from "react-router-dom";

const MarketCard = ({ market }) => {
  const navigate = useNavigate();
  const isResolved = market.status === "RESOLVED";

  // TEMP UI-only percentage logic
  const optionPercentage = Math.floor(100 / market.options.length);

  const handleVote = (e, option) => {
    e.stopPropagation(); // IMPORTANT: prevents card click
    alert(`You voted for: ${option}`);
    // later → call backend / blockchain
  };

  return (
    <div
      onClick={() => navigate(`/markets/${market._id}`)}
      className="
        cursor-pointer
        bg-[#12121a]
        border border-white/10
        rounded-2xl
        p-5
        transition
        hover:border-purple-500/40
        hover:shadow-lg
        hover:-translate-y-1
      "
    >
      {/* HEADER */}
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-semibold text-white leading-snug text-lg">
          {market.title}
        </h3>

        <span
          className={`text-xs px-3 py-1 rounded-full font-medium ${
            isResolved
              ? "bg-green-500/10 text-green-400"
              : "bg-purple-500/10 text-purple-400"
          }`}
        >
          {market.status}
        </span>
      </div>

      {/* DESCRIPTION */}
      <p className="text-sm text-gray-400 mb-4 line-clamp-2">
        {market.description}
      </p>

      {/* OPTIONS AS VOTE BUTTONS */}
      <div className="space-y-3 mb-4">
        {market.options.map((option) => (
          <div key={option} className="flex items-center gap-3">
            {/* Vote Button */}
            <button
              onClick={(e) => handleVote(e, option)}
              disabled={isResolved}
              className={`
                flex-1
                px-3
                py-2
                rounded-lg
                text-sm
                font-medium
                border
                transition
                ${
                  isResolved
                    ? "cursor-not-allowed bg-white/5 text-gray-500 border-white/10"
                    : "bg-white/5 hover:bg-purple-600 hover:text-white border-white/10"
                }
              `}
            >
              {option}
            </button>

            {/* Percentage */}
            <span className="text-sm text-gray-400 w-10 text-right">
              {optionPercentage}%
            </span>
          </div>
        ))}
      </div>

      {/* META */}
      <div className="flex justify-between text-xs text-gray-500">
        <span>{market.category || "General"}</span>
        <span>{market.options.length} outcomes</span>
      </div>
    </div>
  );
};

export default MarketCard;
