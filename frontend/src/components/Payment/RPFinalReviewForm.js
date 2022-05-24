import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";

const rows = [
  {
    id: "hotelName",
    label: "Hotel Name",
    minWidth: 100,
    align: "center",
    main: "#f44336",
  },
  {
    id: "noofRoomss",
    label: "No of Rooms",
    minWidth: 100,
    align: "center",
    main: "#f44336",
  },
  {
    id: "price",
    label: "Price",
    minWidth: 100,
    align: "center",
    main: "#f44336",
  },
  {
    id: "totalReservationPrice",
    label: "Total Reservation Price",
    minWidth: 170,
    align: "center",
    // format: (value) => value.toLocaleString('en-US'),
  },
];

const products = [
  { name: "", desc: "", price: "" },
  { name: "Delivery Type", desc: "", price: "Free" },
];
const addresses = ["No 386", "Kandy", "Road", "Nittabuwa", "SRILANKA"];
const payments = [
  { name: "Card Type", detail: "Credit Card" },
  { name: "Card Number", detail: "6527 1332 4286 2542" },
  { name: "Card Holder Name", detail: "Amerasinghe N.D.K" },
  { name: "CVV code", detail: "216" },
  { name: "Expiry Date", detail: "12/24" },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function POFinalReviewForm() {
  const classes = useStyles();

  const [poRequestManage, setpoRequestManage] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setfiltered] = useState([]);
  const [itemName, setitemName] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/poroutes/")
      .then((res) => res.json())
      .then((data) => {
        setpoRequestManage(data);
      });
  }, []);

  const sum = [];

  return (
    <React.Fragment>
      <div class="buttonn">
        <br></br>
      </div>
      <br />
      <Typography variant="h6" gutterBottom>
        <u>Reservation summary</u>
      </Typography>

      <div style={{ display: "none" }}>
        {poRequestManage.map((productPO) =>
          sum.push(productPO.itemPrice * productPO.noofRooms)
        )}
      </div>

      <List disablePadding>
        {poRequestManage.map((reservation) => (
          <ListItem className={classes.listItem} key={reservation.hotelName}>
            <ListItemText
              primary={reservation.hotelName}
              secondary={
                "Rs: " +
                reservation.price +
                " X " +
                reservation.noofRooms +
                " items"
              }
            />
            <Typography variant="body2">
              {"Rs: " + reservation.price * reservation.noofRooms}
            </Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            {"Rs: " + sum.reduce((a, b) => a + b, 0)}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            <u>Taxi Details</u>
          </Typography>
          <br />
          <Typography gutterBottom>Taxi Lanka</Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            <u>Payment Details</u>
          </Typography>
          <br />
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
