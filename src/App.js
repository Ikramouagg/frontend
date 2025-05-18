// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import ApartmentDetails from './components/ApartmentDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Register />} />
        <Route path="/apartments/:id" element={<ApartmentDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
