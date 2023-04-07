// Dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util');


// Initialize Express App
const app = express();
const PORT = 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET route for homepage
app.get('/', (req, res) => {
    res.send(path.join(__dirname, '/public/index.html'))
}) 

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET Route for retrieving all the tips
app.get('/api/tips', (req, res) => {
  console.info(`${req.method} request received for tips`);
  readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)));
});






app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);