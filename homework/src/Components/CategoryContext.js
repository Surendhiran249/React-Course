// CategoryContext.js
import React, { createContext, useState, useEffect } from 'react';

// Creating a Context for the product categories
export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Simulate fetching categories asynchronously
  useEffect(() => {
    async function fetchCategories() {
      const categoryData = await new Promise(resolve =>
        setTimeout(() => resolve(['Electronics', 'Clothing', 'Accessories', 'Home Appliances']), 1000)
      );
      setCategories(categoryData);
    }
    fetchCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories, selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
