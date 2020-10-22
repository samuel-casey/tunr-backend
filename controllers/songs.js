const express = require('express');
const router = express.Router();
const mongoose = require('../db/connection');
const Songs = require('../models/songs');
const db = mongoose.connection;

//route to index all songs - Get
router.get('/api/songs', async (req, res) => {
	res.json(await Songs.find({}));
});

//route to create a song - Post
router.post('/api/songs', async (req, res) => {
	res.json(await Songs.create(req.body));
});

//route to find a single song - Get
router.get('/api/songs/:id', async (req, res) => {
	res.json(await Songs.findById(req.params.id));
});

//route to update a song - Put
router.put('/api/songs/:id', async (req, res) => {
	res.json(
		await Songs.findByIdAndUpdate(req.params.id, req.body, { new: true })
	);
});

//route to delete a song - Delete
router.delete('api/songs/:id', async (req, res) => {
	res.json(await Songs.findByIdAndRemove(req.params.id));
});

module.exports = router;
