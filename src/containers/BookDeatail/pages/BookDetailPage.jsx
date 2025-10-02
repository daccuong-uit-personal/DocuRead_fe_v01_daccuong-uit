import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookInfo from "../components/BookInfo";
import ChapterPreview from "../components/ChapterPreview";
import DetailTabs from "../components/DetailTabs";
import { getBookDetail } from "../services/BookDetailService";

export default function BookDetailPage() {
  const { id: bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getBookDetail(bookId);
      setBook(data);
    }
    fetchData();
  }, [bookId]);

  if (!book) return <p>Đang tải...</p>;

  return (
    <div className="container mx-auto p-4">
      <BookInfo book={book} />
      <ChapterPreview chapters={book.chapters} />
      <DetailTabs book={book} />
    </div>
  );
}
