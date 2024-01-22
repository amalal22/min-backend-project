const { model, Schema } = require("mongoose");
const bookSchema = new Schema({
  Title: String,
  Author: String,
  Price: { type: Number, default: 5 },
  image: String,
});
module.exports = model("book", bookSchema);
