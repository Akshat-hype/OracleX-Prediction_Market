import { useNavigate } from "react-router-dom";

/**
 * Simple category → icon mapping
 * (can later be replaced with SVGs or images)
 */
const categoryIcon = (category = "") => {
  const key = category.toLowerCase();
  if (key.includes("crypto")) return "₿";
  if (key.includes("politics")) return "🏛️";
  if (key.includes("sports")) return "🏆";
  if (key.includes("tech")) return "💻";
  if (key.includes("finance")) return "📈";
  return "🔮"; // default prediction icon
};

const MarketCard = ({ market }) => {
  const navigate = useNavigate();
  const isResolved = market.status === "RESOLVED";

  // UI-only percentage logic for now
  const optionPercentage = Math.floor(100 / market.options.length);

  const handleVote = (e, option) => {
    e.stopPropagation(); // prevent navigation
    alert(`You voted for: ${option}`);
  };

  return (
    <div
      onClick={() => navigate(`/markets/${market._id}`)}
      className="
        relative
        cursor-pointer
        bg-[#12121a]
        border border-white/10
        rounded-2xl
        p-5
        transition
        hover:border-purple-500/40
        hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.4)]
        hover:-translate-y-1
      "
    >
      {/* CONTEXT ICON */}
      <div className="absolute -top-4 -left-4 w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center text-white text-lg shadow-lg">
        {categoryIcon(market.category)}
      </div>

      {/* HEADER */}
      <div className="flex justify-between items-start mb-3 mt-2">
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
      <p className="text-sm text-gray-400 mb-5 line-clamp-2">
        {market.description}
      </p>

      {/* OPTIONS AS VOTE BUTTONS */}
      <div className="space-y-3 mb-5">
        {market.options.map((option) => (
          <div key={option} className="flex items-center gap-3">
            {/* Vote Button */}
            <button
              onClick={(e) => handleVote(e, option)}
              disabled={isResolved}
              className={`
                flex-1
                px-4
                py-2
                rounded-lg
                text-sm
                font-medium
                border
                transition
                relative
                overflow-hidden
                ${
                  isResolved
                    ? "cursor-not-allowed bg-white/5 text-gray-500 border-white/10"
                    : `
                      bg-white/5
                      text-gray-200
                      border-white/10
                      hover:text-white
                      hover:border-purple-400
                      hover:bg-gradient-to-r
                      hover:from-purple-600
                      hover:to-indigo-600
                      hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]
                    `
                }
              `}
            >
              {option}
            </button>

            {/* Percentage */}
            <span className="text-sm text-gray-400 w-12 text-right">
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
