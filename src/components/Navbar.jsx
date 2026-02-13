import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-8 py-4 shadow-lg">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-green-400">CodeLearn</h1>

        <div className="flex items-center gap-8 relative">

          <Link to="/" className="hover:text-green-400 transition">
            Home
          </Link>

          <Link to="/about" className="hover:text-green-400 transition">
            About
          </Link>

          {/* Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <button className="hover:text-green-400 transition">
              More Languages ▾
            </button>

            {isOpen && (
              <div className="absolute top-10 left-0 bg-white text-black rounded-lg shadow-lg w-48 py-2">
                <Link to="/python" className="block px-4 py-2 hover:bg-gray-200">Python</Link>
                <Link to="/cpp" className="block px-4 py-2 hover:bg-gray-200">C++</Link>
                <Link to="/c" className="block px-4 py-2 hover:bg-gray-200">C</Link>
                <Link to="/java" className="block px-4 py-2 hover:bg-gray-200">Java</Link>
                <Link to="/javascript" className="block px-4 py-2 hover:bg-gray-200">JavaScript</Link>
              </div>
            )}
          </div>

          <Link to="/contact" className="hover:text-green-400 transition">
            Contact
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;