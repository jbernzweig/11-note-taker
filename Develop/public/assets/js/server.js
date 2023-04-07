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
    res.send('Hello World!') // REVISIT
}) 







app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);