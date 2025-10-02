import React, { useState } from "react";

export default function Overview({ description }) {
  const [expanded, setExpanded] = useState(false);
  if (!description) return <p>Không có mô tả.</p>;

  return (
    <div>
      <p className="text-gray-700">
        {expanded ? description : description.slice(0, 200) + "..."}
      </p>
      {description.length > 200 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-500 mt-2 text-sm"
        >
          {expanded ? "Thu gọn" : "Xem thêm"}
        </button>
      )}
    </div>
  );
}
