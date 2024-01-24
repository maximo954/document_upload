import React from "react";

const DropDownMenu = ({selections, sel, size}) => {
  return (
    <div>
      <select
        className={`border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-${size}  p-3`}
      >
        <option defaultValue>{sel}</option>
        {selections && selections.map((select, index) => (
          <option key={index} defaultValue={select}>{select}</option>
        ))}
      </select>
    </div>
  );
};

export default DropDownMenu;
