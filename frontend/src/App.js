import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ContactManager from './pages/ContactManager';

function App() {
  return (
    <Router>
      <div className="App">
        <p>Welcome to the Customer Relationship Management.</p>
        <nav>
          <Link to="/">Home</Link>
          {' | '}
          <Link to="/contact-manager">Contact Manager</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-manager" element={<ContactManager />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>This is the home page of the Customer Relationship Management system.</p>
    </div>
  );
}

export default App;
