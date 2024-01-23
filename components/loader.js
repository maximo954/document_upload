import React from "react";

const Loader = () => {
  return (
    <div className="flex mx-6">
      <svg
        className="w-10 h-10 mb-3 text-orange-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
        ></path>
      </svg>

      <div className="flex-col w-full ml-1">
        <div className="flex justify-between w-full">
          <div className="text-gray-200">WN-DAL-0726-NH20166.csv</div>
          <div className="text-gray-500 text-sm">5.7MB</div>
        </div>

        <div className="h-2 bg-gray-200 rounded-full">
          <div className="w-1/4 h-full text-center text-xs text-white bg-orange-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
