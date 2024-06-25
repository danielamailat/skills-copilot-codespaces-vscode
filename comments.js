// Create web server
const express = require('express');
const app = express();
app.use(express.json());

// Create comments array
const comments = [];

// Create comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.send(comment);
});

// Get comments
app.get('/comments', (req, res) => {
  res.send(comments);
});

// Get comments by id
app.get('/comments/:id', (req, res) => {
  const id = req.params.id;
  const comment = comments[id];
  res.send(comment);
});

// Update comment by id
app.put('/comments/:id', (req, res) => {
  const id = req.params.id;
  const comment = req.body;
  comments[id] = comment;
  res.send(comment);
});

// Delete comment by id
app.delete('/comments/:id', (req, res) => {
  const id = req.params.id;
  const comment = comments[id];
  comments.splice(id, 1);
  res.send(comment);
});

// Run web server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});