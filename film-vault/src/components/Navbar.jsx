import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <div
          className="
      flex items-center gap-8
      px-6 py-3
      rounded-full
      bg-black/100 backdrop-blur-md
      shadow-lg
      transition-all duration-300
      hover:px-12
    "
        >
          <nav className="flex gap-6 text-sm font-medium">
            <Link to="/" className="text-gray-200 hover:text-white transition">
              Home
            </Link>
            <Link
              to="/watchlist"
              className="text-gray-200 hover:text-white transition"
            >
              Watchlist
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
