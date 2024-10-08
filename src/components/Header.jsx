import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row mb-4 gap-4">
        {/* First Column */}
        <div className="flex flex-col gap-4 w-full md:w-1/3">
          <div className="flex items-center justify-between gap-3 rounded-xl bg-white p-4 ring-2 h-full ring-gray-200 dark:bg-moon-900 dark:ring-moon-700 shadow-md">
            <div className="flex flex-col">
              <div className="font-bold text-gray-900 dark:text-moon-50 text-lg leading-7">
                <span className="transition-colors duration-150">
                  $2,413,209,093,933
                </span>
              </div>
              <div className="mt-1 flex flex-wrap items-center text-gray-500 dark:text-moon-200 font-semibold text-sm leading-5">
                Market Cap
                <span className="font-semibold">
                  <span className="text-red-500 flex items-center">
                    <MdArrowDropDown className="ml-3" size={20} />
                    0.8%
                  </span>
                </span>
              </div>
            </div>
            <a className="block h-full" href="#">
              <img
                className="h-full max-w-full"
                src="../../public/total_market_cap.svg"
                alt="Total Market Cap"
              />
            </a>
          </div>

          <div className="flex items-center justify-between gap-3 rounded-xl bg-white p-4 ring-2 h-full ring-gray-200 dark:bg-moon-900 dark:ring-moon-700 shadow-md">
            <div className="flex flex-col">
              <div className="font-bold text-gray-900 dark:text-moon-50 text-lg leading-7">
                <span className="transition-colors duration-150">
                  $88,913,629,463
                </span>
              </div>
              <div className="mt-1 flex flex-wrap items-center text-gray-500 dark:text-moon-200 font-semibold text-sm leading-5">
                24h Trading Volume
              </div>
            </div>
            <a className="block h-full" href="#">
              <img
                className="h-full max-w-full"
                src="../../public/total_volume.svg"
                alt="24h Trading Volume"
              />
            </a>
          </div>
        </div>

        {/* Second Column */}
        <div className="w-full md:w-1/3 rounded-xl border border-gray-300 p-1.5 shadow-md ring-2 ring-gray-200">
          <div className="flex justify-between pt-2.5 mb-2.5 px-2 truncate">
            <div className="text-gray-900 dark:text-moon-50 font-semibold text-base leading-6">
              🔥 Trending
            </div>
            <div className="flex items-center space-x-1 cursor-pointer">
              <a
                className="flex items-center space-x-1 cursor-pointer font-semibold no-underline text-slate-700 hover:text-[#4BCC00]  dark:text-moon-50 dark:hover:text-primary-400"
                href="#"
              >
                <span>View more</span>
                <FontAwesomeIcon icon={faAngleRight} className="ml-3" />
              </a>
            </div>
          </div>
          {/* Trending Items */}
          <div className="border-0 box-border">
            <a href="#" className="no-underline">
              <div className="flex justify-between px-2 py-2.5 hover:bg-gray-50 rounded-lg dark:hover:bg-moon-700">
                <div className="flex items-center gap-x-2 max-w-[50%]">
                  <img
                    className="rounded-full"
                    height={24}
                    width={24}
                    alt="CHEQD Network"
                    src="../../public/CHEQ.webp"
                  />
                  <span className="block truncate text-gray-500 dark:text-moon-200">
                    <span className="text-gray-700 dark:text-moon-100 font-semibold text-sm leading-5">
                      CHEQD Network
                    </span>
                  </span>
                </div>
                <div className="flex justify-end items-center max-w-[50%] text-right">
                  <span className="text-gray-900 dark:text-moon-50 font-medium text-sm leading-5">
                    <span className="transition duration-150">$0.03418</span>
                    <span className="gecko-down ml-2 text-red-500 transition duration-150 whitespace-nowrap">
                      <FontAwesomeIcon icon={faCaretDown} className="mr-2" />
                      7.4%
                    </span>
                  </span>
                </div>
              </div>
            </a>
            <a href="#" className="no-underline">
              <div className="flex justify-between px-2 py-2.5 hover:bg-gray-50 rounded-lg dark:hover:bg-moon-700">
                <div className="flex items-center gap-x-2 max-w-[50%]">
                  <img
                    className="rounded-full"
                    height={24}
                    width={24}
                    alt="Kadena"
                    src="../../public/icon 1.webp"
                  />
                  <span className="block truncate text-gray-500 dark:text-moon-200">
                    <span className="text-gray-700 dark:text-moon-100 font-semibold text-sm leading-5">
                      enqAI
                    </span>
                  </span>
                </div>
                <div className="flex justify-end items-center max-w-[50%] text-right">
                  <span className="text-gray-900 dark:text-moon-50 font-medium text-sm leading-5">
                    <span className="transition duration-150">$0.03675</span>
                    <span className="gecko-up ml-2 text-green-600 transition duration-150">
                      <FontAwesomeIcon icon={faCaretUp} className="mr-2" />
                      0.5%
                    </span>
                  </span>
                </div>
              </div>
            </a>
            <a href="#" className="no-underline">
              <div className="flex justify-between px-2 py-2.5 hover:bg-gray-50 rounded-lg dark:hover:bg-moon-700">
                <div className="flex items-center gap-x-2 max-w-[50%]">
                  <img
                    className="rounded-full"
                    height={24}
                    width={24}
                    alt="Elrond"
                    src="../../public/opulous.webp"
                  />
                  <span className="block truncate text-gray-500 dark:text-moon-200">
                    <span className="text-gray-700 dark:text-moon-100 font-semibold text-sm leading-5">
                      {" "}
                      Opulous
                    </span>
                  </span>
                </div>
                <div className="flex justify-end items-center max-w-[50%] text-right">
                  <span className="text-gray-900 dark:text-moon-50 font-medium text-sm leading-5">
                    <span className="transition duration-150">$0.0116</span>
                    <span className="gecko-down ml-2 text-green-600 transition duration-150">
                      <FontAwesomeIcon icon={faCaretUp} className="mr-2" />
                      64.1%
                    </span>
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Third Column */}
        <div className="w-full md:w-1/3 rounded-xl border border-gray-300 p-1.5 shadow-md ring-2 ring-gray-200">
          <div className="flex justify-between pt-2.5 mb-2.5 px-2 truncate">
            <div className="text-gray-900 dark:text-moon-50 font-semibold text-base leading-6">
              🚀 Largest Gainers
            </div>
            <div className="flex items-center space-x-1 cursor-pointer">
              <a
                className="flex items-center space-x-1 cursor-pointer font-semibold no-underline text-slate-700 hover:text-[#4BCC00] dark:text-moon-50 dark:hover:text-primary-400"
                href="#"
              >
                <span>View more</span>
                <FontAwesomeIcon icon={faAngleRight} className="ml-3" />
              </a>
            </div>
          </div>
          {/* Largest Gainers Items */}
          <div className="border-0 box-border">
            <a href="#" className="no-underline">
              <div className="flex justify-between px-2 py-2.5 hover:bg-gray-50 rounded-lg dark:hover:bg-moon-700">
                <div className="flex items-center gap-x-2 max-w-[50%]">
                  <img
                    className="rounded-full"
                    height={22}
                    width={24}
                    alt="Velas"
                    src="../../public/logo_blue.webp"
                  />
                  <span className="block truncate text-gray-500 dark:text-moon-200">
                    <span className="text-gray-700 dark:text-moon-100 font-semibold text-sm leading-5">
                      Velas
                    </span>
                  </span>
                </div>
                <div className="flex justify-end items-center max-w-[50%] text-right">
                  <span className="text-gray-900 dark:text-moon-50 font-medium text-sm leading-5">
                    <span className="transition duration-150">$0.0116</span>
                    <span className="gecko-up ml-2 text-green-600">
                      <FontAwesomeIcon icon={faCaretUp} className="mr-2" />
                      64.1%
                    </span>
                  </span>
                </div>
              </div>
            </a>
            <a href="#" className="no-underline">
              <div className="flex justify-between px-2 py-2.5 hover:bg-gray-50 rounded-lg dark:hover:bg-moon-700">
                <div className="flex items-center gap-x-2 max-w-[50%]">
                  <img
                    className="rounded-full"
                    height={22}
                    width={24}
                    alt="Velas"
                    src="../../public/sticker_(1).webp"
                  />
                  <span className="block truncate text-gray-500 dark:text-moon-200">
                    <span className="text-gray-700 dark:text-moon-100 font-semibold text-sm leading-5">
                      SPX6900
                    </span>
                  </span>
                </div>
                <div className="flex justify-end items-center max-w-[50%] text-right">
                  <span className="text-gray-900 dark:text-moon-50 font-medium text-sm leading-5">
                    <span className="transition duration-150"> $0.1061</span>
                    <span className="gecko-up ml-2 text-green-600">
                      <FontAwesomeIcon icon={faCaretUp} className="mr-2" />
                      72.5%
                    </span>
                  </span>
                </div>
              </div>
            </a>
            <a href="#" className="no-underline">
              <div className="flex justify-between px-2 py-2.5 hover:bg-gray-50 rounded-lg dark:hover:bg-moon-700">
                <div className="flex items-center gap-x-2 max-w-[50%]">
                  <img
                    className="rounded-full"
                    height={22}
                    width={24}
                    alt="Velas"
                    src="../../public/MOODENG.jpg"
                  />
                  <span className="block truncate text-gray-500 dark:text-moon-200">
                    <span className="text-gray-700 dark:text-moon-100 font-semibold text-sm leading-5">
                      Moo Deng
                    </span>
                  </span>
                </div>
                <div className="flex justify-end items-center max-w-[50%] text-right">
                  <span className="text-gray-900 dark:text-moon-50 font-medium text-sm leading-5">
                    <span className="transition duration-150"> $0.2988</span>
                    <span className="gecko-up ml-2 text-green-600">
                      <FontAwesomeIcon icon={faCaretUp} className="mr-2 " />
                      40.0%
                    </span>
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
