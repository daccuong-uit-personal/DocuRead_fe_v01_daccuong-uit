import React from "react";

export default function Rating({ rating }) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Đánh giá</h3>
      <p className="text-xl font-bold">{rating?.average || 0}/5 ⭐</p>
      <p className="text-sm text-gray-500">
        {rating?.count || 0} lượt đánh giá
      </p>
    </div>
  );
}
