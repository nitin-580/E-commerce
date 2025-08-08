import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' }); // go up one directory


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ID,
    pass: 'dtgz vzdb gwch obwz', // your App password
  },
});

(async () => {
  try {
    const info = await transporter.sendMail({
      from: '"Ecom Interior" <ecominterior@gmail.com>',
      to: 'nitindivya15@gmail.com',
      subject: 'Test Email from Nodemailer',
      text: 'Hello! This is a test email using Nodemailer.',
      html: '<b>Hello! This is a test email using Nodemailer.</b>',
    });

    console.log('✅ Message sent:', info.messageId);
  } catch (err) {
    console.error('❌ Failed to send email:', err);
  }
})();
