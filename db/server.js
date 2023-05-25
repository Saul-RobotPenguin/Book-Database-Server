const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const bookRouter = require("../routes/bookRoutes");
dotenv.config();
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_DB_CLUSTER, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bookRouter);
app.listen(3001, () => {
  console.log("Server is running");
});

const db = mongoose.connection;
module.exports = db;
