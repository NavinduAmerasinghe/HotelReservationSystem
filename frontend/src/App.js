import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import User from "./components/User";
import Admin from "./components/Admin";
import Payment from "./components/Payment/RP";
import AddHotels from "./components/Admin/addHotels";

function App() {
  const user = localStorage.getItem("token");

  return (
    <Routes>
      {<Route path="/main" exact element={<Main />} />}
      {<Route path="/user" exact element={<User />} />}
      {<Route path="/admin" exact element={<Admin />} />}
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/Payment" exact element={<Payment />} />
      <Route path="/" element={<Navigate replace to="/login" />} />

      {<Route path="/add" exact element={<AddHotels />} />}
    </Routes>
  );
}

export default App;