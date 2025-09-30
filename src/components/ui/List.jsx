import React from 'react';
import PropTypes from 'prop-types';
import BookItem from '../item/BookItem';
import CommentItem from '../item/CommentItem';
import EmptyState from '../feedback/EmptyState';

// Định nghĩa cấu hình layout cho từng context
const layoutConfig = {
  topList: 'space-y-2',
  discussions: 'grid grid-cols-3 gap-4',
  qas: 'grid grid-cols-3 gap-4',
  others: 'space-y-2',
};

export default function List({ context, title, items, variant }) {
  const renderItem = (item, index) => {
    if (context === 'topList') {
      return (
        <BookItem
          variant={variant}
          key={item.key || `${item.id}-${index}`}
          rank={variant === 'rank' ? index + 1 : undefined}
          {...item}
        />
      );
    } else if (context === 'discussions') {
      return (
        <CommentItem
          context="discussions"
          key={item.key || `${item.id}-${index}`}
          {...item}
        />
      );
    } else if (context === 'qas') {
      return (
        <CommentItem
          context="qas"
          key={item.key || `${item.id}-${index}`}
          {...item}
        />
      );
    }else {
      return (
        <div key={item.key || `${item.id || item.title}-${index}`} className="text-gray-500">
          Loại danh sách không được hỗ trợ: {context}
        </div>
      );
    }
  };

  const layoutClass = layoutConfig[context] || layoutConfig.others; // Fallback to 'others' nếu không có config

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className={layoutClass}>
        {Array.isArray(items) && items.length > 0 ? (
          items.map((item, index) => renderItem(item, index))
        ) : (
          <EmptyState message="Không có dữ liệu" />
        )}
      </div>
    </div>
  );
}

List.propTypes = {
  context: PropTypes.oneOf(['topList', 'discussions', 'qas', 'others']).isRequired,
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        key: PropTypes.string,
        cover: PropTypes.string,
        title: PropTypes.string.isRequired,
        author: PropTypes.string,
        description: PropTypes.string,
        rank: PropTypes.number,
      }),
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        key: PropTypes.string,
        avatar: PropTypes.string,
        user: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        time: PropTypes.string,
      }),
    ])
  ).isRequired,
  variant: PropTypes.oneOf(['card', 'simple', 'rank']),
};