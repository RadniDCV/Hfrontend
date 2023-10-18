import React from 'react'
import { Link } from "react-router-dom"

function Home() {
  return (
    <div>Home
    <hr/>
    <Link to="/empleados">Empleados</Link>
    </div>
  )
}

export default Home