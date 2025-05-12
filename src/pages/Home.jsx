import React, { useState } from "react";
import NewsCard from "../components/NewsCard";
import useFetchData from "../hooks/useFetchData";
import DataWrapper from "../components/DataWrapper";

const Home = () => {
  const { data, loading, error } = useFetchData("/news.json");
  const [visibleCount, setVisibleCount] = useState(5);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  const visibleData = data.slice(0, visibleCount);

  return (
    <div className="p-4 space-y-4">
      <DataWrapper
        loading={loading}
        error={error}
        data={data}
        emptyMessage="No news found."
      >
        {visibleData.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </DataWrapper>

      {visibleCount < data.length && (
        <div className="text-center mt-4">
          <button
            onClick={handleShowMore}
            className="btn btn-primary px-4 py-1 sm:px-8 sm:py-2 text-sm sm:text-base"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
