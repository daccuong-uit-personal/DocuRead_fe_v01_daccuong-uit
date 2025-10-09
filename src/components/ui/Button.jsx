import React from "react";

export default function Button({
  children,
  onClick,
  variant = "primary",
  loading = false,
  type = "button",
  context,
  className = "",
  disabled = false,
  iconLeft = null,
  iconRight = null,
  size = "md",
}) {
  const base = `
    relative inline-flex items-center justify-center
    font-medium
    transition-all duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-1
    disabled:opacity-50 disabled:cursor-not-allowed
    whitespace-nowrap
    shadow-sm
  `;

  const sizes = {
    sm: "px-3 py-1.5 text-sm rounded-md",
    md: "px-4 py-2 text-sm rounded-lg",
    lg: "px-5 py-2.5 text-sm rounded-lg",
  };

  const styles = {
    primary: `
      bg-blue-500/90 text-white
      hover:bg-blue-500
      focus:ring-blue-200
      shadow-none
    `,
    secondary: `
      bg-white text-gray-700 border border-gray-200
      hover:bg-gray-50
      focus:ring-gray-200
      shadow-none
    `,
    outline: `
      border border-gray-300 text-gray-700
      hover:bg-gray-100
      focus:ring-gray-300
    `,
    ghost: `
      bg-transparent text-gray-500
      hover:text-gray-800 hover:bg-gray-100
      focus:ring-gray-200
    `,
    danger: `
      bg-red-500/90 text-white
      hover:bg-red-500
      focus:ring-red-300
    `,
  };

  // 👇 Style phụ thuộc vào context
  const contextStyles = {
    login: "w-full",
    tab: "rounded-full text-sm px-4 py-1", // làm tròn cho tab
    filter: "rounded-full text-sm px-3 py-1", // giống như filter tag
    sort: "text-xs px-2 py-1", // nếu cần thêm context cho sort sau này
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading || disabled}
      className={`
        ${base}
        ${sizes[size]}
        ${styles[variant] || styles.primary}
        ${contextStyles[context] || ""}
        ${className}
      `}
    >
      {/* Loading overlay */}
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center bg-white/50 rounded-xl">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-gray-400 border-t-transparent"></span>
        </span>
      )}

      {/* Actual content */}
      <span className={`${loading ? "opacity-0" : "opacity-100"} flex items-center gap-2`}>
        {iconLeft && <span className="flex items-center">{iconLeft}</span>}
        {children}
        {iconRight && <span className="flex items-center">{iconRight}</span>}
      </span>
    </button>
  );
}
