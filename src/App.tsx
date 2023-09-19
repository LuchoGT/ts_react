import { BrowserRouter } from 'react-router-dom'
import './App.scss'
import { AppRouter } from './router/AppRouter'
import { PokemonProvider } from './context/PokemonProvider'
function App() {

  return (
    <PokemonProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </PokemonProvider>
  )
}

export default App
