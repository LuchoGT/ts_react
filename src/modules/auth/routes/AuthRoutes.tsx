import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/Login/LoginPage"
import { RegisterPage } from "../pages/Register/RegisterPage"
import { LostPassword } from "../pages/LostPassword/LostPassword"

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="login" element={ <LoginPage /> } />
        <Route path="register" element={ <RegisterPage /> } />
        <Route path="lost-password" element={ <LostPassword /> } />
    </Routes>
  )
}
