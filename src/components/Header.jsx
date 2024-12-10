import { Link } from 'react-router-dom';
import { FaUserCircle, FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-[#82442b] text-white py-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-cursive font-bold">
          M&R Glam
        </Link>
        <div className="flex items-center space-x-6">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-3 w-full rounded-md bg-[#fae8d7] focus:outline-none focus:ring-2 focus:ring-[#a76a45]"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#82442b] hover:text-[#a76a45]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
          <Link to="/profile" className="text-white hover:text-[#a76a45]">
            <FaUserCircle size={24} />
          </Link>
          <Link to="/cart" className="text-white hover:text-[#a76a45]">
            <FaShoppingCart size={24} />
          </Link>
        </div>
        <div className="md:hidden">
          <button className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white hover:text-[#a76a45]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/categories" className="hover:text-[#a76a45]">
              Categories
            </Link>
          </li>
          <li>
            <Link to="/deals" className="hover:text-[#a76a45]">
              Deals
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#a76a45]">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#a76a45]">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;