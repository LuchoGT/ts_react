import { Link } from "react-router-dom"
import logo from "../../../../assets/icon/logoFull.svg";
import './HeaderLogin.scss';

export const HeaderLogin = () => {
    return (
        <header className="headerLogin">
            <Link to='/'>
                <img src={logo} alt="Logo" className="headerLogin__image" />
            </Link>
        </header>
    )
}
