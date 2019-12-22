const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  videoId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, trim: true },
  thumbnail: { type: String, trim: true },
  published: { type: String, trim: true },
  channel: { type: String, trim: true },
  saved: {type: Boolean, default: false}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
