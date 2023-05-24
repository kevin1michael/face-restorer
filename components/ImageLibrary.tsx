import React, { useState } from "react";

const demoData = Array.from({ length: 48 }, (_, i) => ({ id: i + 1, name: `Image ${i + 1}` }));

export default function ImageLibrary() {
  const [search, setSearch] = useState('');

  const filteredData = demoData.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="image-library">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <div className="grid grid-cols-4 gap-4">
        {filteredData.map((item) => (
          <div key={item.id} className="relative">
            <img src={`https://via.placeholder.com/150?text=${item.name}`} alt={item.name} className="w-full h-32 object-cover rounded" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 text-white text-sm transition-opacity duration-300">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
