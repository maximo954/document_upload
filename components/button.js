import React from "react";
import Icon from "./icon";

const Button = ({label, style, action, color, size, path}) => {
  return (
    <div className={style}>
      <button
        type="submit"
        
        onClick={action}
      >
        {label ? label : ''}
        {path ? <Icon color={color} size={size} path={path}/> : ''}
      </button>
    </div>
  );
};

export default Button;
