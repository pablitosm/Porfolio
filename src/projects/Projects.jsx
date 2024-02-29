// Projects.jsx
import React from 'react';
import GitHubProjects from '../Components/GitHubProjects';

function Projects() {
  return (
    <div>
      <GitHubProjects username={"pablitosm"} token={process.env.REACT_APP_GITHUB_TOKEN} />
    </div>
  );
}

export default Projects;