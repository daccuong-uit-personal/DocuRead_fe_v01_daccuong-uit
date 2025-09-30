import React from "react";

export default function Avatar({ src, alt, size = "md" }) {
  const sizes = {
    sm: "h-6 w-6",
    md: "h-10 w-10",
    lg: "h-16 w-16",
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-full object-cover ${sizes[size]}`}
    />
  );
}
