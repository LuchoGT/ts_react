import { Link, useNavigate } from "react-router-dom";
import { useForm,SubmitHandler } from "react-hook-form";
import "./LoginPage.scss";
import { AuthTemplate } from "../../templates/AuthTemplate";

type FormData={
  email:string,
  password:string,
}

interface LoginFormProps {
  onLogin: () => void;
}
export const LoginPage = ({onLogin}:LoginFormProps): JSX.Element => {


  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // Simula el inicio de sesión exitoso y almacena un token en localStorage
    if (data.email === 'luchito@gmail.com' && data.password === '12345678') {
      localStorage.setItem('token', 'mi_token_secreto');
      console.log('Credenciales correctasss!!!');
      onLogin();
      navigate('/');
    } else {
      // Manejo de errores de inicio de sesión
      console.error('Credenciales incorrectas');
    }
  };

  return (
    <AuthTemplate>
      <main>
        <h1 className="login__welcome login__welcome--inactive">
          Hola, Bienvenido a Luchito Store!
        </h1>
        <div className="login__container">
          <div>
            <h3 className="login__title">Inicio sesion</h3>
            <p className="login__title--new">
              Eres nuevo en Luchito Store?
              <Link to="/auth/register">Crear una cuenta</Link>
            </p>
          </div>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form__container">
              <label className="form__label">Email</label>
              <input
                type="email"
                placeholder="Ingrese email"
                className="form__input"
                required
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email es requerido",
                  },
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9-]+\.[a-z]{2,4}$/,
                    message: "Email no valido",
                  },
                })}
              />
              {errors.email && <span>{errors.email.message}</span>}
            </div>
            <div className="form__container">
              <label className="form__label">Contraseña</label>
              <input
                type="password"
                placeholder="Ingrese contraseña"
                className="form__input"
                required
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password requerido",
                  },
                  minLength: {
                    value: 8,
                    message: "Password minimo 8 caracteres",
                  },
                })}
              />
              {errors.password && <span>{errors.password.message}</span>}
            </div>
            <button type="submit" className="form__button">
              Iniciar sesion
            </button>
            {/* <Link to='/dash'>Iniciar sesion</Link> */}
            <div className="form--lost">
              <Link to="/auth/lost-password">Has olvidado tu contrasena?</Link>
            </div>
          </form>
        </div>
      </main>
    </AuthTemplate>
  );
};
