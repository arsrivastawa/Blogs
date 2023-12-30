const app = require("./app/app");
const dotenv = require("dotenv");
const connectDatabase = require("./helperFunctions/dbConnect");
const { Signup, Login } = require("./routes/auth");
const bp = require("body-parser");
const cors = require("cors");

dotenv.config({ path: "jwt/config.env" });
app.use(cors());
app.use(bp.json());

connectDatabase();

app.post("/signup", (req, res) => {
  Signup(req, res);
});
app.post("/login", (req, res) => {
  Login(req, res);
});

app.listen(process.env.PORT, () => {
  console.log("Server Started on ", process.env.PORT);
});
//
