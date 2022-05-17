const router = require("express").Router();
const Reservation = require("../models/ReservationModel");

router.post("/add", (req, res) => {
  const newReservation = new Reservation(req.body);

  newReservation
    .save()
    .then((reservation) => res.json(reservation))
    .catch((err) => res.json("Error : " + err));
});

router.get("/", (req, res) => {
  Reservation.find()
    .then((reservations) => res.json(reservations))
    .catch((err) => res.status(400).json("Erro" + err));
});

router.get("/:id", (req, res) => {
  Reservation.findById((userId = req.params.id))
    .then((reservations) => {
      console.log(reservations);
      res.json(reservations);
    })
    .catch((err) => res.status(400).json("Error" + err));
});

router.post("/reservationStatus/:id", (req, res) => {
  Reservation.findByIdAndUpdate(req.params.id).then((reservation) => {
    reservation.status = "payment done";
    reservation.save().then(() => res.json("Order status updated"));
  });
});

module.exports = router;
