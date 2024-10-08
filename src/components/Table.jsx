import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { CiStar } from "react-icons/ci";

const data = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: "$60,897.60",
    marketCap: "$42,960,918,746",
    fullyDilutedValuation: "$1,202,270,117,189",
    icon: "https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400",
    change1: { value: "0.1%", type: "down" },
    change2: { value: "0.1%", type: "up" },
    change3: { value: "6.6%", type: "down" },
    sparkline: "https://www.coingecko.com/coins/1/sparkline.svg",
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    price: "$2,381.83",
    marketCap: "$18,797,750,814",
    fullyDilutedValuation: "$286,251,821,701",
    icon: "../../public/table/ethereum.webp",
    change1: { value: "0.2%", type: "down" },
    change2: { value: "1.5%", type: "up" },
    change3: { value: "10.2%", type: "down" },
    sparkline: "https://www.coingecko.com/coins/1/sparkline.svg",
  },
  {
    id: 3,
    name: "Tether",
    symbol: "USDT",
    price: "$1.00",
    marketCap: "$59,328,089,842",
    fullyDilutedValuation: "$119,654,036,699",
    icon: "https://assets.coingecko.com/coins/images/325/large/Tether.png?1598003707",
    change1: { value: "0.1%", type: "down" },
    change2: { value: "0.0%", type: "down" },
    change3: { value: "0.0%", type: "up" },
    sparkline: "https://www.coingecko.com/coins/325/sparkline.svg",
  },
  {
    id: 4,
    name: "BNB",
    symbol: "BNB",
    price: "$550.51",
    marketCap: "$707,254,939",
    fullyDilutedValuation: "$80,044,393,996",
    icon: "../../public/table/bnb-icon2_2x.webp",
    change1: { value: "0.1%", type: "up" },
    change2: { value: "0.2%", type: "down" },
    change3: { value: "9.2%", type: "down" },
    sparkline: "https://www.coingecko.com/coins/2710/sparkline.svg",
  },
  {
    id: 5,
    name: "Solana",
    symbol: "SOL",
    price: "$139.63",
    marketCap: "$3,448,210,633",
    fullyDilutedValuation: "$65,550,447,136",
    icon: "https://assets.coingecko.com/coins/images/4128/large/solana.png?1631285018",
    change1: { value: "0.3%", type: "down" },
    change2: { value: "0.1%", type: "up" },
    change3: { value: "11.7%", type: "down" },
    sparkline: "https://www.coingecko.com/coins/4128/sparkline.svg",
  },
  {
    id: 6,
    name: "USDC",
    symbol: "USDC",
    price: "$1",
    marketCap: "$7,249,043,735",
    fullyDilutedValuation: "$35,559,281,224",
    icon: "https://assets.coingecko.com/coins/images/6319/large/usdc.png?1590401990",
    change1: { value: "0.0%", type: "down" },
    change2: { value: "0.0%", type: "down" },
    change3: { value: "0.1%", type: "down" },
    sparkline: "https://www.coingecko.com/coins/6319/sparkline.svg",
  },
  {
    id: 7,
    name: "XRP",
    symbol: "XRP",
    price: "$0.9996",
    marketCap: "$1,904,928,922",
    fullyDilutedValuation: "$29,565,632,050",
    icon: "../../public/table/xrp-symbol-white-128.webp",
    change1: { value: "0.1%", type: "down" },
    change2: { value: "0.0%", type: "down" },
    change3: { value: "11.0%", type: "down" },
    sparkline: "https://www.coingecko.com/coins/44/sparkline.svg",
  },
  {
    id: 8,
    name: "Lido Staked Ether",
    symbol: "STETH",
    price: "$2,377.25",
    marketCap: "$46,283,014",
    fullyDilutedValuation: "$23,314,993,054",
    icon: "../../public/table/steth_logo.webp",
    change1: { value: "0.2%", type: "down" },
    change2: { value: "1.1%", type: "up" },
    change3: { value: "10.7%", type: "down" },
    sparkline: "https://www.coingecko.com/coins/13442/sparkline.svg",
  },
  {
    id: 9,
    name: "Dogecoin",
    symbol: "DOGE",
    price: "$0.1078",
    marketCap: "$944,153,348",
    fullyDilutedValuation: "$15,721,440,880",
    icon: "https://assets.coingecko.com/coins/images/5/large/dogecoin.png",
    change1: { value: "0.3%", type: "down" },
    change2: { value: "3.4%", type: "up" },
    change3: { value: "13.0%", type: "down" },
    sparkline: "https://www.coingecko.com/coins/5/sparkline.svg",
  },
  {
    id: 10,
    name: "Toncoin",
    symbol: "TON",
    price: "$5.36",
    marketCap: "$275,341,871",
    fullyDilutedValuation: "$13,571,990,507",
    icon: "../../public/table/photo_2024-09-10_17.webp",
    change1: { value: "0.1%", type: "up" },
    change2: { value: "2.6%", type: "up" },
    change3: { value: "9.0%", type: "down" },
    sparkline: "https://www.coingecko.com/coins/17980/sparkline.svg",
  },
  {
    id: 11,
    name: "TRON",
    symbol: "TRX",
    price: "$0.1574",
    marketCap: "$442,718,340",
    fullyDilutedValuation: "$13,629,722,228",
    icon: "../../public/table/tron-logo.webp",
    change1: { value: "0.2%", type: "up" },
    change2: { value: "2.3%", type: "up" },
    change3: { value: "2.0%", type: "up" },
    sparkline: "https://www.coingecko.com/coins/1094/sparkline.svg",
  },
  {
    id: 12,
    name: "Cardano",
    symbol: "ADA",
    price: "$0.3516",
    marketCap: "$350,236,668",
    fullyDilutedValuation: "$12,518,744,553",
    icon: "https://assets.coingecko.com/coins/images/975/large/cardano.png",

    change1: { value: "0.2%", type: "down" },
    change2: { value: "3.4%", type: "up" },
    change3: { value: "13.3%", type: "down" },
    sparkline: "https://www.coingecko.com/coins/975/sparkline.svg",
  },
  {
    id: 13,
    name: "Avalanche",
    symbol: "AVAX",
    price: "$25.56",
    marketCap: "$401,451,702",
    fullyDilutedValuation: "$10,353,565,767",
    icon: "../../public/table/Avalanche_Circle_RedWhite_Trans.webp",
    change1: { value: "0.3%", type: "down" },
    change2: { value: "3.1%", type: "up" },
    change3: { value: "14.7%", type: "down" },
    sparkline: "https://www.coingecko.com/coins/12559/sparkline.svg",
  },

  {
    id: 14,
    name: "Shiba Inu",
    symbol: "SHIB",
    price: "$0.00001732",
    marketCap: "$635,698,885",
    fullyDilutedValuation: "$9,964,628,533",
    icon: "../../public/table/shiba.webp",
    change1: { value: "0.3%", type: "up" },
    change2: { value: "7.2%", type: "up" },
    change3: { value: "14.1%", type: "down" },
    sparkline: "https://www.coingecko.com/coins/11939/sparkline.svg",
  },
  {
    id: 15,
    name: "Wrapped stETH",
    symbol: "WSTETH",
    price: "$2,812.20",
    marketCap: "$81,425,360",
    fullyDilutedValuation: "$9,850,879,496",
    icon: "../../public/table/wrapped_bitcoin_wbtc.webp",
    change1: { value: "0.1%", type: "down" },
    change2: { value: "1.3%", type: "up" },
    change3: { value: "10.5%", type: "down" },
    sparkline: "https://www.coingecko.com/coins/18834/sparkline.svg",
  },

  // Add more rows as needed...
];

const Table = () => {
  return (
    <table className="min-w-full table-auto border-collapse">
      <thead>
        <tr className="text-gray-700 dark:text-gray-300">
          <th className="px-4 py-2 text-left">#</th>
          <th className="px-8 py-2 text-left mr-2">Coin</th>{" "}
          {/* Adjust padding and margin here */}
          <th className="px-5 py-2 text-left">Price</th>
          <th className="px-6 py-2 text-left">1h</th>
          <th className="px-4 py-2 text-left">24h</th>
          <th className="px-4 py-2 text-left">7d</th>
          <th className="px-2 py-2 text-left">24h Volume</th>
          <th className="px-2 py-2 text-left">Market Cap</th>
          <th className="px-2 py-2 text-left">Last 7 Days</th>
        </tr>
        <tr>
          <td
            colSpan="9"
            className="border-t border-gray-200 dark:border-gray-600"
          ></td>
        </tr>
      </thead>
      <tbody>
        {data.map((coin, index) => (
          <tr
            key={coin.id}
            className="hover:bg-gray-100  cursor-pointer rounded-xl"
          >
            <td className="px-4 py-4 text-xs font-bold text-gray-800 dark:text-moon-200">
              {/* Row number and star icon */}
              <div className="flex items-center">
                <CiStar size={20} className="ml-1" />
                <span className="ml-5">{index + 1}</span>
              </div>
            </td>
            <td className="flex items-center mt-4 gap-2 px-8">
              {" "}
              {/* Adjusted padding */}
              <img
                className="h-6 w-6 sm:h-8 sm:w-8 object-fill"
                alt={coin.name}
                src={coin.icon}
              />
              <div className="flex flex-col">
                <div className="text-gray-700 dark:text-moon-100 font-bold text-sm leading-5">
                  {coin.name}{" "}
                  <span className="text-gray-500 dark:text-moon-200 text-xs">
                    {coin.symbol}
                  </span>
                </div>
              </div>
            </td>
            {/* Price */}
            <td className="px-2 py-4 text-xs font-semibold text-gray-800 dark:text-moon-200">
              {coin.price}
            </td>
            {/* 1h Change */}
            <td className="px-6 py-4 text-xs font-semibold">
              <span
                className={`${
                  coin.change1.type === "up" ? "text-green-600" : "text-red-600"
                } flex items-center`}
              >
                <FontAwesomeIcon
                  icon={coin.change1.type === "up" ? faCaretUp : faCaretDown}
                  className="mr-1"
                />
                {coin.change1.value}
              </span>
            </td>
            {/* 24h Change */}
            <td className="px-4 py-4 text-xs font-semibold">
              <span
                className={`${
                  coin.change2.type === "up" ? "text-green-600" : "text-red-600"
                } flex items-center`}
              >
                <FontAwesomeIcon
                  icon={coin.change2.type === "up" ? faCaretUp : faCaretDown}
                  className="mr-1"
                />
                {coin.change2.value}
              </span>
            </td>
            {/* 7d Change */}
            <td className="px-4 py-4 text-xs font-semibold">
              <span
                className={`${
                  coin.change3.type === "up" ? "text-green-600" : "text-red-600"
                } flex items-center`}
              >
                <FontAwesomeIcon
                  icon={coin.change3.type === "up" ? faCaretUp : faCaretDown}
                  className="mr-1"
                />
                {coin.change3.value}
              </span>
            </td>
            {/* 24h Volume */}
            <td className="px-2 py-4 text-xs font-semibold text-gray-800 dark:text-moon-200">
              {coin.marketCap}
            </td>
            {/* Market Cap */}
            <td className="px-2 py-4 text-xs font-semibold text-gray-800 dark:text-moon-200">
              {coin.fullyDilutedValuation}
            </td>
            {/* Sparkline */}
            <td className="px-2 py-4">
              <img
                alt={`${coin.name} 7d chart`}
                src={coin.sparkline}
                className="w-20 h-auto"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
