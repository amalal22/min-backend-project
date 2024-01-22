const express = require("express");
const {
  getAllBooks,
  getBookByID,
  createBook,
  updateBookById,
  deleteBookById,
} = require("./controllers");
const Books = require("../../models/Books");
const upload = require("../../middlewares/multer");
const router = express.Router();

router.param("_id", async (req, res, next, _id) => {
  const book = await Books.findById(_id);
  if (!book)
    return res
      .status(404)
      .json({ message: "Book with this id is not found! " });
  req.book = book;
  next();
});

router.get("/", getAllBooks);
router.get("/:_id", getBookByID);
router.post("/", upload.single("bookImage"), createBook);
router.put("/:_id", updateBookById);
router.delete("/:_id", deleteBookById);

module.exports = router;
