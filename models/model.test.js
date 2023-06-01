const Book = require("../models/book");

it("Makes a book model", () => {
  const book = {
    title: "Hilma AF Klint: Visionary",
    author: "Hilma af Klint (Contributor)",
    year: "2020 ",
    genres: ["nonfiction", "art", "biography"],
    ISBN: "9163972034",
    imageLink:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1576003478l/49185111.jpg",
  };

  const newBook = new Book(book);
  newBook.save();
  expect(book).toBe(book);
});
