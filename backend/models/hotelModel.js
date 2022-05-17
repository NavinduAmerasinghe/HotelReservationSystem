const mongoose = require("mongoose");
const schema = monoose.Schema;

const hotelSchema = new schema({
  hotelName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  NumberOfRooms: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
  imageUrl: {
    type: String,
  },
  hotelOwnerId: {
    type: String,
    required: true,
  },
});

const Hotels = mongoose.model("hotels", hotelSchema);
module.exports = Hotels;
