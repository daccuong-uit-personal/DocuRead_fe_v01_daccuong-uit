import React from "react";

export default function Header({ logo, navItems = [], onSearch }) {
  return (
    <header className="w-full bg-white shadow-sm px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        {logo && <img src={logo} alt="logo" className="h-8 w-auto" />}
        <span className="font-bold text-lg">DocuRead</span>
      </div>

      {/* Navigation */}
      <nav className="flex space-x-4">
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className="text-gray-700 hover:text-blue-600">
            {item.label}
          </a>
        ))}
      </nav>

      {/* Search */}
      <input
        type="text"
        placeholder="Tìm kiếm..."
        className="border px-3 py-1 rounded-md w-64"
        onChange={(e) => onSearch?.(e.target.value)}
      />
    </header>
  );
}
