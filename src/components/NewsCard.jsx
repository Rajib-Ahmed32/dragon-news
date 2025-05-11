import React, { useState } from "react";
import { FaEye, FaStar } from "react-icons/fa";
import { MdShare } from "react-icons/md";

const NewsCard = ({ item }) => {
  const { title, thumbnail_url, details, total_view, rating, author } = item;
  const [expanded, setExpanded] = useState(false);

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="border rounded-lg shadow p-4 bg-white">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-sm">{author.name}</h4>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <MdShare className="text-gray-600 cursor-pointer text-lg" />
      </div>

      <h2 className="text-lg font-semibold mb-2">{title}</h2>

      <img
        src={thumbnail_url}
        alt={title}
        className="w-full h-48 object-cover rounded mb-3"
      />

      <p className="text-sm text-gray-700 mb-2">
        {expanded ? details : `${details.slice(0, 150)}...`}
      </p>
      <button
        className="text-red-500 cursor-pointer font-semibold text-sm"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Read Less" : "Read More"}
      </button>

      <div className="flex justify-between items-center mt-3">
        <div className="flex items-center text-orange-400 text-sm gap-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-black font-semibold ml-1">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-600 text-sm">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
