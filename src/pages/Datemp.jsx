import React, { useEffect, useState } from 'react'
import axios from "axios"
import Table from "react-bootstrap/Table"

function Datemp() {
    const [employee , setEmployee] = useState([]);

    useEffect(()=>{
        axios
        .get("https://hbackend.vercel.app/detemp")
        .then((res)=>{
            if(res.data.Status === "Success"){
                setEmployee(res.data.Result)
                console.log(res.data.Result)
            } else{
                console.log("Error", res.data)
            }
        })
        .catch((err)=>console.log(err))
    })

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
                    <tr key="index">
                        <td>{item.firstname}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </div>
  )
}

export default Datemp