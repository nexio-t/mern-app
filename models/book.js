const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, trim: true },
  image: { type: String, trim: true },
  link: { type: String, trim: true },
  date: { type: Date, default: Date.now },
  saved: {type: Boolean, default: false}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
