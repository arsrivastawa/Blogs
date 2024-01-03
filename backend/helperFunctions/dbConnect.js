const mg = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "config/config.env" });
async function connectDatabase() {
  mg.connect(process.env.CONN_STR)
    .then((res) => {
      console.log("Got It");
    })
    .catch((err) => {
      console.log("Error While Connecting");
    });
}

module.exports = connectDatabase;
