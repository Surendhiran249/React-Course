// CategoryFilter.js
import React, { useContext } from 'react';
import { CategoryContext } from './CategoryContext';

const CategoryFilter = () => {
  const { categories, selectedCategory, setSelectedCategory } = useContext(CategoryContext);

  return (
    <div>
      <h3>Filter by Category</h3>
      <select value={selectedCategory || ''} onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value=''>All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
