// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Search from './components/Search';
import BreweryDetails from './components/BreweryDetails';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/brewery/:id" element={<BreweryDetails/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;