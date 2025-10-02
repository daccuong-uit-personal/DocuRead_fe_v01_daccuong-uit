import React from "react";

export default function Button({
  children,
  onClick,
  variant = "primary",
  loading = false,
  type = "button",
  context,
  className = "",
}) {
  const base = "px-4 py-2 rounded-md font-medium disabled:opacity-50";
  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300",
    outline: "border border-gray-300 hover:bg-gray-100",
  };

  const contextStyle = context === "login" ? "w-full" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className={`${base} ${styles[variant]} ${contextStyle} ${className}`}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
