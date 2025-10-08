import React from "react";

export default function Input({
  value,
  onChange,
  placeholder,
  type = "text",
  id,
}) {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  const isFilled = value?.toString().length > 0;

  return (
    <div className="relative w-full">
      <input
        type={type}
        id={inputId}
        value={value}
        onChange={onChange}
        placeholder=" "
        className={`
          peer
          w-full
          border border-gray-300 dark:border-gray-600
          rounded-md
          px-3 pt-5 pb-2
          text-sm
          text-gray-700 dark:text-white
          bg-white dark:bg-gray-800
          placeholder-transparent
          focus:outline-none
          focus:ring-2 focus:ring-blue-500
          focus:border border-blue-500
          transition-all
        `}
      />
      <label
        htmlFor={inputId}
        className={`
          absolute left-3 top-2 text-sm text-gray-500 dark:text-gray-400
          transition-all duration-200
          peer-placeholder-shown:top-3.5
          peer-placeholder-shown:text-base
          peer-placeholder-shown:text-gray-400
          peer-focus:top-2
          peer-focus:text-sm
          peer-focus:text-blue-500
          ${isFilled ? "top-2 text-sm text-blue-500" : ""}
        `}
      >
        {placeholder}
      </label>
    </div>
  );
}
