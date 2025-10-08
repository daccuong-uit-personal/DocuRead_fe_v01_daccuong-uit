import React from "react";

export default function Input({
  value,
  onChange,
  placeholder,
  type = "text",
  id,
  name,
}) {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  const isFilled = value?.toString().length > 0;

  return (
    <div className="relative w-full">
      <input
        type={type}
        id={inputId}
        name={name}
        value={value ?? ""}
        onChange={onChange}
        placeholder="" // ❌ không dùng dấu cách để tránh quét
        className={`
          peer
          w-full
          border border-gray-300 dark:border-gray-600
          rounded-md
          px-3 pt-5 pb-2
          text-sm
          text-gray-700 dark:text-white
          bg-white dark:bg-gray-800
          focus:outline-none
          focus:ring-2 focus:ring-blue-500
          focus:border-blue-500
          transition-all
        `}
      />
      <label
        htmlFor={inputId}
        className={`
          absolute left-3 
          text-gray-500 dark:text-gray-400
          pointer-events-none select-none
          transition-all duration-200
          ${isFilled
            ? "top-1 text-xs text-blue-500"
            : "top-3.5 text-base text-gray-400"}
          peer-focus:top-1
          peer-focus:text-xs
          peer-focus:text-blue-500
        `}
      >
        {placeholder}
      </label>
    </div>
  );
}
