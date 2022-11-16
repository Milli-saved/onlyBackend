const express = require("express");
const personController = require("./controller");

const router = express.Router();

router.param("id", personController.params);

router
  .post("/addperson", personController.addPerson)
  .get("/getperson", personController.getAllUsers);

router
  .route("/:id")
  .delete(personController.deletePerson)
  .get(personController.getOnePerson)
  .put(personController.updatePerson);

module.exports = router;
