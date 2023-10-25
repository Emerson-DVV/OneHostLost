const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI_ATLAS);
      console.log('Connected to MongoDB Atlas');
    } catch (error) {
      console.error(error);
    }
  };

module.exports = connectDB;
