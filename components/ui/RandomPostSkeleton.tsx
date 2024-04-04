import React from "react";

const RandomPostSkeleton = () => {
  return (
    <div className="animate-pulse flex gap-2 items-center">
      <div className="bg-gray-200 rounded-md h-[44px] w-[90px]"></div>
      <div className="flex-grow flex flex-col gap-3">
        <div className="h-2 bg-gray-200 rounded-full w-full"></div>
        <div className="h-2 bg-gray-200 rounded-full w-full"></div>
      </div>
    </div>
  );
};

export default RandomPostSkeleton;
