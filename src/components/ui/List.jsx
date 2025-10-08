import React, { memo, useMemo } from "react";
import PropTypes from "prop-types";
import BookItem from "../item/BookItem";
import CommentItem from "../item/CommentItem";
import EmptyState from "../feedback/EmptyState";

// Mapping render theo context
const renderers = {
  topList: (item, index, variant) => (
    <BookItem
      key={item.key || `${item.id}-${index}`}
      variant={variant}
      rank={variant === "rank" ? index + 1 : undefined}
      {...item}
    />
  ),
  discussions: (item, index) => (
    <CommentItem
      key={item.key || `${item.id}-${index}`}
      context="discussions"
      {...item}
    />
  ),
  qas: (item, index) => (
    <CommentItem
      key={item.key || `${item.id}-${index}`}
      context="qas"
      {...item}
    />
  ),
};

// Layout config theo context
const layoutConfig = {
  topList: "space-y-2",
  discussions: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
  qas: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
  others: "space-y-2",
};

function List({ context, title, items, variant }) {
  const layoutClass = layoutConfig[context] || layoutConfig.others;

  const renderItem = useMemo(() => {
    return renderers[context]
      ? (item, index) => renderers[context](item, index, variant)
      : (item, index) => (
          <div
            key={item.key || `${item.id || item.title}-${index}`}
            className="text-gray-500"
          >
            Loại danh sách không được hỗ trợ: {context}
          </div>
        );
  }, [context, variant]);

  return (
    <div>
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      <div className={layoutClass}>
        {Array.isArray(items) && items.length > 0 ? (
          items.map(renderItem)
        ) : (
          <EmptyState message="Không có dữ liệu" />
        )}
      </div>
    </div>
  );
}

export default memo(List);
