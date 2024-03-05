// Blog.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Blog.css';
import { posts } from './posts';

function Blog() {
  return (
    <div className="container-blog">
      <h2>Welcome to my Programming Blog</h2>
        
        <p className='justify-text'>
          In this vibrant corner of the web, we delve deep into the dynamic realm of 
          programming languages and web development. From the robust backend capabilities 
          of Node.js to the sleek frontend designs crafted with React.js, our blog serves 
          as a compass through the vast landscape of coding.
          Explore the foundational elements of web design with HTML and CSS, mastering 
          the art of structuring content and creating captivating visuals. Delve into the 
          heart of JavaScript, where innovation meets functionality, empowering developers 
          to build seamless experiences across the digital realm.
          Whether you're embarking on your coding journey or seeking to sharpen your skills, 
          our blog offers a treasure trove of insights, tutorials, and expert tips to guide 
          you along the way. Join us as we navigate the ever-evolving world of programming, 
          one line of code at a time. Welcome aboard!
        </p>

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