const Job = require("../models/Job");

// POST /api/jobs (Employer only)
exports.createJob = async (req, res) => {
  try {
    const job = new Job({
      ...req.body,
      employer: req.user._id,
    });
    const savedJob = await job.save();
    res.status(201).json(savedJob);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// GET /api/jobs (All users)
exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate("employer", "username company").sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /api/jobs/:id (All users)
exports.getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).populate("employer", "username company");
    if (!job) return res.status(404).json({ message: "Job not found" });
    res.json(job);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PUT /api/jobs/:id (Employer only)
exports.updateJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });

    if (job.employer.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    Object.assign(job, req.body);
    const updatedJob = await job.save();
    res.json(updatedJob);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE /api/jobs/:id (Employer only)
exports.deleteJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });

    if (job.employer.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await job.remove();
    res.json({ message: "Job deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /api/jobs/:id/save
exports.saveJob = async (req, res) => {
  const jobId = req.params.id;
  const userId = req.user._id;

  try {
    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ message: "Job not found" });

    // Toggle like
    const isSaved = job.likes.includes(userId);

    if (isSaved) {
      // Remove like
      job.likes = job.likes.filter((id) => id.toString() !== userId.toString());
    } else {
      // Add like
      job.likes.push(userId);
    }

    await job.save();
    res.json({ message: isSaved ? "Job unsaved" : "Job saved" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
