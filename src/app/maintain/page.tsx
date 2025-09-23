"use client";
import React from "react";

const MainTainPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Maintenance Mode
        </h1>
        <p className="text-gray-600 mb-6">
          Our website is currently undergoing maintenance. We apologize for any
          inconvenience and appreciate your patience.
        </p>
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default MainTainPage;
