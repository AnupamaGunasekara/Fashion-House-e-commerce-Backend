const nodemailer = require("nodemailer");

const sendTrackingNumber = (name, email, trackingNumber) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL, // Your email
      pass: process.env.EMAIL_PASSWORD, // Your app password
    },
  });

  const mailOptions = {
    from: '"Fashion House" <support@fashionhouse.com>', // Replace with your email
    to: email,
    subject: "Your Order Has Been Placed!",
    html: `
      <p>Hello ${name},</p>
      <p>Thank you for placing your order with Fashion House.</p>
      <p>Your order has been successfully placed, and the tracking number is:</p>
      <h2>${trackingNumber}</h2>
      <p>You can use this tracking number to check the status of your order on our website.</p>
      <p>If you have any questions, feel free to contact us.</p>
      <p>Thank you for shopping with Fashion House!</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending tracking email:", error);
    } else {
      console.log("Tracking email sent:", info.response);
    }
  });
};

module.exports = sendTrackingNumber;
