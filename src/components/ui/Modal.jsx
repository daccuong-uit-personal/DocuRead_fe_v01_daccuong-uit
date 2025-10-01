import React from "react";

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-[1000] flex items-center justify-center">
      {/* Backdrop bấm để đóng */}
      <div
        className="absolute inset-0"
        onClick={onClose}
      ></div>

      {/* Modal content */}
      <div
        className="relative z-[1001] bg-white rounded-lg shadow-lg w-full max-w-lg p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            ✕
          </button>
        </div>

        {/* Content */}
        <div>{children}</div>
      </div>
    </div>
  );
}
