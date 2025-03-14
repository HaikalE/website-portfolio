import React from 'react';

const ResetButton = ({ onReset }) => {
  return (
    <button 
      onClick={onReset}
      className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-md shadow-sm transition-colors"
    >
      Reset Filters
    </button>
  );
};

export default ResetButton;