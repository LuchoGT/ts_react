import { Header } from "../../../components/organims/Header/Header"

interface props{
  children: JSX.Element | JSX.Element[]
}
export const PokemonLayout = ({children}:props):JSX.Element => {
  return (
    <div>
        <Header/>
        {children}
    </div>
  )
}
