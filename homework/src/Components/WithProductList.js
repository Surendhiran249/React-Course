// withProductList.js
import React from 'react';

// HOC that takes a component as input and returns an enhanced component
const withProductList = (WrappedComponent, products) => {
  return function EnhancedComponent(props) {
    return <WrappedComponent {...props} products={products} />;
  };
};

export default withProductList;
