import React, { useState } from 'react';
import axios from 'axios';

const NewProjectForm = ({ onAddProject }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/projects', { name, description })
      .then(res => {
        onAddProject(res.data);
        setName('');
        setDescription('');
      })
      .catch(err => {
        console.error('Error creating project:', err);
      });
  };

  return (
    <div>
      <h2>Create New Project</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default NewProjectForm;
