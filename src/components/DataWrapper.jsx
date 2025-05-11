import React from "react";

const DataWrapper = ({
  loading,
  error,
  data,
  emptyMessage = "No data found.",
  children,
}) => {
  if (loading) {
    return (
      <div className="flex flex-col items-center">
        <span className="loading loading-spinner loading-md"></span>
        <p className="mt-2 text-gray-500">Loading...</p>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!data || data.length === 0) {
    return <p>{emptyMessage}</p>;
  }

  return <>{children}</>;
};

export default DataWrapper;
