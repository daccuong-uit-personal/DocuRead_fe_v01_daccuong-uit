import React from "react";

export default function AuthorInfo({ author }) {
  if (!author) return null;

  return (
    <div className="bg-gray-50 rounded-2xl border border-gray-100 p-5 flex flex-col gap-4 h-fit">
      {/* Thông tin tác giả */}
      <div>
        <h3 className="text-base font-semibold text-gray-800 mb-3">
          Thông tin tác giả
        </h3>

        <div className="flex items-center gap-3 mb-3">
          {author.avatar && (
            <img
              src={author.avatar}
              alt={author.name}
              className="w-12 h-12 rounded-full object-cover border border-gray-200"
            />
          )}
          <div>
            <p className="text-base font-medium text-gray-800">{author.name}</p>
            <p className="text-sm text-gray-500">
              Số tác phẩm: {author.totalWorks}
            </p>
            {author.followers && (
              <p className="text-sm text-gray-500">
                Người theo dõi: {author.followers.toLocaleString()}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Lời nhắn */}
      {author.note && (
        <div className="border-t border-gray-200 pt-3">
          <h3 className="text-base font-semibold text-gray-800 mb-2">
            Lời nhắn từ tác giả
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
            {author.note}
          </p>
        </div>
      )}
    </div>
  );
}
