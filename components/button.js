import React from "react";

const Button = ({label, style}) => {
  return (
    <div>
      <button
        type="submit"
        className={style}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
