// Post.jsx
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { posts } from './posts';
import Prism from 'prismjs';
import '../css/Post.css';

function Post() {
  const { id } = useParams();
  const post = posts.find((post) => post.id === Number(id));

  useEffect(() => {
    Prism.highlightAll();
  }, [post]);

  return (
    <div className="post1">
      <div className="container-post">
        <h2>{post.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
}

export default Post;