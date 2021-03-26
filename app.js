const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const bcrypt = require('bcrypt');
const saltRounds = 10;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("Public"));

//Database configuration
mongoose.connect("mongodb://localhost:27017/secretsDB", {useNewUrlParser: true, useUnifiedTopology: true});
//Schemas
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});
const secretSchema = new mongoose.Schema({
    secret: String, 
    author: String
});
//Models
const Secret = new mongoose.model("secret", secretSchema)
const User = new mongoose.model("user", userSchema)

//Testing Data
// const sercret1 = new Secret({
//     secret: "This is my secret",
//     author: "someoneyoumightknow"
// });
// sercret1.save();
// const user1 = new User({
//     email:"james@123.com",
//     password: "password"
// });
// user1.save();

// Home Route
app.get("/",(req, res) => {
   res.render("home") 
});
// Login Route
app.route("/login")
.get((req, res)=> {
    res.render("login")
})
.post((req, res) => {
    User.findOne({email: req.body.email}, (err, user)=> {
        if(!err){
         bcrypt.compare(req.body.password, user.password, function(err, result) {
         if(result) {
             Secret.find({}, (err, secrets) => {
            if (!err){
            if(secrets.length !== 0)
            res.redirect("/themeanandmanysecrets")
             else alert("There was are no secrets here")
            }
            else{
            console.log(err);
            alert("There was an error adding your secret")
            res.redirect("/secret")
        }
        });
         }
            else alert("Incorrect email/ password")
        });
        }
        else{
            alert("Incorrect email/ password")
        }
    });
});
app.route("/newsecret")
.get((req, res) => {
    res.render("newsecret")
})
.post((req,res) => {
   newSecret = new Secret({
       author: req.body.author,
       secret: req.body.secret
   })
   newSecret.save();
   res.redirect("/themeanandmanysecrets")
});
//Register Rout
app.route("/register")
.get((req, res)=> {
    res.render("register")
})
.post((req, res)=>{
bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: hash
    });
    newUser.save();
    res.redirect("/themeanandmanysecrets");
}); 
});
app.get("/themeanandmanysecrets", (req, res) => {
     Secret.find({}, (err, secrets) => {
        if (!err){
            if(secrets.length !== 0)
            res.render('secrets', {secrets: secrets})
            else alert("There was an error")
        }
        else{
            console.log(err);
            alert("There was an error")
            res.redirect("/home")
        }
        });
})
//Start Server
const port = 3000;
app.listen(process.env.PORT || 3000,()=> {
    console.log("Server is running on port 3000 locally")
});