import React from "react";

export default function EmptyState({ message = "Không có dữ liệu" }) {
  return <p className="text-center text-gray-400 py-4">{message}</p>;
}
