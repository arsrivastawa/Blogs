const { hashIt, compareIt } = require("../PasswordHasher/Password");
const { signToken } = require("../jwt/tokenSigner");
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
    const token = signToken(uid);
    res.status(200).json({ state: "done", token });
  }
}
async function Login(req, res) {
  const { email, password } = req.body;
  const found = await AuthorModel.findOne({ email: email });
  if (found) {
    const truePassword = compareIt(password, found.pass);
    if (truePassword) {
      const token = signToken(found.userID);
      res.status(200).json({ state: "exist", token });
    } else {
      res.status(200).json({ state: "wrongPass" });
    }
  } else {
    res.status(200).json({ state: "doesNotExist" });
  }
  console.log(email, password);
}

module.exports = { Signup, Login };
