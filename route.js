const express = require("express");
const personController = require("./controller");

const router = express.Router();

router
  .post("/addperson", personController.addPerson)
  .get("/getperson", personController.getAllUsers);

module.exports = router;
