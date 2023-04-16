const { students } = require("../data/studentData.js");

const getUser = async (req, res) => {
  res.status(200).json(students);
};

const getUserById = async (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((s) => s.id === id);
  if (student) {
    res.status(200).json(student);
  } else {
    res.status(404).send("Student not found");
  }
};

const createUser = async (req, res) => {
  const student = req.body;
  students.push(student);
  res.status(200).send("Student added");
};

const updateUser = async (req, res) => {
  const id = Number(req.params.id);
  const updatedStudent = req.body;
  const index = students.findIndex((s) => s.id === id);
  if (index !== -1) {
    students[index] = updatedStudent;
    res.status(200).send("Student updated");
  } else {
    res.status(404).send("Student not found");
  }
};

const deleteUser = async (req, res) => {
  const id = Number(req.params.id);
  const index = students.findIndex((s) => s.id === id);
  if (index !== -1) {
    students.splice(index, 1);
    res.status(200).send("Student deleted");
  } else {
    res.status(404).send("Student not found");
  }
};

module.exports = {
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
