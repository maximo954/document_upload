import React from "react";

const Icon = ({ color, size, path }) => {
  return (
    <div>
      <svg
        className={`${size} ${color}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={path}
        />
      </svg>
    </div>
  );
};

export default Icon;
