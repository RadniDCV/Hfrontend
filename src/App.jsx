
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Datemp from "./pages/Datemp"
import Home from "./pages/Home"
import Depart from "./pages/Depart"
function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/empleados" element={<Datemp/>}></Route>
          <Route path="/depart" element={<Depart/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
