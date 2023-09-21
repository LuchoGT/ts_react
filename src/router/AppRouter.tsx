import {Route, Routes} from 'react-router-dom'
import { PokemonRoutes } from '../modules/pokemon/routes/PokemonRoutes'
import { AuthRoutes } from '../modules/auth/routes/AuthRoutes'
export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/*' element={<PokemonRoutes/>}/>
        <Route path='/auth/*' element={<AuthRoutes/>}/>
    </Routes>
  )
}
