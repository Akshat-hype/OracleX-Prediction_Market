import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  const linkClass = (path) =>
    `px-4 py-2 rounded-lg text-sm font-medium transition ${
      pathname === path
        ? "bg-purple-600 text-white"
        : "text-gray-400 hover:text-white hover:bg-white/10"
    }`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center font-bold text-white">
            OX
          </div>
          <span className="font-semibold text-lg text-white">OracleX</span>
        </div>

        {/* Nav */}
        <nav className="flex items-center gap-2">
          <Link to="/markets" className={linkClass("/markets")}>Markets</Link>
          <Link to="/create" className={linkClass("/create")}>Create</Link>
          <Link to="/dashboard" className={linkClass("/dashboard")}>Dashboard</Link>
        </nav>

        {/* Wallet */}
        <button className="px-4 py-2 rounded-lg text-sm font-medium bg-purple-600 hover:bg-purple-700 transition text-white">
          Connect Wallet
        </button>
      </div>
    </header>
  );
};

export default Navbar;
