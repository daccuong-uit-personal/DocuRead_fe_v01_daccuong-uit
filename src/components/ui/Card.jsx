import React from "react";

export default function Card({ image, title, description, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer border rounded-lg shadow-sm hover:shadow-md overflow-hidden"
    >
      {image && <img src={image} alt={title} className="w-full h-40 object-cover" />}
      <div className="p-3">
        <h3 className="text-sm font-semibold">{title}</h3>
        {description && <p className="text-xs text-gray-500">{description}</p>}
      </div>
    </div>
  );
}
