import React from "react";

export default function BookInfo({ book, onRead, onAddShelf, onFollow, onShare }) {
  if (!book) return null;

  return (
    <div className="flex gap-6">
      {/* Ảnh bìa */}
      <img
        src={book.coverUrl}
        alt={book.title}
        className="w-40 h-56 object-cover rounded"
      />

      {/* Meta + nút */}
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-2">{book.title}</h1>
        <p className="text-gray-600 mb-1">Tác giả: {book.author}</p>
        <div className="flex gap-2 flex-wrap mb-2">
          {book.tags?.map((tag) => (
            <span
              key={tag}
              className="bg-gray-200 text-sm px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-500 mb-4">
          {book.chapters?.length || 0} chương · {book.views} lượt xem · {book.status}
        </p>
        <div className="flex gap-2">
          <button onClick={onRead} className="bg-red-600 text-white px-4 py-2 rounded">
            Đọc tiếp
          </button>
          <button onClick={onAddShelf} className="bg-gray-200 px-4 py-2 rounded">
            Thêm vào tủ
          </button>
          <button onClick={onFollow} className="bg-gray-200 px-4 py-2 rounded">
            Theo dõi
          </button>
          <button onClick={onShare} className="bg-gray-200 px-4 py-2 rounded">
            Chia sẻ
          </button>
        </div>
      </div>
    </div>
  );
}
