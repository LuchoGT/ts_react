import { Link } from "react-router-dom";
import { AuthLayout } from "../../layout/AuthLayout";
import './RegisterPage.scss'
import { useForm } from "react-hook-form";

export const RegisterPage = (): JSX.Element => {

  const {register,handleSubmit, formState:{errors}}  = useForm();

  const onSubmit= handleSubmit((data)=>{
    console.log(data);
  })

  console.log(errors);
  
  return (
    <AuthLayout>
      <main>
        <h1 className="login__welcome login--inactive">
          Hola, Bienvenido a Luchito Store!
        </h1>
        <div className="login__container">
          <div>
            <h3 className="login__title">Crea tu Cuenta</h3>
            <p className="login__title--new">
              Ya tienes una cuenta?<Link to="/auth/login">Ingresar</Link>
            </p>
          </div>
          <form className="form" onSubmit={onSubmit}>
            <div className="form__container">
              <label className="form__label">Email</label>
              <input
                type="text"
                placeholder="Ingrese email"
                className="form__input"
                {...register("email",{
                  required:{
                    value:true,
                    message:"Email es requerido"
                  },
                  pattern:{
                    value: /^[a-z0-9._%+-]+@[a-z0-9-]+\.[a-z]{2,4}$/,
                    message: "Email no valido"
                  }
                })}
              />
              {
                errors.email && <span>{errors.email.message}</span>
              }
            </div>
            <div className="form__container">
              <label className="form__label">Contraseña</label>
              <input
                type="password"
                placeholder="Ingrese contraseña"
                className="form__input"
                {...register("password",{
                  required: {
                    value: true,
                    message: "Password requerido"
                  },
                  minLength:{
                    value:2,
                    message: "Password requiere 2 caracteres"
                  },

                })}
              />
              {/* {
                errors.password?.type==="required" && <span>Password es requerido</span>
              }
              {
                errors.password?.type==="minLength" && <span>Password requiere 2 caracteres</span>
              } */}
              {
                errors.password && <span>{errors.password.message}</span>
              }
            </div>
            <button 
              type="submit"              
              className="form__button">Crear Cuenta</button>
          </form>
        </div>
      </main>
    </AuthLayout>
  );
};
