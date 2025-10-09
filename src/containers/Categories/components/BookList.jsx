import { useEffect, useState } from 'react';
import { CategoriesService } from '../services/CategoriesService'
import BookItem from '../../../components/item/BookItem';

function BookList({ apiUrl }) {
  const [books, setBooks] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await CategoriesService.fetchBooks(apiUrl);
      setBooks(res.data.books);
      setTotal(res.data.total);
    };
    fetchData();
  }, [apiUrl]);

  return (
    <div>
      <h3>Danh sách sách ({total}):</h3>
      <ul>
        {books.map(book => (
          <BookItem key={book.id} book={book} variant="categories" />
        ))}
      </ul>
    </div>
  );
}

export default BookList;
