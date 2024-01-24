import React from "react";

const RadioButton = ({option1, option2, name, style}) => {
  return (
    <div>
      <fieldset className="mb-5 flex gap-5">
        <div className="flex items-center mb-4">
            <input id={`${option1.toLowerCase()}-option-1`} type="radio" name={name} value={option1.toLowerCase()} className="h-6 w-6 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby={`${option1.toLowerCase()}-option-1`} aria-describedby={`${option1.toLowerCase()}-option-1`}/>
            <label htmlFor={`${option1.toLowerCase()}-option-1`} className={style}>
            {option1} 
            </label>
        </div>

        <div className="flex items-center mb-4">
            <input id={`${option2.toLowerCase()}-option-2`} type="radio" name={name} value={option2.toLowerCase()} className="h-6 w-6 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby={`${option2.toLowerCase()}-option-2`} aria-describedby={`${option2.toLowerCase()}-option-2`}/>
            <label htmlFor={`${option2.toLowerCase()}-option-2`} className={style}>
            {option2}
            </label>
        </div>
    </fieldset>
    </div>
  );
};

export default RadioButton;
