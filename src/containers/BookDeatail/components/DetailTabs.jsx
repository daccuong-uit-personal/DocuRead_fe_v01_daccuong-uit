import React, { useState } from "react";
import Overview from "./Overview";
import Rating from "./Rating";
import Comments from "./Comments";

const TABS = {
  OVERVIEW: "overview",
  RATING: "rating",
  COMMENTS: "comments",
};

export default function DetailTabs({ book }) {
  const [tab, setTab] = useState(TABS.OVERVIEW);

  return (
    <div className="mt-6">
      {/* Thanh điều hướng */}
      <div className="flex border-b">
        <button
          className={`px-4 py-2 ${tab === TABS.OVERVIEW ? "border-b-2 border-red-500 text-red-500" : ""}`}
          onClick={() => setTab(TABS.OVERVIEW)}
        >
          Giới thiệu
        </button>
        <button
          className={`px-4 py-2 ${tab === TABS.RATING ? "border-b-2 border-red-500 text-red-500" : ""}`}
          onClick={() => setTab(TABS.RATING)}
        >
          Đánh giá
        </button>
        <button
          className={`px-4 py-2 ${tab === TABS.COMMENTS ? "border-b-2 border-red-500 text-red-500" : ""}`}
          onClick={() => setTab(TABS.COMMENTS)}
        >
          Bình luận
        </button>
      </div>

      {/* Nội dung tab */}
      <div className="p-4">
        {tab === TABS.OVERVIEW && <Overview description={book.description} />}
        {tab === TABS.RATING && <Rating rating={book.rating} />}
        {tab === TABS.COMMENTS && <Comments bookId={book.id} />}
      </div>
    </div>
  );
}
