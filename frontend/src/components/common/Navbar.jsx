import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  const isActive = (path) => pathname === path;

  const linkBase =
    "px-4 py-2 rounded-lg text-sm font-medium transition";

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold">
            OX
          </div>
          <span className="font-bold text-lg">OracleX</span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-2">
          <Link
            to="/markets"
            className={`${linkBase} ${
              isActive("/markets")
                ? "bg-indigo-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Markets
          </Link>

          <Link
            to="/create"
            className={`${linkBase} ${
              isActive("/create")
                ? "bg-indigo-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Create
          </Link>

          <Link
            to="/dashboard"
            className={`${linkBase} ${
              isActive("/dashboard")
                ? "bg-indigo-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Dashboard
          </Link>
        </nav>

        {/* Wallet placeholder */}
        <button className="px-4 py-2 rounded-lg bg-gray-900 text-white text-sm hover:bg-black transition">
          Connect Wallet
        </button>
      </div>
    </header>
  );
};

export default Navbar;
