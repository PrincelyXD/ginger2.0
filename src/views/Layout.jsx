import Nav from "../components/Nav"
import { Outlet } from "react-router-dom"


const Layout = () => {
  return (
    <div>
      <Nav/>
            <Outlet/>
            {/* footer */}
    </div>
  )
}

export default Layout
