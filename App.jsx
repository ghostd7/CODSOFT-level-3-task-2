import React from 'react';
import ProjectList from './components/ProjectList';
import NewProjectForm from './components/NewProjectForm';

function App() {
  const handleAddProject = (newProject) => {
  };

  return (
    <div>
      <h1>Project Management Tool</h1>
      <NewProjectForm onAddProject={handleAddProject} />
      <ProjectList />
    </div>
  );
}

export default App;
