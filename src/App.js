import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Landing from './components/Landing/Landing.jsx';
import Accesorios from './components/Accesorios/Accesorios.jsx';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/accesorios" element={<Accesorios />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;