import React, { useState } from "react";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import { login } from "../services/loginService";

export default function LoginForm({ onLoginSuccess, onSwitchToRegister }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await login(formData.email, formData.password);
    setLoading(false);

    if (result.success && result.user) {
      onLoginSuccess(result.user);
    }
  };
  
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 p-6 bg-white dark:bg-gray-900 shadow-md rounded-lg w-full max-w-md mx-auto"
    >
      <h2 className="text-xl font-semibold text-center text-gray-700 dark:text-white">
        Đăng nhập tài khoản
      </h2>

      <Input
        type="text"
        name="email"
        value={formData.email}
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

      <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
        <label className="flex items-center space-x-1">
          <input
            type="checkbox"
            className="form-checkbox text-blue-600"
          />
          <span>Nhớ mật khẩu</span>
        </label>
        <a href="#" className="hover:underline text-blue-500">Quên mật khẩu?</a>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        loading={loading}
        context="login"
      >
        Đăng nhập
      </Button>

      <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
        <label className="flex items-start gap-1">
          <input type="checkbox" className="mt-0.5" />
          <span>
            Bạn đồng ý với
            <a href="#" className="text-blue-500 mx-1 hover:underline">《 Thỏa thuận 》</a>
            và
            <a href="#" className="text-blue-500 hover:underline">《 Chính sách 》</a>.
          </span>
        </label>
      </div>

      <div className="text-center text-sm mt-4 text-gray-600 dark:text-gray-300">
        Chưa có tài khoản?{" "}
        <button
          type="button"
          onClick={onSwitchToRegister}
          className="text-blue-500 hover:underline font-medium"
        >
          Đăng ký
        </button>
      </div>
    </form>
  );
}
