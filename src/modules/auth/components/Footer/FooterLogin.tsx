import { Link } from "react-router-dom"
import './FooterLogin.scss';

export const FooterLogin = () => {
  return (
    <footer className="footerLogin">
    <div className="footerLogin__links">
      <div>🌍 Español Latinoamericano</div>
      <Link to='' className="footerLogin__links--white">Terminos y Condiciones</Link>
      <Link to=''  className="footerLogin__links--white">Avisos de Privacidad</Link>
      <Link to='' className="footerLogin__links--white">Soporte</Link>
      <p>© Lucho S7NZ 2023 - Todos los Derechos Reservados</p>
    </div>
  </footer>
  )
}
