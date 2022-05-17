const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const { required } = require("joi");
require("dotenv").config();

//importing Routes
const userRoutes = required("./routes/userRoutes.js");
const hotelRoutes = required("./routes/hotelRoutes.js");
const paymentRoutes = required("./routes/paymentRoutes.js");
const reservationRoutes = required("./routes/reservationRoutes.js");

const port = process.env.PORT || 9000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected Successfully..");
  });

//routes middlware
app.use("/api/users", userRoutes); //user service interface
app.use("/api/hotels", hotelRoutes); //hotel service interface
app.use("/api/payment", paymentRoutes); //payment service Interface
app.use("/api/reservation", reservationRoutes); //reservation service Interface

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
