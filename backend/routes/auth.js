const compareIt = require("../PasswordHasher/Password");
const hashIt = require("../PasswordHasher/Password");
const AuthorModel = require("../models/Author");

async function Signup(req, res) {
  const { uname, email, uid, cnfPassword } = req.body;
  const found = await AuthorModel.findOne({ userID: uid });
  if (found) {
    res.status(200).json({ state: "takken" });
  } else {
    const [salt, hashedpassword] = hashIt(cnfPassword);
    AuthorModel.insertMany({
      name: uname,
      email: email,
      pass: hashedpassword,
      userID: uid,
      hashSalt: salt,
    });
    res.status(200).json({ state: "done" });
  }
}
async function Login(req, res) {
  const { email, password } = req.body;
  const found = await AuthorModel.findOne({ email: email });
  if (found) {
    const truePassword = compareIt(password, found.pass);
    if (truePassword) {
      res.status(200).json({ state: "exist" });
    } else {
      res.status(200).json({ state: "wrongPass" });
    }
  } else {
    res.status(200).json({ state: "doesNotExist" });
  }
  console.log(email, password);
}

module.exports = { Signup, Login };
