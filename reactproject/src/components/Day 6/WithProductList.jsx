import React from "react";
export const WithProductList = (WrappedComponent, productList) => {
    return (
        <WrappedComponent productList = {productList} />
    )
}