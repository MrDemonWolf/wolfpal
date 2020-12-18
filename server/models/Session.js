const mongoose = require('mongoose');

const { Schema } = mongoose;

const SessionSchema = new Schema(
  {
    accessTokenHash: {
      type: String,
      required: true
    },
    refreshTokenHash: {
      type: String,
      required: true
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true
    },
    device: {
      os: {
        type: String,
        default: 'unknown'
      },
      browser: {
        type: String,
        default: 'unknown'
      },
      isDev: {
        type: Boolean,
        default: false
      }
    },
    isRevoked: {
      type: Boolean,
      default: false
    },
    expireAt: {
      type: Date,
      required: true,
      expires: -1
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Session', SessionSchema);
