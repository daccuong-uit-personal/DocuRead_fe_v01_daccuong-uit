import React from 'react';

export default function RegisterPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Đăng ký thành công!');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Đăng ký tài khoản mới</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Tên người dùng"
          className="w-full border px-3 py-2 rounded text-sm"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border px-3 py-2 rounded text-sm"
          required
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          className="w-full border px-3 py-2 rounded text-sm"
          required
        />

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          Đăng ký
        </button>
      </form>
    </div>
  );
}
