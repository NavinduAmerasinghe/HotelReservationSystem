const mongoose = require("mongoose");
const schema = mongoose.Schema;

//-----create schema to order----//
const reservationSchema = new schema({
  reservation: {
    type: Array,
    require: true,
    reservationId: {
      type: String,
      required: true,
    },
    reservationHotelName: {
      type: String,
      required: true,
    },

    noofReservations: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    hotelOwnerId: {
      type: String,
      required: true,
    },
  },
  userId: {
    type: String,
    require: true,
  },
  TotalAmount: {
    type: Number,
    require: true,
  },
  date: {
    type: Date,
  },
  status: {
    type: String,
    require: true,
  },
});

module.exports = reservation = mongoose.model("reservation", reservationSchema);
