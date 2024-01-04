import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import { useContext, useEffect } from "react";
import axios from "axios";
import { DataContext } from "./assets/helperFunctions/DataProvider";
import Navbar from "./components/navbar/Navbar";
import MainBlogPage from "./pages/MainBlogPage";
import Editor from "./pages/BlogsEditor";
function App() {
  const User = useContext(DataContext);
  console.log(User.userData);
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    let token = localStorage.getItem("token");
    if (token) {
      axios
        .post("http://localhost:3000/user", { token })
        .then((res) => {
          console.table(res.data);
          User.setUser(res.data);
          console.log(User.userData);
        })
        .catch((err) => {});
    }
  }, []);
  return (
    <>
      <Router>
        <Navbar userName={User.userData.username} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blogs" element={<MainBlogPage />} />
          <Route path="/edit" element={<Editor />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
