const listBooks = async (req, res) => {
  const { Book } = req.db;
  const books = await Book.list();
  res.send(books);
};

module.exports = listBooks;
