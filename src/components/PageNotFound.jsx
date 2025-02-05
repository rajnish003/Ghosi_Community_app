import React from 'react';

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-6">
      <h1 className="text-4xl font-bold text-red-500 mb-4">This Page Under Construction</h1>
      {/* <p className="text-lg text-gray-700 mb-6">This Page Under Construction.</p> */}
      <button
        className="px-6 py-3 bg-red-500 text-white text-lg font-semibold rounded-lg hover:bg-red-600 transition"
        onClick={() => window.location.href = '/'}
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default PageNotFound;
