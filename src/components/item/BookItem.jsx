import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const fallbackImage = '/fallback-image.jpg';

const BookItem = ({ id, cover, title, author, description, variant = 'card', rank }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/book/${id}`);
  };

  // 🎖️ Rank badge styles
  const rankColors = {
    1: 'bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 text-white shadow-lg',
    2: 'bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 text-white shadow-md',
    3: 'bg-gradient-to-r from-green-300 via-emerald-400 to-teal-500 text-white shadow-md',
    default: 'bg-gray-100 text-gray-700',
  };

  // 📌 SIMPLE VARIANT
  if (variant === 'simple') {
    return (
      <div
        onClick={handleClick}
        className="p-3 rounded-lg hover:bg-gray-100 transition cursor-pointer group"
      >
        <h3 className="text-sm font-semibold line-clamp-1 group-hover:text-blue-600">
          {title}
        </h3>
        {description && (
          <p className="text-xs text-gray-600 line-clamp-2 mt-1">{description}</p>
        )}
      </div>
    );
  }

  // 🏆 RANK VARIANT
  if (variant === 'rank') {
    const rankClass = rankColors[rank] || rankColors.default;
    return (
      <div
        onClick={handleClick}
        className="relative flex items-center p-2 group cursor-pointer hover:bg-gray-100 transition duration-150 rounded-lg"
      >
        <div
          className={`flex-shrink-0 w-8 h-8 mr-3 p-2 text-center text-xs font-bold rounded-full ${rankClass}`}
        >
          {rank}
        </div>
        <h3 className="text-sm font-medium line-clamp-1 group-hover:text-blue-600">
          {title}
        </h3>
      </div>
    );
  }

  // 📚 DEFAULT CARD VARIANT
  return (
    <div
      onClick={handleClick}
      className="flex flex-col w-28 cursor-pointer hover:scale-[1.02] transition-transform duration-200"
    >
      <div className="relative">
        {cover ? (
          <img
            src={cover}
            alt={title}
            className="h-40 w-28 object-cover rounded shadow-md"
            onError={(e) => (e.target.src = fallbackImage)}
          />
        ) : (
          <div className="h-40 w-28 bg-gray-100 flex items-center justify-center text-gray-400 rounded shadow-md text-sm">
            No image
          </div>
        )}
        {rank && (
          <span className="absolute top-1 left-1 bg-yellow-400 text-white text-xs px-1.5 py-0.5 rounded shadow">
            Top {rank}
          </span>
        )}
      </div>

      <h4 className="mt-2 text-sm font-medium text-gray-700 line-clamp-1">
        {title}
      </h4>
      {description && (
        <p className="text-xs text-gray-500 line-clamp-2">{description}</p>
      )}
      {author && (
        <p className="text-xs text-gray-500 line-clamp-1 italic">{author}</p>
      )}
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
