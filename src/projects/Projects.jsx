// Projects.jsx
import React from 'react';
import GitHubProjects from '../Components/GitHubProjects';

function Projects() {
  return (
    <div>
      <GitHubProjects username={"pablitosm"} token={import.meta.env.VITE_APP_GITHUB_TOKEN} />
    </div>
  );
}

export default Projects;