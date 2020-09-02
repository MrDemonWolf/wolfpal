const mongoose = require('mongoose');

const { Schema } = mongoose;

const WeeklyGoalsSchema = new Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true
    },
    title: {
      type: String,
      required: true
    },
    isCompleted: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('WeeklyGoals', WeeklyGoalsSchema);
