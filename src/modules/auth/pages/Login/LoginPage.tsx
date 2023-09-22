import { Link, useNavigate } from "react-router-dom"
import { AuthLayout } from "../../layout/AuthLayout"
import { useForm } from "react-hook-form";
import './LoginPage.scss'

export const LoginPage = ():JSX.Element => {

  const navigate = useNavigate();
  const {register}  = useForm();

  const onLogin=()=>{
    navigate('/',{
      replace: true
    })
  }
  // const {}  = useForm();
  return (
    <AuthLayout>
        <main>
          <h1 className="login__welcome login__welcome--inactive">Hola, Bienvenido a Luchito Store!</h1>
          <div className="login__container">
            <div>
              <h3 className="login__title">Inicio sesion</h3>
              <p className="login__title--new">Eres nuevo en Luchito Store?<Link to='/auth/register'>Crear una cuenta</Link></p>
            </div>
            <form className="form" onSubmit={onLogin}>
              <div className="form__container">
                <label className="form__label">Email</label>
                <input 
                  type="email"
                  placeholder="Ingrese email" 
                  className="form__input"
                  {...register("email")}
                  />
              </div>
              <div className="form__container">
                <label className="form__label">Contraseña</label>
                <input 
                  type="password"
                  placeholder="Ingrese contraseña" 
                  className="form__input"
                  {...register("password")}
                  />
              </div>
              <button 
                type="submit"
                className="form__button">Iniciar sesion</button>
              {/* <Link to='/dash'>Iniciar sesion</Link> */}
              <div className="form--lost">
                <Link to='/auth/lost-password'>Has olvidado tu contrasena?</Link>
              </div>
            </form>
          </div>
        </main>
    </AuthLayout>
  )
}
