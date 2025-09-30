import React from "react";

export default function Input({ value, onChange, placeholder, type = "text" }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border px-3 py-2 rounded-md w-full"
    />
  );
}
