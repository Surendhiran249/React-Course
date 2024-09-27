import { useState } from "react";

function ArrayObjects() {
    const [array, setArray] = useState([{id : 101 , name : "joe"},{id : 102 , name: "Steve"}]);
    const [newId, setNewId] = useState('');
    const [name, setName] = useState('');

    const addObject = () =>{
        if(newId && name){
        setArray([...array, {id : newId, name : name}]);
        setNewId('');
        setName('');
        }
    }
    return(
        <div style={{alignItems:'center',justifyContent:'center'}}>
            <ul>
                {
                    array.map((item) =>(
                        <div key={item.id} style={{backgroundColor:'white',color:'black',padding:'0px 20px' }}>
                            <b>{item.id} - {item.name}</b>
                        </div>
                    ))
                }       
            </ul>
            <input
                    type="text"
                    placeholder="Enter ID"
                    value={newId}
                    onChange={(e) => setNewId(e.target.value)} /><br/>
            <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} /> <br />

            <button onClick={addObject} >Add</button>
        </div>
    )

}

export default ArrayObjects;