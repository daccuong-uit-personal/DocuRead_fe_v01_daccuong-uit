import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from './Container';
import Button from '../ui/Button';
import Avatar from '../ui/Avatar';
import LoginModal from "../../containers/Auth/Modal/LoginModal.jsx";

export default function Header({ logo }) {
  const location = useLocation();
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const isAuthenticated = false; // Replace with real auth logic later

  const navItems = [
    { label: "Trang chủ", to: "/" },
    { label: "Phân loại", to: "/categories" },
    { label: "Xếp hạng", to: "/ranking" },
    { label: "Tủ sách", to: "/bookshelf" },
  ];

  const handleLoginClick = () => setIsLoginOpen(true);
  const handleCloseModal = () => setIsLoginOpen(false);

  return (
    <header className="w-full bg-gradient-to-r from-white to-gray-100 shadow-sm py-3 sticky top-0 z-10">
      <Container className="flex items-center justify-between px-4 md:px-6">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            {logo && <img src={logo} alt="logo" className="h-8 w-auto" />}
            <span className="text-xl font-semibold text-gray-800">QQ</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`hover:text-blue-500 ${
                  isActive
                    ? 'text-blue-600 font-semibold border-b-2 border-blue-500 pb-1'
                    : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Search box */}
        <div className="flex-1 max-w-sm mx-4">
          <input
            type="text"
            placeholder="Vui lòng nhập tên sách hoặc tác giả"
            className="w-full px-4 py-1.5 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            onChange={(e) => {
              // Handle search here if needed
            }}
          />
        </div>

        {/* Extra Links + Auth */}
        <div className="flex items-center space-x-4 text-sm text-gray-700">
          <Link to="/authors" className="hover:text-blue-500">Khu vực tác giả</Link>
          <Link to="/mobile" className="hover:text-blue-500">Dùng trên di động</Link>
          <div className="border-l h-4 mx-2" />
          {!isAuthenticated ? (
            <button onClick={handleLoginClick} className="hover:text-blue-500">
              Đăng nhập / Đăng ký
            </button>
          ) : (
            <Avatar />
          )}
        </div>
      </Container>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={handleCloseModal}
      />
    </header>
  );
}