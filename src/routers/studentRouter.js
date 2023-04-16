const router = require("express").Router();

const { getUser, getUserById, createUser, updateUser, deleteUser } = require("../Controller/studentController");

router.get("/get-student", getUser);
router.get("/get-studentById", getUserById);
router.post("/create-student", createUser);
router.put("/update-student", updateUser);
router.delete("/delete-student", deleteUser);

module.exports = router;
