const express = require('express');
const router = express.Router();
const mongoose = require('../db/connection');
const Songs = require('../models/songs');
const db = mongoose.connection;

module.exports = router;
