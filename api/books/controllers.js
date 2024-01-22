const Books = require("../../models/Books");

const getAllBooks = async (req, res, next) => {
  try {
    const allBook = await Books.find();
    return res.status(201).json(allBook);
  } catch (error) {
    next(error);
  }
};

const getBookByID = async (req, res, next) => {
  try {
    return res.status(201).json(req.book);
  } catch (error) {
    next(error);
  }
};

const createBook = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = req.file.path;
    }
    const book = await Books.create(req.body);
    return res.status(201).json(book);
  } catch (error) {
    next(error);
  }
};
const updateBookById = async (req, res, next) => {
  try {
    await req.book.updateOne(req.body);
    return res.status(204).end();
  } catch (error) {
    console.log(error);
    next(error);
  }
};
const deleteBookById = async (req, res, next) => {
  try {
    await req.book.deleteOne();
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllBooks,
  getBookByID,
  createBook,
  updateBookById,
  deleteBookById,
};
