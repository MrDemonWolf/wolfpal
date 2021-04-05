const mongoose = require('mongoose');

const { Schema } = mongoose;

const YearlyGoalsSchema = new Schema(
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
    },
    completeBy: {
      type: Date,
      required: true
    },
    weekly: [
      { type: mongoose.Types.ObjectId, ref: 'WeeklyGoals', required: true }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('YearlyGoals', YearlyGoalsSchema);
