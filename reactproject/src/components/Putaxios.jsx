import React, { useState } from "react";
import instance from "./Instance";
const PutAxios = () => {
    const [array, setArray] = useState([])
    const [name, setName] = useState('');
    const [id, setId] = useState('');

    instance.get('/users').then(response => setArray(response.data))

    const put = () => {
        instance.put('/users' + id, {name:name})
        .then(() => {
            setArray(array.map(user => (user.id === parseInt(id) ? {...user, name} : user)))
        })
    }

    const addNew=()=>{
        instance.post('/users' + id, {name:name})
        .then(response => console.log(response.data))
    }

    const deleteUser=(id)=> {
        instance.delete(`/users/${id}`)
        .then(() => {
            setArray(array.filter(user => user.id !== parseInt(id)))
        })
    }
    return(
        <div>
            <h1>Put Axios</h1>
            {array.map((user)=>(
                <div key={user.id}>
                    <b>{user.id} : {user.name} --- {user.email}</b>
                </div>
            ))} <br />
            
            <input type="number" placeholder="Enter ID" value={id} onChange={(e) => setId(e.target.value)}/> <br /> 
            <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)}/> <br />

            <button onClick={addNew}>Add</button>
            <button onClick={put}>Replace</button> 
            <button onClick={() => deleteUser(id)}>Delete</button>
        </div>
    )
}
export default PutAxios;