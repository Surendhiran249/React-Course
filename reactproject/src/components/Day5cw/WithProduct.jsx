import React from "react";
export const WithProduct=(WrappedComponent,Productlist)=>{
    return()=> <WrappedComponent  Productlist={Productslist}/>;
};