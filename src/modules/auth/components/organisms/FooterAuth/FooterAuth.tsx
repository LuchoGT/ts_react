import { Link } from "react-router-dom";
import './FooterAuth.scss'

export const FooterAuth = () => {
  return (
    <footer className="footerAuth">
      <div className="footerAuth__links">
        <div>🌍 Español Latinoamericano</div>
        <Link to="" className="footerAuth__links--white">
          Terminos y Condiciones
        </Link>
        <Link to="" className="footerAuth__links--white">
          Avisos de Privacidad
        </Link>
        <Link to="" className="footerAuth__links--white">
          Soporte
        </Link>
        <p>© Lucho S7NZ 2023 - Todos los Derechos Reservados</p>
      </div>
    </footer>
  );
};
