import React, { useState } from "react";
import axios from "axios";
function Postaxios() {
    // const[array,setArray]=useState([]);

    const[name,setName] =useState('');
    const[userId,setUserId] =useState('');
    const addNew=()=>{
        axios.put('https://jsonplaceholder.typicode.com/users/'+userId, {name:name})
        .then(response => console.log(response.data))
    }
    return (
        <div style={{margin:'40px'}}>
            <h1>Welcome </h1>
            <input type="number" value={userId} onChange={(e)=>setUserId(e.target.value)}/> <br />
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/> <br />
            <button onClick={addNew}>Add New</button>
        </div>
    )
}
export default  Postaxios;
