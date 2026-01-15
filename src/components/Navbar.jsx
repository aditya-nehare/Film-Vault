import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">

      {/* Brand Pill */}
      <Link
        to="/"
        className="
          flex items-center gap-6
          px-6 py-3
          rounded-full
          bg-black/80 backdrop-blur-md
          text-sm font-medium
          shadow-lg
          text-gray-300 hover:text-white
        "
      >
        CINEXA
      </Link>

      {/* Navigation Pill */}
      <nav
        className="
          flex items-center gap-6
          px-6 py-3
          rounded-full
          bg-black/80 backdrop-blur-md
          text-sm font-medium
          shadow-lg
        "
      >
        <Link
          to="/"
          className="text-gray-300 hover:text-white transition"
        >
          Home
        </Link>
        <Link
          to="/watchlist"
          className="text-gray-300 hover:text-white transition"
        >
          Watchlist
        </Link>
      </nav>

    </div>
  );
};

export default Navbar;
