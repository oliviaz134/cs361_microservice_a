const express = require('express');
const config = require('./knexfile');
const knex = require('knex')(config);
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Get a random song
app.get('/song', async (req, res, next) => {
  try {
    const songs = await knex('songs').select('*');
    const randomIndex =  Math.floor(Math.random() * songs.length);
    res.json(songs[randomIndex]);
  } catch (err) {
    console.error('Error fetching a random song:', err);
    res.status(500).json({error: 'Error fetching a random song.'});
  }
});

// Get all songs
app.get('/songs', async (req, res, next) => {
  try {
    const songs = await knex('songs').select('*');
    res.json(songs);
  } catch (err) {
    console.error('Error fetching songs:', err);
    res.status(500).json({error: 'Error fetching songs.'});
  }
});

// Add a song
app.post('/songs', async (req, res, next) => {
  try {
    if (req.body.title && req.body.artist) {
      const result = await knex('songs').insert({
        title: req.body.title,
        artist: req.body.artist
      }).returning('*');
      res.json(result[0]);
    } else {
      res.status(400).json({error: 'Error with request body. Please ensure there is a title and artist.'})
    }
  } catch (err) {
    console.error('Error adding a song:', err);
    res.status(500).json({error: 'Error adding a song.'});
  }
});

// Delete a song
app.delete('/songs', async (req, res, next) => {
  try {
    if (req.body.id) {
      const songToDelete = await knex('songs').where({ id: req.body.id }).del();
  
      if (songToDelete) {
        res.status(200).json({ message: `Song with id ${req.body.id} deleted successfully.` });
      } else {
        res.status(404).json({ message: `Song with id ${req.body.id} not found.` });
      }
    } else {
      res.status(400).json({ message: 'Error with request body. Please ensure there is an id.' });
    }
  } catch (err) {
    console.error('Error deleting song:', err);
    res.status(500).json({error: 'Error deleting song.'});
  }
});

app.use((req, res, next) => {
  res.status(404).json({error: 'Route not found.'})
})

app.listen(port, () => {
  console.log(`Random Songs Generator microservice running on port ${port}`);
});