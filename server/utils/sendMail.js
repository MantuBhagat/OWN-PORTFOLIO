import nodemon from "nodemon";

const sendMail = async (mailOptions) => {
  try {
    // Simulate sending email
    console.log("Email sent:", mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export default sendMail;
