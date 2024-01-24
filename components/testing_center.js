'use client'
import React, { useState } from "react";
import DropDownMenu from "./drop_down_menu";
import Icon from "./icon";

const icon_path = "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z";

const TestCenter = ({ num, style }) => {
  
  return (
    <div className="text-gray-500 flex gap-8 items-center">
      <p className={style}>Testing Center {num}</p>
      <DropDownMenu sel="Select Client:" size="60"/>
      <div className="-m-4">

      <Icon color='text-gray-500' size='h-6 w-6' path={icon_path}/>
      </div>
    </div>
  );
};

export default TestCenter;
