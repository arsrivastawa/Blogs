import axios from "axios";
export default function handleLogin(
  email,
  password,
  setMessage,
  setMessageToggler,
  navigate
) {
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!pattern.test(email)) {
    setMessageToggler(true);
    setMessage("Enter a Valid email Address");
    setTimeout(() => {
      setMessageToggler(false);
      setMessage("");
    }, 2000);
  } else if (email != "" && password != "") {
    axios
      .post("http://localhost:3000/login", { email, password })
      .then((res) => {
        if (res.data.state == "exist") {
          setMessageToggler(true);
          setMessage("Log in Success");
          localStorage.setItem("token", res.data.token);
          navigate("/");
          window.location.reload();
        } else if (res.data.state == "doesNotExist") {
          setMessageToggler(true);
          setMessage("Email doesn't exist in our record, plese register");
        } else {
          setMessageToggler(true);
          setMessage("Wrong Password");
        }
      })
      .catch((err) => {
        setMessageToggler(true);
        setMessage("Error While Sending the Data");
      })
      .finally(() => {
        setTimeout(() => {
          setMessageToggler(false);
          setMessage("");
        }, 2000);
      });
  } else {
    setMessage("Fill All the Fields");
  }
}

export function handleSignup(
  uname,
  email,
  uid,
  password,
  cnfPassword,
  setMessage,
  setMessageToggler,
  navigate
) {
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!pattern.test(email)) {
    setMessageToggler(true);
    setMessage("Enter valid Email Address");
    setTimeout(() => {
      setMessageToggler(false);
      setMessage("");
    }, 2000);
  } else if (
    uid != "" &&
    email != "" &&
    password != "" &&
    cnfPassword != "" &&
    uname != ""
  ) {
    if (password == cnfPassword) {
      axios
        .post("http://localhost:3000/signup", {
          uname,
          email,
          uid,
          cnfPassword,
        })
        .then((res) => {
          if (res.data.state == "done") {
            setMessageToggler(true);
            setMessage("Signup Success");
            localStorage.setItem("token", res.data.token);
            navigate("/");
            window.location.reload();
          } else {
            setMessageToggler(true);
            setMessage("Email already exists, please login");
          }
        })
        .catch((err) => {
          setMessageToggler(true);
          setMessage("Error While Sending the Data");
          console.log(err);
        })
        .finally(() => {
          setTimeout(() => {
            setMessageToggler(false);
            setMessage("");
          }, 2000);
        });
    } else {
      setMessageToggler(true);
      setMessage("Password in both the fields should be same");
      setTimeout(() => {
        setMessageToggler(false);
        setMessage("");
      }, 2000);
    }
  } else {
    setMessage("Enter All Fields");
  }
}
