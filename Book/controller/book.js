const Book = require('../models/book');

exports.addBook = async (bookData) => {
  bookData.created
  const book = Book.create(bookData);

  return "Book has been added"
}

exports.getAllBook = async () => {
  const book = await Book.findAll();
  return book
}

exports.getBookById = async (id) => {
  const book = await Book.findOne({ where: { id } });
  return book
}

exports.updateBookById = async (id, bookData) => {
  const book = await Book.update(bookData,
    {
      where: { id }
    })
  return "Book has been updated"
}


exports.deleteBookById = async (id) => {
  const book = await Book.destroy({ where: { id } });
  return "Book has been deleted"
}