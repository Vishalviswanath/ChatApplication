const mongoose = require('mongoose');

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('conected to the Mongodb....');
  } catch (error) {
    console.log(`Error connecting to database:${error}`);
  }
};

module.exports = connectToDb;
