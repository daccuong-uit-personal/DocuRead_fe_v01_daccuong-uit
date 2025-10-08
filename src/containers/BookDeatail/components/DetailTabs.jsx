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
    <div className="bg-white rounded-2xl shadow-sm">
      <div className="flex border-b border-gray-100 text-sm font-medium">
        {[
          { key: TABS.OVERVIEW, label: "Giới thiệu" },
          { key: TABS.RATING, label: "Đánh giá" },
          { key: TABS.COMMENTS, label: "Bình luận" },
        ].map((item) => (
          <button
            key={item.key}
            onClick={() => setTab(item.key)}
            className={`px-5 py-3 transition-colors ${
              tab === item.key
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="p-6">
        {tab === TABS.OVERVIEW && <Overview description={book.description} />}
        {tab === TABS.RATING && <Rating rating={book.rating} />}
        {tab === TABS.COMMENTS && <Comments bookId={book.id} />}
      </div>
    </div>
  );
}
