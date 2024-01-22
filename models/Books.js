const { model, Schema } = require("mongoose");
const bookSchema = new Schema({
  Title: String,
  Author: String,
  Price: { type: Number, default: 5 },
  image: { type: String, default: "assets/pexels-photo-6273274.jpeg" },
});
module.exports = model("book", bookSchema);
