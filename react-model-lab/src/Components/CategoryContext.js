// CategoryContext.js
import React, { createContext, useState, useEffect } from 'react';

// Creating a Context for the article categories
export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState('');

  // Simulate fetching categories asynchronously
  useEffect(() => {
    async function fetchCategories() {
      const categoryData = await new Promise(resolve =>
        setTimeout(() => resolve(['Tech', 'Science', 'Sports']), 1000)
      );
      setCategories(categoryData);
    }
    fetchCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories, selectedCategory, setSelectedCategory, searchKeyword, setSearchKeyword }}>
    {children}
  </CategoryContext.Provider>
  );
};