import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../containers/Home/pages/HomePage";
import AuthModal from "../containers/Auth/Modal/LoginModal.jsx";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import { BookDetailPage } from "../containers/BookDeatail/index.jsx";
import { CategoriesPage } from "../containers/Categories/index.jsx";

export default function AppRoutes() {
  const isAuthenticated = false;
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header chung */}
        <Header />

        {/* Nội dung */}
        <main className="flex-1">
          <Routes>
            {/* Trang chủ */}
            <Route
              path="/"
              element={<HomePage onRequireLogin={() => setShowAuthModal(true)} />}
            />

            {/* Trang chi tiết truyện */}
            <Route path="/book/:id" element={<BookDetailPage />} />
            <Route path="/categories" element={<CategoriesPage />} />

            {/* Nếu path không khớp -> redirect về home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Modal đăng nhập */}
        <AuthModal
          isVisible={showAuthModal}
          onClose={() => setShowAuthModal(false)}
        />

        {/* Footer chung */}
        <Footer />
      </div>
    </Router>
  );
}
