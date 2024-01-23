import React from "react";

const DropDownMenu = () => {
  return (
    <div className="">
      <select
        id="countries"
        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
      >
        <option defaultValue>Select Import Name:</option>
        <option defaultValue="US">United States</option>
        <option defaultValue="CA">Canada</option>
        <option defaultValue="FR">France</option>
        <option defaultValue="DE">Germany</option>
      </select>
    </div>
  );
};

export default DropDownMenu;
