const mongoose = require("mongoose");


const connectDB = async () => {
  try {
    const conn = mongoose.connect(
      "mongodb+srv://nadim12:nadim1234@smartagro.z7pxy.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    );

    console.log("MongoDB Connected");
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
}

module.exports = connectDB;
