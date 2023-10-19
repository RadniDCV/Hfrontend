import { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

function Depart() {
  const [dept, setDept] = useState([]);

  useEffect(() => {
    axios
      .get(`https://hbackend.vercel.app/depart`)
      .then((res) => {
        if (res.data.Status === "Success") {
          setDept(res.data.Result);
          console.log(res.data.Result);
        } else {
          console.log("Error", res.data);
          console.log(res.data.Result);
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
      });
  }, []);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Departamento</th>
          </tr>
        </thead>
        <tbody>
          {dept.map((item, index) => (
            <tr key={index}>
              <td>{item.details}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Depart;
