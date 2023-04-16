const router = require("express").Router();
const myStudent = require("./studentRouter");

router.use("/student", myStudent);

module.exports = router;
