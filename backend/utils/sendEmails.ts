import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' }); // go up one directory

export const sendEmail = async (to: string, subject: string, html: string) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_ID,
                pass: process.env.EMAIL_PASS, // Use environment variable for password
            },
        });

        const mailOptions = {
            from: `"Ecom Interior" <${process.env.EMAIL_ID}>`, // Use environment variable for sender email
            to,
            subject,
            html,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('✅ Message sent:', info.messageId);
    }
    catch (error) {
        console.error('❌ Failed to send email:', error);
        throw new Error('Email sending failed');
    }
}