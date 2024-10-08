import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const NavBar2 = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to manage mobile menu visibility

  const handleMouseEnter = (index) => {
    setIsDropdownOpen(index); // Open dropdown of specific index
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(null); // Close dropdown
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev); // Toggle mobile menu visibility
  };

  const toggleMobileDropdown = (index) => {
    setIsDropdownOpen((prev) => (prev === index ? null : index)); // Toggle dropdown visibility on mobile
  };

  return (
    <>
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center gap-6">
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src="/logo.webp" className="h-10" alt="coingecko" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap"></span>
            </a>

            <div className="hidden md:flex items-center justify-between w-full md:w-auto">
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
                {/* Cryptocurrencies Dropdown */}
                <li
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href="#"
                    className="block py-2 px-3 font-semibold text-white hover:text-[#4BCC00] rounded md:bg-transparent md:text-black md:p-0"
                  >
                    Cryptocurrencies
                  </a>
                  {isDropdownOpen === 1 && (
                    <ul className="absolute text-left gap-4 w-52 bg-white border border-gray-100 rounded-lg shadow-lg z-10">
                      {[
                        "By Market Cap",
                        "Categories",
                        "Chains",
                        "Popular",
                        "Highlights",
                        "New Cryptocurrencies",
                        "Gainers & Losers",
                        "All Coins",
                        "Compare Coins",
                        "Global Chart",
                      ].map((item) => (
                        <li key={item}>
                          <a className="block mt-1 items-center py-2 cursor-pointer px-2 rounded-lg hover:bg-gray-100">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                {/* Exchanges Dropdown */}
                <li
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(2)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href="#"
                    className="block py-2 px-3 text-white hover:text-[#4BCC00] rounded md:bg-transparent md:text-black md:p-0"
                  >
                    Exchanges
                  </a>
                  {isDropdownOpen === 2 && (
                    <ul className="absolute text-left w-52 bg-white border border-gray-100 rounded-lg shadow-lg z-10">
                      {[
                        "Crypto Exchanges",
                        "Decentralized Exchanges",
                        "Derivatives",
                      ].map((item) => (
                        <li key={item}>
                          <a className="block mt-1 items-center py-2 cursor-pointer px-2 rounded-lg hover:bg-gray-100">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                {/* NFT Dropdown */}
                <li
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(3)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href="#"
                    className="block text-white hover:text-[#4BCC00] rounded md:bg-transparent md:text-black md:p-0"
                  >
                    NFT
                  </a>
                  {isDropdownOpen === 3 && (
                    <ul className="absolute text-left w-52 bg-white border border-gray-100 rounded-lg shadow-lg z-10">
                      {[
                        "NFT Floor Price",
                        "NFT Related Coins",
                        "NFT Watchlist",
                        "NFT Global Chart",
                      ].map((item) => (
                        <li key={item}>
                          <a className="block mt-1 items-center py-2 cursor-pointer px-2 rounded-lg hover:bg-gray-100">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                {/* Learn Dropdown */}
                <li
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(4)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href="#"
                    className="block py-2 px-3 text-white hover:text-[#4BCC00] rounded md:bg-transparent md:text-black md:p-0"
                  >
                    Learn
                  </a>
                  {isDropdownOpen === 4 && (
                    <ul className="absolute text-left w-52  bg-white border border-gray-100 rounded-lg shadow-lg z-10">
                      {[
                        "Learn Crypto",
                        "Research Insights",
                        "News",
                        "Reports",
                        "Learn & Earn",
                        "Videos",
                        "Newsletter",
                        "Glossary",
                      ].map((item) => (
                        <li key={item}>
                          <a className="block mt-1 items-center py-2 cursor-pointer px-2 rounded-lg hover:bg-gray-100">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                {/* Products Dropdown */}
                <li
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(5)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href="#"
                    className="block py-2 px-3 text-white hover:text-[#4BCC00] rounded md:bg-transparent md:text-black md:p-0"
                  >
                    Products
                  </a>
                  {isDropdownOpen === 5 && (
                    <ul className="absolute text-left w-52 bg-white border border-gray-100 rounded-lg shadow-lg z-10">
                      {[
                        "Crypto Portfolio",
                        "CoinGecko App",
                        "CoinGecko Premium",
                        "Crypto API",
                        "Crypto Widget",
                        "GeckoTerminal",
                      ].map((item) => (
                        <li key={item}>
                          <a className="block mt-1 items-center py-2 cursor-pointer px-2 rounded-lg hover:bg-gray-100">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <a
              href="/candy"
              className="flex items-center text-gray-900 font-semibold cursor-pointer "
            >
              <img src="/candy.svg" alt="Candy Icon" className="h-5 w-6 mr-1" />
              <span className="font-semibold">Candy</span>
            </a>

            <a
              href="/portfolio"
              className="flex items-center text-gray-900 font-semibold cursor-pointer "
            >
              <FaStar className="text-yellow-500 mr-1" />
              <span className="font-semibold">Portfolio</span>
            </a>

            {/* Search Input */}
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0 7 7 0 0 1-14 0"
                  />
                </svg>
              </div>
              <input
                type="text"
                className="block w-full md:w-40 p-2 pl-10 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-transparent "
                placeholder="Search..."
                required
              />
            </div>
          </div>

          {/* Responsive Menu Button */}
          <div className="md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="absolute inset-x-0 top-14 z-10 bg-white border border-gray-200 rounded-lg shadow-lg md:hidden">
              <ul className="flex flex-col p-4">
                {/* Add your dropdown links here for mobile view */}
                {/* Cryptocurrencies Dropdown */}
                <li className="relative">
                  <button
                    onClick={() => toggleMobileDropdown(1)}
                    className="block py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Cryptocurrencies
                  </button>
                  {isDropdownOpen === 1 && (
                    <ul className="pl-4">
                      {[
                        "By Market Cap",
                        "Categories",
                        "Chains",
                        "Popular",
                        "Highlights",
                        "New Cryptocurrencies",
                        "Gainers & Losers",
                        "All Coins",
                        "Compare Coins",
                        "Global Chart",
                      ].map((item) => (
                        <li key={item}>
                          <a className="block py-2 text-gray-700 hover:bg-gray-100">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                {/* Exchanges Dropdown */}
                <li className="relative">
                  <button
                    onClick={() => toggleMobileDropdown(2)}
                    className="block py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Exchanges
                  </button>
                  {isDropdownOpen === 2 && (
                    <ul className="pl-4">
                      {[
                        "Crypto Exchanges",
                        "Decentralized Exchanges",
                        "Derivatives",
                      ].map((item) => (
                        <li key={item}>
                          <a className="block py-2 text-gray-700 hover:bg-gray-100">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                {/* NFT Dropdown */}
                <li className="relative">
                  <button
                    onClick={() => toggleMobileDropdown(3)}
                    className="block py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    NFT
                  </button>
                  {isDropdownOpen === 3 && (
                    <ul className="pl-4">
                      {[
                        "NFT Floor Price",
                        "NFT Related Coins",
                        "NFT Watchlist",
                        "NFT Global Chart",
                      ].map((item) => (
                        <li key={item}>
                          <a className="block py-2 text-gray-700 hover:bg-gray-100">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                {/* Learn Dropdown */}
                <li className="relative">
                  <button
                    onClick={() => toggleMobileDropdown(4)}
                    className="block py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Learn
                  </button>
                  {isDropdownOpen === 4 && (
                    <ul className="pl-4">
                      {[
                        "Learn Crypto",
                        "Research Insights",
                        "News",
                        "Reports",
                        "Learn & Earn",
                        "Videos",
                        "Newsletter",
                        "Glossary",
                      ].map((item) => (
                        <li key={item}>
                          <a className="block py-2 text-gray-700 hover:bg-gray-100">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                {/* Products Dropdown */}
                <li className="relative">
                  <button
                    onClick={() => toggleMobileDropdown(5)}
                    className="block py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Products
                  </button>
                  {isDropdownOpen === 5 && (
                    <ul className="pl-4">
                      {[
                        "Crypto Portfolio",
                        "CoinGecko App",
                        "CoinGecko Premium",
                        "Crypto API",
                        "Crypto Widget",
                        "GeckoTerminal",
                      ].map((item) => (
                        <li key={item}>
                          <a className="block py-2 text-gray-700 hover:bg-gray-100">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar2;
