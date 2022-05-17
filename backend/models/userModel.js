const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
  id: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  address: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  type: {
    type: String,
  },
});

const user = new mongoose.model("user", userSchema);
module.exports = user;
