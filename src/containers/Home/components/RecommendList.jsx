import React, { memo } from 'react';
import PropTypes from 'prop-types';
import BookItem from '../../../components/item/BookItem';
import EmptyState from '../../../components/feedback/EmptyState';

const RecommendList = ({ books, title }) => {
  if (!books || books.length === 0) {
    return <EmptyState message={title || 'Chưa có truyện đề cử'} />;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {books.map((book) => (
        <BookItem
          key={book.id || book.title}
          cover={book.cover}
          title={book.title}
          author={book.author}
          description={book.description}
          variant="card"
        />
      ))}
    </div>
  );
};

RecommendList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      cover: PropTypes.string,
      title: PropTypes.string.isRequired,
      author: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  title: PropTypes.string,
};

export default memo(RecommendList);