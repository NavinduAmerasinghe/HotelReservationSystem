import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import Button from "@material-ui/core/Button";

const AddHotels = () => {
  const [data, setData] = useState({
    hotelName: "",
    location: "",
    description: "",
    images: "",
    price: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "";
      const { data: res } = await axios.post(url, data);
      navigate("/admin");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Add Hotels</h1>
            
            <input
              type="text"
              placeholder="Enter Hotel Name"
              name="hotelName"
              onChange={handleChange}
              value={data.hotelName}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Enter Location"
              name="location"
              onChange={handleChange}
              value={data.location}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Enter Description"
              name="description"
              onChange={handleChange}
              value={data.description}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Enter Price"
              name="price"
              onChange={handleChange}
              value={data.price}
              required
              className={styles.input}
            />
            <input
              type="file"
              placeholder="Select Images"
              name="images"
              onChange={handleChange}
              value={data.images}
              required
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            <Link to="/admin">
            <Button className={styles.button_dot}>
                      Back
            </Button>
            </Link>
            <button type="submit" className={styles.green_btn}>
              DONE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddHotels;