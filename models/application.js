const mongoose = require('mongoose');

const applicationSchema = mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  positionTitle: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  jobRequirements: {
    type: String,
    required: false,
  },
  notes: {
    type: String,
    required: false,
  },
  datePosted: Date,
  createdBy: String,
})

module.exports = mongoose.model('Application', applicationSchema);
