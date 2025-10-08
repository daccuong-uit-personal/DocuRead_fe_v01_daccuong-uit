import React from "react";

export default function Rating({ rating }) {
  return (
    <div className="text-center py-6">
      <h3 className="text-lg font-semibold mb-2">Đánh giá tổng quan</h3>
      <p className="text-3xl font-bold text-yellow-500">
        {rating?.average || 0} / 5 ⭐
      </p>
      <p className="text-sm text-gray-500">
        {rating?.count || 0} lượt đánh giá
      </p>
    </div>
  );
}
