import { useState } from "react";
import { login } from "../services/loginService";

export function useLogin() {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (username, password) => {
    setLoading(true);
    try {
      return await login(username, password);
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin, loading };
}
