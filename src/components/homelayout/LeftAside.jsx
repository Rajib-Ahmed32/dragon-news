import React from "react";
import Categories from "../Categories";
import CompactNewsCard from "../CompactNewsCard";

const LeftAside = () => {
  return (
    <div className="shadow-sm p-4">
      <Categories />
      <CompactNewsCard />
    </div>
  );
};

export default LeftAside;
