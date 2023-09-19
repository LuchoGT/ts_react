import {Route, Routes} from 'react-router-dom'
import { PokemonRoutes } from '../presentation/pokemon/routes/PokemonRoutes'
export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/*' element={<PokemonRoutes/>}/>
    </Routes>
  )
}
