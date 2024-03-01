const app = require("./app/app");
const dotenv = require("dotenv");
const express = require("express");
const connectDatabase = require("./helperFunctions/dbConnect");
const { Signup, Login } = require("./routes/auth");
const bp = require("body-parser");
const cors = require("cors");
const { verifyToken } = require("./jwt/tokenVerifier");
const { decode } = require("jsonwebtoken");
const AuthorModel = require("./models/Author");
const path = require("path");
const multer = require("multer");
var cloudinary = require("cloudinary");

dotenv.config({ path: "config/config.env" });
app.use(cors());
app.use(bp.json());
app.use(express.static("public"));
connectDatabase();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, "devBlogs-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.post("/signup", (req, res) => {
  Signup(req, res);
});

app.post("/user", async (req, res) => {
  const { token } = req.body;
  const decoded = verifyToken(token);
  const found = await AuthorModel.findOne({ userID: decoded.userID });
  if (found) {
    res.status(200).json({
      username: found.name,
      useremail: found.email,
      uid: found.userID,
    });
  }
});
cloudinary.v2.config({
  cloud_name: "dz5jfto1v",
  api_key: "346253492463144",
  api_secret: "a0NNr87vio9XKDjfZYQrXrvYnxI",
  secure: true,
});
app.post("/createPost", upload.single("fileInput"), async (req, res) => {
  // const result = await cloudinary.v2.uploader.upload(
  //   "uploads/fileInput-1705837166795.jpg",
  //   {
  //     overwrite: false,
  //     use_filename: true,
  //     folder: "devBlogs",
  //   }
  // );
  // const resu = await cloudinary.v2.api.resource(
  //   "devBlogs/fileInput-1705837166795_yociyx",
  //   { colors: true }
  // );
  console.log(req.file, "\n", Date.now(), "\n", result, "\n", resu);
  res.json({ mssg: "success" });
});
app.post("/login", (req, res) => {
  console.log(req.headers);
  Login(req, res);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server Started on ", process.env.PORT);
});
//
