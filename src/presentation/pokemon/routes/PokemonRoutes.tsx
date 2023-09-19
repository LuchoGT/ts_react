import {Routes,Route} from 'react-router-dom'
import { PokemonPage } from '../pages/PokemonPage'
export const PokemonRoutes = ():JSX.Element => {
  return (
    <Routes>
        <Route path='/' element={<PokemonPage/>}/>
    </Routes>
  )
}
