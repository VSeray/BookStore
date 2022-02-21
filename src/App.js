import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './pages/Books';
import Categories from './pages/Categories';
import './styles/App.css';

function App() {
  return (
    <main className="App">
      <Navbar />
      <Routes>
        <Route path="/books">
          <Books />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/">
          <Navigate to="/books" />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
