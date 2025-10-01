import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../containers/Home/pages/HomePage";
import AuthModal from "../containers/Auth/Modal/LoginModal.jsx";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function AppRoutes() {
  // Biến này nên đến từ Global Context/Redux trong thực tế
  const isAuthenticated = false; // Đặt FALSE để test chuyển hướng tới /login
  const [showAuthModal, setShowAuthModal] = useState(false);
  
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header chung */}
        <Header />

        {/* Nội dung */}
        <main className="flex-1">
          <Routes>
            {/* Xóa hoặc sửa đổi route /login cũ */}
            <Route path="/" element={<HomePage onRequireLogin={() => setShowAuthModal(true)} />} />
            {/* ... */}
          </Routes>
        </main>
        
        {/* Component Modal được đặt ở ngoài Routes để nó luôn sẵn sàng */}
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