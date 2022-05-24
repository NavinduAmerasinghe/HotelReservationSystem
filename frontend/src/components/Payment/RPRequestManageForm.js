import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Link } from "react-router-dom";
import SoloAlert from "soloalert";
import axios from "axios";
import { MDBCol } from "mdbreact";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [createData("Frozen yoghurt", "", "", "", "")];
const columns = [
  {
    id: "hotelName",
    label: "Hotel Name",
    minWidth: 100,
    align: "center",
    main: "#f44336",
  },
  {
    id: "noofRooms",
    label: "No ofRooms",
    minWidth: 100,
    align: "center",
    main: "#f44336",
  },
  {
    id: "price",
    label: "Price per Room",
    minWidth: 100,
    align: "center",
    main: "#f44336",
  },
  {
    id: "date",
    label: "Date",
    minWidth: 170,
    align: "center",
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: "totalReservationPrice",
    label: "Total Reservation Price",
    minWidth: 170,
    align: "center",
    // format: (value) => value.toLocaleString('en-US'),
  },
];

export default function CustomizedTables() {
  const [poRequestManage, setpoRequestManage] = useState([]);

  const [filtered, setfiltered] = useState([]);
  const [itemName, setitemName] = useState([]);

  //This useEffect function used to get all poRequestManage's data
  useEffect(() => {
    fetch("http://localhost:9000/poroutes/")
      .then((res) => res.json())
      .then((data) => {
        setpoRequestManage(data);
      });
  }, []);

  async function delet(id) {
    SoloAlert.confirm({
      title: "Confirm Delete",
      body: "Are you sure",
      theme: "dark",
      useTransparency: true,
      onOk: async function () {
        try {
          const result = await (
            await axios.delete(`http://localhost:9000/poroutes/deletePO/${id}`)
          ).status;
          console.log(result);

          if (result === 200) {
            SoloAlert.alert({
              title: "Welcome!",
              body: "Deletion is successful",
              icon: "success",
              theme: "dark",
              useTransparency: true,
              onOk: function () {
                window.location = "";
              },
            });
          }
        } catch (err) {
          SoloAlert.alert({
            title: "Oops!",
            body: "Something went wrong",
            icon: "error",
            theme: "dark",
            useTransparency: true,
            onOk: function () {},
          });
        }
      },
      onCancel: function () {
        SoloAlert.alert({
          title: "Oops!",
          body: "You canceled delete request",
          icon: "warning",
          theme: "dark",
          useTransparency: true,
          onOk: function () {},
        });
      },
    });
  }

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <TableContainer component={Paper}>
      <MDBCol md="6">
        <input
          class="form-control"
          id="myInput"
          type="text"
          placeholder="Search.."
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </MDBCol>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Hotel Name</StyledTableCell>
            <StyledTableCell align="right">No of Rooms</StyledTableCell>
            <StyledTableCell align="right">Price of a Room</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="right">
              Total Reservation Price
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {poRequestManage
            .filter((value) => {
              if (searchTerm === "") {
                return value;
                console.log(value.itemName);
                console.log("name");
              } else if (
                value.itemName.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return value;
              }
            })
            .map((pof, i) => (
              <StyledTableRow key={pof._id}>
                {/* <StyledTableCell component="th" scope="row">
                {pof._id}
              </StyledTableCell> */}
                <StyledTableCell align="right">{pof.hoteName}</StyledTableCell>
                <StyledTableCell align="right">
                  {pof.noofRoomsPrice}
                </StyledTableCell>
                <StyledTableCell align="right">{pof.price}</StyledTableCell>
                <StyledTableCell align="right">{pof.date}</StyledTableCell>
                <StyledTableCell align="right">
                  {pof.noofRoomsPrice * pof.price}
                </StyledTableCell>
                <StyledTableCell>
                  <Link
                    to={"/updatepofch/" + pof._id}
                    type="submit"
                    class="btn btn-primary"
                  >
                    <i class="fa fa-trash"></i> UPDATE
                  </Link>
                </StyledTableCell>
                <StyledTableCell>
                  <button
                    type="submit"
                    class="btn btn-danger"
                    onClick={(e) => {
                      delet(pof._id);
                    }}
                  >
                    <i class="fa fa-trash"></i> DELETE
                  </button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
