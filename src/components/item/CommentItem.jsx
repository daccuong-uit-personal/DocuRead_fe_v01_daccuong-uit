import React from 'react';
import PropTypes from 'prop-types';

export default function CommentItem({ context, avatar, user, content, time }) {
  return (
    <div className="border-b border-gray-200 py-2">
      {context === 'discussions' ? (
          <p className="text-sm">{content}</p>
      ): context === 'qas' ? (
        <div className="flex space-x-3">
          <img src={avatar} alt={`${user}'s avatar`} className="h-8 w-8 rounded-full" />
          <div>
            <p className="text-sm font-bold text-blue-600">{user}</p> {/* Ví dụ: font-bold và màu cho qas */}
            <p className="text-sm">{content}</p>
            <span className="text-xs text-gray-400">{time}</span>
          </div>
        </div>
      ) : (
        <div className="flex space-x-3">
          <img src={avatar} alt={`${user}'s avatar`} className="h-8 w-8 rounded-full" />
          <div>
            <p className="text-sm font-semibold">{user}</p>
            <p className="text-sm">{content}</p>
            <span className="text-xs text-gray-400">{time}</span>
          </div>
        </div>
      )}
    </div>
  );
}

CommentItem.propTypes = {
  context: PropTypes.oneOf(['discussions', 'qas', 'others']).isRequired,
  avatar: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};