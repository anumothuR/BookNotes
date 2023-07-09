import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Welcome to Book Notes App</h2>
    <p>Click on a book to view its notes.</p>
    <ul>
      <li>
        <Link to="/book/1">Book 1</Link>
      </li>
      <li>
        <Link to="/book/2">Book 2</Link>
      </li>
      <li>
        <Link to="/book/3">Book 3</Link>
      </li>
    </ul>
  </div>
);

export default Home;
