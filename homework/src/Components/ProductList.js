// ProductList.js
import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
      {products.map((product, index) => (
        <div key={index} style={{
          width: '200px',
          padding: '20px',
          textAlign: 'center',
          backgroundColor: '#f0f0f0',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          borderRadius: '8px'
        }}>
          <img src={product.imageUrl} alt={product.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
