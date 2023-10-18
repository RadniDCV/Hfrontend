import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Datemp from "./pages/Datemp"

function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/employee" element={<Datemp/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
