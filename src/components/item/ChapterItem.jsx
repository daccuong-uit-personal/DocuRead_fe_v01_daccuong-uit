import React from "react";

export default function ChapterItem({ number, title, time, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex justify-between items-center border-b py-2 cursor-pointer hover:bg-gray-50"
    >
      <span className="text-sm font-medium">
        Chương {number}: {title}
      </span>
      <span className="text-xs text-gray-400">{time}</span>
    </div>
  );
}
