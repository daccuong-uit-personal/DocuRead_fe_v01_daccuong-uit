import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../containers/Home/pages/HomePage";
import LoginPage from "../containers/Auth/Login/pages/LoginPage";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function AppRoutes() {
  // Biến này nên đến từ Global Context/Redux trong thực tế
  const isAuthenticated = true; // Đặt FALSE để test chuyển hướng tới /login
  
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header chung */}
        <Header />

        {/* Nội dung */}
        <main className="flex-1">
          <Routes>
            {/* 1. Xử lý đường dẫn gốc / */}
            <Route 
              path="/" 
              // Nếu chưa đăng nhập (isAuthenticated = false) -> Chuyển hướng đến /login
              element={isAuthenticated ? <HomePage /> : <Navigate to="/login" replace />} 
            />
            
            {/* 2. Route cho Trang Home (Chỉ cho người dùng đã đăng nhập trong môi trường thực) */}
            <Route path="/home" element={<HomePage />} /> 

            {/* 3. Route cho Trang Login */}
            <Route path="/login" element={<LoginPage />} />
            
            {/* (Tùy chọn: Thêm route 404/Not Found) */}
            <Route path="*" element={<div>404 Not Found</div>} />

          </Routes>
        </main>

        {/* Footer chung */}
        <Footer />
      </div>
    </Router>
  );
}