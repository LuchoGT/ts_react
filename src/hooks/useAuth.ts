import { useState } from "react";
import { useNavigate } from "react-router-dom";
type AuthStatus = "authenticated" | "unauthenticated" | "loading";

export const useAuth = () => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>("loading");
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    // Simula una solicitud de inicio de sesión exitosa
    if (email === "luchito@gmail.com" && password === "12345678") {
      localStorage.setItem("token", "mi_token_secreto");
      setAuthStatus("authenticated");
      console.log("Credenciales correctass!!");
      navigate("/");
    } else {
      // Manejo de errores de inicio de sesión
      console.log("Credenciales incorrectas");
      setAuthStatus("unauthenticated");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuthStatus("unauthenticated");
  };

  return { authStatus, login, logout };
};
