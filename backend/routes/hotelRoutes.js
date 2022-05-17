const router = require("express").Router();
const Hotel = require("../models/hotelModel");

//@desc   GET all products from db
//@route  GET /api/products
//@access Public
router.get("/", (req, res) => {
  Hotel.find((err, docs) => {
    res.send(docs);
  });
});

//@desc   GET a product by id from db
//@route  GET /api/products/:id
//@access Public
router.get("/:id", (req, res) => {
  Hotel.findById(req.params.id)
    .then((hotel) => res.json(hotel))
    .catch((err) => res.json("Error : " + err));
});

//@desc   Add product to db
//@route  POST /api/products
//@access Public
router.post("/add", (req, res) => {
  const newhotel = new Hotel(req.body);
  newhotel.save().then((hotel) => {
    res.json(hotel);
  });
});

router.post("/:id", (req, res) => {
  Hotel.findByIdAndUpdate(req.params.id)
    .then((hotel) => {
      (req.body.hotelName ? (hotel.hotelName = req.body.hotelName) : null)(
        req.body.description
          ? (product.description = req.body.description)
          : null
      ),
        req.body.NumberOfRooms != 0
          ? (product.NumberOfRooms = Number(req.body.NumberOfRooms))
          : null,
        req.body.price != 0 ? (product.price = Number(req.body.price)) : null,
        req.body.date ? (product.date = Date(req.body.date)) : null,
        req.body.imageUrl ? (product.imageUrl = req.body.imageUrl) : null,
        req.body.hotelOwnerId
          ? (product.hotelOwnerId = req.body.hotelOwnerId)
          : null;
      hotel
        .save()
        .then((hotel) => res.json(hotel))
        .catch((err) => res.json(err));
    })
    .catch((err) => res.json(err));
});

router.delete("/:id", (req, res) => {
  Hotel.findByIdAndDelete(req.params.id)
    .then((hotel) => res.json(hotel.id))
    .catch((err) => res.status(400).json("Error : " + err));
});

module.exports = router;
