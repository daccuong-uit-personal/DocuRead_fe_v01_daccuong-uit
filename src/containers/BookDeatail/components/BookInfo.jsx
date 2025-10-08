import React from "react";
import Button from "../../../components/ui/Button";
import AuthorInfo from "./AuthorInfo";

export default function BookInfo({
  book,
  onRead,
  onAddShelf,
  onFollow,
  onShare,
}) {
  if (!book) return null;

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 flex flex-col lg:flex-row gap-10">
      {/* Ảnh bìa */}
      <div className="flex-shrink-0 flex justify-center">
        <img
          src={book.coverUrl}
          alt={book.title}
          className="w-48 h-64 object-cover rounded-xl shadow-md border border-gray-100"
        />
      </div>

      {/* Thông tin chính */}
      <div className="flex flex-col justify-between flex-1 min-w-0">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2 leading-snug">
            {book.title}
          </h1>

          <p className="text-base text-gray-600 mb-2">
            Tác giả:{" "}
            <span className="font-medium text-gray-800">{book.author}</span>
          </p>

          {/* Tag */}
          {book.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {book.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-50 text-blue-600 text-sm font-medium px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <p className="text-sm text-gray-500">
            <span>{book.chapters?.length || 0} chương</span> ·{" "}
            <span>{book.views.toLocaleString()} lượt xem</span> ·{" "}
            <span className="capitalize">{book.status}</span>
          </p>
        </div>

        {/* Nút hành động */}
        <div className="flex flex-wrap gap-3 mt-5">
          <Button onClick={onRead} variant="primary" size="md">
            Đọc tiếp
          </Button>
          <Button onClick={onAddShelf} variant="secondary" size="md">
            Thêm vào tủ
          </Button>
          <Button onClick={onFollow} variant="secondary" size="md">
            Theo dõi
          </Button>
          <Button onClick={onShare} variant="secondary" size="md">
            Chia sẻ
          </Button>
        </div>
      </div>

      {/* Thông tin tác giả */}
      <div className="w-full lg:w-[280px] flex-shrink-0">
        <AuthorInfo
          author={{
            name: book.author || "Tác giả không rõ",
            avatar: book.authorAvatar || 'https://i.pravatar.cc/40?img=11',
            totalWorks: book.authorWorks?.length || 0,
            followers: book.authorFollowers || 10000,
            note: book.authorNote || 'Hello everyone!!!',
          }}
        />
      </div>
    </div>
  );
}
