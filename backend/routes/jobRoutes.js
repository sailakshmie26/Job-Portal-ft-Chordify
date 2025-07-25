const express = require("express");
const router = express.Router();
const {
  createJob,
  getJobs,
  getJobById,
  updateJob,
  deleteJob,
} = require("../controllers/jobController");
const { protect, employerOnly } = require("../middleware/authMiddleware");
const { saveJob } = require("../controllers/jobController");

// ...
router.post("/:id/save", protect, saveJob);
router.post("/", protect, employerOnly, createJob);
router.get("/", getJobs);
router.get("/:id", getJobById);
router.put("/:id", protect, employerOnly, updateJob);
router.delete("/:id", protect, employerOnly, deleteJob);

module.exports = router;
