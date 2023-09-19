import {Routes,Route} from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { PokemonPage } from '../pages/PokemonPage'
export const PokemonRoutes = ():JSX.Element => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/pokemon/:id' element={<PokemonPage/>}/>
    </Routes>
  )
}
