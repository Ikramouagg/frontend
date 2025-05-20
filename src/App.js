// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Register from './components/Register.jsx';
import ApartmentDetails from './components/ApartmentDetails.jsx';
import BookingPage from './components/BookingPage.jsx';
import PublishProperty from './components/PublishProperty.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Register />} />
        <Route path="/apartments/:id" element={<ApartmentDetails />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/publish" element={<PublishProperty />} />
      </Routes>
    </Router>
  );
}

export default App;
