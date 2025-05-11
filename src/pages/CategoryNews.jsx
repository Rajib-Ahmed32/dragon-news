import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import NewsCard from "../components/NewsCard";
import DataWrapper from "../components/DataWrapper";

const CategoryNews = () => {
  const { data, loading, error } = useFetchData("/news.json");
  const { id } = useParams();
  const [news, setNews] = useState([]);

  useEffect(() => {
    if (!loading && data) {
      let filtered = [];

      if (id === "0") {
        filtered = data;
      } else if (id === "1") {
        filtered = data.filter((item) => item.others?.is_today_pick);
      } else {
        filtered = data.filter((item) => item.category_id === parseInt(id));
      }
      setNews(filtered);
    }
  }, [id, data, loading]);

  if (loading) {
    return (
      <div className="flex flex-col items-center">
        <span className="loading loading-spinner loading-md"></span>
        <p className="mt-2 text-gray-500">Loading news...</p>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">News List</h1>

      <DataWrapper
        loading={loading}
        error={error}
        data={news}
        emptyMessage="No news found."
      >
        {news.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </DataWrapper>
    </div>
  );
};

export default CategoryNews;
