const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

let projects = [];

app.use(bodyParser.json());

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.post('/api/projects', (req, res) => {
  const { name, description } = req.body;
  const newProject = { id: projects.length + 1, name, description, tasks: [] };
  projects.push(newProject);
  res.status(201).json(newProject);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
