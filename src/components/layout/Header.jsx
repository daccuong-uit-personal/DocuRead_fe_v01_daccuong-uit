import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "./Container";
import { Menu, X } from "lucide-react";
import Avatar from "../ui/Avatar";
import LoginModal from "../../containers/Auth/Modal/LoginModal.jsx";
import SearchInput from "../ui/SearchInput";

export default function Header({ logo }) {
  const location = useLocation();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [openMenu, setOpenMenu] = useState(false);

  const token = localStorage.getItem("token");
  const menuRef = useRef(null);

  const navItems = [
    { label: "Trang chủ", to: "/" },
    { label: "Phân loại", to: "/categories" },
    { label: "Xếp hạng", to: "/ranking" },
    { label: "Tủ sách", to: "/bookshelf" },
  ];

  const handleLoginClick = () => setIsLoginOpen(true);
  const handleCloseModal = () => setIsLoginOpen(false);

  // 🔒 Đóng menu khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="w-full bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-20 border-b border-gray-100">
        <Container className="flex items-center justify-between px-4 md:px-6 py-3">
          {/* Left: Logo + Nav */}
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-2 group">
              {logo && (
                <img
                  src={logo}
                  alt="logo"
                  className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
                />
              )}
              <span className="text-xl font-bold text-gray-800 tracking-tight group-hover:text-blue-600 transition-colors">
                QQ
              </span>
            </Link>

            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              {navItems.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`transition-all duration-200 pb-1 ${
                      isActive
                        ? "text-blue-600 border-b-2 border-blue-500"
                        : "text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-blue-400"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Center: Search */}
          <div className="hidden sm:flex flex-1 justify-center max-w-md pl-6 pr-6">
            <SearchInput
              width="w-full"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onClear={() => setSearchValue("")}
              placeholder="Tìm kiếm truyện hoặc tác giả..."
            />
          </div>

          {/* Right: Links + Auth */}
          <div className="flex items-center space-x-4 text-sm text-gray-700">
            <Link
              to="/authors"
              className="hover:text-blue-600 transition-colors"
            >
              Khu vực tác giả
            </Link>
            <Link
              to="/mobile"
              className="hover:text-blue-600 transition-colors"
            >
              Dùng trên di động
            </Link>

            <div className="border-l border-gray-300 h-4 mx-1.5" />

            {!token ? (
              <button
                onClick={handleLoginClick}
                className="text-blue-600 font-medium hover:underline transition-all"
              >
                Đăng nhập / Đăng ký
              </button>
            ) : (
              <div ref={menuRef} className="relative">
                <button
                  onClick={() => setOpenMenu((prev) => !prev)}
                  className="cursor-pointer focus:outline-none"
                >
                  <Avatar className="w-8 h-8" /> {/* Avatar nhỏ hơn, cân đối header */}
                </button>

                {openMenu && (
                  <div
                    className="absolute right-0 mt-2 flex flex-col bg-white border border-gray-100 rounded-lg shadow-lg w-44 overflow-hidden z-30 animate-fade-in"
                  >
                    <Link
                      to="/profile"
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 transition"
                      onClick={() => setOpenMenu(false)}
                    >
                      Hồ sơ cá nhân
                    </Link>
                    <Link
                      to="/bookshelf"
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 transition"
                      onClick={() => setOpenMenu(false)}
                    >
                      Tủ sách của tôi
                    </Link>
                    <button
                      className="px-4 py-2 text-sm text-gray-700 text-left hover:bg-blue-50 transition"
                      onClick={() => {
                        localStorage.removeItem("token");
                        window.location.reload();
                      }}
                    >
                      Đăng xuất
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Mobile toggle */}
            <button
              className="md:hidden text-gray-700 hover:text-blue-600 transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </Container>

        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-sm px-4 py-3 space-y-3 animate-fade-in">
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`block text-sm font-medium transition ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <button
              onClick={handleLoginClick}
              className="block w-full text-left text-sm text-gray-700 hover:text-blue-600"
            >
              Đăng nhập / Đăng ký
            </button>
          </div>
        )}
      </header>

      {/* Login Modal */}
      <LoginModal isOpen={isLoginOpen} onClose={handleCloseModal} />
    </>
  );
}
