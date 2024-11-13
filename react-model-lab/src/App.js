// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './Components/Header';
// import Home from './Components/Home';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import './Components/App.css';
// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }
// export default App;

// App.js
import React from 'react';
import { CategoryProvider } from './Components/CategoryContext';
import CategoryFilter from './Components/CategoryFilter';
import ProductList from './Components/ArticleList';

const App = () => {
  return (
    <CategoryProvider>
      <div style={{ textAlign: 'center' }}>
        <h1>Article Filter App</h1>
        <CategoryFilter />
        <ProductList />
      </div>
    </CategoryProvider>
  );
};

export default App;

