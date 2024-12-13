import React, { useState } from "react";
import { MdOutlineSegment } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar bg-white shadow-md px-4 py-3 fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between">
        <Link to="/">
          <img
            className="w-[150px]"
            src="https://stonepedia.in/wp-content/uploads/2024/10/logoo-1.png"
            alt="Logo"
          />
        </Link>

        <div className="hidden md:flex items-center uppercase space-x-6">
          <span className="relative cursor-pointer hover:text-gray-600 hover:underline">
            <Link to="/category">Shop by category</Link>
          </span>
          <span className="relative cursor-pointer uppercase hover:text-gray-600 hover:underline">
            <Link to="partner">Partner with us</Link>
          </span>
        </div>

        <input
          type="search"
          placeholder="Search for products"
          className="hidden sm:block border rounded-md px-3 py-2 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <FaCartPlus
              size={30}
              className="text-xl cursor-pointer hover:text-gray-600"
            />
          </div>

          <MdOutlineSegment
            size={40}
            className="text-2xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </div>

      {menuOpen && (
        <div className="fixed top-0 right-0 w-72 h-full bg-gray-100 shadow-lg p-4 transition-transform transform translate-x-0 z-50">
          <button
            className="text-red-500 mb-4 text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Close
          </button>

          <img
            className="w-[150px] mt-3"
            src="https://stonepedia.in/wp-content/uploads/2024/10/logoo-1.png"
            alt="Logo"
          />
          <h1 className="mt-2 font-bold text-2xl text-black">
            Your Trusted Global Stone Marketplace
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            At StonePedia, We are redefining the future. StonePedia is an
            award-winning platform simplifying the purchase of the world's
            finest stone through certified and verified quarry owners and stone
            processing units across the globe.
          </p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
