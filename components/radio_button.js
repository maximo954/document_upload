import React from "react";

const RadioButton = ({option1, option2}) => {
  return (
    <div>
      <fieldset className="mb-5 flex gap-5">
        <div className="flex items-center mb-4">
            <input id='{option1}-option-2' type="radio" name="countries" value={option1} className="h-6 w-6 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="option1-option-2" aria-describedby="option1-option-2"/>
            <label htmlFor="option1-option-1" className="text-sm font-medium text-gray-900 ml-2 block">
            {option1} 
            </label>
        </div>

        <div className="flex items-center mb-4">
            <input id="country-option-3" type="radio" name="countries" value={option2} className="h-6 w-6 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-3" aria-describedby="country-option-3"/>
            <label htmlFor="country-option-2" className="text-sm font-medium text-gray-900 ml-2 block">
            {option2}
            </label>
        </div>
    </fieldset>
    </div>
  );
};

export default RadioButton;
