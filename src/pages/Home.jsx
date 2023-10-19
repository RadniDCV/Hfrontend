import React from 'react'
import { Link } from "react-router-dom"

function Home() {
  return (
    <div>Home
    <hr/>
    <Link to="/empleados">Empleados</Link>
    <hr/>
    <Link to="/depart">Departamentos</Link>
    </div>
  )
}

export default Home