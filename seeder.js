require("dotenv").config({path: "./config/config.env"})
const fs = require("fs");
const color = require("colors")
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose")
const Secret = require("./api/models/Secret");
const User = require("./api/models/User");

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  });

const secrets = JSON.parse(fs.readFileSync(`${__dirname}/data/secrets.json`))
const users = JSON.parse(fs.readFileSync(`${__dirname}/data/users.json`))

//import data
const importData = async () =>{
  try  {
    await Secret.insertMany(secrets);
    console.log("Data imported successfully".green.inverse)
    }catch(error){
        console.log(error)
    }
}
//delete data
const deleteData = async () =>{
  try  {
    await Secret.deleteMany(secrets);
    console.log("Data deleted successfully".red.inverse)
    }catch(error){
        console.log(error)
    }
}

if(process.argv[2] == "-i"){
    importData();
}else if(process.argv[2] = "-d"){
    deleteData();
}