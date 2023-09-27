import {Routes,Route} from 'react-router-dom'
import { HomePage } from '../components/pages/HomePage/HomePage'
import { PokeDetail } from '../pages/PokeDetail'
import { Dashboard } from '../pages/Dashboard/Dashboard'
import { Account } from '../pages/Dashboard/Account/Account'
export const PokemonRoutes = ():JSX.Element => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='pokemon/:id' element={<PokeDetail/>}/>
        <Route path='dashboard' element={<Dashboard/>}>
          <Route path='/dashboard/account' element={<Account/>}/>
        </Route>
    </Routes>
  )
}
