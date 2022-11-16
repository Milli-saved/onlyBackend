const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

const personRoute = require("./route")


mongoose
  .connect("mongodb://127.0.0.1:27017/semainrlearning")
  .then(() => {
    console.log("connected to the database");
  })
  .catch((err) => console.log("error", err));

app.use("/person",personRoute)

app.listen(4000, () => {
  console.log("server is running on port 4000");
});
