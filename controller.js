const Person = require("./model");

exports.params = async (req, res, next, reqId) => {
  const person = await Person.findById(reqId);
  if (!person) {
    next(new Error("no one found"));
  } else {
    req.person = person;
    next();
  }
};

exports.addPerson = async (req, res, next) => {
  try {
    const person = await Person.create(req.body);
    res.status(200).json({
      status: "success",
      person: person,
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      error: err,
    });
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    let person = await Person.find({});
    res.status(200).json({
      status: "success",
      person,
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      error: err,
    });
  }
};

exports.getOnePerson = async (req, res, next) => {
  try {
    let person = req.person;
    res.status(200).json({
      status: "successful",
      person,
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      error: err,
    });
  }
};

exports.deletePerson = async (req, res, next) => {
  try {
    req.person.remove().then(() => {
      res.status(200).json({
        status: "successful",
        deleted: "true",
      });
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      error: err,
    });
  }
};

exports.updatePerson = async (req, res, next) => {
  try {
    let person = req.person;
    let updatedPerson = await Person.updateOne(
      { _id: person._id },
      {
        $set: req.body,
      }
    );
    res.status(200).json({
      status: "successful",
      person: updatedPerson,
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      error: err,
    });
  }
};
