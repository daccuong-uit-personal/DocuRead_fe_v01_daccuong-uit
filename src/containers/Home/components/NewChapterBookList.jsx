import React, { useEffect, useState } from 'react';
import BookItem from '../../../components/item/BookItem';
import EmptyState from '../../../components/feedback/EmptyState';
import { homeService } from '../services/homeService';

const NewChapterBookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchNewBooks = async () => {
      try {
        setLoading(true);
        const response = await homeService.getNewBooks();
        if (mounted) {
          setBooks(Array.isArray(response.data) ? response.data : []);
        }
      } catch (error) {
        if (mounted) {
          setError('Không thể tải danh sách sách mới.');
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchNewBooks();

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return <div className="text-center p-4">Đang tải...</div>;
  }

  if (error) {
    return <EmptyState message={error} />;
  }

  if (!Array.isArray(books) || books.length === 0) {
    return <EmptyState message="Chưa có chương mới" />;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {books.map((book) => (
        <BookItem
          key={book.id || book.title}
          cover={book.cover}
          title={book.title}
          author={book.author}
          description={book.description}
          variant="simple"
        />
      ))}
    </div>
  );
};

export default NewChapterBookList;