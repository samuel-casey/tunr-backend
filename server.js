const express = require('express');
require('dotenv').config();

const app = express();

// ENV Variables
const PORT = process.env.PORT || 5000;

//CORS
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const morgan = require('morgan');

// Middleware
app.use(express.json());
app.use(morgan('dev')); //logging

// Routes and Routers
// Route for testing server is working
app.get('/', (req, res) => {
	res.json({
		hello: 'Hello World! Welcome to Tunr',
	});
});

//LISTENER
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
