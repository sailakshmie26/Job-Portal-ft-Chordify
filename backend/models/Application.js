const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  job:        { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
  applicant:  { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status:     { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
  coverLetter:{ type: String },
  resume:     { type: String }, // Could be URL
  appliedAt:  { type: Date, default: Date.now }
});

module.exports = mongoose.model('Application', applicationSchema);
