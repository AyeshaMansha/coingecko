import React from "react";

const setting =()=> {
    return (
      <>
        <div className="bg-white mt-2 origin-top-left ring-2 ring-gray-200 rounded-md shadow-lg w-56 p-2 z-[2000] dark:bg-moon-800 dark:ring-moon-700 focus:outline-none">
          <div>
            {/* Language Option */}
            <div className="cursor-pointer flex justify-between items-center py-3 px-2 rounded-lg font-semibold text-gray-700 text-sm hover:bg-gray-100 hover:text-gray-900 dark:text-moon-100 dark:hover:bg-moon-700 dark:hover:text-moon-50">
              <span>Language</span>
              <div className="text-gray-500 font-medium text-sm dark:text-moon-200">English</div>
            </div>
            
            {/* Currency Option */}
            <div className="cursor-pointer flex justify-between items-center py-3 px-2 rounded-lg font-semibold text-gray-700 text-sm hover:bg-gray-100 hover:text-gray-900 dark:text-moon-100 dark:hover:bg-moon-700 dark:hover:text-moon-50">
              <span>Currency</span>
              <div className="text-gray-500 font-medium text-sm dark:text-moon-200">USD</div>
            </div>
  
            {/* Dark Mode Toggle */}
            <div className="cursor-pointer flex justify-between items-center py-3 px-2 rounded-lg font-semibold text-gray-700 text-sm hover:bg-gray-100 hover:text-gray-900 dark:text-moon-100 dark:hover:bg-moon-700 dark:hover:text-moon-50">
              <span>Dark Mode</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-4 bg-gray-200 rounded-md dark:bg-gray-700 peer-checked:bg-primary-500">
                  <div className="absolute top-[-4px] left-0 w-6 h-6 bg-white rounded-lg border-2 border-gray-200 dark:border-gray-600 peer-checked:border-primary-500 transition-transform peer-checked:translate-x-full"></div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </>
    );
  }
  

  export default setting;