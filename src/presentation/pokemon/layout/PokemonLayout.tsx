import { Header } from "../../../components/organims/Header/Header"

export const PokemonLayout = ({children}):JSX.Element => {
  return (
    <div>
        <Header/>
        {children}
    </div>
  )
}
