import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Book } from './pages';


// App component
const App = () => (
  <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:bookId" element={<Book />} />
      </Routes>
  </Router>
);

export default App;
