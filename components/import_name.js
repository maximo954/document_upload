import React from "react";

const ImportName = () => {
  return (
    <div className="">
      <select
        id="countries"
        class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
      >
        <option selected>Select Import Name:</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </div>
  );
};

export default ImportName;
