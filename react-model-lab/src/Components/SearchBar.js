// SearchBar.js
import React, { useContext } from 'react';
import { CategoryContext } from './CategoryContext';

const SearchBar = () => {
  const { searchKeyword, setSearchKeyword } = useContext(CategoryContext);

  return (
    <div>
      <input
        type="text"
        placeholder="Search articles..."
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;