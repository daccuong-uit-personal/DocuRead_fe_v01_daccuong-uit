import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookInfo from "../components/BookInfo";
import ChapterPreview from "../components/ChapterPreview";
import DetailTabs from "../components/DetailTabs";
import RelatedBooks from "../components/RelatedBooks";
import RecommendedBooks from "../components/RecommendedBooks";
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

  if (!book)
    return (
      <div className="flex justify-center items-center h-[60vh] text-gray-400 text-lg">
        Đang tải nội dung...
      </div>
    );

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-5 space-y-10">

        {/* 🔹 Phần Book Info chiếm toàn hàng */}
        <BookInfo book={book} />

        {/* 🔹 2 cột: bên trái là chương & tabs, bên phải là cùng tác giả */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
          {/* Cột trái */}
          <div className="space-y-8">
            <ChapterPreview chapters={book.chapters} />
            <DetailTabs book={book} />
          </div>

          {/* Cột phải */}
          <aside className="space-y-6">
            <RelatedBooks author={book.author} books={book.relatedBooks} />
          </aside>
        </div>

        {/* 🔹 Dưới cùng là truyện đề cử */}
        <RecommendedBooks books={book.recommended} />
      </div>
    </div>
  );
}
