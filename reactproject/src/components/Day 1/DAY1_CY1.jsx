import React from "react";
function Compare()
{
    const name1="Kabil";
    const name2="Kabil";
    const object1={name:"Kabil"};
   const object2={name:"Kabil"};
   console.log(object1===object2);
   console.log(name1===name2);
   console.log(object1===name1);
   alert("Check the console");
}
const Harish = ()=>{
    return (
        <div>
            <h1>Let we see the output of javascript</h1>
            <button onClick={Compare}>CY1</button>
        </div>
    );
};
export default Harish;