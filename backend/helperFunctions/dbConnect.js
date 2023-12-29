const mg = require("mongoose");

async function connectDatabase() {
  mg.connect("mongodb://localhost:27017/blogs")
    .then((res) => {
      console.log("Got It");
    })
    .catch((err) => {
      console.log("Error While Connecting");
    });
}

module.exports = connectDatabase;
