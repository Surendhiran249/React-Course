// src/components/Recipe.js
import React from 'react';

const Recipe = ({ recipe, isFavorite, onAdd, onRemove }) => {
  return (
    <div style={styles.recipe}>
      <h4>{recipe.name}</h4>
      <p>{recipe.cuisine}</p>
      {isFavorite ? (
        <button onClick={() => onRemove(recipe.id)}>Remove from Favorites</button>
      ) : (
        <button onClick={() => onAdd(recipe)}>Add to Favorites</button>
      )}
    </div>
  );
};

const styles = {
  recipe: {
    border: '1px solid #ccc',
    padding: '10px',
    marginBottom: '10px',
  },
};

export default Recipe;
