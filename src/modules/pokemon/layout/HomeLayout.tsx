import { Header } from "../../../components/organims/Header/Header"

interface props{
  children: JSX.Element | JSX.Element[]
}
export const HomeLayout = ({children}:props):JSX.Element => {
  return (
    <>
        <Header/>
        {children}
    </>
  )
}
