import React from "react";
import Icon from "./icon";

const path = "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"

const Loader = () => {
  return (
    <div className="flex items-center mx-6">

      <div className="mt-1">
        <Icon size='h-8 w-8' color="text-orange-400" path={path} />
      </div>

      <div className="flex-col w-full ml-1">

        <div className="flex mb-1 justify-between w-full">
          <div className="text-gray-200">WN-DAL-0726-NH20166.csv</div>
          <div className="text-gray-500 text-sm">5.7MB</div>
        </div>

        <div className="h-1 bg-gray-200 rounded-full">
          <div className="w-1/4 h-full text-center text-xs text-white bg-orange-400 round-full "></div>
        </div>

      </div>

    </div>
  );
};

export default Loader;
