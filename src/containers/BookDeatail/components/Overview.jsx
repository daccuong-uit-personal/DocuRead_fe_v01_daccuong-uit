import React, { useState } from "react";

export default function Overview({ description }) {
  const [expanded, setExpanded] = useState(false);
  if (!description) return <p>Không có mô tả.</p>;

  return (
    <div className="leading-relaxed text-gray-700">
      <p>{expanded ? description : description.slice(0, 250) + "..."}</p>
      {description.length > 250 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-500 mt-2 text-sm hover:underline"
        >
          {expanded ? "Thu gọn" : "Xem thêm"}
        </button>
      )}
    </div>
  );
}
