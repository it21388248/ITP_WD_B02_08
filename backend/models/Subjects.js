const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  subjectName: {
    type: String,
    required: true
  },
  subjectID: {
    type: String,
    unique: true
  },
  subjectAmount: {
    type: Number,
    required: true
  },
  subjectTeacherID: {
    type: String,
    required: true
  },
  subjectTeacherName: {
    type: String,
    required: true
  }
});

subjectSchema.pre('save', async function (next) {
  try {
    const prefix = this.subjectName.substring(0, 3).toUpperCase();
    const count = await this.constructor.countDocuments({ subjectID: new RegExp(`^${prefix}`) });
    this.subjectID = `${prefix}${(count + 1).toString().padStart(3, '0')}`;
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = mongoose.model('Subject', subjectSchema);
