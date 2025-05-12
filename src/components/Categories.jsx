import React from "react";
import { NavLink } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import DataWrapper from "../components/DataWrapper";

const Categories = () => {
  const { data, loading, error } = useFetchData("/categories.json");

  return (
    <div className="">
      <h2 className="text-lg font-semibold text-gray-700">
        Categories {data?.length ? `(${data.length})` : ""}
      </h2>

      <DataWrapper
        loading={loading}
        error={error}
        data={data}
        emptyMessage="No categories found."
      >
        <div className="mt-5 flex flex-col items-center gap-3">
          {data.map((c) => (
            <NavLink
              key={c.id}
              to={`/category/${c.id}`}
              className="block w-full font-semibold text-center px-4 py-2 rounded bg-base-100 hover:bg-base-200"
            >
              {c.name}
            </NavLink>
          ))}
        </div>
      </DataWrapper>
    </div>
  );
};

export default Categories;
