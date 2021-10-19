const mongoose = require("mongoose");

// const connectDB = async () => {
//   const connection = await mongoose.connect(
//     `mongodb://localhost:27017/secretsDB`,
//     {
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//       useCreateIndex: true,
//     }
//   );
//   console.log(`Connected ${connection.connection.host}`.blue);
// };
const connectDB = async () => {
  const connection = await mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  });
  console.log(`Connected ${connection.connection.host}`.blue);
};

module.exports = connectDB;
