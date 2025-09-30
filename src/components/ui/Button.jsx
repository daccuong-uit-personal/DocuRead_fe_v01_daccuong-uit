import React from "react";

export default function Button({ children, onClick, variant = "primary" }) {
  const base = "px-4 py-2 rounded-md font-medium";
  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300",
    outline: "border border-gray-300 hover:bg-gray-100",
  };

  return (
    <button onClick={onClick} className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}
