const express = require('express');
const mongoose = require('mongoose');
const trainRoutes = require('./src/route/trainRoute');
const preInsert = require('./src/model/script');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/trainBooking')
    .then(() => {
        console.log('Connected to MongoDB');
        preInsert();
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

// Middleware for parsing JSON
app.use(express.json());

// Use the train routes
app.use('/', trainRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
