const mongoose = require('mongoose');
require('dotenv').config();

const mongodb = () => {
  try {
    mongoose.connect(process.env.MONGO_URI_ATLAS);
    console.log('Connected to MongoDB Atlas successfully.');
  } catch (error) {
    console.error(error);
  }
};
module.exports = mongodb;
