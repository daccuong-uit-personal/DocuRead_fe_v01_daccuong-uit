import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const BookItem = ({ id, cover, title, author, description, variant = 'card', rank }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/book/${id}`);
  };

  if (variant === 'simple') {
    return (
      <div
        onClick={handleClick}
        className="p-3 rounded-lg hover:bg-gray-50 transition cursor-pointer"
      >
        <h3 className="text-sm font-semibold line-clamp-1">{title}</h3>
        {description && <p className="text-xs text-gray-600 line-clamp-2">{description}</p>}
      </div>
    );
  }

  if (variant === 'rank') {
    return (
      <div
        onClick={handleClick}
        className="relative flex items-center p-2 group cursor-pointer hover:bg-gray-50 transition duration-150 rounded-lg"
      >
        <div
          className={`flex-shrink-0 w-6 h-6 mr-3 text-center font-bold rounded-full ${
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
      </div>
    );
  }

  return (
    <div onClick={handleClick} className="flex flex-col w-28 text-left cursor-pointer">
      {cover && (
        <img
          src={cover}
          alt={title}
          className="h-40 w-28 object-cover rounded shadow"
          onError={(e) => (e.target.src = '/fallback-image.jpg')}
        />
      )}
      <h4 className="mt-2 text-sm font-medium line-clamp-1">{title}</h4>
      {description && <p className="text-xs text-gray-500 line-clamp-2">{description}</p>}
      {author && <p className="text-xs text-gray-500 line-clamp-1">{author}</p>}
    </div>
  );
};

BookItem.propTypes = {
  id: PropTypes.string.isRequired,
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  description: PropTypes.string,
  variant: PropTypes.oneOf(['card', 'simple', 'rank']),
  rank: PropTypes.number,
};

export default memo(BookItem);
