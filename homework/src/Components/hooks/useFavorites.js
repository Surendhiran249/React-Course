// src/hooks/useFavorites.js
import { useState, useEffect } from 'react';

const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from local storage on initial render
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  // Update local storage whenever favorites change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Add a recipe to favorites
  const addFavorite = (recipe) => {
    setFavorites((prevFavorites) => [...prevFavorites, recipe]);
  };

  // Remove a recipe from favorites
  const removeFavorite = (recipeId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((recipe) => recipe.id !== recipeId)
    );
  };

  return { favorites, addFavorite, removeFavorite };
};

export default useFavorites;
