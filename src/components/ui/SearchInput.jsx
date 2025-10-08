import React from "react";
import { Search, X } from "lucide-react";

export default function SearchInput({
  value,
  onChange,
  placeholder = "Tìm truyện, tác giả...",
  onClear,
  className = "",
  width = "max-w-sm", // 👈 mặc định: trung bình, có thể truyền vào "w-full" hay "max-w-lg"
}) {
  const hasValue = value?.length > 0;

  return (
    <div
      className={`relative flex items-center w-full ${width} group ${className}`}
    >
      {/* Icon tìm kiếm */}
      <Search
        className={`absolute left-3 h-4 w-4 transition-colors ${
          hasValue ? "text-blue-500" : "text-gray-400 group-hover:text-gray-600"
        }`}
      />

      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          w-full pl-9 pr-9 py-2 rounded-full
          border border-gray-300
          text-sm text-gray-700 placeholder-gray-400
          bg-white
          shadow-sm
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400
          hover:border-gray-400
        `}
      />

      {/* Nút clear */}
      {hasValue && (
        <button
          type="button"
          onClick={onClear}
          className="absolute right-3 text-gray-400 hover:text-gray-600 transition"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
