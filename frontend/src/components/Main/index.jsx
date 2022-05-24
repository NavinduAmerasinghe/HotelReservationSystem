import styles from "./styles.module.css";
import img from "../Images/image.png";
import "../Main/styles.css";
import Hotel from "../Home";
import hotelDetails from "../../hotelDetails";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div>
      <div class="topnav">
        <a className="name" href="#home">
          Hotel.lk
        </a>
        <a href="" onClick={handleLogout}>
          Logout
        </a>
        <Link to="/login">Sign In</Link>
        <Link to="/signup">Register</Link>
        <a href="/taxi">Taxis</a>
        <Link to="/Payment">RP Management</Link>
        <a class="active" href="#home">
          {" "}
          Home{" "}
        </a>

        {/* <ul class="nav justify-content-end">
          <li class="nav-item active">
            <button
              type="button"
              class="btn btn-outline-warning"
              onClick={handleLogout}
            >
              LOGOUT
            </button>
          </li>
        </ul> */}
      </div>

      <dl className="dictionary">
        {hotelDetails.map((hotelDetail) => {
          return (
            <Hotel
              key={hotelDetail.id}
              img={hotelDetail.imgURL}
              name={hotelDetail.name}
              description={hotelDetail.meaning}
            />
          );
        })}
      </dl>
    </div>
  );
};

export default Main;
