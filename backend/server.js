// const { app } = require("./app/app");
const express = require("express");
const connectDatabase = require("./helperFunctions/dbConnect");
const { Signup, Login } = require("./routes/auth");
const bp = require("body-parser");
const cors = require("cors");

let app = express();
app.use(cors());
app.use(bp.json());
connectDatabase();
app.post("/signup", (req, res) => {
  console.log("first");
  Signup(req, res);
});
// Login();
app.listen(3000, () => {
  console.log("Server Started");
});
//
