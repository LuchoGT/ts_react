import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../components/pages/Login/LoginPage"
import { RegisterPage } from "../components/pages/Register/RegisterPage"
import { LostPassword } from "../components/pages/LostPassword/LostPassword"

interface props{
  handleLogin:() => void;
}
export const AuthRoutes = ({handleLogin}:props) => {
  return (
    <Routes>
        <Route path="login" element={ <LoginPage  onLogin={handleLogin}/> } />
        <Route path="register" element={ <RegisterPage /> } />
        <Route path="lost-password" element={ <LostPassword /> } />

        <Route path='/*' element={ <Navigate to="/auth/login" /> } />
    </Routes>
  )
}
