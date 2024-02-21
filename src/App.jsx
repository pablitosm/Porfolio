// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import CustomCursor from './Components/CustomCursor';
import Projects from './projects/Projects';
import AboutMe from './AboutMe/AboutMe';
import Contact from './Contact/Contact';
import Index from './Index/index';

function App() {
  return (
    <Router>
      <div>
        <CustomCursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;