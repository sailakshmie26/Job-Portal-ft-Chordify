const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title:        { type: String, required: true },
  description:  { type: String },
  company:      { type: String },
  location:     { type: String },
  salary:       { type: String },
  requirements: { type: String },
  employer:     { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  applications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Application' }],
  likes:        [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });

module.exports = mongoose.model('Job', jobSchema);
