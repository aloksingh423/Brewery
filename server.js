const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const uri = 'mongodb+srv://user:Sg4wJfFkTpvmbgHj@brewerycluster.hlzpcya.mongodb.net/';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
const userRoutes = require('./routes/users');
const breweryRoutes = require('./routes/breweries');

app.use('/api/users', userRoutes);
app.use('/api/breweries', breweryRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});