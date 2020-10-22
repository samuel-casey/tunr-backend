const Express = require('express')
const Router = express.Router();
const Mongoose = require('../db/connection');
const Songs = require('../models/songs')
const db = mongoose.connection



module.exports = Router