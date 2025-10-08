import React from 'react';
import PropTypes from 'prop-types';

export default function CommentItem({ context, avatar, user, content, time }) {
  const showAvatar = context !== 'discussions';

  return (
    <div className="p-3 bg-white rounded-md shadow-sm border border-gray-100 hover:shadow-md transition">
      <div className="flex items-start space-x-3">
        {showAvatar && (
          <img
            src={avatar}
            alt={`${user}'s avatar`}
            className="h-8 w-8 rounded-full object-cover"
            onError={(e) => (e.target.src = '/fallback-avatar.png')}
          />
        )}

        <div className="flex-1 min-w-0">
          {context === 'qas' && (
            <p className="text-sm font-semibold text-blue-600">{user}</p>
          )}

          {context === 'others' && (
            <p className="text-sm font-semibold text-gray-700">{user}</p>
          )}

          <p className="text-sm text-gray-700 truncate">{content}</p>

          <span className="text-xs text-gray-400 mt-1 block">{time}</span>
        </div>
      </div>
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
