import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const linkClass = (path) =>
    `block px-4 py-2 rounded-lg text-sm font-medium transition ${
      pathname === path
        ? "bg-purple-600 text-white"
        : "text-gray-300 hover:bg-white/10 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center font-bold text-white">
            OX
          </div>
          <span className="font-semibold text-lg text-white">
            OracleX
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          <Link to="/markets" className={linkClass("/markets")}>Markets</Link>
          <Link to="/create" className={linkClass("/create")}>Create</Link>
          <Link to="/dashboard" className={linkClass("/dashboard")}>Dashboard</Link>
        </nav>

        {/* Desktop Wallet */}
        <button className="hidden md:block px-4 py-2 rounded-lg text-sm font-medium bg-purple-600 hover:bg-purple-700 transition text-white">
          Connect Wallet
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0b0b12] border-t border-white/10 px-4 py-4 space-y-2">
          <Link onClick={() => setOpen(false)} to="/markets" className={linkClass("/markets")}>Markets</Link>
          <Link onClick={() => setOpen(false)} to="/create" className={linkClass("/create")}>Create</Link>
          <Link onClick={() => setOpen(false)} to="/dashboard" className={linkClass("/dashboard")}>Dashboard</Link>

          <button className="w-full mt-2 px-4 py-2 rounded-lg bg-purple-600 text-white">
            Connect Wallet
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
