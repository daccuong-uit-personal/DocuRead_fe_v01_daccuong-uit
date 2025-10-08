import React from "react";
import List from "../../../components/ui/List";

export default function RecommendedBooks({ books }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <List
        context="topList"
        title="Có thể bạn cũng thích"
        items={books}
        variant="grid"
      />
    </div>
  );
}
