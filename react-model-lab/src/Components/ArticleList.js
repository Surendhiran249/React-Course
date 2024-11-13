// ArticleList.js
import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from './CategoryContext';

const ProductList = () => {
  const { selectedCategory, searchKeyword } = useContext(CategoryContext);
  const [articles, setArticles] = useState([]);

  // Simulate fetching articles asynchronously
  useEffect(() => {
    async function fetchArticles() {
      const articleData = await new Promise(resolve =>
        setTimeout(() => resolve([
          { id: 1, title: 'Latest Tech Trends', category: 'Tech' },
          { id: 2, title: 'Science Innovations', category: 'Science' },
          { id: 3, title: 'Sports Updates', category: 'Sports' },
          { id: 4, title: 'Future of AI', category: 'Tech' },
          // Add more mock articles as needed
        ]), 1000)
      );
      setArticles(articleData);
    }
    fetchArticles();
  }, []);

  // Filter articles based on selected category and search keyword
  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory ? article.category === selectedCategory : true;
    const matchesSearch = article.title.toLowerCase().includes(searchKeyword.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h3 style={{ marginBottom: '20px', color: '#4A90E2' }}>Articles</h3>
      <ul style={{
        listStyle: 'none',
        padding: 0,
        maxWidth: '400px',
        margin: '0 auto',
        textAlign: 'left' 
      }}>
        {filteredArticles.map(article => (
          <li 
            key={article.id}
            style={{
              padding: '15px',
              marginBottom: '10px',
              backgroundColor: 'lightgray',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '16px',
            }}
          >
            <span>{article.title}</span>
            <span style={{ color: 'purple' }}>{article.category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;