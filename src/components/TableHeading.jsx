import React from "react";
import { FaStar, FaListOl, FaShapes, FaExternalLinkAlt } from "react-icons/fa";
import { BsStars } from "react-icons/bs";

const TableHeading = () => {
  return (
    <div className="flex-1 mt-6 overflow-x-auto border-0 box-border">
      <nav className="flex flex-wrap gap-2.5 whitespace-nowrap overflow-x-auto">
        <a
          id="tab-cryptocurrencies"
          className="text-green-700 bg-green-100 rounded-lg px-3 py-1.5 cursor-default"
        >
          <span className="font-semibold text-sm flex items-center">
            <FaStar className="mr-1" />
            All
          </span>
        </a>

        <a
          id="tab-highlights"
          className="text-gray-500 rounded-lg px-3 py-1.5 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
        >
          <span className="font-semibold text-sm flex items-center">
            <FaListOl className="mr-1" />
            Highlights
          </span>
        </a>

        <a
          id="tab-pump-fun-ecosystem"
          className="text-gray-500 rounded-lg px-3 py-1.5 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="font-semibold text-sm flex items-center">
            <FaShapes className="mr-1" />
            Pump.fun Ecosystem
            <FaExternalLinkAlt className="ml-1" />
          </span>
        </a>

        <div className="border-r border-gray-200 my-1 hidden md:block"></div>

        <a
          id="tab-categories"
          className="text-gray-500 rounded-lg px-3 py-1.5 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
        >
          <span className="font-semibold text-sm flex items-center">
            <FaShapes className="mr-1" />
            Categories
          </span>
        </a>

        <a
          id="tab-data-availability"
          className="text-gray-500 rounded-lg px-3 py-1.5 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
        >
          <span className="font-semibold text-sm">🔥 Data Availability</span>
        </a>

        <a
          id="tab-zero-knowledge-zk"
          className="text-gray-500 rounded-lg px-3 py-1.5 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
        >
          <span className="font-semibold text-sm">🔥 Zero Knowledge (ZK)</span>
        </a>

        <a
          id="tab-yield-tokenization"
          className="text-gray-500 rounded-lg px-3 py-1.5 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
        >
          <span className="font-semibold text-sm">🔥 Yield Tokenization</span>
        </a>

        <div className="mt-1 ml-0 md:ml-16 flex-shrink-0">
          <button className="bg-gray-50 text-black px-3 font-semibold py-1.5 rounded-lg hover:bg-gray-200 flex items-center">
            <BsStars className="mr-1" />
            Customize
          </button>
        </div>
      </nav>
    </div>
  );
};

export default TableHeading;
