import React from "react";
import { NavLink } from "react-router-dom";
import useCategories from "../hooks/useCategories";

const Categories = () => {
  const { categories, loading, error } = useCategories();

  if (loading) {
    return (
      <div className="flex flex-col items-center">
        <span className="loading loading-spinner loading-md"></span>
        <p className="mt-2 text-gray-500">Loading categories...</p>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="p-4 shadow-md">
      <h2 className="text-lg bg-gray-200 p-4 text-center font-semibold text-gray-700">
        Categories ({categories.length})
      </h2>

      <div className="mt-5 flex flex-col items-center gap-3">
        {categories.map((c) => (
          <NavLink
            key={c.id}
            to={`/category/${c.id}`}
            className="block w-full font-semibold text-center px-4 py-2 rounded bg-base-100 hover:bg-base-200"
          >
            {c.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
