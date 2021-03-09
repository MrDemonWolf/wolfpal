const nodemailer = require('nodemailer');

module.exports = nodemailer.createTransport({
  port: 25,

  secure: false,
  tls: {
    rejectUnauthorized: false
  }
});
