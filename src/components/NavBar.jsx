import { CiSettings } from "react-icons/ci";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";
import PropTypes from "prop-types";
const NavBar = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for the signup
  const modalRef = useRef(null); // Create a ref for the modal

  // Function to toggle the settings box
  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  // Function to close the modal when clicking outside of it
  const closeSettings = () => {
    setIsSettingsOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close modal if clicked outside
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeSettings();
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center p-4 lg:p-0">
      <div className="flex justify-between mt-3 space-x-4 w-full">
        <div className="flex flex-wrap items-center gap-4 lg:gap-x-6 lg:whitespace-nowrap lg:pr-4">
          {navBarLinks.map((link) => {
            return <NavBarLinksCard item={link} key={link.name} />;
          })}
        </div>
        {/* Settings Button */}
        <div className="flex justify-between space-x-4">
          <button
            className="bg-white border-[3px] shadow-bottom-solid shadow-[#CBD5E1] active:shadow-none border-slate-300 hover:bg-slate-100 transition-all duration-150 active:translate-y-2 items-center justify-center font-semibold rounded-lg px-2.5 py-1 pb-1.5 flex"
            type="button"
            onClick={toggleSettings} // Toggle the modal on click
          >
            <CiSettings
              size={18}
              className="text-slate-900 dark:text-moon-50"
            />
          </button>
          {/* Settings Modal */}
          {isSettingsOpen && (
            <div
              className="absolute top-10 right-48 mt-2 z-20 flex items-start "
              onClick={closeSettings}
            >
              <div
                ref={modalRef}
                className="bg-white p-3 rounded-lg shadow-lg w-72"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="space-y-4">
                  {/* Settings options */}
                  <div className="cursor-pointer flex justify-between items-center py-2 px-2 rounded-lg font-semibold text-gray-700 text-sm hover:bg-gray-100">
                    <span>Language</span>
                    <span className="text-gray-500">English</span>
                  </div>
                  <div className="cursor-pointer flex justify-between items-center py-2 px-2 rounded-lg font-semibold text-gray-700 text-sm hover:bg-gray-100">
                    <span>Currency</span>
                    <span className="text-gray-500">USD</span>
                  </div>
                  <div className="cursor-pointer flex justify-between items-center py-2 px-2 rounded-lg font-semibold text-gray-700 text-sm hover:bg-gray-100">
                    <span>Dark Mode</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-10 h-4 bg-gray-200 rounded-md">
                        <div className="w-6 h-6 bg-white rounded-full border transition-transform peer-checked:translate-x-6" />
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}
          <button
            className="bg-white border-[3px] shadow-bottom-solid active:shadow-none shadow-[#CBD5E1] border-slate-300 hover:bg-slate-100 transition-all duration-150 active:translate-y-2 items-center justify-center font-semibold rounded-lg px-2.5 py-1 pb-1.5 flex text-black text-sm"
            type="button"
          >
            Login
          </button>
          {/* Sign Up Button */}
          <button
            className="bg-[#4BCC00] border-[3px] shadow-bottom-solid active:shadow-none shadow-[#379401] border-[#4BCC00] active:shadow-secondaryActive dark:active:shadow-secondaryActiveDark hover:text-green-600 transition-all duration-150 active:translate-y-2 items-center justify-center font-semibold rounded-lg px-2.5 py-1 pb-1.5 flex text-white text-sm"
            type="button"
            onClick={openModal} // Open the modal on click
          >
            Sign up
          </button>
        </div>
      </div>
      {/* Signup Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};
("bg-white shadow-[#CBD5E1] border-slate-300 hover:bg-slate-100");

const navBarLinks = [
  {
    name: "Coins",
    values: ["14,660"],
  },
  {
    name: "Exchanges",
    values: ["1,201"],
  },
  {
    name: "Market Cap",
    values: ["$2.414T"],
    additional: {
      text: "0.8%",
      icon: faCaretDown,
    },
  },
  {
    name: "24h Vol",
    values: ["$89.163B"],
  },
  {
    name: "Dominance",
    values: [["BTC 53.8%", "ETH 13.3%"]],
  },
  {
    name: "Gas",
    values: ["6.037917004 GWEI"],
  },
];

function ButtonNavs({ item }) {
  return (
    <button
      onClick={item.functionality}
      className={`${item.classes} text-black border-[3px] shadow-bottom-solid active:shadow-none transition-all duration-150 active:translate-y-2 items-center justify-center font-semibold rounded-lg px-2.5 py-1 pb-1.5 flex text-sm`}
    >
      {item.text}
    </button>
  );
}

function NavBarLinksCard({ item }) {
  return (
    <div className="text-xs lg:text-sm leading-4 text-gray-500 dark:text-moon-200">
      {item.name}:
      {item.values.map((value) => {
        return (
          <a
            className="cursor-pointer ms-1 font-semibold text-slate-700 hover:text-primary-500 dark:text-moon-50 dark:hover:text-primary-400"
            href="#"
            key={value}
          >
            <span>{value}</span>
          </a>
        );
      })}
      {item.additional && (
        <span className="text-red-500">
          <FontAwesomeIcon icon={item.additional.icon} className="mx-1" />
          {item.additional.text}
        </span>
      )}
    </div>
  );
}

export default NavBar;

NavBarLinksCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    values: PropTypes.array,
    additional: PropTypes.shape({
      text: PropTypes.string,
      icon: PropTypes.string,
    }),
  }),
};

ButtonNavs.propTypes = {
  item: PropTypes.shape({
    text: PropTypes.string,
    classes: PropTypes.string,
    functionality: PropTypes.func,
  }),
};
