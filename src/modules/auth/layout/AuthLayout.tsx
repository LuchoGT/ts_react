import { FooterLogin } from "../components/Footer/FooterLogin"
import { HeaderLogin } from "../components/Header/HeaderLogin"
import './AuthLayout.scss'
interface props{
    children: JSX.Element | JSX.Element[]
  }
export const AuthLayout = ({children}:props):JSX.Element => {
  return (
    <div className="authLayout">
        <HeaderLogin/>
        {children}
        <FooterLogin/>
    </div>
  )
}
