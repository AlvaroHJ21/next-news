import React from 'react';

export const ArticlesPlaceholder = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 20 }).map((_, idx) => (
        <div key={idx} className="bg-gray-800 min-h-[200px] animate-pulse"></div>
      ))}
    </div>
  );
};
