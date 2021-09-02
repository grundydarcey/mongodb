const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema and model

const marioCharSchema = new Schema({
  name: String,
  weight: Number
});

const MarioChar = mongoose.model('mariochar', marioCharSchema);

module.exports = MarioChar;