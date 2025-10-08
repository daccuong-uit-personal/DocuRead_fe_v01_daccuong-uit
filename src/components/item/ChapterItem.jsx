import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ChapterItem({ id, number, title, time }) {
  const navigate = useNavigate();
  const { id: bookId } = useParams();

  const handleClick = () => {
    navigate(`/book/${bookId}/chapter/${id}`);
  };

  return (
    <article
      onClick={handleClick}
      className="flex justify-between items-center cursor-pointer bg-white hover:bg-blue-50 transition-colors pr-5 py-3"
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === "Enter" || e.key === " ") handleClick();
      }}
    >
      <h3 className="text-sm font-semibold text-gray-700 truncate max-w-[70%]">
        Chương {number}: {title}
      </h3>
      <time
        className="text-xs text-gray-500 whitespace-nowrap"
        dateTime={time}
        aria-label={`Thời gian phát hành: ${time}`}
      >
        {time}
      </time>
    </article>
  );
}
