const Application = require("../models/Application");
const Job = require("../models/Job");

// POST /api/applications/:jobId/apply
exports.applyToJob = async (req, res) => {
  const { coverLetter, resume } = req.body;
  const io = req.app.get("io");
   if (io) {
  io.emit("newApplication", {
    jobId,
    applicantName: req.user.username,
  });
   }
  const jobId = req.params.jobId;

  try {
    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ message: "Job not found" });

    const alreadyApplied = await Application.findOne({
      job: jobId,
      applicant: req.user._id,
    });

    if (alreadyApplied) {
      return res.status(400).json({ message: "You have already applied to this job" });
    }

    const application = await Application.create({
      job: jobId,
      applicant: req.user._id,
      coverLetter,
      resume,
    });

    // Add application reference to job
    job.applications.push(application._id);
    await job.save();

    // Real-time update via Socket.IO
    const io = req.app.get("io");
    if (io) {
      io.emit("newApplication", {
        jobId,
        applicantName: req.user.username,
      });
    }

    res.status(201).json(application);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// GET /api/applications
exports.getApplications = async (req, res) => {
  try {
    const applications = await Application.find({ applicant: req.user._id })
      .populate("job", "title company")
      .sort({ appliedAt: -1 });

    res.json(applications);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
