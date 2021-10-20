require("dotenv").config({ path: "./api/config/config.env" });
const colors = require("colors");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const error = require("./api/middleware/error")
// const cors = require("cors")
//Local imports
const connectDB = require("./api/config/connectDB");
const server = require("./utils/startServer");

//Routes
const secrets = require("./api/routes/secrets");
const navigation = require("./routes/navigation")

//ConnectDB
connectDB();

//Middleware and mount views router
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/public`))
// app.use(bodyParser(urlencoded({extended: true})))
// app.use(cors)

//Secretes api
app.use("/api/secrets", secrets);

//Pages / Navigation
app.use("/", navigation)

//Custom error handler
app.use(error);

//Start Server
server(app, process.env.PORT, () =>
  console.log(`Server started on port ${process.env.PORT}`.yellow)
);
