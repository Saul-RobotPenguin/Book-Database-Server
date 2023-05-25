const express = require("express");
const Book = require("../models/book");
const app = express();
// Get all Books
app.get("/books", async (req, res) => {
  const books = await Book.find({});

  try {
    res.send(books);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Get single Book
app.get("/book/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    res.send(book);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Create Book
app.post("/books", async (req, res) => {
  try {
    const book = await new Book(req.body);
    await book.save();
    res.send(book);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Edit Book
app.put("/book/:id", async (req, res) => {
  try {
    const { id } = req.params;
    Book.findByIdAndUpdate(id, req.body, { new: true }, function (err, book) {
      if (err) {
        res.status(500).send(err);
      }
      if (!book) {
        res.status(500).send("Book Not Found");
      }
      return res.status(200).json(book);
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//Delete Book
app.delete("/book/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Book.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Book deleted");
    }
    throw new Error("Book not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = app;
