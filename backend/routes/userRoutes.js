const express = require("express");
const { registerUser, authUser } = require("../controllers/userControllers");

const router = express.Router();

// API CALL http://localhost:5000/api/users
router.post("/", registerUser);

// API CALL http://localhost:5000/api/users/login
router.post("/login", authUser);

module.exports = router;
