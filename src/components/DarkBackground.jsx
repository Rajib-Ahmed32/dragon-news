import React from "react";

const DarkBackground = () => {
  return (
    <div className="w-full mt-5 flex items-center justify-center">
      <div
        className="w-[300px] h-[500px] rounded-lg relative overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at center, rgba(128,0,128,0.3), rgba(0,0,0,1))",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-purple-800 via-transparent to-blue-900 opacity-70" />
        <div className="absolute w-[300px] h-[500px] bg-[url('/path-to-your-image.jpg')] bg-cover bg-center mix-blend-overlay" />
        <div className="absolute inset-0 rounded-full border-[1px] border-purple-500 opacity-30 blur-3xl" />
      </div>
    </div>
  );
};

export default DarkBackground;
