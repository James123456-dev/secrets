require("dotenv").config({ path: "./config.env" });
const mongoose = require("mongoose");

const connectDB = async () => {
  const connection = await mongoose.connect(
    "mongodb://localhost:27017/secretsDB",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  );
  console.log(connectDB.host);
};

module.exports = connectDB;
