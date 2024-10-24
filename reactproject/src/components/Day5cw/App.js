import React from "react";
import { WithProduct } from "./WithProduct";
import Productlist from "./Productlist";

const products=[
      {id:1,name:'Product 1',price:19.99,imge1:'image3.jpg'},
      {id:2,name:'Product 2',price:29.99,imge1:'image5.jpg'}
];
const Enhanced=  WithProduct(Productlist,products);
const App=()=>{
    return(
        <div>
            <h1>YOUR APP </h1>
            <Enhanced/>
        </div>
    )
}

export default App;
