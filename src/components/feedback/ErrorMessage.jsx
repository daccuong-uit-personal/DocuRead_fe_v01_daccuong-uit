import React from "react";

export default function ErrorMessage({ message }) {
  if (!message) return null;
  return (
    <div className="text-red-600 bg-red-50 border border-red-200 px-3 py-2 rounded-md text-sm">
      {message}
    </div>
  );
}
