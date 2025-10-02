import React, { useState } from "react";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";

export default function LoginForm({ onLoginSuccess, onSwitchToRegister }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // fake API
      alert("Đăng nhập thành công!");
      onLoginSuccess?.(formData);
    } catch (err) {
      alert("Đăng nhập thất bại!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Tên tài khoản"
      />
      <Input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Mật khẩu"
      />

      <div className="flex justify-between text-sm text-gray-500">
        <label className="flex items-center">
          <input type="checkbox" className="mr-1" />
          Nhớ mật khẩu
        </label>
        <a href="#" className="hover:underline">
          Quên mật khẩu?
        </a>
      </div>

      <Button type="submit" variant="primary" loading={loading} className="w-full">
        Đăng nhập
      </Button>

      <div className="text-xs text-gray-400 mt-2">
        <label>
          <input type="checkbox" className="mr-1" />
          Bằng cách đăng nhập, bạn đồng ý với
          <a href="#" className="text-blue-500 mx-1">《 Thỏa thuận 》</a>
          và
          <a href="#" className="text-blue-500 mx-1">《 Chính sách 》</a>
        </label>
      </div>

      <div className="text-center text-sm mt-4">
        Chưa có tài khoản?{" "}
        <button type="button" onClick={onSwitchToRegister} className="text-blue-500 hover:underline">
          Đăng ký
        </button>
      </div>
    </form>
  );
}
