// Blog.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Blog.css';
import { posts } from './posts';

function Blog() {
  return (
    <div className="container-blog">
      <h2>Blog</h2>
      {posts.map((post) => (
        <NavLink key={post.id} to={`/Blog/${post.id}`}>
          <div className="post">
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default Blog;