
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Datemp from "./pages/Datemp"
import Home from "./pages/Home"

function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/empleados" element={<Datemp/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
