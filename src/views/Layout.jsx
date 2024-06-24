import Footer from "../components/footer/Footer"
import Nav from "../components/Nav"
import { Outlet } from "react-router-dom"


const Layout = () => {
  return (
    <div className="min-w-[344px] max-w-[1600px] mx-auto">
      <Nav/>
            <Outlet/>
            <Footer/>
    </div>
  )
}

export default Layout
