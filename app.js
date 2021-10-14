require("dotenv").config({ path: "./config/config.env" });
const colors = require("colors");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());

//Local imports
const connectDB = require("./config/connectDB");
const server = require("./utils/startServer");
const secretsAPI = require("./api/routes/secrets");

//Routes
const users = require("./routes/users");

//ConnectDB
connectDB();

//Middleware and mount views router
app.set("view engine", "ejs");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + `/public`));

//Secretes api
app.use("/api/secrets", secretsAPI);

//Home route
app.get("/", (req, res) => {
  res.render("home");
});
app.use("/users", users);

//Start Server
server(app, process.env.PORT || 3000, () =>
  console.log(`Server started on port ${process.env.PORT || 3000}`.yellow)
);
