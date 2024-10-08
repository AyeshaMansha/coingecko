import React from "react";
import { FaStar } from "react-icons/fa";

const Card = () => {
  // Sample data for the cards
  const cardData = [
    {
      id: 1,
      title: "Top 10 Upcoming Crypto Airdrops in H2 2024 (UPDATED)",
      image: "/Airdrops_2024.webp",
      author: "Joel Agbo",
      rating: "4.26 (180 votes)",
      coverage: "Coverage",
      link: "#",
    },
    {
      id: 2,
      title: "Top TON Ecosystem Projects to Watch in 2024",
      image: "/card 2.webp",
      author: "Jane Doe",
      rating: "4.10 (120 votes)",
      coverage: "Coins & Tokens",
      link: "#",
    },
    {
      id: 3,
      title: "What Is Tap-2-Earn? Top 3 Tap-to-Earn Games Reviewed",
      image: "/What_are_Tap_2_Earn_Games.webp",
      author: "Alex Smith",
      rating: "4.50 (250 votes)",
      coverage: "Web3 Games",
      link: "#",
    },
    {
      id: 4,
      title: "What Is Grass.io and How to Earn Points for a Potential Airdrop",
      image: "/What_is_Grass_Grass_Points_Airdrop.webp",
      author: "Lisa White",
      rating: "4.75 (300 votes)",
      coverage: "Airdrops",
      link: "#",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900 -50 mb-6">
        Featured Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="border rounded-lg text-left border-gray-200 pb-5 flex flex-col transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <a href={card.link} target="_blank" rel="noopener noreferrer">
              <img
                className="object-cover h-32 rounded-t-lg aspect-[21/11] w-full mb-4"
                alt={card.title}
                src={card.image}
              />
              <div className="flex flex-col flex-1 p-4">
                <div className="mb-2 text-gray-700  font-semibold text-sm leading-5">
                  {card.coverage}
                </div>
                <div className="mb-4 font-bold text-gray-900  text-lg leading-7 overflow-hidden h-16">
                  <div className="h-full flex items-center">
                    <span className="line-clamp-2">{card.title}</span>
                  </div>
                </div>
                <div>
                  <div className="mb-1 text-gray-700 dark:text-moon-100 font-semibold text-sm leading-5">
                    {card.author}
                  </div>
                  <div className="relative font-normal mt-3 text-left text-gray-500 dark:text-moon-200 text-sm leading-5">
                    <span className="absolute left-0 flex items-center">
                      <FaStar className="text-yellow-500 opacity-50" />
                    </span>
                    <span className="ml-5">{card.rating}</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
      <hr className="border-t border-gray-300 mt-4 w-full" />
    </div>
  );
};

export default Card;
