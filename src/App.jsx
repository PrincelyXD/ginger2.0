import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Layout from "./views/Layout";
import Home from "./pages/home/Home";
import BuiltForYou from "./pages/home/see-how-routes/BuiltForYou";
import Security from "./pages/home/see-how-routes/Security";
import Accesibility from "./pages/home/see-how-routes/Accesibility";

function App() {
  return (
   <BrowserRouter>
      <Routes>

        <Route  element={<Layout/>}>
         <Route path="/" element={<Home/>}>
            <Route index element={<BuiltForYou/>}/>
            <Route path="/accesibility" element={<Accesibility/>}/>
            <Route path="/security" element={<Security/>}/>
         </Route>
        </Route>

      </Routes>
   </BrowserRouter>
  )
}

export default App
