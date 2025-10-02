import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ChapterItem({ id, number, title, time }) {
  const navigate = useNavigate();
  const { id: bookId } = useParams(); // lấy id sách từ URL

  const handleClick = () => {
    navigate(`/book/${bookId}/chapter/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="flex justify-between items-center border-b py-2 cursor-pointer hover:bg-gray-50"
    >
      <span className="text-sm font-medium">
        Chương {number}: {title}
      </span>
      <span className="text-xs text-gray-400">{time}</span>
    </div>
  );
}
