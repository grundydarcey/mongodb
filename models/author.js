const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  name: String,
  age: Number,
  books: [BookSchema]
});

const BookSchema = new Schema({
  title: String,
  pages: Number
});

const MarioChar = mongoose.model('mariochar', AuthorSchema);

module.exports = MarioChar;