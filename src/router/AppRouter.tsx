import {Navigate, Route, Routes} from 'react-router-dom'
import { PokemonRoutes } from '../modules/pokemon/routes/PokemonRoutes'
import { AuthRoutes } from '../modules/auth/routes/AuthRoutes'
import { useAuth } from '@/hooks/useAuth'
export const AppRouter = () => {


  const {isLoggedIn} = useAuth();

  return (
    <Routes>
      <Route path='/*' element={<PokemonRoutes/>}/>
      {
        isLoggedIn?
        (
           <Route path='/*' element={<PokemonRoutes/>}/>
        ):
        (
          <Route path='/auth/*' element={<AuthRoutes/>}/>
        )
      }

    {/* <Route path='/auth/*' element={<AuthRoutes/>}/> */}

    {/* <Route path='/*' element={ <Navigate to='/auth/*' />  } /> */}
    </Routes>
  )
}
