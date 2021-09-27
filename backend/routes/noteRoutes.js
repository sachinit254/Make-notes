const express = require("express");
const {
  getNotes,
  getNoteById,
  createNote,
  deleteNote,
  updateNote,
} = require("../controllers/noteControllers.js");
const { protect } = require("../middleware/authMiddleware.js");

const router = express.Router();

router.get("/", protect, getNotes);
router.get("/:id", getNoteById);
router.post("/create", protect, createNote);
router.put("/:id", protect, updateNote);
router.delete("/:id", protect, deleteNote);

module.exports = router;
