const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  applyToJob,
  getApplications,
} = require("../controllers/applicationController");

router.post("/:jobId/apply", protect, applyToJob);
router.get("/", protect, getApplications);

module.exports = router;
