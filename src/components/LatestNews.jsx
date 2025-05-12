import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex mb-5 items-center gap-3 bg-base-200 p-3 px-4 text-sm sm:text-base">
      <p className="text-base-100 bg-secondary px-3 py-1 sm:py-2 rounded">
        Latest
      </p>
      <Marquee pauseOnHover={true} speed={60} className="w-full">
        <p className="font-medium mr-10">
          Breaking: Local elections spark high voter turnout across the region.
        </p>
        <p className="font-medium mr-10">
          Sports: National team secures dramatic win in final minutes.
        </p>
        <p className="font-medium">
          Tech: Major update released for popular mobile operating system.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
