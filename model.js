const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  age: {
    type: Number,
  },
});
const Person = mongoose.model("person", schema);
module.exports = Person;
