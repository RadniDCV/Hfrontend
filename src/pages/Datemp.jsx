import  { useEffect, useState } from 'react'
import axios from "axios"
import Table from "react-bootstrap/Table"


function Datemp() {
    const [employee , setEmployee] = useState([]);
    


    useEffect(()=>{
        axios.defaults.withCredentials = true
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
        .catch((err)=>console.log(err, "Prueba")
        
        )
    },[apiUrl])

  return (
    <div>
        <Table>
            <thead>
                <tr>
                    <th>Codigo:</th>
                </tr>
            </thead>
            <tbody>
                {employee.map((item, index)=>(
                    <tr key={index}>
                        <td>{item.empid}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </div>
  )
}

export default Datemp