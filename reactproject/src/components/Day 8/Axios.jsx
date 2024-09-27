import React, { useState, useEffect } from "react";
import axios from "axios";
function Axios() {
    const[array,setArray]=useState([]);
    
    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/users')

        .then(response => setArray(response.data))
    })
    return (
        <div style={{margin:'40px'}}>
            <h1>Welcome </h1>
            <table border={'dotted'}>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                {array.map((item) => (
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                    </tr>
                 ))}
            </table>
        </div>
    )
}
export default  Axios;
