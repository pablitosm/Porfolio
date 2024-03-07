// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import CustomCursor from './Components/CustomCursor';
import Index from './Index/index';
import RepoDetails from './Components/RepoDetails';
import Blog from './blog/Blog';
import Post from './blog/Post';

function App() {
  return (
    <Router>
      <div>
        <CustomCursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Blog/:id" element={<Post />} />
          <Route path="/repo/:username/:repoName" element={<RepoDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;