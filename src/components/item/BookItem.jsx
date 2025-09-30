import React, { memo } from 'react';
import PropTypes from 'prop-types';

const BookItem = ({ cover, title, author, description, variant = 'card', rank }) => {
  // Xử lý variant "simple"
  if (variant === 'simple') {
    return (
      <div
        className="p-3 rounded-lg hover:bg-gray-50 transition cursor-pointer"
        role="button"
        tabIndex={0}
        aria-label={`Book: ${title}`}
      >
        <h3 className="text-sm font-semibold line-clamp-1">{title}</h3>
        {description && (
          <p className="text-xs text-gray-600 line-clamp-2">{description}</p>
        )}
      </div>
    );
  }

  // Xử lý variant "rank"
  if (variant === 'rank') {
    return (
      <div
        className="relative flex items-center p-2 group cursor-pointer hover:bg-gray-50 transition duration-150 rounded-lg"
        role="button"
        tabIndex={0}
        aria-label={`Rank ${rank}: ${title}`}
      >
        <div
          className={`flex-shrink-0 w-6 h-6 mr-3 text-center font-bold rounded-full transition-colors ${
            rank === 1
              ? 'bg-red-500 text-white'
              : rank === 2
              ? 'bg-blue-500 text-white'
              : rank === 3
              ? 'bg-green-500 text-white'
              : 'bg-gray-200 text-gray-600'
          }`}
        >
          {rank}
        </div>
        <h3 className="text-sm font-medium line-clamp-1">{title}</h3>
        <div
          className="absolute left-full top-1/2 transform -translate-y-1/2 ml-4 w-64 p-3 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-50"
          aria-hidden={!rank}
        >
          {cover && (
            <img
              src={cover}
              alt={title}
              className="h-28 w-20 object-cover rounded shadow mb-2 float-left mr-3"
              onError={(e) => (e.target.src = '/fallback-image.jpg')} // Fallback image
            />
          )}
          <h4 className="text-sm font-bold mb-1 line-clamp-1">{title}</h4>
          {description && (
            <p className="text-xs text-gray-600 line-clamp-3">{description}</p>
          )}
          {author && (
            <p className="text-xs text-blue-600 mt-1 line-clamp-1">{author}</p>
          )}
        </div>
      </div>
    );
  }

  // Xử lý variant "card" (mặc định)
  return (
    <div
      className="flex flex-col w-28 text-left cursor-pointer"
      role="button"
      tabIndex={0}
      aria-label={`Book: ${title}`}
    >
      {cover && (
        <img
          src={cover}
          alt={title}
          className="h-40 w-28 object-cover rounded shadow"
          onError={(e) => (e.target.src = '/fallback-image.jpg')} // Fallback image
        />
      )}
      <h4 className="mt-2 text-sm font-medium line-clamp-1">{title}</h4>
      {description && (
        <p className="text-xs text-gray-500 line-clamp-2">{description}</p>
      )}
      {author && <p className="text-xs text-gray-500 line-clamp-1">{author}</p>}
    </div>
  );
};

BookItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  description: PropTypes.string,
  variant: PropTypes.oneOf(['card', 'simple', 'rank']),
  rank: PropTypes.number,
};

export default memo(BookItem);