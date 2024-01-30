// import the pets array from data.js
const pets = require('./data');

// init express app
const express = require('express');
const app = express();

const PORT = 8080;

// serve static files from public directory
app.use(express.static('public'));

// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});

// get all pets from the database
app.get('/api/v1/pets', (req, res) => {
    res.json(pets);
});

// get pet by owner with query string
app.get('/api/v1/pets/owner', (req, res) => {
    const owner = req.query.owner;
    const filteredPets = pets.filter(pet => pet.owner.toLowerCase() === owner.toLowerCase());
    if (filteredPets.length > 0) {
        res.json(filteredPets);
    } else {
        res.status(404).send('No pets found for this owner');
    }
});

// get pet by name
app.get('/api/v1/pets/:name', (req, res) => {
    const name = req.params.name;
    const pet = pets.find(pet => pet.name.toLowerCase() === name.toLowerCase());
    if (pet) {
        res.json(pet);
    } else {
        res.status(404).send('Pet not found');
    }
});

// start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
