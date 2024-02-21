// RepoDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import '../css/RepoDetails.css';

const RepoDetails = () => {
  const { username, repoName } = useParams();
  const [readme, setReadme] = useState('');

  useEffect(() => {
    const apiUrlMain = `https://raw.githubusercontent.com/${username}/${repoName}/main/README.md`;
    const apiUrlMaster = `https://raw.githubusercontent.com/${username}/${repoName}/master/README.md`;

    const apiUrl = repoName === 'workcontrol' ? apiUrlMaster : apiUrlMain;

    fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      setReadme(data);
    })
    .catch(error => {
      console.error('Error fetching GitHub README from main branch:', error);
      if (repoName !== 'workcontrol') {
        fetch(apiUrlMaster)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.text();
        })
        .then(data => {
          setReadme(data);
        })
        .catch(error => {
          console.error('Error fetching GitHub README from master branch:', error);
          setReadme('');
        });
      }
    });
  }, [username, repoName]);

  return (
    <div className='container-readme'>
      <h2>{repoName}</h2>
      <p>This is the readme.md file of the project {repoName}, in this file you 
      can see an example of how to use the application.</p>
      <ReactMarkdown>{readme}</ReactMarkdown>
    </div>
  );
};

export default RepoDetails;