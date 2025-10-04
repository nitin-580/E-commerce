// seedComplaints.ts
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import Complaint from '../models/complaint'; // Adjust path if needed

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'your_connection_string_here';

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

const filePath = path.join(__dirname, 'complaint.json');
const complaintsData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

const seedComplaints = async () => {
  try {
    await Complaint.deleteMany();
    const createdComplaints = await Complaint.insertMany(complaintsData);
    console.log(`${createdComplaints.length} complaints inserted successfully.`);
    mongoose.disconnect();
  } catch (err) {
    console.error('Error inserting complaints:', err);
    mongoose.disconnect();
  }
};

seedComplaints();
