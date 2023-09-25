import { Outlet } from "react-router-dom"
import { HeaderDashboard } from "./components/HeaderDashboard"
import { FooterDashboard } from "./components/FooterDashboard"

export const Dashboard = () => {
  return (
    <div>
      <HeaderDashboard/>
      <Outlet/>
      <FooterDashboard/>
    </div>
  )
}
