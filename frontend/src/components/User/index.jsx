import "../Main/styles.css";
import Hotel from "../Home";
import hotelDetails from "../../hotelDetails";
import { Link, useNavigate } from "react-router-dom";

const User = () => {
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

      </div>
    </div>
  );
};

export default User;
