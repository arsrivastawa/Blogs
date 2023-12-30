const mg = require("mongoose");

const PostSchema = new mg.Schema({
  title: {
    type: String,
    required: true,
  },
  breif: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  timeStamp: {
    type: Date,
    required: true,
  },
});
