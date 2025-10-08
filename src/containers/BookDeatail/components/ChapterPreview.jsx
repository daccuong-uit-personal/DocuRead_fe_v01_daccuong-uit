import React, { useState } from "react";
import ChapterItem from "../../../components/item/ChapterItem";

export default function ChapterPreview({ chapters = [] }) {
  const [activeTab, setActiveTab] = useState("latest");

  const visible = activeTab === "latest" ? chapters.slice(0, 3) : chapters;

  return (
    <section className="bg-white rounded-2xl shadow-sm p-6">
      {/* Tabs */}
      <div className="flex gap-6 border-b border-gray-200 mb-4">
        {[
          { key: "latest", label: "Chương mới" },
          { key: "all", label: "Tất cả chương" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`pb-2 text-sm font-medium transition ${
              activeTab === tab.key
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Danh sách */}
      <div className="divide-y divide-gray-100">
        {visible.length > 0 ? (
          visible.map((ch) => (
            <ChapterItem
              key={ch.id}
              id={ch.id}
              number={ch.number}
              title={ch.title}
              time={ch.time}
            />
          ))
        ) : (
          <p className="text-center py-6 text-gray-400 italic">
            Chưa có chương nào.
          </p>
        )}
      </div>
    </section>
  );
}
