import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [userName, setUserName] = useState(null);
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      axios
        .post("http://localhost:3000/user", { token })
        .then((res) => {
          console.table(res.data);
          setUserName(res.data.username);
        })
        .catch((err) => {});
    }
  }, []);
  return (
    <>
      <Router>
        <Navbar userName={userName} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
