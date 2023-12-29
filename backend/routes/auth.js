const { app } = require("../app/app");

function Signup(req, res) {
  const { uname, email, cnfPassword } = req.body;
  console.log(uname, email, cnfPassword);
  res.status(200).json({ success: "done" });
}
function Login(req, res) {
  const { email, password } = req.body;
  console.log(email, password);
  res.status(200).json({ success: "done" });
}

module.exports = { Signup, Login };
