import  { useEffect, useState } from 'react'
import axios from "axios"
import Table from "react-bootstrap/Table"


function Datemp() {
    const [employee , setEmployee] = useState([]);
    


    useEffect(()=>{
        axios
        .get(`https://hbackend.vercel.app/detemp`)
        .then((res)=>{
            if(res.data.Status === "Success"){
                setEmployee(res.data.Result)
                console.log(res.data.Result)
            } else{
                console.log("Error", res.data)
                console.log(res.data.Result)
            }
        })
        .catch((error) => {
            if (error.response) {
              // La solicitud fue hecha y el servidor respondió con un código de estado que no está en el rango 2xx
              console.log("Respuesta del servidor:", error.response.data);
              console.log("Código de estado HTTP:", error.response.status);
              console.log("Cabeceras de respuesta:", error.response.headers);
            } else if (error.request) {
              // La solicitud fue hecha pero no se recibió respuesta
              console.log("Solicitud enviada pero no se recibió respuesta");
            } else {
              // Ocurrió un error durante la configuración de la solicitud
              console.log("Error de configuración de la solicitud:", error.message);
            }
        }
        )
    },[])

  return (
    <div>
        <Table bordered>
            <thead>
                <tr>
                    <th>Codigo</th>
                    <th>Nombre</th>
                    <th>cedula</th>
                    <th>Departamento</th>
                    <th>Sucursal</th>
                </tr>
            </thead>
            <tbody>
                {employee.map((item, index)=>(
                    <tr key={index}>
                        <td>{item.empid}</td>
                        <td>{item.firstname} {item.middlename} {item.lastname} {item.lastname2}</td>
                        <td>{item.ci}</td>
                        <td>{item.dept}</td>
                        <td>{item.branch}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </div>
  )
}

export default Datemp