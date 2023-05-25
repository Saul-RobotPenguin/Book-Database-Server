const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema(
  {
    title: String,
    author: String,
    year: String,
    genres: [String],
    ISBN: String,
    imageLink: String,
  },
  { timestamps: true }
);

// const Book = mongoose.model("Book", BookSchema);

module.exports = mongoose.model("Book", BookSchema);
