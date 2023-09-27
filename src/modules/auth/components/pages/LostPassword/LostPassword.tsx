import { Link } from "react-router-dom";
import { AuthTemplate } from "../../templates/AuthTemplate";

export const LostPassword = () => {
  return (
    <AuthTemplate>
      <main>
        <h1 className="login__welcome login--inactive">
          Tranquilo,Te ayudamos!
        </h1>
        <div className="login__container">
          <div>
            <h3 className="login__title">¿Has olvidado tu contraseña?</h3>
            <p className="login__title--new">
              Te enviaremos un correo electrónico con un enlace que te permitirá
              establecer una nueva contraseña
            </p>
          </div>
          <form className="form">
            <div className="form__container">
              <label className="form__label">Email</label>
              <input
                type="email"
                placeholder="Ingrese email"
                className="form__input"
              />
            </div>
            <button className="form__button">Confirmar</button>
            <div className="form--lost">
              <Link to="/auth/login">Vuelve a login</Link>
            </div>
          </form>
        </div>
      </main>
    </AuthTemplate>
  );
};
