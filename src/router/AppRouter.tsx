import {Navigate, Route, Routes} from 'react-router-dom'
import { PokemonRoutes } from '../modules/pokemon/routes/PokemonRoutes'
import { AuthRoutes } from '../modules/auth/routes/AuthRoutes'
import { useState } from 'react';
export const AppRouter = () => {


  const [authenticated, setAuthenticated] = useState<boolean>(false);

  const handleLogin = () => {
    setAuthenticated(true);
  };


  return (
    <Routes>
      {/* {
        authenticated?
        (
           <Route path='/*' element={<PokemonRoutes/>}/>
        ):
        (
          <Route path='/auth/*' element={<AuthRoutes handleLogin={handleLogin}/>}/>
        )
      } */}

    <Route path='/*' element={<PokemonRoutes/>}/>
    <Route path='/auth/*' element={<AuthRoutes handleLogin={handleLogin}/>}/>

    <Route path='/*' element={ <Navigate to='/*' />  } />
    </Routes>
  )
}
