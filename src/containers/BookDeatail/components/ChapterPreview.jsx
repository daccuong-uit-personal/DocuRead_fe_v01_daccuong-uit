import React from "react";
import ChapterItem from "../../../components/item/ChapterItem";

export default function ChapterPreview({ chapters = [], onViewAll }) {
  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-semibold">CHƯƠNG MỚI</h2>
        <button onClick={onViewAll} className="text-sm text-blue-500 hover:underline">
          Xem tất cả »
        </button>
      </div>

      <div className="divide-y rounded border">
        {chapters.slice(0, 3).map((ch) => (
          <ChapterItem
            key={ch.id}
            id={ch.id}
            number={ch.number}
            title={ch.title}
            time={ch.time}
          />
        ))}
      </div>
    </div>
  );
}
