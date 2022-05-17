const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taxiSchema = new Schema(
  {
    user_id: { type: String, required: true },
    price: { type: Number, required: true },
    isCancel: { type: Boolean, required: true },
    address: { type: String, required: false },
    reservation_id: { type: String, required: false },
    taxiType: { type: String, required: false },
    taxiCharges: { type: Number, required: false },
  },
  {
    timestamps: true,
  }
);

const Taxi = mongoose.model("Taxi", taxiSchema);

module.exports = Taxi;
