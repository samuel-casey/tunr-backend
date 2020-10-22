// imports
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
// const Song = require("./models/songs")

// Server instance
const app = express();

// ENV Variables
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev')); //logging

// Routes and Routers
// Route for testing server is working
app.get('/', (req, res) => {
	res.json({
		hello: 'Hello World! Welcome to Tunr',
	});
});

app.get('/api/songs', (req, res) => {
    res.send(song);
});

app.get('/api/songs/:id', (req, res) => {
    res.send(Songs[req.params.index]);
});

app.post('/api/songs', (req, res)=>{
    console.log('post malone is posting on postman')
    res.send(' - data received');
  });

  app.delete('/api/songs/:id', (req, res) => {
    Songs.splice(req.params.index, 1)
     res.json({
        status: 200,
        msg: 'that song sucked huh?',
	 });
})


//LISTENER
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
