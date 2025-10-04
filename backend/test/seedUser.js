// backend/test/seedUser.js
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
require('dotenv').config(); // load MONGO_URI from .env

// Correct path to your User model
const User = require('../models/userModel'); 

// MongoDB connection string from .env
const MONGO_URI = process.env.MONGO_URI || 'your_connection_string_here';

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.error('MongoDB connection error:', err));

// Path to JSON file inside test folder
const filePath = path.join(__dirname, 'user.json'); 
const usersData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

// Function to seed users
const seedUsers = async () => {
  try {
    await User.deleteMany(); // optional: clears existing users
    const createdUsers = await User.insertMany(usersData);
    console.log(`${createdUsers.length} users inserted successfully.`);
    mongoose.disconnect();
  } catch (err) {
    console.error('Error inserting users:', err);
    mongoose.disconnect();
  }
};

// Run seeder
seedUsers();
