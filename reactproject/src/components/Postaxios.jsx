import React, { useState } from "react";
import axios from "axios";
function Postaxios() {
    // const[array,setArray]=useState([]);
    const[name,setName] =useState('');
    const addNew=()=>{
        axios.post('https://jsonplaceholder.typicode.com/users', {name:name})
        .then(response => console.log(response.data))
    }
    return (
        <div style={{margin:'40px'}}>
            <h1>Welcome </h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={addNew}>Add New</button>
        </div>
    )
}
export default  Postaxios;
