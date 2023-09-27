import { Link } from "react-router-dom";
import logo from '../../../../../assets/icon/logoFull.svg';
import './HeaderAuth.scss';

export const HeaderAuth = () => {
  return (
    <header className="headerAuth">
      <Link to="/">
        <img src={logo} alt="Logo" className="headerAuth__image" />
      </Link>
    </header>
  );
};
