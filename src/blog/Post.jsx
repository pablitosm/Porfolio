import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { posts } from './posts';
import Prism from 'prismjs';
import '../css/Post.css';
import '../blog/prism-gruvbox-dark.css'

function Post() {
  const { id } = useParams();
  const post = posts.find((post) => post.id === Number(id));

  useEffect(() => {
    // Highlight all code
    Prism.highlightAll();

    const copyImages = document.querySelectorAll('.copy-button');
    for (let img of copyImages) {
      img.addEventListener('click', () => {
        // Select the code within the same <pre> element
        const code = img.nextElementSibling.textContent;
        // Copy the code to the clipboard
        navigator.clipboard.writeText(code);
      });
    }
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