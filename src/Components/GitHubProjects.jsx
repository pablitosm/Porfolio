// GitHubProjects.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/GitHubProjects.css';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const languageColors = {
  Java: '#BD34FF',
  HTML: '#FFC51D',
  JavaScript: '#48C8FF'
  // añade más lenguajes y colores aquí si lo necesitas
};

const GitHubProjects = ({ username, token }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const apiUrl = `https://api.github.com/users/${username}/repos`;
  
    fetch(apiUrl, {
      headers: {
        Authorization: `token ${token}`
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setRepos(data);
    })
    .catch(error => {
      console.error('Error fetching GitHub repos:', error);
      setRepos([]); // set repos to an empty array in case of error
    });
  }, [username, token]);

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="repo-list">
        {repos.map(repo => (
          <div key={repo.id} className="repo-item">
            <h2><Link to={`/repo/${username}/${repo.name}`}>{repo.name}</Link></h2>
            <p>{repo.description}</p>
            <div className="repo-language">
              <span className="circle" style={{backgroundColor: languageColors[repo.language] || getRandomColor()}}></span>
              <span>{repo.language}</span>
            </div>
          </div>
        ))}
      </div>
    </div>

  );

};

export default GitHubProjects;
