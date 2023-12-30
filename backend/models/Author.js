const mg = require("mongoose");

const AuthorSchema = new mg.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    pass: {
      type: String,
      required: true,
    },
    userID: {
      type: String,
      required: true,
      unique: true,
    },
    hashSalt: {
      type: String,
      required: true,
    },
  },
  { collection: "authors" }
);

const AuthorModel = mg.model("Author", AuthorSchema);

module.exports = AuthorModel;
