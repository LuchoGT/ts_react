import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../components/pages/Login/LoginPage"
import { RegisterPage } from "../components/pages/Register/RegisterPage"
import { LostPassword } from "../components/pages/LostPassword/LostPassword"

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="login" element={ <LoginPage /> } />
        <Route path="register" element={ <RegisterPage /> } />
        <Route path="lost-password" element={ <LostPassword /> } />
    </Routes>
  )
}
