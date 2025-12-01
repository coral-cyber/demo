import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="shadow bg-white fixed top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-indigo-600">
          ShopKart
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li>
            <a href="#" className="hover:text-indigo-600">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-indigo-600">
              Products
            </a>
          </li>

          {/* Dropdown */}
          <li className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center hover:text-indigo-600"
            >
              Categories
              <span className="ml-1">▼</span>
            </button>

            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded w-40 py-2">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#">Electronics</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#">Clothing</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#">Accessories</a>
                </li>
              </ul>
            )}
          </li>

          <li>
            <a href="#" className="hover:text-indigo-600">
              Contact
            </a>
          </li>
        </ul>

        {/* Search Bar */}
        <div className="hidden md:flex items-center space-x-2">
          <input
            type="search"
            placeholder="Search..."
            className="border rounded px-3 py-1 outline-none"
          />
          <button className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700">
            Search
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 py-3 shadow">
          <ul className="space-y-3 font-medium">
            <li>
              <a href="#" className="block hover:text-indigo-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-indigo-600">
                Products
              </a>
            </li>

            <li>
              <button
                className="w-full flex justify-between hover:text-indigo-600"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Categories <span>▼</span>
              </button>

              {isDropdownOpen && (
                <ul className="pl-4 mt-2 space-y-2">
                  <li>
                    <a href="#" className="block hover:text-indigo-600">
                      Electronics
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:text-indigo-600">
                      Clothing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:text-indigo-600">
                      Accessories
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <a href="#" className="block hover:text-indigo-600">
                Contact
              </a>
            </li>

            {/* Mobile search */}
            <div className="mt-3 flex space-x-2">
              <input
                type="search"
                placeholder="Search..."
                className="border rounded px-3 py-1 outline-none w-full"
              />
              <button className="bg-indigo-600 text-white px-4 py-1 rounded">
                Go
              </button>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
