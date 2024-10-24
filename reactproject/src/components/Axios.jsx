import React, { useState, useEffect } from "react";
import axios from "axios";
function Axios() {
    const[array,setArray]=useState([]);
    
    useEffect(() =>{
        axios.get("https://api.carbonfootprint.com/surendhiran/Data/727723eucs249%40skcet.ac.in/business")
            .then((response) => console.log(response))
    })
    return (
        <div style={{margin:'40px'}}>
            <h1>Welcome </h1>
            <table border="solid">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {array.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                    </tr>
                 ))}
                 </tbody>
            </table>
        </div>
    )
}
export default  Axios;
