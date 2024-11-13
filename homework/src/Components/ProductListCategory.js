// ProductList.js
import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from './CategoryContext';

const ProductList = () => {
  const { selectedCategory } = useContext(CategoryContext);
  const [products, setProducts] = useState([]);

  // Simulate fetching products asynchronously
  useEffect(() => {
    async function fetchProducts() {
      const productData = await new Promise(resolve =>
        setTimeout(() => resolve([
          { id: 1, name: 'Laptop', category: 'Electronics' },
          { id: 2, name: 'Shirt', category: 'Clothing' },
          { id: 3, name: 'Watch', category: 'Accessories' },
          { id: 4, name: 'Vacuum Cleaner', category: 'Home Appliances' },
          // Add more mock products as needed
        ]), 1000)
      );
      setProducts(productData);
    }
    fetchProducts();
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h3 style={{ marginBottom: '20px', color: '#4A90E2' }}>Products</h3>
      <ul style={{
        listStyle: 'none',
        padding: 0,
        maxWidth: '400px',
        margin: '0 auto',
        textAlign: 'left'
      }}>
        {filteredProducts.map(product => (
          <li 
            key={product.id}
            style={{
              padding: '15px',
              marginBottom: '10px',
              backgroundColor: 'aqua',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '16px',
            }}
          >
            <span>{product.name}</span>
            <span style={{ color: 'purple' }}>{product.category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
