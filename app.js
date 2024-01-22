const express = require("express");
const app = express();
const connectDB = require("./database");
const bookRouter = require("./api/books/routes");
const morgan = require("morgan");
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/books", bookRouter);
app.use((req, res, next) => {
  return res.status(404).json({ message: "Path not found! " });
});

app.use((err, req, res, next) => {
  return res.status(err.status || 500).json(err.message || "Server error!!");
});

const PORT = 8002;
connectDB();
app.listen(PORT, () => {
  console.log("started");
});
