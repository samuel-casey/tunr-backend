const { Schema, model } = require("mongoose");
const mongoose = require("../db/connection");

const songSchema = new Schema(
  {
    artist: String,
    title: String,
    time: String,
 
  },
  
);


const Song = model("Song", songSchema);


module.exports = Song;