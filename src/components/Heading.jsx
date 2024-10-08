import React, { useState } from "react";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

const Heading = () => {
  const [showHeader, setShowHeader] = useState(true); // Initially true

  const handleCheckboxChange = () => {
    setShowHeader((prev) => !prev); // Toggle the visibility of the Header
  };

  return (
    <>
      <div className="flex flex-col md:flex-row md:mb-8 md:gap-x-8 mb-8">
        <div className="flex-1">
          <h1 className="mb-4 md:font-bold md:text-2xl text-gray-900 dark:text-moon-50 text-left font-semibold text-sm leading-5">
            Cryptocurrency Prices by Market Cap
          </h1>
          <div className="md:text-sm text-xs leading-4 text-gray-500 dark:text-moon-200 text-left font-regular">
            The global cryptocurrency market cap today is $2.4 Trillion, a
            <span className="gecko-up ml-2 text-green-600">
              <FontAwesomeIcon icon={faCaretUp} className="mr-2" />
              1.3%
            </span>
            change in the last 24 hours.
            <span className="cursor-pointer font-bold underline text-slate-700 hover:text-primary-500 hover:underline dark:text-slate-50 dark:hover:text-primary-400">
              {" "}
              Read more
            </span>
            <div className="mt-4 hidden">
              Total cryptocurrency trading volume in the last day is at $115
              Billion. Bitcoin dominance is at 53.7% and Ethereum dominance is
              at 13.3%. CoinGecko is now tracking 14,697 cryptocurrencies. The
              largest gainers in the industry right now are
              <a
                className="cursor-pointer font-semibold no-underline text-slate-700 hover:text-primary-500 dark:text-moon-50 dark:hover:text-primary-400"
                href="https://www.coingecko.com/en/categories/asset-backed-tokens"
              >
                Crypto-Backed Tokens
              </a>
              and
              <a
                className="cursor-pointer font-semibold no-underline text-slate-700 hover:text-primary-500 dark:text-moon-50 dark:hover:text-primary-400"
                href="https://www.coingecko.com/en/categories/telegram_apps"
              >
                Telegram Apps
              </a>
              cryptocurrencies.
            </div>
          </div>
        </div>

        {/* Toggle to show or hide Header */}
        <div className="flex py-3 md:py-0 mt-1">
          <div className="text-gray-700 dark:text-moon-100 font-semibold text-sm leading-5">
            Highlights
          </div>
          <div className="pt-0.5 pl-2">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                className="sr-only peer"
                type="checkbox"
                onChange={handleCheckboxChange} // Update state on checkbox change
                checked={showHeader} // Checkbox reflects the state of showHeader
              />
              <div
                className="after:content-[''] w-11 mr-4 h-4 bg-gray-200 rounded-md dark:bg-gray-700
               after:absolute after:top-[-4px] after:left-0 after:drop-shadow after:bg-no-repeat
                after:bg-white after:bg-center after:bg-[url('icons/cross.svg')] after:align-middle 
                after:border-2 after:rounded-lg after:h-6 after:w-6 after:transition-all after:border-gray-200
                 dark:after:border-gray-600 after:dark:border-moon-600 after:dark:bg-moon-50 after:dark:bg-[url('icons/cross_dark.svg')]
                  peer-checked:bg-[#4bcc00] peer-checked:after:border-[#4bcc00] peer-checked:after:bg-[url('icons/tick.svg')] 
                  peer-checked:after:dark:bg-moon-50 peer-checked:after:translate-x-full"
              ></div>
            </label>
          </div>
        </div>
      </div>

      {/* Conditionally render the Header component based on showHeader state */}
      {showHeader && <Header />}
    </>
  );
};

export default Heading;
