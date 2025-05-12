import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import useFetchData from "../hooks/useFetchData";
import DataWrapper from "../components/DataWrapper";

const CompactNewsCard = () => {
  const { data, loading, error } = useFetchData("/compact-news.json");

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <DataWrapper
      loading={loading}
      error={error}
      data={data}
      emptyMessage="No compact news found."
    >
      <div className="space-y-6 mt-8">
        {data.map((item) => {
          const formattedDate = new Date(
            item.author.published_date
          ).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          });

          return (
            <div key={item.id} className="flex flex-col">
              <img
                src={item.thumbnail_url}
                alt={item.title}
                className="w-full h-40 object-cover rounded-lg mb-2"
              />
              <h3 className="text-md font-semibold leading-snug">
                {item.title}
              </h3>
              <div className="flex items-center text-sm text-gray-500 mt-1 gap-3">
                <span className="font-medium">Sports</span>
                <span className="flex items-center gap-1">
                  <FaRegCalendarAlt /> {formattedDate}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </DataWrapper>
  );
};

export default CompactNewsCard;
