const { Schema, model } = require("mongoose");
const mongoose = require("../db/connection");

const SongSchema = new Schema(
  {
    artist: String,
    song: String,
    song_length: Number,
 
  },
  
);


const Song = model("Song", songSchema);


module.exports = Song;