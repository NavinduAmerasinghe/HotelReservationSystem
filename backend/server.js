const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
// const { required } = require("joi");
require("dotenv").config();

//importing Routes
const userRoutes = require("./routes/userRoutes.js");
const hotelRoutes = require("./routes/hotelRoutes.js");
const paymentRoutes = require("./routes/paymentRoutes.js");
const reservationRoutes = require("./routes/reservationRoutes.js");
const taxiRoutes = require("./routes/taxiRoutes");

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
// app.use("/api/users", userRoutes); //user service interface
app.use("/api/hotels", hotelRoutes); //hotel service interface
app.use("/api/payments", paymentRoutes); //payment service Interface
app.use("/api/reservations", reservationRoutes); //reservation service Interface
app.use("/api/taxiss", taxiRoutes); //taxi service Interface
app.use("/api/auth", require("./routes/route"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
