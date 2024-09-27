import { useState } from "react";

function SimpleForm(props){
    const [firstname,SetFirstname] = useState(props.firstname);
    const [lastname,SetLastname] = useState(props.lastname);
    const [age,SetAge] = useState(props.age);

    return(
        <div>
            <h1>Naandhandaa {firstname} {lastname} </h1>
            <p>Your age is  {age} </p>
            <input  type="text" value={firstname} onChange={(e)=>SetFirstname(e.target.value)} /><br/>
            <input  type="text" value={lastname} onChange={(e)=>SetLastname(e.target.value)} /><br/>
            <input   type="number" value={age} onChange={(e)=>SetAge(e.target.value)} />
        </div>
    )

}
export default SimpleForm;