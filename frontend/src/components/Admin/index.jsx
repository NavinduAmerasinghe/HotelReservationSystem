import "../Main/styles.css";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import axios from "axios";
import { useState } from "react";

const Admin = () => {
    const [data, setData] = useState({

    });

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const addHotels = async (e) => {
        e.preventDefault();
        try {
            const url = "";
            const { data: res } = await axios.post(url, data);
            navigate("/add");
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
                <a href="/main">Home</a>

            </div>
            <div className={styles.left}>

            </div>
            <section className='py-4 container'>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h2>Hotel List</h2>
                        <Link to="/add">
                            <button type="button" className={styles.white_btn}>
                                Add Hotels
                            </button>
                            <hr/>
                        </Link>
                        <table class="table table-bordered">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">Hotel Name</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Image</th>
                                </tr>
                            </thead>
                            {/* // <tbody>
                                        // <tr key={index}>
                                        //     <td>
                                        //         {item.title}
                                        //     </td>
                                        //     <td>{item.price}</td>
                                        //     <td>Quantity({item.quantity})</td>

                                        // </tr>
                                        // </tbody> */}


                        </table>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default Admin;
