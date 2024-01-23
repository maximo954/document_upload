import React from "react";

const ToggleButton = () => {
  return (
    <div className="flex text-gray-500 ">
      <label
        htmlFor="toggle-example"
        className="flex items-center cursor-pointer relative mb-4"
      >
        <input type="checkbox" id="toggle-example" className="sr-only" />
        <div className="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
        <span className="ml-3 text-gray-400 font-medium">Toggle On</span>
      </label>
      <span className="ml-2">|</span>
      <div>
        <p className="text-gray-400 ml-2">Select Tolerance Level</p>
      </div>
    </div>
  );
};

export default ToggleButton;
