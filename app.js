require("dotenv").config({ path: "./config/config.env" });
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const cors = require("cors")
app.use(cors())
//Local imports
const connectDB = require("./config/connectDB");
const server = require("./utils/startServer");

// // import route files
const users = require("./routes/users");
// const secrets = require("./routes/secrets");

//Connect to connectDB
// connectDB()

// //Web App API
// const secretsAPI = require("./api/routes/secrets")
// const usersAPI = require("./api/routes/users")

// //Mount API router
// app.use("/secrets/api", secretsAPI);
// app.use("users/api", usersAPI);

//Middleware and mount views router
app.set("view engine", "ejs");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + `/public`));

//Error handler
app.get("/", (req,res) => {
    res.render("home")
})
// // Routes
// // Secrets
app.use("/users", users);
// //Secrets
// app.use("/secrets", secrets);

//Start Server
server(app, process.env.PORT || 3000, () =>
  console.log(`Server started on port ${process.env.PORT || 3000}`)
);
