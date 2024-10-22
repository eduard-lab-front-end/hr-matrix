const { Schema, model } = require("mongoose");

const applicantSchema = new Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  linkedin: {
    type: String,
    trim: true
  },
  applied: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['Hired', 'Rejected', 'Interview Scheduled', 'Offer Extended', 'Pending Interview', 'Application Under Review'],
    default: 'Application Under Review'
  },
  skills: {
    type: [String], 
    required: true
  },
  educationInfo: {
    degree: {
      type: String,
      required: true
    },
    university: {
      type: String,
      required: true
    },
    graduationYear: {
      type: Number,
      required: true
    }
  },
  professionalExperience: [
    {
      jobTitle: {
        type: String,
        required: true
      },
      company: {
        type: String,
        required: true
      },
      years: {
        type: String,
        required: true
      },
      location: {
        type: String,
        required: true
      },
      responsibilities: {
        type: [String],
        required: true
      }
    }
  ]
});

const Applicant = model('Applicant', applicantSchema);

module.exports = Applicant;