const nodemailer = require("nodemailer");

const sendMail = (name, email, emailToken) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL, 
      pass: process.env.EMAIL_PASSWORD, 
    },
  });

  const mailOptions = {
    from: '"Fashion House" <support@fashionhouse.com>',
    to: email,
    subject: "Please verify your email...",
    html: `
      <p>Hello ${name},</p>
      <p>Thank you for registering. Please verify your email address by clicking the link below:</p>
      <a href="${process.env.FRONTEND_BASE_URL}/verify-email?emailToken=${emailToken}">Verify Email</a>
      <p>If you did not request this, please ignore this email.</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};

module.exports = sendMail;
