// Dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');

// Initialize Express App
const app = express();
const PORT = 3001;

// GET routing 
// app is an instance of express
app.get('/', (req, res) => {
    res.send('Hello World!') // REVISIT
}) 

app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})