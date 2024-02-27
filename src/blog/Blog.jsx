import React, { useState } from 'react';
import BlogPosts from '../Components/BlogPost';
import '../css/Blog.css';

// Blog.jsx
function Blog() {
    const [posts] = useState([
      { id: 1, title: 'example', description: 'esto es un ejemplo de post en el blog', content: 'This is the content for post 1. content' },
      { id: 2, title: 'example 2', description: 'esto es otro ejemplo de post en el blog', content: 'This is the content for post 2. content' },
    ]);
  
    return (
      <BlogPosts posts={posts} />
    );
  }
  
  export default Blog;