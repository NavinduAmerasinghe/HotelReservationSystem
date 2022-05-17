const router = require("express").Router();
const Taxi = require("../models/taxiModel");

//add Taxi
router.post("/", (req, res) => {
  const newTaxi = new Taxi(req.body);
  newTaxi.save().then(() => res.json("Taxi Added"));
});

//get Taxi
router.get("/", (req, res) => {
  Taxi.find((err, doc) => {
    res.json(doc);
  });
});

//update Taxi
router.post("/update/:id", (req, res) => {
  Taxi.findByIdAndUpdate(req.params.id).then((taxi) => {
    (taxi.user_id = req.body.user_id),
      (taxi.price = Number(req.body.price)),
      (taxi.isCancel = req.body.isCancel),
      (taxi.reservation_id = req.body.reservation_id),
      (taxi.address = req.body.address),
      (taxi.taxiType = req.body.taxiType),
      (taxi.taxiCharges = req.body.taxiCharges);

    delivery.save().then(() => res.json("Taxi Updated!"));
  });
});

//cancel Taxi
router.post("/cancel/:id", (req, res) => {
  Taxi.findByIdAndUpdate(req.params.id).then((taxi) => {
    taxi.isCancel = req.body.isCancel;
    taxi.save().then(() => res.json("Taxi Canceled!"));
  });
});

//get Taxi using an id
router.get("/:id", (req, res) => {
  Taxi.findById(req.params.id)
    .then((taxi) => res.json(taxi))
    .catch((err) => res.status(400).json("Error:" + err));
});

// //delete by id
router.delete("/:id", (req, res) => {
  Taxi.findByIdAndDelete(req.params.id)
    .then((taxi) =>
      res.json("Taxi with the id " + taxi.id + " Successfully Deleted !")
    )
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
