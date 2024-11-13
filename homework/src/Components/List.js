// List.js
import React from 'react';

const List = ({ items }) => {
  return (
    <div>
      <h3>Items List</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li> // Fix: add a key prop for each item
        ))}
      </ul>
    </div>
  );
};

export default List;
