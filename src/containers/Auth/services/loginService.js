import toast from "react-hot-toast";

export async function login(email, password) {
  try {
    const res = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    let result = null;
    try {
      result = await res.json();
    } catch {
      toast.error("Phản hồi không hợp lệ từ server");
      return { success: false, message: "Phản hồi không hợp lệ từ server" };
    }

    if (!res.ok || !result.success) {
      const message = result?.message || `Đăng nhập thất bại (${res.status})`;
      toast.error(message);
      return { success: false, message };
    }

    const { token, user } = result.data || {};

    if (token) localStorage.setItem("token", token);
    if (user) localStorage.setItem("user", JSON.stringify(user));

    toast.success("🎉 Đăng nhập thành công!");
    return { success: true, token, user };
  } catch (err) {
    console.error("Login error:", err);
    toast.error(err.message || "Lỗi hệ thống. Vui lòng thử lại sau.");
    return { success: false, message: err.message };
  }
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  toast("👋 Đã đăng xuất");
}
