import React, { useState } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300); // Reset after animation duration
  };

  return (
    <footer className="bg-white  py-6">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-6">
        {/* Image Section */}
        <div className="lg:w-1/3 flex flex-col items-start">
          <img
            className="cursor-pointer block dark:hidden"
            alt="CoinGecko"
            src="../../public/logo.webp"
          />
          <div className="mt-6 font-normal text-gray-500 dark:text-moon-200 text-sm leading-5">
            CoinGecko provides a fundamental analysis of the crypto market. In
            addition to tracking price, volume, and market capitalization,
            CoinGecko tracks community growth, open-source code development,
            major events, and on-chain metrics.
          </div>
        </div>

        {/* Links Section */}
        <div className="mt-6 flex flex-col gap-8 sm:text-center lg:flex-row justify-between lg:w-2/3">
          {/* First Section: Resources */}
          <div className="flex-1 mb-6 lg:mb-0">
            <h4 className="text-black text-lg text-left mb-4 font-semibold">
              Resources
            </h4>
            <ul className="text-gray-500  text-left list-none p-0">
              <li className="cursor-pointer mb-3">Crypto News</li>
              <li className="cursor-pointer mb-3">Bitcoin Treasury</li>
              <li className="cursor-pointer mb-3">Crypto Heatmap</li>
              <li className="cursor-pointer">Crypto API</li>
            </ul>
            <h4 className="text-black text-lg text-left mt-6 mb-4 font-semibold">
              Donations
            </h4>
            <ul className="text-gray-500 text-left list-none p-0">
              <li className="cursor-pointer mb-3">Bitcoin</li>
              <li className="cursor-pointer">Ethereum</li>
            </ul>
          </div>

          {/* Second Section: Support */}
          <div className="flex-1 mb-6 lg:mb-0">
            <h4 className="text-black text-lg text-left mb-4 font-semibold">
              Support
            </h4>
            <ul className="text-gray-500 text-left list-none p-0">
              <li className="cursor-pointer mb-3">Request Form</li>
              <li className="cursor-pointer mb-3">Advertising</li>
              <li className="cursor-pointer mb-3">Candy Rewards Listing</li>
              <li className="cursor-pointer mb-3">Help Center</li>
              <li className="cursor-pointer mb-3">Bug Bounty</li>
              <li className="cursor-pointer">FAQ</li>
            </ul>
          </div>

          {/* Third Section: About CoinGecko */}
          <div className="flex-1 mb-6 lg:mb-0">
            <h4 className="text-black text-left  text-lg mb-4 font-semibold">
              About CoinGecko
            </h4>
            <ul className="text-gray-500  text-left list-none p-0">
              <li className="cursor-pointer mb-3">About Us</li>
              <li className="cursor-pointer mb-3">Careers</li>
              <li className="cursor-pointer mb-3">Join Us</li>
              <li className="cursor-pointer mb-3">Company Blog</li>
              <li className="cursor-pointer mb-3">Branding Guide</li>
              <li className="cursor-pointer mb-3">Methodology</li>
              <li className="cursor-pointer mb-3">Disclaimer</li>
              <li className="cursor-pointer mb-3">Terms of Service</li>
              <li className="cursor-pointer mb-3">Privacy Policy</li>
              <li className="cursor-pointer mb-3">Ad Policy</li>
              <li className="cursor-pointer">Cookie Preferences</li>
            </ul>
          </div>

          {/* Fourth Section: Community */}
          <div className="flex-1 mb-6 lg:mb-0">
            <h4 className="text-black text-lg  text-left mb-4 font-semibold">
              Community
            </h4>
            <ul className="text-gray-500 text-left  list-none p-0">
              <li className="cursor-pointer mb-3">X/Twitter</li>
              <li className="cursor-pointer mb-3">Telegram Chat</li>
              <li className="cursor-pointer mb-3">Telegram News</li>
              <li className="cursor-pointer mb-3">Instagram</li>
              <li className="cursor-pointer mb-3">Reddit</li>
              <li className="cursor-pointer mb-3">Discord</li>
              <li className="cursor-pointer mb-3">Facebook</li>
              <li className="cursor-pointer mb-3">Youtube</li>
              <li className="cursor-pointer">TikTok</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container my-6 mx-auto px-4">
        {/* Line Separator */}
        <hr className="border-t border-gray-300 mb-4" />

        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex-1 text-left mb-6 lg:mb-0">
            <h2 className="mb-2 text-gray-800 font-semibold text-lg leading-6">
              Interested in staying up-to-date with cryptocurrencies?
            </h2>
            <p className="mb-2 font-normal text-gray-600 text-sm leading-5">
              Get the latest crypto news, updates, and reports by subscribing to
              our free newsletter.
            </p>
          </div>
          <div>
            <form className="flex flex-col lg:flex-row justify-end mb-1">
              <div className="mb-2 lg:mb-0 lg:mr-2">
                <div className="flex overflow-hidden rounded-lg bg-white shadow">
                  <input
                    className="h-12 px-4 text-gray-800 text-sm leading-5 placeholder-gray-400 border-2 border-gray-300 focus:border-[#4BCC00] focus:outline-none transition duration-150 rounded-lg"
                    type="email"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="mt-2 hidden text-danger-500 text-xs leading-4">
                  {/* Error message here */}
                </div>
              </div>
              <motion.button
                className="subscribe-button w-full lg:w-auto bg-[#4BCC00] hover:text-green-100 shadow-lg rounded-lg text-white font-semibold text-lg leading-5 px-6 py-3 flex items-center justify-center"
                type="button"
                initial={{ y: 0 }}
                animate={{ y: isClicked ? 10 : 0 }} // Move down by 10 pixels
                transition={{ type: "spring", stiffness: 300 }}
                onClick={handleClick}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        <hr className="border-t border-gray-300 mt-4 w-full" />
        <section className="py-6 bg-white text-gray-900">
          <div className="container flex flex-col justify-between p-4 gap-5 md:p-10 lg:flex-row">
            <div className="flex flex-col text-left">
              <p className="mb-1 text-sm font-medium tracking-widest uppercase text-gray-600">
                © 2024 CoinGecko. All Rights Reserved.
              </p>
              <p className="py-2 text-sm font-medium leading-tight title-font">
                IMPORTANT DISCLAIMER: All content provided herein on our
                website, hyperlinked sites, associated applications, forums,
                blogs, social media accounts, and other platforms (“Site”) is
                for your general information only, procured from third-party
                sources. We make no warranties of any kind in relation to our
                content, including but not limited to accuracy and updatedness.
                No part of the content that we provide constitutes financial
                advice, legal advice, or any other form of advice meant for your
                specific reliance for any purpose. Any use or reliance on our
                content is solely at your own risk and discretion. You should
                conduct your own research, review, analyze, and verify our
                content before relying on them. Trading is a highly risky
                activity that can lead to major losses; please therefore consult
                your financial advisor before making any decision. No content on
                our Site is meant to be a solicitation or offer.
              </p>
            </div>
            <div className="flex flex-col items-center flex-shrink-0 mt-2 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end">
              <button className="inline-flex items-center px-6 py-3 rounded-lg bg-black text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="fill-current w-8 h-8 text-gray-50"
                >
                  <path d="M 5.4160156 2.328125 L 12.935547 10.158203 C 13.132547 10.363203 13.45925 10.363203 13.65625 10.158203 L 15.179688 8.5742188 C 15.405688 8.3392188 15.354312 7.956875 15.070312 7.796875 C 11.137313 5.571875 6.2620156 2.811125 5.4160156 2.328125 z M 3.140625 2.8476562 C 3.055625 3.0456562 3 3.2629063 3 3.5039062 L 3 20.591797 C 3 20.788797 3.044375 20.970625 3.109375 21.140625 L 11.576172 12.324219 C 11.762172 12.131219 11.762172 11.826813 11.576172 11.632812 L 3.140625 2.8476562 z M 17.443359 9.2578125 C 17.335484 9.2729375 17.233297 9.32375 17.154297 9.40625 L 15.015625 11.632812 C 14.829625 11.825812 14.829625 12.130219 15.015625 12.324219 L 17.134766 14.529297 C 17.292766 14.694297 17.546141 14.729188 17.744141 14.617188 C 19.227141 13.777188 20.226563 13.212891 20.226562 13.212891 C 20.725562 12.909891 21.007 12.443547 21 11.935547 C 20.992 11.439547 20.702609 10.981938 20.224609 10.710938 C 20.163609 10.676937 19.187672 10.124359 17.763672 9.3183594 C 17.664172 9.2623594 17.551234 9.2426875 17.443359 9.2578125 z M 13.296875 13.644531 C 13.165875 13.644531 13.034047 13.696328 12.935547 13.798828 L 5.4746094 21.566406 C 6.7566094 20.837406 11.328781 18.249578 15.050781 16.142578 C 15.334781 15.981578 15.386156 15.599281 15.160156 15.363281 L 13.65625 13.798828 C 13.55775 13.696328 13.427875 13.644531 13.296875 13.644531 z"></path>
                </svg>
                <span className="flex flex-col items-start ml-4 leading-none">
                  <span className="mb-1 text-xs">GET IT ON</span>
                  <span className="font-semibold title-font">Google Play</span>
                </span>
              </button>
              <button className="inline-flex items-center px-5 py-3 rounded-lg bg-black text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  className="fill-current w-8 h-8 text-gray-50"
                >
                  <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
                </svg>
                <span className="flex flex-col items-start ml-4 leading-none">
                  <span className="mb-1 text-xs">Download on the</span>
                  <span className="font-semibold title-font">App Store</span>
                </span>
              </button>
            </div>
          </div>
        </section>

        <hr className="border-t border-gray-300 mt-4 w-full" />
      </div>
    </footer>
  );
};

export default Footer;
