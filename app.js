const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

// Get a random song 
app.get('/song', (req, res) => {
  res.json('Getting a random song');
});

// Add a song
app.post('/add-song', (req, res) => {
  res.json('Adding a song');
});

// Delete a song
app.delete('/delete-song', (req, res) => {
  res.json('Deleting a song');
})

app.listen(port, () => {
  console.log(`Random Songs Generator microservice running on port ${port}`);
});