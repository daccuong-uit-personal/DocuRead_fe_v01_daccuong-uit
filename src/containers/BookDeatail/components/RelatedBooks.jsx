import React from "react";
import List from "../../../components/ui/List";

export default function RelatedBooks({ author, books }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <List
        context="topList"
        title={`Các tác phẩm khác của ${author}`}
        items={books}
        variant="grid"
      />
    </div>
  );
}
