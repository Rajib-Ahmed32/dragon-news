import React from "react";
import swimming from "../../assets/swimming.png";
import clas from "../../assets/class.png";
import playground from "../../assets/playground.png";

const qZoneItems = [
  {
    title: "Swimming",
    img: swimming,
  },
  {
    title: "Class",
    img: clas,
  },
  {
    title: "Play Ground",
    img: playground,
  },
];

const QZone = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg space-y-4">
      <h2 className="text-lg font-semibold text-gray-700 mb-5">Q-Zone</h2>
      {qZoneItems.map((item, index) => (
        <div key={index} className="bg-white p-2 rounded shadow">
          <img
            src={item.img}
            alt={item.title}
            className="rounded mb-2 w-full"
          />
          <p className="text-center font-medium">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default QZone;
