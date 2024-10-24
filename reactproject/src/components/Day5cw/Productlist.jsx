import React from "react";
const Productlist=({ProductsList})=>{
    return(
        <ul>
            {ProductsList.map((prod)=>(
                <li Key={prod.id}>
                    <div>{prod.name}</div>
                    <img src={'/${product.image1}'} alt={prod.name} style={{width:'100px',height:'auto'}}/>
                    <div>${prod.price.toFixed(2)}</div>
                </li>
            ))}
        </ul>
    )
}
export default Productlist;