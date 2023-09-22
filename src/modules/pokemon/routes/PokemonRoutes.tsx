import {Routes,Route} from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { PokeDetail } from '../pages/PokeDetail'
export const PokemonRoutes = ():JSX.Element => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/pokemon/:id' element={<PokeDetail/>}/>
    </Routes>
  )
}
