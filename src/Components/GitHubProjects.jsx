// GitHubProjects.jsx
import React, { useState, useEffect } from 'react';
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
    .then(response => response.json())
    .then(data => {
      setRepos(data);
    })
    .catch(error => console.error('Error fetching GitHub repos:', error));
  }, [username, token]);

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="repo-list">
        {repos.map(repo => (
          <div key={repo.id} className="repo-item">
            <h2><a href={repo.html_url}>{repo.name}</a></h2>
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
