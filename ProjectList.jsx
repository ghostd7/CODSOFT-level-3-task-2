import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('/api/projects')
      .then(res => {
        setProjects(res.data);
      })
      .catch(err => {
        console.error('Error fetching projects:', err);
      });
  }, []);

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            {project.name} - {project.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
